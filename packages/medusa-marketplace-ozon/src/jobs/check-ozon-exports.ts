import { MedusaContainer } from "@medusajs/framework/types"
import { checkOzonProductExportStatusWorkflow } from "../workflows/check-ozon-product-export-status"

export default async function (container: MedusaContainer) {
  const logger = container.resolve("logger")

  const batchSize =
    Number(process.env.OZON_STATUS_BATCH_SIZE || "") || 100

  const { result } = await checkOzonProductExportStatusWorkflow(container).run({
    input: { batchSize },
  })

  logger.info(`Ozon export status check (batchSize=${batchSize}): ${JSON.stringify(result)}`)

  return result
}

export const config = {
  name: "ozon-check-export-status",
  schedule: "* * * * *",
}
