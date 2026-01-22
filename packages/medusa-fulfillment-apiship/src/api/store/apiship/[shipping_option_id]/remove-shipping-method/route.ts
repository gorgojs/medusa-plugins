import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { removeShippingMethodFromCartWorkflow } from "../../../../../workflows/remove-shipping-method-from-cart"

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  const { shipping_option_id } = req.params
  await removeShippingMethodFromCartWorkflow(
    req.scope
  ).run({
    input: {
      shipping_method_ids: [shipping_option_id],
    },
  })

  res.status(200).json({
    message: "Shipping method removed from cart successfully."
  })
}