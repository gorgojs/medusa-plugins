export type LogEventInput = {
  correlationId?: string,
  direction: "MEDUSA_TO_MARKETPLACE" | "MARKETPLACE_TO_MEDUSA",
  entityType: "PRODUCT" | "PRODUCT_MEDIA" | "PRODUCT_PRICE" | "PRODUCT_STOCK" | "ORDER",
  action: "CREATE" | "UPDATE" | "DELETE",
  startedAt?: Date,
  finishedAt?: Date,
  requestData?: Record<string, unknown>,
  responseData?: Record<string, unknown>
}
