import { Configuration, ProductCardsApi, CreatingProductCardsApi } from "./wildberries-products-client"
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
    return axiosRetry.isNetworkError(error) || status === 429 || status === 503
  },
  retryDelay: axiosRetry.exponentialDelay,
  onRetry: (retryConunt, error, requestConfig) => {
    console.log(`Retrying [${requestConfig.url}] after error: ${error.message}  (attempt ${retryConunt})`)
  }
})

export function getProductCardsApi(credentials: MarketplaceWildberriesCredentialsType) {
  return new ProductCardsApi(new Configuration({
      apiKey: credentials.apiKey,
      accessToken: credentials.apiKey,
      basePath: BASE_URLS['content']
    }), BASE_URLS['content'], limitedAxiosInst)
}

export function getCreatingProductCardsApi(credentials: MarketplaceWildberriesCredentialsType) {
  return new CreatingProductCardsApi(new Configuration({
      apiKey: credentials.apiKey,
      accessToken: credentials.apiKey,
      basePath: BASE_URLS['content']
    }), BASE_URLS['content'], limitedAxiosInst)
}

export function getFBSAssemblyOrdersApi(credentials: MarketplaceWildberriesCredentialsType) {
  return new FBSAssemblyOrdersApi(new Configuration({
    apiKey: credentials.apiKey,
    accessToken: credentials.apiKey,
    basePath: BASE_URLS['marketplace']
  }), BASE_URLS['marketplace'], limitedAxiosInst)
}
