import { useMemo, useState, Fragment } from "react"
import { useQuery } from "@tanstack/react-query"
import { useFieldArray, useWatch } from "react-hook-form"
import { Badge, Button, Heading, IconButton, Select, Text } from "@medusajs/ui"
import { XMarkMini } from "@medusajs/icons"
import { OzonNode, transformOptions, MappingRowFormFieldProps } from "../../../../../types"
import {
  buildOzonCategoryTypeSelectOptionsDeep,
  ozonOptionsToGroups,
  aggregateMedusaProductOptionsByTitle,
} from "../../../../../utils"
import { sdk } from "../../../../../lib/sdk"
import { Combobox } from "../../../../../components/common/combobox"
import { useComboboxData } from "../../../../../hooks/use-combobox-data"
import { Form } from "../../../../../components/common/form"

const OZON_MARKETPLACE_ID = "mp_01KFBVSVR44EW6SWMEECXEWXN9"

export const MappingRow = ({ form }: MappingRowFormFieldProps) => {
  const [selectedMedusaCategoryIds, setSelectedMedusaCategoryIds] = useState<string[]>([])
  const [selectedOzonCategoryTypeValue, setSelectedOzonCategoryTypeValue] = useState<string>("")

  const { fields, append, remove, replace } = useFieldArray({
    control: form.control,
    name: "mappings",
    keyName: "key",
  })

  const watchedRules = useWatch({
    control: form.control,
    name: "mappings",
    defaultValue: [],
  })

  const productCategoriesCombobox = useComboboxData({
    queryKey: ["product_categories"],
    queryFn: (params) =>
      sdk.admin.productCategory.list({ ...params, fields: "id,name" }),
    defaultValue: undefined, // TODO: support default value to load initial data
    getOptions: (data) =>
      data.product_categories.map((r) => ({ label: r.name, value: r.id })),
    enabled: true
  })

  const ozonProductCategoriesComboboxWithIds = useComboboxData<any, any>({
    queryKey: ["ozon_categories", OZON_MARKETPLACE_ID],
    queryFn: (params) =>
      sdk.client.fetch<any>(`/admin/ozon/${OZON_MARKETPLACE_ID}/categories`, {
        query: params as any,
      }) as any,
    defaultValue: undefined,
    getOptions: (data) =>
      buildOzonCategoryTypeSelectOptionsDeep((data?.result ?? []) as OzonNode[]).map((o) => ({
        label: o.label,
        value: String(o.value),
      })),
    enabled: selectedMedusaCategoryIds.length > 0,
  })

  const ozonGroupsWithIds = useMemo(
    () => ozonOptionsToGroups(ozonProductCategoriesComboboxWithIds.options),
    [ozonProductCategoriesComboboxWithIds.options]
  )

  const ozonIds = useMemo(() => {
    const [description_category_id, type_id] = (selectedOzonCategoryTypeValue || "").split(":")
    return { description_category_id: description_category_id || "", type_id: type_id || "" }
  }, [selectedOzonCategoryTypeValue])

  const medusaCategoryNameById = useMemo(() => {
    return new Map(productCategoriesCombobox.options.map((o) => [String(o.value), o.label]))
  }, [productCategoriesCombobox.options])

  const ozonAttributesQuery = useQuery({
    queryKey: [
      "ozon-attributes",
      OZON_MARKETPLACE_ID,
      ozonIds.description_category_id,
      ozonIds.type_id,
    ],
    enabled: Boolean(ozonIds.description_category_id && ozonIds.type_id),
    queryFn: async () => {
      const params = new URLSearchParams({
        description_category_id: ozonIds.description_category_id,
        type_id: ozonIds.type_id,
      })

      return sdk.client.fetch<any>(`/admin/ozon/${OZON_MARKETPLACE_ID}/attributes?${params.toString()}`)
    },
  })

  const attributesByCategoryQuery = useQuery({
    queryKey: ["medusa-category-attributes-by-category", selectedMedusaCategoryIds],
    enabled: selectedMedusaCategoryIds.length > 0,
    queryFn: async () => {
      const fields = [
        "id",
        "title",
        "options.id",
        "options.title",
        "variants.id",
        "variants.options.option_id",
        "variants.options.value",
      ].join(",")

      const results = await Promise.all(
        selectedMedusaCategoryIds.map(async (categoryId) => {
          const res = await sdk.admin.product.list({
            category_id: [categoryId],
            fields,
          })

          const products = res?.products
          const attributes = aggregateMedusaProductOptionsByTitle(products)

          return {
            category: {
              id: categoryId,
              name: medusaCategoryNameById.get(categoryId) ?? categoryId,
            },
            attributes,
          }
        })
      )

      return results
    },
  })

  const isOzonDisabled = productCategoriesCombobox.disabled || selectedMedusaCategoryIds.length === 0

  const medusaAttributeGroups = useMemo(() => {
    const attributes = attributesByCategoryQuery.data ?? []

    const extractTitles = (attrs: any): string[] => {
      if (!attrs) return []
      if (Array.isArray(attrs)) return [...new Set(attrs.map((a) => a?.title).filter(Boolean))]
      return []
    }

    return attributes
      .map((row) => {
        const titles = extractTitles(row.attributes).sort((a, b) => a.localeCompare(b))
        return {
          label: row.category.name,
          options: titles.map((title) => ({
            label: title,
            value: `${row.category.id}:${title}`,
          })),
        }
      })
      .filter((g) => g.options.length > 0)
  }, [attributesByCategoryQuery.data])

  const ozonAttributeOptions = useMemo(() => {
    const ozonAttributes = ozonAttributesQuery.data?.result ?? []

    const options: { value: string; label: string }[] = []
    for (const attribute of ozonAttributes as any[]) {
      const id = attribute?.id
      if (id == null) continue
      const name = attribute?.name
      options.push({ value: String(id), label: String(name) })
    }

    return options
  }, [ozonAttributesQuery.data])

  const selectedMedusaValues = (watchedRules ?? []).map((r) => r?.medusa_attribute).filter(Boolean)
  const selectedOzonValues = (watchedRules ?? []).map((r) => r?.ozon_attribute_id).filter(Boolean)

  const getMedusaGroupsForRow = (rowIndex: number) => {
    const currentValue = watchedRules?.[rowIndex]?.medusa_attribute || ""
    const blocked = new Set(selectedMedusaValues.filter((v) => v && v !== currentValue))

    return medusaAttributeGroups
      .map((g) => ({
        label: g.label,
        options: g.options.filter((o) => !blocked.has(o.value) || o.value === currentValue),
      }))
      .filter((g) => g.options.length > 0)
  }

  const getOzonOptionsForRow = (rowIndex: number) => {
    const currentValue = watchedRules?.[rowIndex]?.ozon_attribute_id || ""
    const blocked = new Set(selectedOzonValues.filter((v) => v && v !== currentValue))
    return ozonAttributeOptions.filter((o) => !blocked.has(o.value) || o.value === currentValue)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>Medusa: Категория</div>
        <Combobox
          value={selectedMedusaCategoryIds}
          onChange={(v) => setSelectedMedusaCategoryIds((v ?? []) as string[])}
          options={productCategoriesCombobox.options}
          searchValue={productCategoriesCombobox.searchValue}
          onSearchValueChange={productCategoriesCombobox.onSearchValueChange}
          disabled={productCategoriesCombobox.disabled}
        />
        <Combobox
            options={productCategoriesCombobox.options}
            searchValue={productCategoriesCombobox.searchValue}
            onSearchValueChange={
              productCategoriesCombobox.onSearchValueChange
            }
            disabled={productCategoriesCombobox.disabled}
          />
        <div>Ozon: Категория/Тип</div>
        <Combobox
          value={selectedOzonCategoryTypeValue}
          onChange={(v) => setSelectedOzonCategoryTypeValue((v ?? "") as string)}
          options={ozonProductCategoriesComboboxWithIds.options}
          groups={ozonGroupsWithIds}
          searchValue={ozonProductCategoriesComboboxWithIds.searchValue}
          onSearchValueChange={ozonProductCategoriesComboboxWithIds.onSearchValueChange}
          disabled={isOzonDisabled}
        />
      </div>

      <div className="flex flex-col">
        <Heading level="h2" className="mb-2">
          Attributes mapping
        </Heading>

        <Text className="text-ui-fg-subtle txt-small mb-6">
          Add rules to map Medusa attributes to Ozon attributes.
        </Text>

        {fields.map((row, index) => {
          const medusaGroups = getMedusaGroupsForRow(index)
          const ozonOptions = getOzonOptionsForRow(index)

          return (
            <Fragment key={`${(row as any).key}.${index}`}>
              <div className="bg-ui-bg-subtle border-ui-border-base flex flex-row gap-2 rounded-xl border px-2 py-2">
                <div className="grow">
                  <div className="grid grid-cols-2 gap-2">
                    <Form.Field
                      name={`mappings.${index}.medusa_attribute`}
                      render={({ field }) => {
                        const { onChange, ref, ...fieldProps } = field

                        return (
                          <Form.Item>
                            <Form.Control>
                              <Select {...fieldProps} onValueChange={onChange}>
                                <Select.Trigger ref={ref} className="bg-ui-bg-base">
                                  <Select.Value placeholder="Select Medusa" />
                                </Select.Trigger>
                                <Select.Content>
                                  {medusaGroups.map((g) => (
                                    <Select.Group key={`medusa-group-${g.label}`}>
                                      <Select.Label>{g.label}</Select.Label>
                                      {g.options.map((o) => (
                                        <Select.Item key={`medusa-${o.value}`} value={o.value}>
                                          <span className="text-ui-fg-subtle">{o.label}</span>
                                        </Select.Item>
                                      ))}
                                    </Select.Group>
                                  ))}
                                </Select.Content>
                              </Select>
                            </Form.Control>
                            <Form.ErrorMessage />
                          </Form.Item>
                        )
                      }}
                    />

                    <Form.Field
                      name={`mappings.${index}.ozon_attribute_id`}
                      render={({ field }) => {
                        const { onChange, ref, ...fieldProps } = field

                        return (
                          <Form.Item>
                            <Form.Control>
                              <Select
                                {...fieldProps}
                                onValueChange={onChange}
                                disabled={!ozonOptions.length}
                              >
                                <Select.Trigger ref={ref} className="bg-ui-bg-base">
                                  <Select.Value placeholder="Select Ozon" />
                                </Select.Trigger>
                                <Select.Content>
                                  {ozonOptions.map((o) => (
                                    <Select.Item key={`ozon-${o.value}`} value={o.value}>
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

                    <Form.Field
                      name={`mappings.${index}.default_value`}
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
                      name={`mappings.${index}.transform`}
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
                  <IconButton
                    size="small"
                    variant="transparent"
                    className="text-ui-fg-muted"
                    type="button"
                    onClick={() => remove(index)}
                  >
                    <XMarkMini />
                  </IconButton>
                </div>
              </div>

              {index < fields.length - 1 && (
                <div className="relative px-6 py-3">
                  <div className="border-ui-border-strong absolute bottom-0 left-[40px] top-0 z-[-1] w-px bg-[linear-gradient(var(--border-strong)_33%,rgba(255,255,255,0)_0%)] bg-[length:1px_3px] bg-repeat-y" />
                  <Badge size="2xsmall" className="text-xs">
                    and
                  </Badge>
                </div>
              )}
            </Fragment>
          )
        })}

        <div className={fields.length ? "mt-6" : ""}>
          <Button
            type="button"
            variant="secondary"
            className="inline-block"
            onClick={() =>
              append({
                medusa_attribute: "",
                ozon_attribute_id: "",
                default_value: "",
                transform: "none",
              })
            }
            disabled={!selectedMedusaCategoryIds.length || !selectedOzonCategoryTypeValue}
          >
            Add Attributes mapping
          </Button>

          {!!fields.length && (
            <Button
              type="button"
              variant="transparent"
              className="text-ui-fg-muted hover:text-ui-fg-subtle ml-2 inline-block"
              onClick={() => replace([])}
            >
              Clear all
            </Button>
          )}
        </div>
      </div>

      <pre className="whitespace-pre-wrap overflow-x-auto">
        {JSON.stringify({ mappings: watchedRules ?? [] }, null, 2)}
      </pre>

      <pre className="whitespace-pre-wrap overflow-x-auto">
        {JSON.stringify(ozonAttributesQuery.data ?? null, null, 2)}
      </pre>

      <pre className="whitespace-pre-wrap overflow-x-auto">
        {JSON.stringify(attributesByCategoryQuery.data ?? null, null, 2)}
      </pre>
    </div>
  )
}
