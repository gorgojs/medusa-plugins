import { MedusaContainer } from "@medusajs/framework/types"
import { exportMarketplaceProductsWorkflow } from "../workflows"

export default async function (container: MedusaContainer) {
  const logger = container.resolve("logger")

  const { result } = await exportMarketplaceProductsWorkflow(container).run({
    input: { ids: [] },
  })

  return result
}

export const config = {
  name: "export-products",
  schedule: "* * * * *"
}
