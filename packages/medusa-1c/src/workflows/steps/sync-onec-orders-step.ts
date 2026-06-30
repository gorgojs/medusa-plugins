import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk";
import { ContainerRegistrationKeys, Modules } from "@medusajs/framework/utils";
import { IOrderModuleService } from "@medusajs/types";
import { Logger } from "@medusajs/framework/types";
import { OrdersOutput } from "../../types";
import { normalizeCurrencyCode } from "../../utils/exchange-utils";

const ORDER_PRODUCTS_OPERATIONS = ["Заказ товара", "Order"];

export const syncOnecOrdersStep = createStep(
  "sync-onec-orders-step",
  async (input: OrdersOutput, { container }): Promise<StepResponse<{ created: number; skipped: number }, string[]>> => {
    const logger = container.resolve<Logger>("logger");
    const remoteQuery = container.resolve(ContainerRegistrationKeys.REMOTE_QUERY);
    const orderService = container.resolve<IOrderModuleService>(Modules.ORDER);

    const orderDocs = input.documents.filter((d) =>
      ORDER_PRODUCTS_OPERATIONS.some((op) => d.operation?.includes(op))
    );

    if (!orderDocs.length) {
      logger.info("[1C Integration] No order documents matched operations filter. Expected one of: " + ORDER_PRODUCTS_OPERATIONS.join(", "));
      return new StepResponse({ created: 0, skipped: 0 }, []);
    }

    const allSkus = new Set<string>();
    for (const doc of orderDocs) {
      for (const p of doc.products) {
        if (p.article) allSkus.add(p.article);
      }
    }

    const variantBySku = new Map<string, { id: string; title: string; product_title?: string }>();
    if (allSkus.size > 0) {
      const variants = await remoteQuery({
        entryPoint: "variant",
        fields: ["id", "sku", "title", "product.title"],
        variables: { sku: Array.from(allSkus) },
      });
      for (const v of variants) {
        variantBySku.set(v.sku, { id: v.id, title: v.title, product_title: v.product?.title });
      }
    }

    const existingOrders = await remoteQuery({
      entryPoint: "order",
      fields: ["id", "display_id", "metadata"],
      variables: {},
    });

    const existingOnecIds = new Set<string>();
    const exportedMedusaOrderIds = new Set<string>();
    const exportedDisplayIds = new Set<string>();
    for (const o of existingOrders) {
      const onecId = o.metadata?.onec_order_id as string | undefined;
      if (onecId) existingOnecIds.add(onecId);
      if (o.metadata?.onec_exported_at) {
        exportedMedusaOrderIds.add(o.id);
        if (o.display_id != null) exportedDisplayIds.add(String(o.display_id));
      }
    }

    const createdIds: string[] = [];
    let created = 0;
    let skipped = 0;

    for (const doc of orderDocs) {
      if (existingOnecIds.has(doc.id)) {
        logger.info(`[1C Integration] Order ${doc.id} already exists (by onec_order_id), skipping.`);
        skipped++;
        continue;
      }
      if (exportedMedusaOrderIds.has(doc.id) || exportedDisplayIds.has(doc.number)) {
        logger.info(`[1C Integration] Order ${doc.id} (#${doc.number}) originated from Medusa, skipping re-import.`);
        skipped++;
        continue;
      }

      const buyer = doc.counterparties[0];
      const email = buyer?.email || `onec-${doc.number.replace(/\s/g, "")}@noreply.local`;

      const items = doc.products
        .filter((p) => p.quantity > 0)
        .map((p) => {
          const sku = p.article || p.id;
          const variant = variantBySku.get(sku);
          return {
            title: p.name,
            variant_id: variant?.id,
            variant_sku: sku,
            quantity: p.quantity,
            unit_price: p.pricePerUnit,
            requires_shipping: true,
            metadata: { onec_product_id: p.id },
          };
        });

      if (!items.length) {
        logger.warn(`[1C Integration] Order ${doc.id} has no items, skipping.`);
        skipped++;
        continue;
      }

      const currencyCode = normalizeCurrencyCode(doc.currency || "rub");

      let shippingAddress: Record<string, string | undefined> | undefined;
      if (buyer) {
        const nameParts = [buyer.firstName, buyer.middleName, buyer.lastName].filter(Boolean);
        const fullName = nameParts.length ? nameParts.join(" ") : (buyer.name || "");
        const [firstName, ...rest] = fullName.split(" ");
        shippingAddress = {
          first_name: firstName || buyer.name || "Unknown",
          last_name: rest.join(" ") || undefined,
          address_1: buyer.address || undefined,
          phone: buyer.phone || undefined,
          country_code: "ru",
        };
      }

      try {
        const [order] = await orderService.createOrders([
          {
            status: "pending",
            email,
            currency_code: currencyCode,
            items: items as any,
            shipping_address: shippingAddress as any,
            metadata: {
              onec_order_id: doc.id,
              onec_order_number: doc.number,
              onec_order_date: doc.date,
            },
          },
        ]);

        createdIds.push(order.id);
        created++;
        logger.info(`[1C Integration] Created order ${order.id} from 1C document ${doc.id} (#${doc.number})`);
      } catch (e) {
        logger.error(`[1C Integration] Failed to create order for 1C document ${doc.id}: ${(e as Error).message}`);
      }
    }

    return new StepResponse({ created, skipped }, createdIds);
  },
  async (createdIds: string[] | undefined, { container }) => {
    if (!createdIds?.length) return;
    const orderService = container.resolve<IOrderModuleService>(Modules.ORDER);
    await orderService.deleteOrders(createdIds);
  }
);
