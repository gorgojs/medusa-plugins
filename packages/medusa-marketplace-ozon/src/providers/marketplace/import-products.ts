
import { productApi, withAuth } from "../../lib/ozon-client"
import { Productv3GetProductListRequest } from "../../lib/ozon-seller-api";


export const importProducts = async () => {
  const products = await productApi.productAPIGetProductList(withAuth({
    productv3GetProductListRequest: {
      filter: {
        visibility: "ALL",
      },
      limit: 100,
    } as Productv3GetProductListRequest,
  }))
  return products.data.result
}

