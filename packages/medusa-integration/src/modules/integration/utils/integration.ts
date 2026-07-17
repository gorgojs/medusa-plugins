/** Which Medusa module an integration configures. */
export const IntegrationModule = {
  PAYMENT: "payment",
  FULFILLMENT: "fulfillment",
  MARKETPLACE: "marketplace",
  CRM: "crm",
  ERP: "erp",
  PIM: "pim",
  NOTIFICATION: "notification",
  FEED: "feed",
  TAX: "tax",
  OTHER: "other",
} as const
export type ModuleKind = (typeof IntegrationModule)[keyof typeof IntegrationModule]

/** Outcome of a provider's connection test. */
export const IntegrationTestStatus = {
  PASSED: "passed",
  FAILED: "failed",
  SKIPPED: "skipped",
} as const
export type TestStatus = (typeof IntegrationTestStatus)[keyof typeof IntegrationTestStatus]
