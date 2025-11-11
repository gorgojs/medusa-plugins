import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import {
  ExportInput,
  Output
} from "../types"
import { productApi, withAuth } from "../../../lib/ozon-client"
import { V3ImportProductsRequest } from "../../../lib/ozon-seller-api";

export const importProductsToOzonStep = createStep<ExportInput, Output, void>(
  "import-products-to-ozon",
  async (input: V3ImportProductsRequest) => {

    const { status, data } = await productApi.productAPIImportProductsV3(
      withAuth({ v3ImportProductsRequest: input })
    )

    const task_id = data.result?.task_id as string | undefined;
    if (!task_id) {
      // TODO: handle error properly
      throw new Error(
        `Ozon import response has no task_id.`
      )
    }

    return new StepResponse<Output, void>({ ok: true, status: status, data, task_id })
  },
  async () => { }
)
