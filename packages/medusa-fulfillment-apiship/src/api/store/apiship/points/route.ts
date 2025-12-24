import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { getPointsAddressesWorkflow } from "../../../../workflows/get-point-addresses"

export const POST = async (
  req: MedusaRequest<{
    cartId: string
    shippingOptionId: string
    pointIds: Array<number>
  }>,
  res: MedusaResponse
) => {
  const { cartId, shippingOptionId, pointIds } = req.body
  const { result } = await getPointsAddressesWorkflow(
    req.scope
  ).run({
    input: {
      cartId,
      shippingOptionId,
      pointIds,
    },
  })

  res.status(200).json({
    points: result.points
  })
}