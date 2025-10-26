import { MedusaContainer } from "@medusajs/framework/types"
import { checkExportStatusWorkflow } from "../workflows/check-ozon-export-status"

export default async function (container: MedusaContainer) {
  try {
    const batchSize =
      Number(process.env.OZON_STATUS_BATCH_SIZE || "") || 100

    const { result } = await checkExportStatusWorkflow(container).run({
      input: { batchSize },
    })

    container
      .resolve("logger")
      .info(
        `Ozon export status check done (batchSize=${batchSize}): ${JSON.stringify(
          result
        )}`
      )

    return result
  } catch (error: any) {
    container
      .resolve("logger")
      .error(`Ozon export status check failed: ${error?.message}`)
    throw error
  }
}

export const config = {
  name: "ozon-check-export-status",
  schedule: "* * * * *",
}
