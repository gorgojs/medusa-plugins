import { Badge, Text } from "@medusajs/ui"
import type { UiField } from "../../../types"

const Dash = () => (
  <Text size="small" leading="compact" className="text-ui-fg-subtle">
    —
  </Text>
)

/**
 * Read-only renderer for a configured field value, mirroring Medusa admin's section rows.
 * Secrets are never shown (only "configured" vs "not set"); booleans render as a status tag.
 */
export const IntegrationFieldValue = ({
  field,
  value,
  secretConfigured = false,
}: {
  field: UiField
  value: unknown
  /** A secret is stored for this integration (the value itself is never sent to the client). */
  secretConfigured?: boolean
}) => {
  if (field.secret || field.control === "secret") {
    return secretConfigured ? (
      <Text size="small" leading="compact">
        ••••••••
      </Text>
    ) : (
      <Dash />
    )
  }

  if (field.control === "switch") {
    if (value == null) return <Dash />
    return (
      <Badge size="2xsmall" color={value ? "green" : "grey"}>
        {value ? "Enabled" : "Disabled"}
      </Badge>
    )
  }

  if (value == null || value === "") return <Dash />

  if (field.control === "select") {
    return (
      <Badge size="2xsmall" color="grey">
        {String(value)}
      </Badge>
    )
  }

  return (
    <Text size="small" leading="compact">
      {String(value)}
    </Text>
  )
}
