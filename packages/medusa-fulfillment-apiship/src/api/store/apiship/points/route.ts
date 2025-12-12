import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { getApishipClient } from "../../../../providers/fulfillment-apiship/utils/apiship-registry"

export const POST = async (
  req: MedusaRequest<{ pointIds: Array<number> }>,
  res: MedusaResponse
) => {
  const { pointIds } = req.body
  const filter = `id=[${pointIds.join(",")}]`
  const fields = [
    "id",
    "providerKey",
    "code",
    "name",
    "postIndex",
    "city",
    "region",
    "address",
    "lat",
    "lng",
    "phone",
    "availableOperation",
  ].join(",")
  const limit = pointIds.length
  const { listsApi } = getApishipClient()
  const { data } = await listsApi.getListPoints({ filter, fields, limit })
  const points = data.rows

  res.status(200).json({
    points,
    meta: data.meta
  })
}