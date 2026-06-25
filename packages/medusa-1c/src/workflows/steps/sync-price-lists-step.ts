import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk";
import { Modules, ContainerRegistrationKeys } from "@medusajs/framework/utils";
import { IPricingModuleService } from "@medusajs/types";
import { Offer, PriceType } from "commerceml-parser-core";
import { normalizeCurrencyCode } from "../../utils/exchange-utils";

export type SyncPriceListsInput = {
  priceTypes: PriceType[];
  offers: Offer[];
  variants: { id: string; sku: string }[];
  retailPriceTypeId: string | null;
  defaultCurrencyCode: string;
};

export const syncPriceListsStep = createStep(
  "sync-price-lists-step",
  async (input: SyncPriceListsInput, { container }): Promise<StepResponse<{ ok: boolean }, string[]>> => {
    const { priceTypes, offers, variants, retailPriceTypeId, defaultCurrencyCode } = input;

    const retailId = retailPriceTypeId ?? priceTypes[0]?.id;
    const nonRetailTypes = priceTypes.filter((pt) => pt.id !== retailId);

    if (!nonRetailTypes.length || !variants.length) {
      return new StepResponse({ ok: true }, []);
    }

    const remoteQuery = container.resolve(ContainerRegistrationKeys.REMOTE_QUERY);
    const pricingService = container.resolve<IPricingModuleService>(Modules.PRICING);

    const variantIds = variants.map((v) => v.id);
    const links = await remoteQuery({
      entryPoint: "product_variant_price_set",
      fields: ["variant_id", "price_set_id"],
      variables: { variant_id: variantIds },
    });
    const variantToPriceSet = new Map<string, string>();
    for (const link of links) {
      variantToPriceSet.set(link.variant_id, link.price_set_id);
    }

    const offerBySku = new Map<string, Offer>();
    for (const offer of offers) {
      offerBySku.set((offer as any).article || offer.id!, offer);
    }

    const existingPriceLists = await pricingService.listPriceLists(
      {},
      { select: ["id", "title", "metadata"] }
    );
    const priceListByTypeId = new Map<string, string>();
    for (const pl of existingPriceLists) {
      const typeId = pl.metadata?.onec_price_type_id as string | undefined;
      if (typeId) priceListByTypeId.set(typeId, pl.id);
    }

    const toCreate = nonRetailTypes.filter((pt) => !priceListByTypeId.has(pt.id));
    const createdIds: string[] = [];
    if (toCreate.length) {
      const created = await pricingService.createPriceLists(
        toCreate.map((pt) => ({
          title: pt.name || pt.id,
          description: `1C price type: ${pt.name || pt.id}`,
          status: "active" as any,
          metadata: { onec_price_type_id: pt.id },
        }))
      );
      for (let i = 0; i < created.length; i++) {
        priceListByTypeId.set(toCreate[i].id, created[i].id);
        createdIds.push(created[i].id);
      }
    }

    const priceSetIds = Array.from(variantToPriceSet.values());

    for (const priceType of nonRetailTypes) {
      const priceListId = priceListByTypeId.get(priceType.id)!;

      const prices: { price_set_id: string; amount: number; currency_code: string }[] = [];
      for (const variant of variants) {
        const offer = offerBySku.get(variant.sku);
        if (!offer) continue;

        const price = offer.prices?.find((p) => p.priceTypeId === priceType.id && Number(p.pricePerUnit) > 0);
        if (!price) continue;

        const priceSetId = variantToPriceSet.get(variant.id);
        if (!priceSetId) continue;

        prices.push({
          price_set_id: priceSetId,
          amount: Number(price.pricePerUnit),
          currency_code: normalizeCurrencyCode(price.currency || priceType.currency || defaultCurrencyCode),
        });
      }

      if (!prices.length) continue;

      const existingPrices = await pricingService.listPrices(
        { price_list_id: [priceListId], price_set_id: priceSetIds },
        { select: ["id"] }
      );
      if (existingPrices.length) {
        await pricingService.removePrices(existingPrices.map((p) => p.id));
      }

      await pricingService.addPriceListPrices([{ price_list_id: priceListId, prices }]);
    }

    return new StepResponse({ ok: true }, createdIds);
  },
  async (createdIds: string[] | undefined, { container }) => {
    if (!createdIds?.length) return;
    const pricingService = container.resolve<IPricingModuleService>(Modules.PRICING);
    await pricingService.deletePriceLists(createdIds);
  }
);
