import { Input, Switch, Select, Label, Text } from "@medusajs/ui"
import { Controller, Control } from "react-hook-form"

export type UiField = {
  name: string
  control: "text" | "secret" | "switch" | "number" | "url" | "select" | "multiselect" | "json"
  secret: boolean
  required: boolean
  label: { en: string; ru: string }
  hint?: { en: string; ru: string }
  placeholder?: string
  options?: string[]
}

export const IntegrationField = ({
  field,
  control,
  secretConfigured = false,
}: {
  field: UiField
  control: Control<any>
  /** A secret is already stored — the field stays empty and blank means "keep current". */
  secretConfigured?: boolean
}) => {
  // A configured secret is optional (blank = keep existing); only enforce required client-
  // side for non-secret fields or for secrets that have never been set.
  const enforceRequired =
    field.required && field.control !== "switch" && !(field.control === "secret" && secretConfigured)

  return (
    <div className="flex flex-col gap-1">
      <Label size="small" weight="plus">
        {field.label.en}
        {field.required ? " *" : ""}
      </Label>
      <Controller
        name={field.name}
        control={control}
        // Inline required-field validation. Deeper rules (min length, enums, cross-field)
        // are validated server-side and surfaced as a message.
        rules={{ required: enforceRequired ? `${field.label.en} is required` : false }}
        render={({ field: f, fieldState }) => (
          <>
            {renderControl(field, f, secretConfigured)}
            {fieldState.error?.message && (
              <Text size="xsmall" className="text-ui-fg-error">
                {fieldState.error.message}
              </Text>
            )}
          </>
        )}
      />
      {field.hint && (
        <Text size="xsmall" className="text-ui-fg-subtle">
          {field.hint.en}
        </Text>
      )}
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderControl(field: UiField, f: any, secretConfigured = false) {
  switch (field.control) {
    case "switch":
      return <Switch checked={!!f.value} onCheckedChange={f.onChange} />
    case "select":
      return (
        <Select value={f.value ?? ""} onValueChange={f.onChange}>
          <Select.Trigger>
            <Select.Value placeholder={field.placeholder} />
          </Select.Trigger>
          <Select.Content>
            {(field.options ?? []).map((o) => (
              <Select.Item key={o} value={o}>
                {o}
              </Select.Item>
            ))}
          </Select.Content>
        </Select>
      )
    case "number":
      return (
        <Input
          type="number"
          placeholder={field.placeholder}
          value={f.value ?? ""}
          onChange={(e) => f.onChange(e.target.valueAsNumber)}
        />
      )
    case "secret":
      return (
        <Input
          type="password"
          placeholder={
            secretConfigured ? "•••••• — leave blank to keep" : field.placeholder ?? ""
          }
          value={f.value ?? ""}
          onChange={f.onChange}
        />
      )
    default:
      return <Input placeholder={field.placeholder} value={f.value ?? ""} onChange={f.onChange} />
  }
}
