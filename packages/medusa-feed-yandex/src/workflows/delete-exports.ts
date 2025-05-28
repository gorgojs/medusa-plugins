import {
  createStep,
  StepResponse,
  createWorkflow,
  WorkflowResponse,
  WorkflowData
} from '@medusajs/framework/workflows-sdk'
import { MARKETPLACE_YANDEX_MARKET_MODULE } from '../modules/marketplace-yandex-market'
import MarketplaceYandexMarketModuleService from '../modules/marketplace-yandex-market/service'

export type DeleteExportsStepInput = string[]

export const deleteExportsStep = createStep(
  'delete-exports-step',
  async (ids: DeleteExportsStepInput, { container }) => {
    const service = container.resolve<MarketplaceYandexMarketModuleService>(MARKETPLACE_YANDEX_MARKET_MODULE)
    const rawResult = await service.softDeleteYandexMarketCatalogExports(ids)
    const deletedIds = rawResult?.yandex_market_catalog_export_id
    
    return new StepResponse(ids, deletedIds)
  },
  async (prevIds: DeleteExportsStepInput, { container }) => {
    const service = container.resolve<MarketplaceYandexMarketModuleService>(MARKETPLACE_YANDEX_MARKET_MODULE)
    await service.restoreYandexMarketCatalogExports(prevIds)
  }
)

export type DeleteExportsWorkflowInput = {
  ids: string[]
}

export const deleteExportsWorkflow = createWorkflow(
  'delete-exports-workflow',
  (input: WorkflowData<DeleteExportsWorkflowInput>) => {
    const deletedExports = deleteExportsStep(input.ids)
    return new WorkflowResponse(deletedExports)
  }
)