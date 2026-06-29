// ── For integration-provider authors ─────────────────────────────────────────
export { defineIntegration, z } from "./modules/integration/descriptor/define"
export { AbstractIntegrationProvider } from "./modules/integration/utils/abstract-integration-provider"
export type {
  IntegrationDescriptor,
  IntegrationDescriptorInput,
  ModuleKind,
  TestConnectionContext,
  TestConnectionResult,
} from "./modules/integration/descriptor/define"
export type { FieldMeta, FieldControl, Bilingual } from "./modules/integration/descriptor/meta"
// Props a provider's custom-section admin widget receives via the settings page's LayoutComposer.
export type { IntegrationSectionData } from "./types"

// ── For consumers of the integration module ──────────────────────────────────
export { INTEGRATION_MODULE } from "./modules/integration"
export { default as IntegrationModuleService } from "./modules/integration/services/integration-module"
export type { ResolvedOptions } from "./modules/integration/services/integration-module"
export type { IntegrationModuleOptions } from "./modules/integration/types"
