import { IconButton, Select, Text } from "@medusajs/ui"
import { XMarkMini } from "@medusajs/icons"
import { useMemo } from "react"
import { useWatch } from "react-hook-form"
import { Form } from "../../../common/form"
import { Combobox } from "../../../common/combobox"
import { useComboboxData } from "../../../../hooks/use-combobox-data"
import { extractMedusaAttributeTitles } from "../../../../utils"
import { sdk } from "../../../../lib/sdk"
import {
  transformOptions,
  AttributeMappingRowProps,
  ComboboxOption
} from "../../../../types"

export const AttributeMappingRow = ({
  form,
  categoryIndex,
  attrIndex,
  selectedMedusaCategoryIds,
  medusaCategoryNameById,
  selectedMedusaValues,
  selectedOzonValues,
  onRemove,
  ozonAttributes,
  profileOptions,
}: AttributeMappingRowProps) => {
  const currentMedusaValue = useWatch({
    control: form.control,
    name: `category_mappings.${categoryIndex}.mappings.${attrIndex}.medusa_attribute`,
    defaultValue: "",
  }) as string

  const currentOzonValue = useWatch({
    control: form.control,
    name: `category_mappings.${categoryIndex}.mappings.${attrIndex}.ozon_attribute_id`,
    defaultValue: "",
  }) as string

  const isRequiredRow = useMemo(() => {
    if (!currentOzonValue) return false
  
    const idStr = currentOzonValue.startsWith("attr:")
      ? currentOzonValue.slice(5)
      : currentOzonValue
  
    const attrFromApi = (ozonAttributes ?? []).find(
      (a: any) => String(a.id) === idStr
    )
  
    const fromProfile = profileOptions.some(
      (o: ComboboxOption) => o.value === currentOzonValue
    )
  
    return Boolean(attrFromApi?.is_required || fromProfile)
  }, [currentOzonValue, ozonAttributes])

  const attributesByCategoryComboboxData = useComboboxData<any, any>({
    queryKey: ["medusa-category-attributes-by-category", selectedMedusaCategoryIds],
    enabled: selectedMedusaCategoryIds.length > 0,
    queryFn: async () => {
      const fields = [
        "id",
        "title",
        "description",
        "*options",
        "*variants.options",
        "*variants.images",
        "*variants.prices",
        "variants.sku",
        "variants.weight",
        "variants.length",
        "variants.height",
        "variants.width",
        "variants.barcode",
      ].join(",")
      const results = await Promise.all(
        selectedMedusaCategoryIds.map(async (categoryId) => {
          const res = await sdk.admin.product.list({
            category_id: [categoryId],
            fields,
          })

          const products = res?.products
          const attributes = extractMedusaAttributeTitles(products)
          return {
            category: {
              id: categoryId,
              name: medusaCategoryNameById.get(categoryId) ?? categoryId,
            },
            attributes,
          }
        }),
      )
      return { result: results }
    },
    defaultValue: undefined,
    getOptions: (data) => {
      const rows = data?.result ?? []

      const baseSet = new Set<string>()
      const optionsSet = new Set<string>()

      for (const row of rows as any[]) {
        for (const key of row?.attributes?.base ?? []) baseSet.add(String(key).trim())
        for (const key of row?.attributes?.options ?? []) optionsSet.add(String(key).trim())
      }

      const baseOptions = Array.from(baseSet)
        .filter(Boolean)
        .sort((a, b) => a.localeCompare(b))
        .map((key) => ({ label: key, value: `base:${key}` }))

      const optionTitles = Array.from(optionsSet)
        .filter(Boolean)
        .sort((a, b) => a.localeCompare(b))
        .map((key) => ({ label: key, value: `opt:${key}` }))

      return [...baseOptions, ...optionTitles]
    },
  })

  const medusaAttributeGroups = useMemo(() => {
    const base = attributesByCategoryComboboxData.options.filter((o) => String(o.value).startsWith("base:"))
    const opts = attributesByCategoryComboboxData.options.filter((o) => String(o.value).startsWith("opt:"))

    return [
      { label: "Base attributes", options: base },
      { label: "Options", options: opts },
    ].filter((g) => g.options.length > 0)
  }, [attributesByCategoryComboboxData.options])

  const blockedMedusa = useMemo(() => {
    return new Set(selectedMedusaValues.filter((v) => v && v !== currentMedusaValue))
  }, [selectedMedusaValues, currentMedusaValue])

  const medusaGroups = useMemo(() => {
    return medusaAttributeGroups
      .map((g) => ({
        label: g.label,
        options: g.options.filter((o) => !blockedMedusa.has(o.value) || o.value === currentMedusaValue),
      }))
      .filter((g) => g.options.length > 0)
  }, [medusaAttributeGroups, blockedMedusa, currentMedusaValue])

  const medusaOptions = useMemo(() => medusaGroups.flatMap((g) => g.options), [medusaGroups])

  const blockedOzon = useMemo(() => {
    return new Set(selectedOzonValues.filter((v) => v && v !== currentOzonValue))
  }, [selectedOzonValues, currentOzonValue])

  const ozonAttributesOptions = useMemo(() => {
    return (ozonAttributes ?? []).map((attribute: any) => {
      const id = attribute?.id
      const value = `attr:${String(id)}`
      const label = attribute?.is_required
        ? `${String(attribute?.name)}*`
        : String(attribute?.name)
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
  }, [ozonAttributesOptions, blockedOzon, currentOzonValue])

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
                    searchValue={""}
                    onSearchValueChange={() => { }}
                    disabled={!ozonOptions.length}
                    placeholder="Select Ozon"
                  />
                </Form.Control>
                <Form.ErrorMessage />
              </Form.Item>
            )}
          />

          <Form.Field
            name={`category_mappings.${categoryIndex}.mappings.${attrIndex}.medusa_attribute`}
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
                    placeholder="Select Medusa"
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
                  <input
                    {...field}
                    className="txt-compact-small bg-ui-bg-base shadow-borders-base text-ui-fg-base h-8 w-full rounded-md px-2 py-1.5"
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
