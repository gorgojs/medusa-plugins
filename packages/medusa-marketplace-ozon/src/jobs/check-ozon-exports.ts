import { MedusaContainer } from "@medusajs/framework/types"
import { checkOzonProductExportStatusWorkflow } from "../workflows/product/workflows/check-ozon-product-export-status"

export default async function (container: MedusaContainer) {
  const logger = container.resolve("logger")
  const { result } = await checkOzonProductExportStatusWorkflow(container).run({
    input: {},
  })

  logger.info(`Ozon export status check (${JSON.stringify(result)}`)

  return result
}

export const config = {
  name: "ozon-check-export-status",
  schedule: "* * * * *",
}
