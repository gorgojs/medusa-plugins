import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk";
import { parseOrdersFilesStep } from "./steps/parse-orders-files";
import { syncOnecOrdersStep } from "./steps/sync-onec-orders-step";

export const onecOrdersWorkflow = createWorkflow(
  "onec-orders-workflow",
  (input: { orders: string[] }) => {
    const ordersData = parseOrdersFilesStep(input.orders);
    const result = syncOnecOrdersStep(ordersData);
    return new WorkflowResponse(result);
  }
);
