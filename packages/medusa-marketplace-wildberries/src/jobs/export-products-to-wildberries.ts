import { MedusaContainer } from "@medusajs/framework/types"
import exportProductsToWildberriesWorkflow, { dummyProducts } from "../workflows/export-products-to-wildberries"

export default async function (container: MedusaContainer) {
  const logger = container.resolve("logger")

  logger.info('Exporting products to wildberries...')

  const { result } = await exportProductsToWildberriesWorkflow(container).run({
    input: dummyProducts
  })

  logger.info(`Exported products to wildberries: ${JSON.stringify(result.data)}`)
}

export const config = {
  name: "export-products-to-wildberries",
  schedule: "* * * * *",
}
