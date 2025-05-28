import {
  createStep,
  StepResponse,
  createWorkflow,
  WorkflowResponse,
} from '@medusajs/framework/workflows-sdk';
import { MARKETPLACE_YANDEX_MARKET_MODULE } from '../modules/marketplace-yandex-market';
import MarketplaceYandexMarketModuleService from '../modules/marketplace-yandex-market/service';

export type UpdateExportsStepInput = {
  id: string
  title?: string
  file_name?: string
  file_path?: string
  schedule?: number
  last_export_at?: Date
  is_active?: boolean
}[]

export const updateExportsStep = createStep(
  'update-export-step',
  async (exports: UpdateExportsStepInput, { container }) => {
    const service = container.resolve<MarketplaceYandexMarketModuleService>(MARKETPLACE_YANDEX_MARKET_MODULE)
    const updatedExports = await service.updateYandexMarketCatalogExports(exports);
    return new StepResponse(updatedExports);
  }
)

export type UpdateExportWorkflowInput = {
  id: string
  title?: string
  file_name?: string
  file_path?: string
  schedule?: number
  last_export_at?: Date
  is_active?: boolean
}[]

export const updateExportWorkflow = createWorkflow(
  'update-export-workflow',
  (input: UpdateExportWorkflowInput) => {
    const updatedExports = updateExportsStep(input);
    return new WorkflowResponse(updatedExports);
  }
);