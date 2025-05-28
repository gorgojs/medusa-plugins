import {
  createStep,
  StepResponse,
  createWorkflow,
  WorkflowResponse,
  WorkflowData
} from '@medusajs/framework/workflows-sdk'
import { MARKETPLACE_YANDEX_MARKET_MODULE } from '../modules/marketplace-yandex-market'
import MarketplaceYandexMarketModuleService from '../modules/marketplace-yandex-market/service'

export type CreateExportsStepInput = {
  file_name: string
  is_active: boolean
  schedule?: number
}[]

export const createExportsStep = createStep(
  'create-exports-step',
  async (input: CreateExportsStepInput, { container }) => {
    const service = container.resolve<MarketplaceYandexMarketModuleService>(MARKETPLACE_YANDEX_MARKET_MODULE)
    const createdExports = await service.createYandexMarketCatalogExports(input)
    const ids = createdExports.map((createdExport) => {
        return createdExport.id
    })
    return new StepResponse(createdExports, ids)
  },
  async (prevIds: string[], { container }) => {
    const service = container.resolve<MarketplaceYandexMarketModuleService>(MARKETPLACE_YANDEX_MARKET_MODULE)
    await service.deleteYandexMarketCatalogExports(prevIds)
  }
)

export type CreateExportsWorkflowInput = {
  file_name: string
  is_active: boolean
  schedule?: number
}[]

export const createExportsWorkflow = createWorkflow(
  'create-exports-workflow',
  (input: WorkflowData<CreateExportsWorkflowInput>) => {
    const createdExports = createExportsStep(input)
    return new WorkflowResponse(createdExports)
  }
)