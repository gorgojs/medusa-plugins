import { Configuration, ProductCardsApi, CreatingProductCardsApi } from "./wildberries-products-client"
import axios, { AxiosError } from "axios"
import rateLimit from "axios-rate-limit"
import axiosRetry from "axios-retry"

const BASE_URL = "https://content-api-sandbox.wildberries.ru"
const TIMEOUT = 30_000
const MAX_RPS = 10

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

const config = new Configuration({
  apiKey: process.env.WB_API_KEY!,
  accessToken: process.env.WB_API_KEY!,
  basePath: BASE_URL,
})

export const productApi = new ProductCardsApi(config, BASE_URL, limitedAxiosInst)
export const creatingProductsApi = new CreatingProductCardsApi(config, BASE_URL, limitedAxiosInst)
