import { AbstractMarketplaceProvider } from "@gorgo/medusa-marketplace/modules/marketplace/utils"
import {
  ExportProductsInput,
  ExportProductsOutput,
  GetProductsInput,
  GetProductsOutput,
  ImportProductsInput,
  ImportProductsOutput,
  MapToMarketplaceProductsInput,
  MapToMarketplaceProductsOutput,
  MapToMedusaProductsInput,
  MapToMedusaProductsOutput,
  MAX_VARIANTS_TO_CREATE,
} from "@gorgo/medusa-marketplace/modules/marketplace/types"
import {
  exportMarketplaceProductsWbWorkflow,
  importMarketplaceProductsWbWorkflow
} from "../../../workflows/provider"
import {
  ContentV2CardsUpdatePostRequestInner,
  ContentV2CardsUploadAddPostRequest,
  ContentV2CardsUploadAddPostRequestCardsToAddInner,
  ContentV2CardsUploadPostRequestInner
} from "../../../lib/wildberries-products-client"

export class WildberriesMarketplaceProvider extends AbstractMarketplaceProvider {
  static identifier = "wildberries"

  async exportProducts(data: ExportProductsInput): Promise<ExportProductsOutput> {
    const { container, marketplaceProducts } = data
    const { result } = await exportMarketplaceProductsWbWorkflow(container).run({ input: marketplaceProducts })

    return result
  }

  async getProducts(data: GetProductsInput): Promise<GetProductsOutput> {
    const { container, ...input } = data

    const query = await container!.resolve("query")

    const { data: products } = await query.graph({
      entity: "product",
      fields: [
        "*",
        "variants.*"
      ],
      filters: {
        id: input.ids?.length ? input.ids : undefined,
        status: "published"
      },
    })

    return products
  }

  async importProducts(data: ImportProductsInput): Promise<ImportProductsOutput> {
    const { container, ...input } = data

    const { result } = await importMarketplaceProductsWbWorkflow(container).run({ input })

    return result
  }

  async mapToMarketplaceProducts(data: MapToMarketplaceProductsInput): Promise<MapToMarketplaceProductsOutput> {
    const { container, products } = data

    const logger = await container!.resolve("logger")

    const dummyMap = (vendorCode: string, title: string, sizeSkus?: any) => {
      return {
        vendorCode: vendorCode,
        title: title,
        sizes: [
          {
            techSize: "A",
            wbSize: "1",
            skus: sizeSkus
          }
        ]
      }
    }

    let productsToCreate: ContentV2CardsUploadPostRequestInner[] = []
    let productCardsToUpdate: ContentV2CardsUpdatePostRequestInner[] = []
    let productCardsToMerge: ContentV2CardsUploadAddPostRequest[] = []

    products.forEach(product => {
      const imtID = product.metadata?.wildberries_imtID
      if (imtID == null) { // to create
        let variatnsToCreate
        if (product.variant.length > MAX_VARIANTS_TO_CREATE) {
          variatnsToCreate = product.variants.slice(0, MAX_VARIANTS_TO_CREATE).map(
            variant => dummyMap(variant.sku, product.title + variant.title)
          )
          // TODO: merge variants.slice(MAX_VARIANTS_TO_CREATE)
          // how to get imtID?
        } else {
          variatnsToCreate = product.variants.map(variant => dummyMap(variant.sku, product.title + variant.title))
        }
        productsToCreate.push({
          subjectID: 105,
          variants: variatnsToCreate
        })
      } else {
        let variantsToMerge: Array<ContentV2CardsUploadAddPostRequestCardsToAddInner> = []

        product.variants.forEach(variant => {
          const nmID = variant.metadata?.wildberries_nmID
          if (nmID == null) { // to merge
            variantsToMerge.push(dummyMap(variant.sku, product.title + variant.title))
          } else { // to update 
            const sizeSkus = variant.metadata?.wildberries_sizeSkus
            if (sizeSkus == null) {
              logger.error(`Failed to update variant with nmID=${nmID} (vendorCode=${variant.sku}): sizeSkus is none`)
            } else {
              productCardsToUpdate.push({
                nmID: nmID,
                ...dummyMap(variant.sku, product.title + variant.title, sizeSkus)
              })
            }
          }
        })

        if (variantsToMerge.length) {
          productCardsToMerge.push({
            imtID: imtID,
            cardsToAdd: variantsToMerge
          })
        }
      }
    })

    const result = {
      create: productsToCreate,
      update: productCardsToUpdate,
      merge: productCardsToMerge
    }

    return result
  }

  async mapToMedusaProducts(data: MapToMedusaProductsInput): Promise<MapToMedusaProductsOutput> {
    const { container, ...input } = data

    return input
  }
}
