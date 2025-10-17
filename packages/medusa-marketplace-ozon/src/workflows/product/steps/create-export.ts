// import {
//   createStep,
// } from "@medusajs/workflows-sdk"
// import { OZON_EXPORT_MODULE } from "../../../modules/ozon-export"
// import OzonExportModuleService from "../../../modules/ozon-export/service"

// export type CreateExportStepInput = {
//   task_id: string
// }

// export const createExportStep = createStep(
//   "create-export",
//   async (input: CreateExportStepInput, { container }) => {
//     const service = container.resolve<OzonExportModuleService>(OZON_EXPORT_MODULE)
//     await service.createOzonExports({ task_id: input.task_id })
//   }
// )
