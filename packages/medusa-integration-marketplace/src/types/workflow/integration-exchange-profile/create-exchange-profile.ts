import { CreateExchangeProfileStepInput } from "../../../workflows/integration-exchange-profile/steps/create-exchange-profile"

export type CreateExchangeProfileWorkflowInput = CreateExchangeProfileStepInput & {
  stock_location_id: string,
}
