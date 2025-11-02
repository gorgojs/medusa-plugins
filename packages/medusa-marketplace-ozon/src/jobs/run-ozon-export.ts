import { MedusaContainer } from "@medusajs/framework/types"
import { runOzonProductExport } from "../workflows/run-ozon-product-export"

export default async function (container: MedusaContainer) {
  const logger = container.resolve("logger")

  const { result } = await runOzonProductExport(container).run({
    input: { items: [] },
  })
  logger.info(`Ozon export: result=${JSON.stringify(result)}`)

  return result
}

export const config = {
  name: "run-ozon-export",
  schedule: "*/30 * * * *"
}
