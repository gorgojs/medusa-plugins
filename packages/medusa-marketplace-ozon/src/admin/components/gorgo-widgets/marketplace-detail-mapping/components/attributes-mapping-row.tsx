import { IconButton, Select, Text } from "@medusajs/ui"
import { XMarkMini } from "@medusajs/icons"
import { useMemo } from "react"
import { Form } from "../../../common/form"
import { Combobox } from "../../../common/combobox"
import { ChipInput } from "../../../common/chip-input/chip-input"
import { transformOptions, ComboboxOption, MappingFormValues } from "../../../../types"
import { UseFormReturn } from "react-hook-form"

type AttributeMappingRowProps = {
  form: UseFormReturn<MappingFormValues>
  categoryIndex: number
  attrIndex: number
  onRemove: () => void
  ozonAttributes: any
  profileOptions: ComboboxOption[]
  currentMedusaValue: string | undefined
  currentOzonValue: string | undefined
  blockedMedusaValues: Set<string>
  blockedOzonValues: Set<string>
  ozonAttributesComboboxData: Record<any, any>
  attributesByCategoryComboboxData: Record<any, any>
}

export const AttributeMappingRow = ({
  form,
  categoryIndex,
  attrIndex,
  onRemove,
  ozonAttributes,
  profileOptions,
  currentMedusaValue,
  currentOzonValue,
  blockedMedusaValues,
  blockedOzonValues,
  ozonAttributesComboboxData,
  attributesByCategoryComboboxData
}: AttributeMappingRowProps) => {
  const isRequiredRow = useMemo(() => {
    if (!currentOzonValue) return false

    const idStr = currentOzonValue.startsWith("attr:") ? currentOzonValue.slice(5) : currentOzonValue
    const attrFromApi = (ozonAttributes ?? []).find((a: any) => String(a.id) === idStr)
    const fromProfile = profileOptions.some((o: ComboboxOption) => o.value === currentOzonValue)

    return Boolean(attrFromApi?.is_required || fromProfile)
  }, [currentOzonValue, ozonAttributes, profileOptions])

  const medusaAttributeGroups = useMemo(() => {
    const base = attributesByCategoryComboboxData.options.filter((o: ComboboxOption) => String(o.value).startsWith("base:"))
    const opts = attributesByCategoryComboboxData.options.filter((o: ComboboxOption) => String(o.value).startsWith("opt:"))

    return [
      { label: "Base attributes", options: base },
      { label: "Options", options: opts },
    ].filter((g) => g.options.length > 0)
  }, [attributesByCategoryComboboxData.options])

  const blockedMedusa = useMemo(() => {
    return blockedMedusaValues
  }, [blockedMedusaValues])

  const medusaGroups = useMemo(() => {
    return medusaAttributeGroups
      .map((g) => ({
        label: g.label,
        options: g.options.filter((o: ComboboxOption) => !blockedMedusa.has(o.value) || o.value === currentMedusaValue),
      }))
      .filter((g) => g.options.length > 0)
  }, [medusaAttributeGroups, blockedMedusa, currentMedusaValue])

  const medusaOptions = useMemo(() => medusaGroups.flatMap((g) => g.options), [medusaGroups])

  const blockedOzon = useMemo(() => {
    return blockedOzonValues
  }, [blockedOzonValues])

  const ozonAttributesOptions = useMemo(() => {
    return (ozonAttributes ?? []).map((attribute: any) => {
      const id = attribute?.id
      const value = `attr:${String(id)}`
      const label = attribute?.is_required ? `${String(attribute?.name)}*` : String(attribute?.name)
      return { value, label }
    })
  }, [ozonAttributes])

  const ozonGroups = useMemo(() => {
    const groups = [
      { label: "Profile fields", options: profileOptions },
      { label: "Category attributes", options: ozonAttributesOptions },
    ]
    return groups
      .map((g) => ({
        label: g.label,
        options: g.options.filter((o: ComboboxOption) => !blockedOzon.has(o.value) || o.value === currentOzonValue),
      }))
      .filter((g) => g.options.length > 0)
  }, [ozonAttributesOptions, blockedOzon, currentOzonValue, profileOptions])

  const ozonOptions = useMemo(() => ozonGroups.flatMap((g) => g.options), [ozonGroups])

  return (
    <div className="bg-ui-bg-subtle border-ui-border-base flex flex-row gap-2 rounded-xl border px-2 py-2">
      <div className="grow">
        {isRequiredRow && (
          <Text className="txt-compact-xsmall text-ui-fg-subtle mb-1">Required</Text>
        )}

        <div className="grid grid-cols-2 gap-2">
          <Form.Field
            name={`category_mappings.${categoryIndex}.mappings.${attrIndex}.ozon_attribute_id`}
            render={({ field }) => (
              <Form.Item>
                <Form.Control>
                  <Combobox
                    value={(field.value ?? "") as string}
                    onChange={field.onChange}
                    options={ozonOptions}
                    groups={ozonGroups}
                    searchValue={ozonAttributesComboboxData.searchValue}
                    onSearchValueChange={ozonAttributesComboboxData.onSearchValueChange}
                    disabled={ozonAttributesComboboxData.disabled || !ozonOptions.length}
                    placeholder="Select Ozon Attribute"
                  />
                </Form.Control>
              </Form.Item>
            )}
          />

          <Form.Field
            control={form.control}
            name={`category_mappings.${categoryIndex}.mappings.${attrIndex}.medusa_attribute`}
            rules={isRequiredRow ? { required: "Select a Medusa attribute" } : {}}
            render={({ field }) => (
              <Form.Item>
                <Form.Control>
                  <Combobox
                    value={(field.value ?? "") as string}
                    onChange={field.onChange}
                    options={medusaOptions}
                    groups={medusaGroups}
                    searchValue={attributesByCategoryComboboxData.searchValue}
                    onSearchValueChange={attributesByCategoryComboboxData.onSearchValueChange}
                    disabled={attributesByCategoryComboboxData.disabled}
                    placeholder="Select Medusa Attribute"
                  />
                </Form.Control>
                <Form.ErrorMessage />
              </Form.Item>
            )}
          />

          <Form.Field
            name={`category_mappings.${categoryIndex}.mappings.${attrIndex}.default_value`}
            render={({ field }) => (
              <Form.Item>
                <Form.Control>
                  <ChipInput
                    value={field.value ?? []}
                    onChange={field.onChange}
                    placeholder="Default value"
                  />
                </Form.Control>
                <Form.ErrorMessage />
              </Form.Item>
            )}
          />

          <Form.Field
            name={`category_mappings.${categoryIndex}.mappings.${attrIndex}.transform`}
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
