import { AbstractIntegrationProvider } from "@gorgo/medusa-integration/modules/integration/utils"
import {
  ExportProductsInput,
  ExportProductsOutput,
  GetIntegrationProductsInput,
  GetIntegrationProductsOutput,
  GetIntegrationOrdersInput,
  GetIntegrationOrdersOutput,
  GetIntegrationOrderTypesInput,
  GetIntegrationOrderTypesOutput,
  GetIntegrationWarehousesInput,
  GetIntegrationWarehousesOutput,
  GetProductsInput,
  GetProductsOutput,
  ImportProductsInput,
  ImportProductsOutput,
  MapToIntegrationProductsInput,
  MapToIntegrationProductsOutput,
  MapToMedusaOrdersInput,
  MapToMedusaOrdersOutput,
  MapToMedusaProductsInput,
  MapToMedusaProductsOutput,
} from "@gorgo/medusa-integration/types"
import {
  exportIntegrationProductsWbWorkflow,
  importIntegrationProductsWbWorkflow,
  IntegrationProductsType
} from "../../../workflows/provider"
import {
  ContentV2CardsUpdatePostRequestInner,
  ContentV2CardsUploadAddPostRequest,
  ContentV2CardsUploadAddPostRequestCardsToAddInner,
  ContentV2CardsUploadPostRequestInner,
  SellerWarehousesApi
} from "../../../lib/wildberries-products-client"
import { IntegrationWildberriesCredentialsType, MAX_VARIANTS_TO_CREATE, ORDER_TYPES } from "../types"
import { getWbApi } from "../../../lib/wildberries-client"
import { FBSAssemblyOrdersApi, OrderNew } from "../../../lib/wildberries-orders-fbs-client"

export class WildberriesIntegrationProvider extends AbstractIntegrationProvider {
  static identifier = "wildberries"

  async exportProducts(data: ExportProductsInput): Promise<ExportProductsOutput> {
    const { container, integration, integrationProducts } = data
    const { result } = await exportIntegrationProductsWbWorkflow(container).run({
      input: {
        credentials: integration.credentials as IntegrationWildberriesCredentialsType,
        ...integrationProducts as IntegrationProductsType
      }
    })

    return result
  }

  async getProducts(data: GetProductsInput): Promise<GetProductsOutput> {
    const { container, integration, ids } = data

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

  async getIntegrationProducts(data: GetIntegrationProductsInput): Promise<GetIntegrationProductsOutput> {
    const { container, integration, ids } = data

    return []
  }

  async importProducts(data: ImportProductsInput): Promise<ImportProductsOutput> {
    const { container, integration, products } = data

    const { result } = await importIntegrationProductsWbWorkflow(container).run({
      input: {
        credentials: integration.credentials as IntegrationWildberriesCredentialsType
      }
    })

    return result
  }

  async mapToIntegrationProducts(data: MapToIntegrationProductsInput): Promise<MapToIntegrationProductsOutput> {
    const { container, integration, products } = data

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
    const { container, integration, integrationProducts } = data

    return integrationProducts as any
  }

  async getIntegrationWarehouses(data: GetIntegrationWarehousesInput): Promise<GetIntegrationWarehousesOutput> {
    const { container, integration } = data

    const api = getWbApi("SellerWarehouses", integration.credentials as IntegrationWildberriesCredentialsType) as SellerWarehousesApi
    const {status, data: warehouses } = await api.apiV3WarehousesGet()

    return warehouses.map(wh => ({
      id: wh.id ? wh.id.toString() : "",
      name: wh.name ?? ""
    }))
  }

  async getIntegrationOrderTypes(data: GetIntegrationOrderTypesInput): Promise<GetIntegrationOrderTypesOutput> {
    return Object.values(ORDER_TYPES) as string[]
  }

  async getIntegrationOrders(data: GetIntegrationOrdersInput): Promise<GetIntegrationOrdersOutput> {
    const { container, integration, orderType } = data

    const fbsApi = getWbApi("FBSAssemblyOrders", integration.credentials as IntegrationWildberriesCredentialsType) as FBSAssemblyOrdersApi

    let status: number = 400
    let orders: any[] = []
    switch (orderType) {
      case ORDER_TYPES[0]: // "FBS"
        const fbsResult = await fbsApi.apiV3OrdersNewGet()
        status = fbsResult.status
        orders = fbsResult.data.orders ?? []
        break

      case ORDER_TYPES[1]: // "FBO"
        status = 200
        orders = [{ name: "Test1"}] // TODO: implement fetching FBO orders
        break

      case undefined: // all
        const fbsResultAll = await fbsApi.apiV3OrdersNewGet()
        status = fbsResultAll.status
        orders = fbsResultAll.data.orders ?? []
        break

      default:
        status = 400
        orders = []
        break
    }

    return status === 200 ? orders! : []
  }

  async mapToMedusaOrders(data: MapToMedusaOrdersInput): Promise<MapToMedusaOrdersOutput> {
    const { container, integration, integrationOrders } = data

    const medusaOrders = (integrationOrders as Array<OrderNew>).map(order => {
      const mappedOrder: MapToMedusaOrdersOutput[number] = {
        sales_channel_id: integration.sales_channel?.id,
        email: "wb_customer_" + order.rid + "@example.com",
        shipping_address: {
          address_1: order.address?.fullAddress ?? "",
          country_code: "ru", // TODO: what if other country
          first_name: "WB Customer"
        },
        items: [{
          title: order.article ?? "",
          variant_sku: order.article,
          quantity: 1,
          unit_price: (order.finalPrice ?? 0) / 100
        }],
        integration_order: {
          order_id: order.rid!,
          integration_id: integration.id,
          status: "New",
          type: "FBS",
          data: order as Record<string, unknown>
        }
      }
      return mappedOrder
    })
    // TODO: group orders by order.orderUid

    return medusaOrders
  }
}
