import { 
  Configuration,
  ProductCardsApi,
  CreatingProductCardsApi,
  SellerWarehousesApi,
} from "./wildberries-products-client"
import { FBSAssemblyOrdersApi } from "./wildberries-orders-fbs-client"
import axios, { AxiosError } from "axios"
import rateLimit from "axios-rate-limit"
import axiosRetry from "axios-retry"
import { MarketplaceWildberriesCredentialsType } from "../providers/marketplace-wildberries/types"

const TIMEOUT = 30_000
const MAX_RPS = 10

const BASE_URLS = {
  content: "https://content-api-sandbox.wildberries.ru",
  marketplace: "https://marketplace-api-sandbox.wildberries.ru"
}

const axiosInst = axios.create({
  timeout: TIMEOUT,
})

const limitedAxiosInst = rateLimit(axiosInst, {
  maxRPS: MAX_RPS
})

axiosRetry(limitedAxiosInst, {
  retries: 3,
  retryCondition: (error: AxiosError) => {
    const status = error.response?.status
    return axiosRetry.isNetworkError(error)
      || error.code === "ECONNABORTED"
      || status === 429 || status === 503
  },
  retryDelay: axiosRetry.exponentialDelay,
  onRetry: (retryConunt, error, requestConfig) => {
    console.log(`Retrying [${requestConfig.url}] after error: ${error.message}  (attempt ${retryConunt})`)
  }
})

export type WildberriesApi = "ProductCards" | "CreatingProductCards" | "FBSAssemblyOrders" | "SellerWarehouses"

export function getWbApi(apiName: WildberriesApi, credentials: MarketplaceWildberriesCredentialsType) {
  const APIS = {
    ProductCards: { 
      api: ProductCardsApi,
      baseUrl: BASE_URLS['content']
    },
    CreatingProductCards: {
      api: CreatingProductCardsApi,
      baseUrl: BASE_URLS['content']
    },
    FBSAssemblyOrders: { 
      api: FBSAssemblyOrdersApi,
      baseUrl: BASE_URLS['marketplace']
    },
    SellerWarehouses: { 
      api: SellerWarehousesApi,
      baseUrl: BASE_URLS['marketplace']
    },
  }

  const api = APIS[apiName]

  return new api.api(new Configuration({
    apiKey: credentials.apiKey,
    accessToken: credentials.apiKey,
    basePath: api.baseUrl
  }), api.baseUrl, limitedAxiosInst)
}
