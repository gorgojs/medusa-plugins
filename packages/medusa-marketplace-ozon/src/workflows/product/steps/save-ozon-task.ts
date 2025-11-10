import {
  createStep,
} from "@medusajs/workflows-sdk"
import { OZON_EXPORT_MODULE } from "../../../modules/ozon-export"

export const saveOzonTaskStep = createStep<string, void, void>(
  "save-ozon-task",
  async (task_id, { container }) => {
    try {
      let svc: any
      try {
        svc = container.resolve(OZON_EXPORT_MODULE)
      } catch {
        return
      }
      await svc.createOzonExports({ task_id })
    } catch (e: any) {
      const msg = String(e?.message ?? "")
      if (!/unique|duplicate/i.test(msg)) throw e
    }
  },
  async () => { }
)