import { useEffect, useMemo, useState } from "react"
import { Heading } from "@medusajs/ui"
import { useFieldArray, useWatch, UseFormReturn } from "react-hook-form"
import {
  ComboboxOption,
  MappingFormValues,
  MappingRowValue,
} from "../../../../types"
import { CategorySelectors } from "./category-selectors"
import { AttributesMapping } from "./attributes-mapping"
import { sdk } from "../../../../lib/sdk"
import { IntegrationHttpTypes } from "@gorgo/medusa-integration/types"
import { useComboboxData } from "../../../../hooks/use-combobox-data"
import {
  buildOzonCategoryTypeSelectOptionsDeep,
  findCategoryNodeById,
} from "../../../../utils"

type MappingRowProps = {
  form: UseFormReturn<MappingFormValues>
  ozonTreeByValueRef: any
  integration: IntegrationHttpTypes.AdminIntegration
}

export const MappingRow = ({
  form,
  ozonTreeByValueRef,
  integration,
}: MappingRowProps) => {
  const { resetField } = form

  const rootOzonCategoryId = useWatch({
    control: form.control,
    name: "category_mapping.root_ozon_category_id",
  }) as string | undefined

  const selectedMedusaCategoryIds = useWatch({
    control: form.control,
    name: "category_mapping.medusa_category_ids",
    defaultValue: [],
  }) as string[]

  const selectedOzonCategoryTypeValue = useWatch({
    control: form.control,
    name: "category_mapping.ozon_category_type_value",
  }) as string | undefined

  const {
    fields: attrFields,
    append: appendAttr,
    remove: removeAttr,
    replace: replaceAttr,
  } = useFieldArray({
    control: form.control,
    name: "category_mapping.mappings",
  })

  const watchedRules = useWatch({
    control: form.control,
    name: "category_mapping.mappings",
    defaultValue: [],
  }) as MappingRowValue[]

  const productCategoriesCombobox = useComboboxData({
    queryKey: ["product_categories"],
    queryFn: (params) =>
      sdk.admin.productCategory.list({ ...params, fields: "id, name" }),
    defaultValue: undefined,
    getOptions: (data) =>
      data.product_categories.map((r) => ({ label: r.name, value: r.id })),
    enabled: true,
  })

  const rootOzonCategoriesCombobox = useComboboxData<any, any>({
    queryKey: ["ozon_root_categories", integration.id],
    enabled: true,
    queryFn: async () => {
      return sdk.client.fetch(`/admin/ozon/${integration.id}/categories`)
    },
    defaultValue: undefined,
    getOptions: (data) => {
      const rootNodes = (data?.result ?? []).filter(
        (node: any) => !node.disabled
      )
      return rootNodes.map((n: any) => ({
        label: String(n.category_name),
        value: String(n.description_category_id),
      }))
    },
  })

  const ozonCategoriesCombobox = useComboboxData<any, any>({
    queryKey: ["ozon_categories", integration.id, rootOzonCategoryId],
    enabled: Boolean(rootOzonCategoryId),
    queryFn: async () => {
      return sdk.client.fetch(`/admin/ozon/${integration.id}/categories`)
    },
    defaultValue: undefined,
    getOptions: (data) => {
      const nodes = data?.result
      const rootId = Number(rootOzonCategoryId)

      const rootNode = findCategoryNodeById(nodes, rootId)
      if (!rootNode) return []

      ozonTreeByValueRef.current.clear()

      const opts = buildOzonCategoryTypeSelectOptionsDeep([rootNode], ozonTreeByValueRef.current)

      return opts.map((o) => ({
        label: o.label,
        value: String(o.value),
      }))
    },
  })

  const ozonIds = useMemo(() => {
    const [description_category_id, type_id] = (selectedOzonCategoryTypeValue || "").split(":")
    return {description_category_id: description_category_id || "", type_id: type_id || ""}
  }, [selectedOzonCategoryTypeValue])

  const medusaCategoryNameById = useMemo(() => {
    return new Map<string, string>(
      productCategoriesCombobox.options.map((o: ComboboxOption) => [
        String(o.value),
        o.label,
      ])
    )
  }, [productCategoriesCombobox.options])

  const isOzonDisabled = productCategoriesCombobox.disabled || selectedMedusaCategoryIds.length === 0
  const selectedMedusaValues = (watchedRules ?? []).map((r) => r?.medusa_attribute).filter(Boolean)
  const selectedOzonValues = (watchedRules ?? []).map((r) => r?.ozon_attribute_id).filter(Boolean)

  const [ozonAttributes, setOzonAttributes] = useState<any[]>([])
  const [forceRebuildMappings, setForceRebuildMappings] = useState(false)

  const clearMappingsAndAttributes = () => {
    setOzonAttributes([])
    replaceAttr([])
  }

  useEffect(() => {
    if (!selectedMedusaCategoryIds.length) {
      resetField("category_mapping.root_ozon_category_id")
      resetField("category_mapping.ozon_category_type_value")
      clearMappingsAndAttributes()
      setForceRebuildMappings(false)
    }
  }, [selectedMedusaCategoryIds, resetField, replaceAttr])

  useEffect(() => {
    const hasExistingMappings = (watchedRules ?? []).length > 0

    if (!selectedOzonCategoryTypeValue) {
      clearMappingsAndAttributes()
      setForceRebuildMappings(false)
      return
    }

    const { description_category_id, type_id } = ozonIds

    if (!description_category_id || !type_id) {
      clearMappingsAndAttributes()
      setForceRebuildMappings(false)
      return
    }

    const load = async () => {
      const params = new URLSearchParams({ description_category_id, type_id })
      const res = await sdk.client.fetch<any>(`/admin/ozon/${integration.id}/attributes?${params.toString()}`)
      const result = (res?.result ?? []) as any[]
      setOzonAttributes(result)

      if (hasExistingMappings && !forceRebuildMappings) {
        return
      }

      const requiredMappings: MappingRowValue[] = result
        .filter((a) => a?.is_required)
        .map((a) => ({
          medusa_attribute: "",
          ozon_attribute_id: String(a.id),
          default_value: [],
          transform: "none",
          is_error: false,
        }))

      replaceAttr(requiredMappings)
      setForceRebuildMappings(false)
    }

    void load()
  }, [
    selectedOzonCategoryTypeValue,
    ozonIds.description_category_id,
    ozonIds.type_id,
    integration.id,
    replaceAttr,
    forceRebuildMappings,
  ])

  return (
    <div>
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h1">Create Category Mapping</Heading>
      </div>
      <div className="px-6 py-4">
        <CategorySelectors
          form={form}
          productCategoriesCombobox={productCategoriesCombobox}
          rootOzonCategoriesCombobox={rootOzonCategoriesCombobox}
          ozonCategoriesCombobox={ozonCategoriesCombobox}
          isOzonDisabled={isOzonDisabled}
          selectedMedusaCategoryIds={selectedMedusaCategoryIds}
          selectedOzonRootCategoryValue={rootOzonCategoryId}
          onRootOzonCategoryChange={() => {
            resetField("category_mapping.ozon_category_type_value")
            clearMappingsAndAttributes()
            setForceRebuildMappings(false)
          }}
          onOzonCategoryTypeChange={() => {
            clearMappingsAndAttributes()
            setForceRebuildMappings(true)
          }}
        />
      </div>
      <div className="px-6 py-4">
        <AttributesMapping
          form={form}
          attrFields={attrFields}
          appendAttr={appendAttr}
          removeAttr={removeAttr}
          canAdd={Boolean(selectedMedusaCategoryIds.length && selectedOzonCategoryTypeValue)}
          selectedMedusaCategoryIds={selectedMedusaCategoryIds}
          ozonIds={ozonIds}
          medusaCategoryNameById={medusaCategoryNameById}
          selectedMedusaValues={selectedMedusaValues}
          selectedOzonValues={selectedOzonValues}
          integration={integration}
          ozonAttributes={ozonAttributes}
          watchedRules={watchedRules}
        />
      </div>
    </div>
  )
}
