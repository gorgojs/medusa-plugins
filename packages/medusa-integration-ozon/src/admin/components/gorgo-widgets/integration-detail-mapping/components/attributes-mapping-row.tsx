import { IconButton, Select, Text } from "@medusajs/ui"
import { XMarkMini } from "@medusajs/icons"
import { useMemo } from "react"
import { Form } from "../../../common/form"
import { Combobox } from "../../../common/combobox"
import { ChipInput } from "../../../common/chip-input/chip-input"
import {
  transformOptions,
  ComboboxOption,
  MappingFormValues,
} from "../../../../types"
import { UseFormReturn } from "react-hook-form"

type AttributeMappingRowProps = {
  form: UseFormReturn<MappingFormValues>
  attrIndex: number
  onRemove: () => void
  ozonAttributes: any
  currentMedusaValue: string | undefined
  currentOzonValue: string | undefined
  blockedMedusaValues: Set<string>
  blockedOzonValues: Set<string>
  ozonAttributesComboboxData: Record<any, any>
  attributesByCategoryComboboxData: Record<any, any>
}

export const AttributeMappingRow = ({
  form,
  attrIndex,
  onRemove,
  ozonAttributes,
  currentMedusaValue,
  currentOzonValue,
  blockedMedusaValues,
  blockedOzonValues,
  ozonAttributesComboboxData,
  attributesByCategoryComboboxData,
}: AttributeMappingRowProps) => {
  const isRequiredRow = useMemo(() => {
    if (!currentOzonValue) return false

    const attrFromApi = (ozonAttributes ?? []).find(
      (a: any) => String(a.id) === String(currentOzonValue)
    )

    return Boolean(attrFromApi?.is_required)
  }, [currentOzonValue, ozonAttributes])

  const medusaOptionsAll = attributesByCategoryComboboxData.options as ComboboxOption[]

  const blockedMedusa = useMemo(() => blockedMedusaValues, [blockedMedusaValues])

  const medusaOptions = useMemo(
    () =>
      medusaOptionsAll.filter(
        (o) => !blockedMedusa.has(o.value) || o.value === currentMedusaValue
      ),
    [medusaOptionsAll, blockedMedusa, currentMedusaValue]
  )

  const blockedOzon = useMemo(() => blockedOzonValues, [blockedOzonValues])

  const ozonAttributesOptions = useMemo(
    () =>
      (ozonAttributes ?? []).map((attribute: any) => {
        const id = attribute?.id
        const value = String(id)
        const label = attribute?.is_required ? `${String(attribute?.name)} *` : String(attribute?.name)
        return { value, label }
      }),
    [ozonAttributes]
  )

  const ozonOptions = useMemo(
    () =>
      ozonAttributesOptions.filter(
        (o: ComboboxOption) =>
          !blockedOzon.has(o.value) || o.value === currentOzonValue
      ),
    [ozonAttributesOptions, blockedOzon, currentOzonValue]
  )

  return (
    <div className="bg-ui-bg-subtle border-ui-border-base flex flex-row gap-2 rounded-xl border px-2 py-2">
      <div className="grow">
        {isRequiredRow && (
          <Text className="txt-compact-xsmall text-ui-fg-subtle mb-1">
            Required
          </Text>
        )}

        <div className="grid grid-cols-2 gap-2">
          <Form.Field
            name={`category_mapping.mappings.${attrIndex}.ozon_attribute_id`}
            render={({ field }) => (
              <Form.Item>
                <Form.Control>
                  <Combobox
                    value={field.value}
                    onChange={(value) => {
                      if (isRequiredRow && !value) return
                      field.onChange(value)
                    }}
                    options={ozonOptions}
                    disabled={isRequiredRow || ozonAttributesComboboxData.disabled || !ozonOptions.length}
                    placeholder="Select Ozon Attribute"
                    allowClear={!isRequiredRow}
                  />
                </Form.Control>
              </Form.Item>
            )}
          />

          <Form.Field
            control={form.control}
            name={`category_mapping.mappings.${attrIndex}.medusa_attribute`}
            rules={isRequiredRow ? { required: "Select a Medusa attribute" } : {}}
            render={({ field }) => (
              <Form.Item>
                <Form.Control>
                  <Combobox
                    value={field.value}
                    onChange={field.onChange}
                    options={medusaOptions}
                    disabled={attributesByCategoryComboboxData.disabled}
                    placeholder="Select Medusa Attribute"
                    allowClear
                  />
                </Form.Control>
                <Form.ErrorMessage />
              </Form.Item>
            )}
          />

          <Form.Field
            name={`category_mapping.mappings.${attrIndex}.default_value`}
            render={({ field }) => (
              <Form.Item>
                <Form.Control>
                  <ChipInput
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Default value"
                  />
                </Form.Control>
                <Form.ErrorMessage />
              </Form.Item>
            )}
          />

          <Form.Field
            name={`category_mapping.mappings.${attrIndex}.transform`}
            render={({ field }) => {
              const { onChange, ref, ...fieldProps } = field

              return (
                <Form.Item>
                  <Form.Control>
                    <Select {...fieldProps} onValueChange={onChange}>
                      <Select.Trigger ref={ref} className="bg-ui-bg-base">
                        <Select.Value placeholder="Select Transform" />
                      </Select.Trigger>
                      <Select.Content>
                        {transformOptions.map((o) => (
                          <Select.Item key={`transform-${o.value}`} value={o.value}>
                            <span className="text-ui-fg-subtle">{o.label}</span>
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select>
                  </Form.Control>
                  <Form.ErrorMessage />
                </Form.Item>
              )
            }}
          />
        </div>
      </div>

      <div className="size-7 flex-none self-center">
        {!isRequiredRow && (
          <IconButton
            size="small"
            variant="transparent"
            className="text-ui-fg-muted"
            type="button"
            onClick={onRemove}
          >
            <XMarkMini />
          </IconButton>
        )}
      </div>
    </div>
  )
}