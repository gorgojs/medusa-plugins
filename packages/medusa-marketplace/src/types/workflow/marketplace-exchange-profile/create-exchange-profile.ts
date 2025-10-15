import { CreateExchangeProfileStepInput } from "../../../workflows/marketplace-exchange-profile/steps/create-exchange-profile"

export type CreateExchangeProfileWorkflowInput = CreateExchangeProfileStepInput & {
  stock_location_id: string,
}
