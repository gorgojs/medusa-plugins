import { z } from "zod"
import type { Bilingual } from "./meta"
import type { ModuleKind, TestConnectionContext, TestConnectionResult } from "../../../types"

export { z }

// Canonical definitions live in the zod-free `src/types`; re-exported here for authors.
export type { ModuleKind, TestConnectionContext, TestConnectionResult }

/** One configuration section. Fields live in its own `z.object` — grouping is structural. */
export type IntegrationSection<Z extends z.ZodObject<any> = z.ZodObject<any>> = {
  id: string
  title: Bilingual
  schema: Z
  /** Which column to render this section in (two-column layout). Defaults to `"main"`. */
  column?: "main" | "side"
}

/** Issue raised by a cross-section `validate` rule. */
export type IntegrationValidateIssue = { path?: (string | number)[]; message: string }
export type IntegrationValidateContext = {
  addIssue: (issue: IntegrationValidateIssue) => void
}

type DescriptorBase = {
  /** Which Medusa module this integration configures (payment, fulfillment, …). */
  module: ModuleKind
  schemaVersion?: number
  displayName: Bilingual
  description?: Bilingual
  icon?: string
  docsUrl?: string
  supportsMultipleInstances?: boolean
}

/**
 * Rules that span MORE THAN ONE section. Evaluated only during full (activation)
 * validation, against the assembled config. Intra-section rules belong on that
 * section's own schema (`.superRefine`) so they also run when the section is saved.
 */
type CrossSectionRules = {
  validate?: (full: Record<string, unknown>, ctx: IntegrationValidateContext) => void
}

/**
 * What `defineIntegration` returns (and what a provider's `getDescriptor()` returns).
 * `schema` is composed from all section schemas — used for type inference and for
 * applying defaults; `pluginId`/`instanceId` are stamped later by the registry.
 */
export type IntegrationDescriptorInput = DescriptorBase &
  CrossSectionRules & {
    // `readonly` so the literal tuple produced by `defineIntegration`'s `const` generic
    // (needed for precise `z.infer`) stays assignable here.
    sections: readonly IntegrationSection[]
    /** Composed from `sections` by `defineIntegration` — authors don't write this. */
    schema: z.ZodType<any>
  }

export type IntegrationDescriptor = IntegrationDescriptorInput & {
  /** Stamped by the registry from the provider's `static identifier`. */
  pluginId: string
  /** Stamped from the registration id (null = single/default instance). */
  instanceId?: string | null
}

// Merge the output types of every section's schema into the full settings shape.
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends
  (k: infer I) => void ? I : never
type MergedSettings<S extends readonly IntegrationSection[]> = UnionToIntersection<
  { [K in keyof S]: S[K] extends IntegrationSection<infer Z> ? z.infer<Z> : never }[number]
>

/**
 * Declare an integration's configuration as a set of sections, each with its own zod
 * object. The composed `schema` (for `z.infer` and defaults) is built automatically:
 *
 *   const descriptor = defineIntegration({ module, displayName, sections: [...] })
 *   type Settings = z.infer<typeof descriptor.schema>
 */
export function defineIntegration<const S extends readonly IntegrationSection[]>(
  input: DescriptorBase & CrossSectionRules & { sections: S }
): DescriptorBase & CrossSectionRules & { sections: S; schema: z.ZodType<MergedSettings<S>> } {
  const shape = Object.assign({}, ...input.sections.map((s) => s.schema.shape))
  const schema = z.object(shape) as unknown as z.ZodType<MergedSettings<S>>
  return { ...input, schema }
}
