import { Logger, ConfigModule } from "@medusajs/framework/types"

export type WildberriesProduct = {
  "subjectID": Number,
  "variants": Array<any>
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

  private async sendRequest(url: string, method: string, data?: any) {
    this.logger_.info(`Sending a ${method} request to ${url}.`)
    this.logger_.info(`Request Data: ${JSON.stringify(data, null, 2)}`)
    this.logger_.info(`API Token: ${this.options_.apiKey}`)

    const headers: Record<string, string> = {
      'Authorization': `Bearer ${this.options_.apiKey}`,
      'Content-Type': 'application/json',
    }

    try {
      const response = await fetch(url, {
        method: method,
        headers: headers,
        body: method !== 'GET' ? JSON.stringify(data) : undefined,
      })

      this.logger_.info(`Response status: ${response.status}`)

      if (!response.ok) {
        const error = await response.text()
        this.logger_.error(`WB API error: ${error}`)
      }

      const result = await response.json()
      this.logger_.info(`Response data: ${result}`)
      return result
    } catch (error) {
      throw error
    }
  }

  async pingContent(): Promise<any> {
    const res = await this.sendRequest("https://content-api-sandbox.wildberries.ru/ping", "GET")
    return res
  }

  async createProductCards(products: Array<WildberriesProduct>): Promise<any> {
    const res = await this.sendRequest("https://content-api-sandbox.wildberries.ru/content/v2/cards/upload", "POST", products)
    return res
  }

}

export default WildberriesModuleService
