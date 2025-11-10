import {
  createStep,
  StepResponse,
} from "@medusajs/framework/workflows-sdk"
import { OZON_EXPORT_MODULE } from "../../../modules/ozon-export"
import { Input } from "../types/types"
import { OzonExportRecord } from "../../../types/ozon"

export const listAllOzonExportsStep = createStep<Input, OzonExportRecord[], unknown>(
  "list-all-ozon-exports",
  async ({ onlyWithoutStatus = false }: Input, { container }) => {
    const ozonExportService = container.resolve(OZON_EXPORT_MODULE) as any

    const filter = onlyWithoutStatus ? { ozon_task_status: null } : {}

    const result = await ozonExportService.listOzonExports(filter)
    const records: OzonExportRecord[] = result?.rows ?? result ?? []

    return new StepResponse(records)
  }
)
