import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { batchProductsWorkflow, batchProductVariantsWorkflow } from "@medusajs/medusa/core-flows"
import { productApi, withAuth } from "../../../lib/ozon-client"
import { Productv3GetProductListRequest } from "../../../lib/ozon-seller-api"
import { MarketplaceOzonCredentialsType } from "../../../providers/marketplace-ozon/types"

export type ImportMarketplaceProductsStepInput = {
  credentials: MarketplaceOzonCredentialsType
}

export const importMarketplaceProductsStep = createStep(
  "import-ozon-products",
  async (input: ImportMarketplaceProductsStepInput, { container }) => {
    const query = container.resolve("query")
    const logger = container.resolve("logger")

    const updatedVariantsIds: string[] = []
    const updatedProductsIds: string[] = []

    const limit = 100

    const productsFromMarketplace = await productApi.productAPIGetProductList(
      withAuth(input.credentials, {
        productv3GetProductListRequest: {
          filter: {
            visibility: "ALL",
          },
          limit: 100,
        } as Productv3GetProductListRequest,
      })
    )

    const products = productsFromMarketplace.data.result?.items
    const offerIds: string[] = []

    for (const item of products as any[]) {
      if (item?.offer_id) offerIds.push(String(item.offer_id))
    }

    if (!offerIds.length) {
      logger.info("Ozon import: offer_id not found in product list. Nothing to sync")
      return new StepResponse({ updatedProductsIds, updatedVariantsIds })
    }

    let last_id = ""
    let fetched = 0

    do {
      const productsAttributes = await productApi.productAPIGetProductAttributesV4(withAuth(input.credentials, {
        productv4GetProductAttributesV4Request: {
          filter: {
            offer_id: offerIds,
            visibility: "ALL"
          },
          last_id: last_id,
          limit: limit
        }
      }))

      const cards = productsAttributes.data?.result ?? []
      last_id = (productsAttributes.data?.last_id as string) ?? ""
      fetched = cards.length

      if (!cards.length) continue

      const offerIdsFromOzon: string[] = []
      const ozonProductIdByOfferId: Record<string, number> = {}
      const ozonTypeIdByOfferId: Record<string, number> = {}
      const ozonBarcodesByOfferId: Record<string, string[]> = {}

      for (const card of cards as any[]) {
        const offerId = String(card?.offer_id ?? "")
        if (!offerId) continue

        offerIdsFromOzon.push(offerId)
        ozonProductIdByOfferId[offerId] = card.id as number
        ozonTypeIdByOfferId[offerId] = card.type_id as number
        ozonBarcodesByOfferId[offerId] = (card.barcodes ?? []) as string[]
      }

      if (!offerIdsFromOzon.length) continue

      const { data: variants } = await query.graph({
        entity: "product_variant",
        fields: ["id", "metadata", "product.id", "product.metadata"],
        filters: {
          id: offerIdsFromOzon,
        },
      })

      if (!variants.length) {
        logger.info("Ozon import: no Medusa variants found for offer_ids")
        continue
      }

      const updateVariants: Array<{ id: string; metadata: any }> = []
      const updateProducts: Array<{ id: string; metadata: any }> = []

      for (const variant of variants as any[]) {
        const offerId = variant.id
        const ozonProductId = ozonProductIdByOfferId[offerId]

        if (!ozonProductId) continue

        updateVariants.push({
          id: variant.id,
          metadata: {
            ...(variant.metadata ?? {}),
            ozon_product_id: ozonProductId,
            ozon_barcodes: ozonBarcodesByOfferId[offerId] ?? [],
          },
        })

        if (variant.product?.id) {
          updateProducts.push({
            id: variant.product.id,
            metadata: {
              ...(variant.product.metadata ?? {}),
              ozon_type_id: ozonTypeIdByOfferId[offerId],
            },
          })
        }
      }

      const { result: variantsBatch } = await batchProductVariantsWorkflow(container).run({
        input: { update: updateVariants },
      })

      const uniqueProducts = Array.from(
        new Map(updateProducts.filter((p) => p?.id).map((p) => [p.id, p])).values()
      )

      const { result: productsBatch } = await batchProductsWorkflow(container).run({
        input: { update: uniqueProducts },
      })

      const updatedVariants = (variantsBatch as any)?.updated ?? []
      const updatedProducts = (productsBatch as any)?.updated ?? []

      updatedVariantsIds.push(...updatedVariants.map((v: any) => v.id))
      updatedProductsIds.push(...updatedProducts.map((p: any) => p.id))
    } while (fetched === limit)

    return new StepResponse({
      updatedProductsIds,
      updatedVariantsIds,
    })
  }
)
