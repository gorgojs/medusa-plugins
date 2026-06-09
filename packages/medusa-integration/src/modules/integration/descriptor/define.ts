import { z } from "zod"
import type { Bilingual } from "./meta"

export { z }

export type PluginKind =
  | "payment" | "fulfillment" | "marketplace" | "crm" | "erp" | "pim"
  | "notification" | "feed" | "tax" | "other"

export type TestConnectionContext = {
  credentials: Record<string, unknown>
  settings: Record<string, unknown>
}

export type TestConnectionResult = {
  status: "ok" | "fail" | "skipped"
  message?: string
}

export type IntegrationDescriptor = {
  pluginKind: PluginKind
  pluginId: string
  schemaVersion?: number
  displayName: Bilingual
  description?: Bilingual
  icon?: string
  docsUrl?: string
  supportsMultipleInstances?: boolean
  schema: z.ZodObject<any>
  sections: { id: string; title: Bilingual }[]
  testConnection?: (ctx: TestConnectionContext) => Promise<TestConnectionResult>
}

export function defineIntegration(descriptor: IntegrationDescriptor): IntegrationDescriptor {
  return descriptor
}
