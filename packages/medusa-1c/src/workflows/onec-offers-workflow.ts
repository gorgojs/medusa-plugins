import {
  createWorkflow,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk";
import { OnecExchangeWorkflowInput } from "../types";
import { parseOffersFilesStep } from "./steps/parse-offers-files";
import { onecProductsWorkflow } from "./onec-products-workflow";
import { onecInventoryWorkflow } from "./onec-inventory-workflow";
import { onecPriceListsWorkflow } from "./onec-price-lists-workflow";

export const onecOffersWorkflow = createWorkflow(
  "onec-offers-workflow",
  (input: Pick<OnecExchangeWorkflowInput, "offers">) => {
    const offersData = parseOffersFilesStep(input.offers);

    onecProductsWorkflow.runAsStep({ input: { offersData } });
    onecInventoryWorkflow.runAsStep({ input: { offersData } });
    onecPriceListsWorkflow.runAsStep({ input: { offersData } });

    return new WorkflowResponse({ ok: true });
  }
);
