import {
    createStep,
    StepResponse
} from "@medusajs/workflows-sdk"
import { YANDEX_MARKET_EXPORT } from "../../../modules/yandex_market_export"
import YandexMarketExportService from "../../../modules/yandex_market_export/service"

type GetExportsStepInput = {
  ids: string[]
}

export const getExportsStep = createStep(
  "get-exports",
  async (input: GetExportsStepInput, { container } ) => {

    // const status = getMarketplaceExportSatus()

    const service = container.resolve<YandexMarketExportService>(YANDEX_MARKET_EXPORT)
    let marketplaceExports // TODO: create exportDTO types
    if(input.ids.length > 0){
      marketplaceExports = await service.listYandexMarketExports({ id: input.ids })
    } else {
      marketplaceExports = await service.listYandexMarketExports({ status: "pending" }) // TODO: use correct status
      marketplaceExports = marketplaceExports.filter(_ => {
        // TODO: resolve filter
        return true
      })
    }
    return new StepResponse(marketplaceExports)

  }
)
