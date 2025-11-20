import { MedusaContainer } from "@medusajs/framework/types"
import { checkProductsStatusesWorkflow } from "../workflows"

export default async function (container: MedusaContainer) {
  const logger = container.resolve("logger")

  const { result } = await checkProductsStatusesWorkflow(container).run({
    input: { ids: [] },
  })
  logger.info(`Ozon import: result=${JSON.stringify(result)}`)

  return result
}

export const config = {
  name: "import-products",
  schedule: "* * * * *"
}