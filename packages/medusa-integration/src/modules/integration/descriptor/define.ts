import { z } from "zod"
import type { Bilingual } from "./meta"
import type { ModuleKind, TestConnectionContext, TestConnectionResult } from "../../../types"

export { z }

// Canonical definitions live in the zod-free `src/types`; re-exported here for authors.
export type { ModuleKind, TestConnectionContext, TestConnectionResult }

export type IntegrationDescriptor = {
  /** Which Medusa module this integration configures (payment, fulfillment, …). */
  module: ModuleKind
  /** Stamped by the registry from the provider's `static identifier` — not declared by the author. */
  pluginId: string
  /** Stamped by the registry from the registration `id` (null = single/default instance). */
  instanceId?: string | null
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
 * What a provider author declares in `getDescriptor()`. `pluginId`/`instanceId` are
 * omitted because they're derived from the provider's `static identifier` and the
 * registration `id` respectively.
 */
export type IntegrationDescriptorInput = Omit<IntegrationDescriptor, "pluginId" | "instanceId">

export function defineIntegration(
  descriptor: IntegrationDescriptorInput
): IntegrationDescriptorInput {
  return descriptor
}
