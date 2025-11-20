import { productApi, withAuth } from "../../lib/ozon-client"
import { V3ImportProductsRequestItem } from "../../lib/ozon-seller-api";

export type exportProductsStepInput = V3ImportProductsRequestItem[]

export const exportProducts = async (input: exportProductsStepInput) => {

  const { status, data } = await productApi.productAPIImportProductsV3(
    withAuth({
      v3ImportProductsRequest: {
        items: input
      }
    })
  )

  const task_id = data.result?.task_id as string | undefined;
  if (!task_id) {
    // TODO: handle error properly
    throw new Error(
      `Ozon import response has no task_id.`
    )
  }

  return ({ ok: true, status: status, data, task_id })
}
