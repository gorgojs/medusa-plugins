import { productApi, withAuth } from "../../../lib/ozon-client"
import { V3ImportProductsRequestItem } from "../../../lib/ozon-seller-api"

export type exportProductsStepInput = V3ImportProductsRequestItem[]

export const exportProducts = async (input: exportProductsStepInput) => {
  const batchSize = 1
  const batches: V3ImportProductsRequestItem[][] = []

  for (let i = 0; i < input.length; i += batchSize) {
    batches.push(input.slice(i, i + batchSize))
  }

  const results = [] as any

  for (let batchedProducts of batches) {
    const { status, data } = await productApi.productAPIImportProductsV3(
      withAuth({
        v3ImportProductsRequest: {
          items: batchedProducts,
        },
      })
    )

    const task_id = data.result?.task_id as string | undefined

    if (!task_id) {
      // TODO: handle error properly
      throw new Error(`Ozon import response has no task_id.`)
    }

    results.push({ status, data })
  }

  return results
}

