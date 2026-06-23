import type { Bilingual, DateValue, ModuleKind, TestStatus } from "../../../integration"

/** One declared integration instance (registration) merged with its current row state. */
export interface IntegrationOverviewItem {
  provider_id: string
  plugin_id: string
  instance_id: string | null
  module: ModuleKind
  display_name: Bilingual
  supports_multiple_instances: boolean
  has_test_connection: boolean
  is_configured: boolean
  is_enabled: boolean
  last_test_status: TestStatus | null
  last_test_at: DateValue
}

/** Client-facing view of an integration record — secrets are never included. */
export interface MaskedIntegration {
  id: string
  provider_id: string
  module: ModuleKind
  title: string | null
  is_enabled: boolean
  has_secrets: boolean
  last_test_at: DateValue
  last_test_status: TestStatus | null
  last_test_message: string | null
  values: Record<string, unknown>
}
