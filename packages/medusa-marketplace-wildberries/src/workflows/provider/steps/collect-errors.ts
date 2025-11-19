import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { RequestPublicViewerPublicErrorsTableListV2 } from "../../../lib/wildberries-products-client"
import { productApi } from "../../../lib/wildberries-client"

export const collectErrorsStepId = "collect-errors"

export const collectErrorsStep = createStep(
  collectErrorsStepId,
  async (_, { container }) => {

    const result: any[] = []

    let body: RequestPublicViewerPublicErrorsTableListV2 = {
      "cursor": {
        "limit": 100
      },
      "order": {
        "ascending": true
      }
    }
    let next = false
    do {
      const { status, data: response } = await productApi.contentV2CardsErrorListPost(body)
      result.push(...response.data.items)
      if (body.cursor) {
        body.cursor.updatedAt = response.data.cursor.updatedAt
        body.cursor.batchUUID = response.data.cursor.batchUUID
      }
      next = response.data.cursor.next
    } while (next)

    return new StepResponse(result)
  }
)
