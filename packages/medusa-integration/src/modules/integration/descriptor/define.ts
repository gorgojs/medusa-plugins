import { z } from "zod"
import type { Bilingual } from "./meta"

export { z }

export type PluginKind =
  | "payment" | "fulfillment" | "marketplace" | "crm" | "erp" | "pim"
  | "notification" | "feed" | "tax" | "other"

export type TestConnectionContext = {
  settings: Record<string, unknown>
}

export type TestConnectionResult = {
  status: "ok" | "fail" | "skipped"
  message?: string
}

export type IntegrationDescriptor = {
  pluginKind: PluginKind
  /** Stamped by the registry from the provider's `static identifier` — not declared by the author. */
  pluginId: string
  schemaVersion?: number
  displayName: Bilingual
  description?: Bilingual
  icon?: string
  docsUrl?: string
  supportsMultipleInstances?: boolean
  schema: z.ZodObject<any>
  sections: { id: string; title: Bilingual }[]
}

/**
 * What a provider author declares in `getDescriptor()`. `pluginId` is omitted here
 * because it's derived from the provider's `static identifier`.
 */
export type IntegrationDescriptorInput = Omit<IntegrationDescriptor, "pluginId">

export function defineIntegration(
  descriptor: IntegrationDescriptorInput
): IntegrationDescriptorInput {
  return descriptor
}
