import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { calculateShippingOptionsPricesWorkflow } from "@medusajs/core-flows"

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  const { shipping_option_id, cart_id } = req.params

  const { result } = await calculateShippingOptionsPricesWorkflow(
    req.scope
  ).run({
    input: {
      cart_id,
      shipping_options: [
        {
          id: shipping_option_id,
          data: {},
        },
      ],
    },
  })

  const calculation = result[0]
  res.status(200).json({
    shipping_option_id,
    cart_id,
    ...calculation,
  })
}