import { AbstractMarketplaceProvider } from "@gorgo/medusa-marketplace/modules/marketplace/utils"
import {
  ExportProductsInput,
  ExportProductsOutput,
  GetMarketplaceProductsInput,
  GetMarketplaceProductsOutput,
  GetOrdersInput,
  GetOrdersOutput,
  GetOrderTypesInput,
  GetOrderTypesOutput,
  GetProductsInput,
  GetProductsOutput,
  GetWarehousesInput,
  GetWarehousesOutput,
  ImportProductsInput,
  ImportProductsOutput,
  MapToMarketplaceProductsInput,
  MapToMarketplaceProductsOutput,
  MapToMedusaOrdersInput,
  MapToMedusaOrdersOutput,
  MapToMedusaProductsInput,
  MapToMedusaProductsOutput,
} from "@gorgo/medusa-marketplace/types"
import {
  exportMarketplaceProductsWbWorkflow,
  importMarketplaceProductsWbWorkflow,
  MarketplaceProductsType
} from "../../../workflows/provider"
import {
  ContentV2CardsUpdatePostRequestInner,
  ContentV2CardsUploadAddPostRequest,
  ContentV2CardsUploadAddPostRequestCardsToAddInner,
  ContentV2CardsUploadPostRequestInner,
  SellerWarehousesApi
} from "../../../lib/wildberries-products-client"
import { MarketplaceWildberriesCredentialsType, MAX_VARIANTS_TO_CREATE, ORDER_TYPES } from "../types"
import { getWbApi } from "../../../lib/wildberries-client"

export class WildberriesMarketplaceProvider extends AbstractMarketplaceProvider {
  static identifier = "wildberries"

  async exportProducts(data: ExportProductsInput): Promise<ExportProductsOutput> {
    const { container, marketplace, marketplaceProducts } = data
    const { result } = await exportMarketplaceProductsWbWorkflow(container).run({
      input: {
        credentials: marketplace.credentials as MarketplaceWildberriesCredentialsType,
        ...marketplaceProducts as MarketplaceProductsType
      }
    })

    return result
  }

  async getProducts(data: GetProductsInput): Promise<GetProductsOutput> {
    const { container, marketplace, ids } = data

    const query = await container!.resolve("query")

    const { data: products } = await query.graph({
      entity: "product",
      fields: [
        "*",
        "variants.*"
      ],
      filters: {
        id: ids?.length ? ids : undefined,
        status: "published"
      },
    })

    return products
  }

  async getMarketplaceProducts(data: GetMarketplaceProductsInput): Promise<GetMarketplaceProductsOutput> {
    const { container, marketplace, ids } = data

    return []
  }

  async importProducts(data: ImportProductsInput): Promise<ImportProductsOutput> {
    const { container, marketplace, products } = data

    const { result } = await importMarketplaceProductsWbWorkflow(container).run({
      input: {
        credentials: marketplace.credentials as MarketplaceWildberriesCredentialsType
      }
    })

    return result
  }

  async mapToMarketplaceProducts(data: MapToMarketplaceProductsInput): Promise<MapToMarketplaceProductsOutput> {
    const { container, marketplace, products } = data

    const logger = await container!.resolve("logger")

    const dummyMap = (vendorCode: string, title: string, sizeSkus?: any, sizeID?: number) => {
      return {
        vendorCode: vendorCode,
        title: title,
        sizes: [
          {
            chrtID: sizeID,
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
        if (product.variants.length > MAX_VARIANTS_TO_CREATE) {
          variatnsToCreate = product.variants.slice(0, MAX_VARIANTS_TO_CREATE).map(
            variant => dummyMap(variant.sku!, product.title + variant.title)
          )
          // TODO: merge variants.slice(MAX_VARIANTS_TO_CREATE)
          // how to get imtID?
        } else {
          variatnsToCreate = product.variants.map(variant => dummyMap(variant.sku!, product.title + variant.title))
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
            variantsToMerge.push(dummyMap(variant.sku!, product.title + variant.title))
          } else { // to update 
            const sizeSkus = variant.metadata?.wildberries_sizeSkus
            const sizeID = variant.metadata?.wildberries_sizeID
            if (sizeSkus == null || sizeID == null) {
              logger.error(`Failed to update variant with nmID=${nmID} (vendorCode=${variant.sku}): sizeSkus/sizeID is none`)
            } else {
              productCardsToUpdate.push({
                nmID: nmID as number,
                ...dummyMap(variant.sku!, product.title + variant.title, sizeSkus, sizeID as number)
              })
            }
          }
        })

        if (variantsToMerge.length) {
          productCardsToMerge.push({
            imtID: imtID as number,
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
    const { container, marketplace, marketplaceProducts } = data

    return marketplaceProducts as any
  }

  async getWarehouses(data: GetWarehousesInput): Promise<GetWarehousesOutput> {
    const { container, marketplace } = data

    const api: SellerWarehousesApi = getWbApi("SellerWarehouses", marketplace.credentials as MarketplaceWildberriesCredentialsType)
    const {status, data: warehouses } = await api.apiV3WarehousesGet()

    return warehouses.map(wh => ({
      id: wh.id ? wh.id.toString() : "",
      name: wh.name ?? ""
    }))
  }

  async getOrderTypes(data: GetOrderTypesInput): Promise<GetOrderTypesOutput> {
    return Object.values(ORDER_TYPES) as string[]
  }

  async getOrders(data: GetOrdersInput): Promise<GetOrdersOutput> {
    const { container, marketplace, orderType } = data

    let status: number = 400
    let orders: any[] = []
    switch (orderType) {
      case ORDER_TYPES[0]: // "FBS"
        const ordersApi = getWbApi("FBSAssemblyOrders", marketplace.credentials as MarketplaceWildberriesCredentialsType)
        const result = await ordersApi.apiV3OrdersNewGet()
        status = result.status
        orders = result.data.orders
        break

      case ORDER_TYPES[1]: // "FBO"
        status = 200
        orders = [{ name: "Test1"}] // TODO: implement fetching FBO orders
        break

      default:
        status = 400
        orders = []
        break
    }

    return status === 200 ? orders! : []
  }

  async mapToMedusaOrders(data: MapToMedusaOrdersInput): Promise<MapToMedusaOrdersOutput> {
    const { container, marketplace, marketplaceOrders } = data

    return marketplaceOrders as any
  }
}
