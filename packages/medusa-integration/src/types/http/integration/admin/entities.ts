import type { I18nKey, ModuleKind, TestStatus } from "../../../integration"

/** One declared integration instance (registration) merged with its current row state. */
export interface IntegrationOverviewItem {
  provider_id: string
  identifier: string
  instance_id: string | null
  module: ModuleKind
  display_name: I18nKey
  /** Descriptor icon — any `<img src>` string (data URI / URL / `/static` path). */
  icon?: string
  supports_multiple_instances: boolean
  has_test_connection: boolean
  is_configured: boolean
  is_enabled: boolean
  /** Stored config passes full validation (all required fields + cross-section rules). */
  is_complete: boolean
  last_test_status: TestStatus | null
}

/** Client-facing view of an integration record — secrets are never included. */
export interface MaskedIntegration {
  id: string
  provider_id: string
  module: ModuleKind
  title: string | null
  is_enabled: boolean
  has_secrets: boolean
  last_test_status: TestStatus | null
  values: Record<string, unknown>
}
