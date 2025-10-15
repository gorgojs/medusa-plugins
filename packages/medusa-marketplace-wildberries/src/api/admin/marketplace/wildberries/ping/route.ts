import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import checkStatusWorkflow from "../../../../../workflows/check-status"


export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {

  const response = await checkStatusWorkflow().run()
  res.json(response.result)
}
