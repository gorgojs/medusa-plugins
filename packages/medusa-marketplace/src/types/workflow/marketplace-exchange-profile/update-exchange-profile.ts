import { UpdateExchangeProfileStepInput } from "../../../workflows/marketplace-exchange-profile/steps/update-exchange-profile"

export type UpdateExchangeProfileWorkflowInput = UpdateExchangeProfileStepInput & {
  stock_location_id?: string,
}
