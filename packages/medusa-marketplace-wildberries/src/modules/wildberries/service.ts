import { Logger, ConfigModule } from "@medusajs/framework/types"

const BASE_URL = "https://content-api-sandbox.wildberries.ru/"

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

  constructor({ logger }: InjectedDependencies, options: ModuleOptions) {
    this.logger_ = logger
    this.options_ = options
  }

  private async sendRequest(url: string, method: string, data?: any, retryAfter: number = 5000) {
    const fullUrl = BASE_URL + url
    this.logger_.info(`Sending a ${method} request to ${fullUrl}.`)
    this.logger_.info(`Request Data: ${JSON.stringify(data, null, 2)}`)
    this.logger_.info(`API Token: ${this.options_.apiKey}`)

    const headers: Record<string, string> = {
      'Authorization': `Bearer ${this.options_.apiKey}`,
      'Content-Type': 'application/json',
    }

    try {
      const response = await fetch(fullUrl, {
        method: method,
        headers: headers,
        body: method !== 'GET' ? JSON.stringify(data) : undefined,
      })

      this.logger_.info(`Response status: ${response.status}`)

      if (response.status === 429) {
        this.logger_.info(`Rate limit, waiting ${retryAfter} ms`)
        await new Promise(r => setTimeout(r, retryAfter))
        return this.sendRequest(url, method, data, retryAfter)
      }

      if (!response.ok) {
        const error = await response.text()
        this.logger_.error(`WB API error: ${error}`)
      }

      const result = await response.json()
      this.logger_.info(`Response data: ${JSON.stringify(result)}`)
      return result
    } catch (error) {
      throw error
    }
  }

  async pingContent(): Promise<any> {
    const res = await this.sendRequest("ping", "GET")
    return res
  }

  async createProductCards(products: Array<WildberriesProductCreate>): Promise<any> {
    const res = await this.sendRequest("content/v2/cards/upload", "POST", products)
    return res
  }

  async updateProductCards(productCards: Array<WildberriesProductCardUpdate>): Promise<any> {
    const res = await this.sendRequest("content/v2/cards/update", "POST", productCards, 1000)
    return res
  }

  async createProductCardsWithMerge(cardsToMerge: WildberriesProductCardsMerge): Promise<any> {
    const res = await this.sendRequest("content/v2/cards/upload/add", "POST", cardsToMerge)
    return res
  }

  async getProductCards(textSearch?: string, withPhoto: number = -1, limit: number = 100): Promise<Array<any>> {
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

    const res = await this.sendRequest("content/v2/get/cards/list", "POST", settings)
    return res
  }
}

export default WildberriesModuleService
