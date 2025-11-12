import {
  createStep,
} from "@medusajs/workflows-sdk"
import { OZON_EXPORT_MODULE } from "../../../modules/ozon-export"
import OzonExportModuleService from "../../../modules/ozon-export/service"

export const saveOzonTaskStep = createStep<string, void, void>(
  "save-ozon-task",
  async (task_id, { container }) => {
    const svc = container.resolve<OzonExportModuleService>(OZON_EXPORT_MODULE)
    await svc.createOzonExports({ task_id })
  }
)
