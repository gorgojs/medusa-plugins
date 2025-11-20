import { productApi, withAuth } from "../../lib/ozon-client"
import { V3GetProductInfoListRequest } from "../../lib/ozon-seller-api";

export type CheckProductsStatusesStepInput = any


export const checkProductsStatuses = async (input: CheckProductsStatusesStepInput) => {
  const result = await productApi.productAPIGetProductInfoList(withAuth({ v3GetProductInfoListRequest: { "offer_id": input } as V3GetProductInfoListRequest }))
  return result.data
}

