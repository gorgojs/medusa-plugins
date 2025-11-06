import { Logger, ConfigModule } from "@medusajs/framework/types"
import axios, { AxiosError } from "axios"
import rateLimit, { RateLimitedAxiosInstance } from "axios-rate-limit"
import axiosRetry from "axios-retry"

const BASE_URL = "https://content-api-sandbox.wildberries.ru"
const TIMEOUT = 30_000
const MAX_RPS = 10

export type WildberriesProductCard = {
  "vendorCode": string,
  "sizes": Array<any>,
  [key: string]: any
}

export type WildberriesProductCreate = {
  "subjectID": number,
  "variants": Array<WildberriesProductCard>
}

export type WildberriesProductCardUpdate = {
  "nmID": number,
} & WildberriesProductCard

export type WildberriesProductCardsMerge = {
  "imtID": number,
  "cardsToAdd": Array<WildberriesProductCard>
}

export type ModuleOptions = {
  apiKey: string
}

type InjectedDependencies = {
  logger: Logger,
  configModule: ConfigModule
}

class WildberriesModuleService {
  private options_: ModuleOptions
  private logger_: Logger
  private client_: RateLimitedAxiosInstance

  constructor({ logger }: InjectedDependencies, options: ModuleOptions) {
    this.logger_ = logger
    this.options_ = options

    const axiosInst = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Authorization': `Bearer ${this.options_.apiKey}`,
        'Content-Type': 'application/json',
      },
      timeout: TIMEOUT,
    })

    this.client_ = rateLimit(axiosInst, {
      maxRPS: MAX_RPS
    })

    axiosRetry(this.client_, {
      retries: 3,
      retryCondition: (error: AxiosError) => {
        const status = error.response?.status
        return axiosRetry.isNetworkError(error) || status === 429 || status === 503
      },
      retryDelay: axiosRetry.exponentialDelay,
      onRetry: (retryConunt, error, requestConfig) => {
        this.logger_.info(`Retrying [${requestConfig.url}] after error: ${error.message}  (attempt ${retryConunt})`)
      }
    })

    this.client_.interceptors.request.use(req => {
      this.logger_.info(`Sending [${req.method?.toUpperCase()} ${req.baseURL}${req.url}].`)
      if (req.data) this.logger_.info(`Request body: ${JSON.stringify(req.data, null, 2)}`)
      return req
    })

    this.client_.interceptors.response.use(
      res => {
        this.logger_.info(`Response status: ${res.status} from [${res.config.url}]`)
        this.logger_.info(`Response data: ${JSON.stringify(res.data)}`)
        return res
      },
      (error: AxiosError) => {
        if (error.response) {
          this.logger_.error(`WB API error ${error.response.status} from [${error.config?.url}]`)
          this.logger_.error(`WB API error: ${JSON.stringify(error.response.data, null, 2)}`)
        } else {
          this.logger_.error(`Error: ${error.message}`)
        }
        return Promise.reject(error)
      }
    )
  }

  private async sendRequest(url: string, method: string, data?: any) {
    try {
      const response = await this.client_.request({
        url,
        method: method,
        data: method.toUpperCase() !== "GET" ? data : undefined,
      })
      return response.data
    } catch (error) {
      return error
    }
  }

  async pingContent(): Promise<any> {
    const res = await this.sendRequest("/ping", "GET")
    return res
  }

  async createProductCards(products: Array<WildberriesProductCreate>): Promise<any> {
    const res = await this.sendRequest("/content/v2/cards/upload", "POST", products)
    return res
  }

  async updateProductCards(productCards: Array<WildberriesProductCardUpdate>): Promise<any> {
    const res = await this.sendRequest("/content/v2/cards/update", "POST", productCards)
    return res
  }

  async createProductCardsWithMerge(cardsToMerge: WildberriesProductCardsMerge): Promise<any> {
    const res = await this.sendRequest("/content/v2/cards/upload/add", "POST", cardsToMerge)
    return res
  }

  async getProductCards(textSearch?: string, withPhoto: number = -1, limit: number = 100): Promise<any> {
    const settings = {
      "settings": {
        "cursor": {
          "limit": limit
        },
        "filter": {
          "withPhoto": withPhoto,
          "textSearch": textSearch
        } 
      }
    }

    const res = await this.sendRequest("/content/v2/get/cards/list", "POST", settings)
    return res
  }

  async getAllProductCards(): Promise<Array<any>> {
    const limit = 100
    let body = {
      "settings": {
        "cursor": {
          "limit": limit
        },
        "filter": {
          "withPhoto": -1
        } 
      }
    }

    let cards: Array<any> = []
    let total: number

    do {
      const { cards: resCards, cursor } = await this.sendRequest("/content/v2/get/cards/list", "POST", body)
      cards.push(...resCards)
      total = cursor.total
      body.settings.cursor["updatedAt"] = cursor.updatedAt
      body.settings.cursor["nmID"] = cursor.nmID
    } while (total === limit)

    return cards
  }
}

export default WildberriesModuleService
