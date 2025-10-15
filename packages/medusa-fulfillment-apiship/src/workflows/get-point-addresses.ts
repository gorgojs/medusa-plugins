import {
  createStep,
  StepResponse,
  createWorkflow,
  WorkflowResponse,
  when
} from "@medusajs/framework/workflows-sdk"
import { Modules } from "@medusajs/framework/utils"
import { getApishipClient } from "../providers/fulfillment-apiship/utils/apiship-registry"


export type BuildPointsCacheKeyStepInput = {
  cartId: string
  shippingOptionId: string
}


export const buildPointsCacheKeyStep = createStep(
  "build-points-cache-key-step",
  async ({ cartId, shippingOptionId }: BuildPointsCacheKeyStepInput, { container }) => {
    const key = `apiship:points:${cartId}:${shippingOptionId}`
    return new StepResponse(key)
  }
)

export type GetPointAddressesFromCacheStep = {
  key: string
}

export const getPointAddressesFromCacheStep = createStep(
  "get-point-addresses-from-cache-step",
  async ({ key }: GetPointAddressesFromCacheStep, { container }) => {
    const cachingModuleService = container.resolve(Modules.CACHE)
    const points = await cachingModuleService.get(key)
    return new StepResponse(points)
  }
)

export type FetchPointsAddressesFromApishipStepInput = {
  ids: Array<number>
}

export const fetchPointsAddressesFromApishipStep = createStep(
  "fetch-points-addresses-from-apiship-step",
  async ({ ids }: FetchPointsAddressesFromApishipStepInput, { container }) => {
    const filter = `id=[${ids.join(",")}]`
    const fields = [
      "id",
      "description",
      "providerKey",
      "code",
      "name",
      "postIndex",
      "city",
      "region",
      "address",
      "photos",
      "worktime",
      "lat",
      "lng",
      "phone",
      "availableOperation",
    ].join(",")
    const limit = ids.length
    const { listsApi } = getApishipClient()
    const { data } = await listsApi.getListPoints({ filter, fields, limit })
    const points = data.rows
    return new StepResponse({
      points
    })
  }
)

export type SavePointsAddressesToCacheStepInput = {
  key: string
  data: Record<string, any>
}

export const savePointsAddressesToCacheStep = createStep(
  "save-points-addresses-to-cache-step",
  async ({ key, data }: SavePointsAddressesToCacheStepInput, { container }) => {
    const cachingModuleService = container.resolve(Modules.CACHE)
    await cachingModuleService.set(key, data)
  }
)

export type SelectPointsResultStepInput = {
  cached: any | null
  fetched: any | null
}

export const selectPointsResultStep = createStep(
  "select-points-result-step",
  async ({ cached, fetched }: SelectPointsResultStepInput) => {
    return new StepResponse(cached ?? fetched)
  }
)

export type GetPointsAddressesWorkflowInput = {
  cartId: string
  shippingOptionId: string
  pointIds: Array<number>
}

export const getPointsAddressesWorkflow = createWorkflow(
  "get-points-addresses",
  (input: GetPointsAddressesWorkflowInput) => {
    const key = buildPointsCacheKeyStep({
      cartId: input.cartId,
      shippingOptionId: input.shippingOptionId,
    })
    const cachedPoints = getPointAddressesFromCacheStep({ key })
    const fetchedPoints = when(
      cachedPoints,
      (points) => !points
    ).then(() => {
      const result = fetchPointsAddressesFromApishipStep({
        ids: input.pointIds,
      })
      savePointsAddressesToCacheStep({
        key,
        data: result,
      })
      return result
    })
    const output = selectPointsResultStep({
      cached: cachedPoints,
      fetched: fetchedPoints,
    })
    return new WorkflowResponse(output)
  }
)