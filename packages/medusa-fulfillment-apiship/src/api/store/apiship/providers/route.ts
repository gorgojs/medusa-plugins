import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { retriveProvidersWorkflow } from "../../../../workflows/retrive-providers"

export const POST = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const { result } = await retriveProvidersWorkflow(
    req.scope
  ).run({
    input: {}
  })
  
  res.status(200).json({
    ...result
  })
}