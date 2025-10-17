import { createStep, createWorkflow, StepResponse, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { WB_MODULE } from "../modules/wildberries"
import WildberriesModuleService from "../modules/wildberries/service"

const pingStep = createStep(
  "ping-api",
  async (_, { container }) => {
    const wildberriesModuleService: WildberriesModuleService = container.resolve(WB_MODULE)

    const response = await wildberriesModuleService.pingContent()

    return new StepResponse(response)
  }
)

const checkStatusWorkflow = createWorkflow(
  "check-status",
  function () {
    const response = pingStep()

    return new WorkflowResponse({
      response,
    })
  }
)

export default checkStatusWorkflow
