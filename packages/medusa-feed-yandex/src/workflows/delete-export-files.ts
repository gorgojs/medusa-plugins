import {
  createStep,
  StepResponse,
  createWorkflow,
  WorkflowResponse,
  WorkflowData,
  transform,
} from '@medusajs/framework/workflows-sdk'
import { MARKETPLACE_YANDEX_MARKET_MODULE } from '../modules/marketplace-yandex-market'
import MarketplaceYandexMarketModuleService from '../modules/marketplace-yandex-market/service'
import { updateExportWorkflow } from "../workflows/update-export"
import { deleteFilesWorkflow } from "@medusajs/medusa/core-flows"

export type GetExportFilesIdsStepInput = string[]

export const getExportFilesIdsStep = createStep(
  'get-export-files-ids-step',
  async (ids: GetExportFilesIdsStepInput, { container }) => {
    const service = container.resolve<MarketplaceYandexMarketModuleService>(MARKETPLACE_YANDEX_MARKET_MODULE)
    const exportList = await service.listYandexMarketCatalogExports({ id: ids })
    const exportFilesIds = exportList
      .filter(item => {
        const isValidPath = item.file_path 
          && typeof item.file_path === 'string' 
          && item.file_path.trim().length > 0
        return isValidPath
      })
      .map(item => item.file_path as string)
      .map(path => {
        const cleanPath = path.split('?')[0].split('#')[0]
        const parts = cleanPath.split('/')
        const fileName = parts[parts.length - 1]
        return fileName.includes('.') ? fileName : null
      })
      .filter((fileName): fileName is string => fileName !== null)
    return new StepResponse(exportFilesIds)
  }
)

export type DeleteExportFilesWorkflowInput = {
  ids: string[]
}

export const deleteExportFilesWorkflow = createWorkflow(
  'delete-export-files-workflow',
  (input: WorkflowData<DeleteExportFilesWorkflowInput>) => {
    const exportFilesIds = getExportFilesIdsStep(input.ids)
    deleteFilesWorkflow
      .runAsStep({
        input: {
          ids: exportFilesIds
        }
      })
    const exportToUpdate = transform(
      { input },
      (data) => data.input.ids.map((id) => {
        return ({
          id: id,
          file_path: "",
        })
      })
    )
    updateExportWorkflow.runAsStep({
      input: exportToUpdate,
    })
    return new WorkflowResponse(input.ids)
  }
)