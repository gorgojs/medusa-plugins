import {
    createStep,
    StepResponse
} from "@medusajs/workflows-sdk"
import { YANDEX_MARKET_EXPORT } from "../../../modules/yandex_market_export"
import YandexMarketExportService from "../../../modules/yandex_market_export/service"

type createExportStepInput = {}

export const createExportStep = createStep(
  "create-export",
  async (input: createExportStepInput, { container } ) => {

    // const status = "pending"

    const service = container.resolve<YandexMarketExportService>(YANDEX_MARKET_EXPORT)
    await service.createYandexMarketExports()


    return new StepResponse({})
  }
)
