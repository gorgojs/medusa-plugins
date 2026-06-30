import { Input, Switch, Select, Label, Text, Textarea } from "@medusajs/ui"
import { useState } from "react"
import { Controller, Control } from "react-hook-form"
import type { UiField } from "../../../types"

// Re-export so the form keeps importing the field shape from one place.
export type { UiField }

const jsonToText = (v: unknown) => (v === undefined || v === "" ? "" : JSON.stringify(v, null, 2))

/**
 * Basic editor for nested/array options (`control: "json"`). The form value is the parsed
 * object/array; the textarea holds the raw text so invalid intermediate input doesn't clobber
 * the last valid value. Deep validation (the field's zod schema) still runs server-side.
 */
const JsonField = ({ field, f }: { field: UiField; f: any }) => {
  const [raw, setRaw] = useState(() => jsonToText(f.value))
  const [error, setError] = useState<string | null>(null)
  return (
    <>
      <Textarea
        rows={6}
        className="font-mono"
        placeholder={field.placeholder ?? "[]"}
        value={raw}
        onBlur={f.onBlur}
        onChange={(e) => {
          const text = e.target.value
          setRaw(text)
          if (text.trim() === "") {
            setError(null)
            f.onChange(undefined)
            return
          }
          try {
            f.onChange(JSON.parse(text))
            setError(null)
          } catch {
            setError("Invalid JSON")
          }
        }}
      />
      {error && (
        <Text size="xsmall" className="text-ui-fg-error">
          {error}
        </Text>
      )}
    </>
  )
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
          // Blank → undefined (not NaN), so optional numbers clear cleanly and an untouched
          // number field doesn't serialize to null and fail the schema.
          onChange={(e) => f.onChange(e.target.value === "" ? undefined : e.target.valueAsNumber)}
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
    case "json":
      return <JsonField field={field} f={f} />
    default:
      return <Input placeholder={field.placeholder} value={f.value ?? ""} onChange={f.onChange} />
  }
}
