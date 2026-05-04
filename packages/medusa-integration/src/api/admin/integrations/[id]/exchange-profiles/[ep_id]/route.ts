import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import {  } from "../../../../../../workflows/integration-exchange-profile/workflows"
import { AdminMarketplaceUpdateExchangeProfileType } from "../../../validators"
import {
  AdminMarketplaceExchangeProfileResponse
} from "../../../../../../types"
import { updateExchangeProfileWorkflow } from "../../../../../../workflows/integration-exchange-profile/workflows/update-exchange-profile"

export const POST = async (
  req: MedusaRequest<AdminMarketplaceUpdateExchangeProfileType>,
  res: MedusaResponse<AdminMarketplaceExchangeProfileResponse>
) => {
  const { result } = await updateExchangeProfileWorkflow(req.scope).run({
    input: {
      id: req.params.ep_id,
      marketplace_id: req.params.id,
      ...req.validatedBody
    }
  })

  res.status(200).json({ exchange_profile: result })
}
