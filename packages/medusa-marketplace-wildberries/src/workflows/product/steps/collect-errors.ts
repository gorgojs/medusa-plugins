import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { WB_MODULE } from "../../../modules/wildberries"
import WildberriesModuleService from "../../../modules/wildberries/service"

export const collectErrorsStepId = "collect-errors"

export const collectErrorsStep = createStep(
  collectErrorsStepId,
  async (_, { container }) => {
    const logger = container.resolve("logger")
    const wildberriesModuleService: WildberriesModuleService = container.resolve(WB_MODULE)

    const result: any[] = []

    let cursor: any = null
    let next = false
    do {
      const response = await wildberriesModuleService.getCardsErrorList(cursor)
      result.push(...response.items)
      cursor = response.cursor
      next = cursor.next
    } while (next)

      

    return new StepResponse(result)
  }
)
