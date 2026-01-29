import {
  createStep,
  StepResponse,
  createWorkflow,
  WorkflowResponse,
  when
} from "@medusajs/framework/workflows-sdk"
import { Modules } from "@medusajs/framework/utils"
import { getApishipClient } from "../providers/fulfillment-apiship/utils/apiship-registry"

export type GetProvidersFromCacheStep = {
  key: string
}

export const getProvidersFromCacheStep = createStep(
  "get-providers-from-cache-step",
  async ({ key }: GetProvidersFromCacheStep, { container }) => {
    const cachingModuleService = container.resolve(Modules.CACHE)
    const providers = await cachingModuleService.get(key) as any
    
    return new StepResponse(providers)
  }
)

export const fetchProvidersFromApishipStep = createStep(
  "fetch-providers-from-apiship-step",
  async () => {
    const { listsApi } = getApishipClient()
    const { data } = await listsApi.getListProviders({})
    const providers = data.rows
    return new StepResponse({
      providers
    })
  }
)

export type SaveProvidersToCacheStepInput = {
  key: string
  data: Record<string, any>
}

export const saveProvidersToCacheStep = createStep(
  "save-providers-to-cache-step",
  async ({ key, data }: SaveProvidersToCacheStepInput, { container }) => {
    const cachingModuleService = container.resolve(Modules.CACHE)
    await cachingModuleService.set(key, data)
  }
)

export type SelectProvidersResultStepInput = {
  cached: any | null
  fetched: any | null
}

export const selectProvidersResultStep = createStep(
  "select-providers-result-step",
  async ({ cached, fetched }: SelectProvidersResultStepInput) => {
    return new StepResponse(cached ?? fetched)
  }
)

export const retriveProvidersWorkflow = createWorkflow(
  "retrive-providers",
  () => {
    const key = "apiship:providers"
    const cachedProviders = getProvidersFromCacheStep({ key })
    const fetchedProviders = when(
      cachedProviders,
      (providers) => !providers
    ).then(() => {
      const result = fetchProvidersFromApishipStep()
      saveProvidersToCacheStep({
        key,
        data: result,
      })
      return result
    })
    const output = selectProvidersResultStep({
      cached: cachedProviders,
      fetched: fetchedProviders,
    })
    return new WorkflowResponse(output)
  }
)