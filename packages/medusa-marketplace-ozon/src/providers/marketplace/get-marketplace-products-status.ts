
import { productApi, withAuth } from "../../lib/ozon-client"
import { V3GetProductInfoListRequest } from "../../lib/ozon-seller-api";

export type GetMarketplaceProductsStatusInput = any

export const getMarketplaceProductsStatus = async (input: GetMarketplaceProductsStatusInput) => {
  // TODO: use input to map data necessary for request, ex:
  /*
  const offerIds: string[] = []
  input.items.forEach((element) => {
    offerIds.push(element.offer_id)
  })
  */
  const offerIds = input as V3GetProductInfoListRequest['offer_id']

  const products = await productApi.productAPIGetProductInfoList(withAuth({
    v3GetProductInfoListRequest: { "offer_id": offerIds }
  }))

  return products
}

