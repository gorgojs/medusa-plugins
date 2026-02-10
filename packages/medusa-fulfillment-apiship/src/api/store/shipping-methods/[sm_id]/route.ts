import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { removeShippingMethodFromCartWorkflow } from "../../../../workflows/remove-shipping-method-from-cart"

export const DELETE = async (req: MedusaRequest, res: MedusaResponse) => {
  const { sm_id } = req.params
  await removeShippingMethodFromCartWorkflow(
    req.scope
  ).run({
    input: {
      shipping_method_ids: [sm_id],
    },
  })

  res.status(200).json({
    message: "Shipping method removed from cart successfully."
  })
}