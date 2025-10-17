import { productApi, withAuth } from "../../../lib/ozon-client"
import {
  V3GetProductInfoListRequest,
  Productv3GetProductListRequest,
} from "../../../lib/ozon-seller-api"

export type GetMarketplaceProductsStatusInput = any


export const getMarketplaceProducts = async (input?: GetMarketplaceProductsStatusInput) => {
  const productsFromMarketplace = await productApi.productAPIGetProductList(
    withAuth({
      productv3GetProductListRequest: {
        filter: {
          visibility: "ALL",
        },
        limit: 100,
      } as Productv3GetProductListRequest,
    })
  )
  return productsFromMarketplace.data
}

export const getMarketplaceProductsStatus = async (input: GetMarketplaceProductsStatusInput) => {
  const productsFromMarketplace = getMarketplaceProducts()

  const products = (await productsFromMarketplace)
  const offerIds: string[] = []

  products.result?.items!.forEach((item: any) => {
    if (item.offer_id) {
      offerIds.push(item.offer_id)
    }
  })

  const productsStatuses = await productApi.productAPIGetProductInfoList(
    withAuth({
      v3GetProductInfoListRequest: {
        offer_id: offerIds,
      } as V3GetProductInfoListRequest,
    })
  )

  return productsStatuses.data
}
