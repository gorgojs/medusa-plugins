import {
  createStep,
  StepResponse
} from "@medusajs/framework/workflows-sdk"
import { OZON_EXPORT_MODULE } from "../../../modules/ozon-export"
import { OzonExportRecord, Input } from "../types/types"


export const listAllOzonExportsStep = createStep(
  "list-all-ozon-exports",
  async ({ batchSize = 200, onlyWithoutStatus = false }: Input, { container }) => {
    const logger = container.resolve("logger") as any
    const svc = container.resolve(OZON_EXPORT_MODULE) as any

    const rows: OzonExportRecord[] = []
    let skip = 0
    const where = onlyWithoutStatus ? { ozon_task_status: null } : {}

    while (true) {
      const page = await svc.listOzonExports(where, { take: batchSize, skip })
      const chunk: OzonExportRecord[] = page?.rows ?? page ?? []
      logger.info(`ozon_export page: got=${chunk.length} skip=${skip}`)
      if (!chunk.length) break
      rows.push(...chunk)
      skip += chunk.length
      if (chunk.length < batchSize) break
    }

    logger.info(`ozon_export total rows collected: ${rows.length}`)
    return new StepResponse(rows)
  }
)
