import {
  SelectOption,
  OzonCategoryNode,
  OzonTypeNode,
  OzonNode,
  ComboboxGroupOption,
  ComboboxOption,
  MappingFormValues,
  OutputMappingRow,
  OutputAttributesRule,
  TransformConfig,
  AttrsSummary
} from "../types"

export const isOzonCategory = (node: OzonNode): node is OzonCategoryNode => "description_category_id" in node
export const isOzonType = (node: OzonNode): node is OzonTypeNode => "type_id" in node
export const getEnabledOzonNodes = (nodes: OzonNode[] = []) => nodes.filter((node) => !node.disabled)

export const buildOzonCategoryTypeSelectOptionsDeep = (
  nodes: OzonNode[] = [],
  treeByValue?: Map<string, OzonCategoryNode>,
  parentPathSegments: string[] = [],
  parentPathNodes: OzonCategoryNode[] = []
): SelectOption[] => {
  const cloneCategoryNode = (node: OzonCategoryNode): OzonCategoryNode => ({
    description_category_id: node.description_category_id,
    category_name: node.category_name,
    disabled: node.disabled,
    children: [],
  })

  const cloneTypeNode = (node: OzonTypeNode): OzonTypeNode => ({
    type_id: node.type_id,
    type_name: node.type_name,
    disabled: node.disabled,
    children: [],
  })

  const buildCategoryTypeChain = (categoryPath: OzonCategoryNode[], typeNode: OzonTypeNode): OzonCategoryNode => {
    const root = cloneCategoryNode(categoryPath[0])
    let current = root

    for (let i = 1; i < categoryPath.length; i++) {
      const next = cloneCategoryNode(categoryPath[i])
      current.children = [next]
      current = next
    }

    current.children = [cloneTypeNode(typeNode)]
    return root
  }

  const collectTypeNodes = (category: OzonCategoryNode): OzonTypeNode[] => {
    const result: OzonTypeNode[] = []

    const walk = (list: OzonNode[]) => {
      for (const node of getEnabledOzonNodes(list)) {
        if (isOzonType(node)) result.push(node)
        else walk(node.children ?? [])
      }
    }

    walk(category.children ?? [])
    return result
  }

  return getEnabledOzonNodes(nodes).flatMap((node) => {
    if (!isOzonCategory(node)) return []

    const nextPathSegments = [...parentPathSegments, node.category_name].filter(Boolean)
    const nextPathNodes = [...parentPathNodes, node]

    const enabledChildren = getEnabledOzonNodes(node.children ?? [])
    const hasChildCategories = enabledChildren.some(isOzonCategory)

    if (hasChildCategories) {
      return buildOzonCategoryTypeSelectOptionsDeep(enabledChildren, treeByValue, nextPathSegments, nextPathNodes)
    }

    const typeOptions = collectTypeNodes(node)

    return typeOptions.map((t) => {
      const value = `${node.description_category_id}:${t.type_id}`
      const label = `${nextPathSegments.join(" / ")} / ${t.type_name}`

      treeByValue?.set(value, buildCategoryTypeChain(nextPathNodes, t))

      return { value, label }
    })
  })
}

export const extractMedusaAttributeTitles = (products: any[] = []) => {
  const options = new Set<string>()

  for (const product of products ?? []) {
    for (const opt of product?.options ?? []) {
      if (opt?.title) {
        options.add(String(opt.title).trim())
      }
    }

    for (const variant of product?.variants ?? []) {
      for (const option of variant?.options ?? []) {
        if (option?.option?.title) {
          options.add(String(option.option.title).trim())
        }
      }
    }
  }

  return {
    options: Array.from(options),
  }
}

export const ozonOptionsToGroups = (options: ComboboxOption[]): ComboboxGroupOption[] => {
  const order: string[] = []
  const map = new Map<string, ComboboxOption[]>()

  for (const opt of options) {
    const parts = opt.label.split(" / ").filter(Boolean)
    if (!parts.length) continue

    const group = parts[0]
    const itemLabel = parts.slice(1).join(" / ") || parts[0]

    if (!map.has(group)) {
      map.set(group, [])
      order.push(group)
    }

    map.get(group)!.push({ ...opt, label: itemLabel })
  }

  return order.map((label) => ({ label, options: map.get(label)! }))
}

export const findCategoryNodeById = (list: OzonNode[], id: number): OzonCategoryNode | null => {
  for (const node of getEnabledOzonNodes(list)) {
    if (isOzonCategory(node) && node.description_category_id === id) {
      return node
    }

    const child = findCategoryNodeById(node.children ?? [], id)
    if (child) return child
  }

  return null
}

export const buildOzonMappingPayload = (
  formValues: MappingFormValues,
  treeByValue: Map<string, OzonCategoryNode>,
  attrsSummaryByValue: Map<string, AttrsSummary>,
  medusaOptions?: Set<string>
) => {
  const categoryMapping = formValues.category_mapping
  const makeMappingId = () => `mpmap_${crypto.randomUUID().slice(0, 10)}`
  const mapping: Record<string, OutputMappingRow> = {}

  if (!categoryMapping) {
    return { mapping }
  }

  const mappingId = (categoryMapping as any)?.mapping_id || makeMappingId()

  const selectedMedusaCategories = categoryMapping.medusa_category_ids ?? []
  const selectedOzonValue = categoryMapping.ozon_category_type_value ?? null

  const selectedOzonTreeRaw = selectedOzonValue ? (treeByValue?.get(selectedOzonValue) ?? null) : null
  const selectedOzonTree = selectedOzonTreeRaw ? structuredClone(selectedOzonTreeRaw) : null

  const attributes = categoryMapping.mappings ?? []

  const categoryAttributeRules: OutputAttributesRule["optionRules"] = {}

  for (const row of attributes) {
    const ozonTarget = String(row.ozon_attribute_id ?? "").trim()
    const medusaSource = String(row.medusa_attribute ?? "").trim()
    const defaultValue = row.default_value
    const transformName = row.transform

    if (!ozonTarget || !medusaSource) continue

    const attributeId = Number(ozonTarget)

    const transform = transformName && transformName !== "none" ? ({ name: transformName } satisfies TransformConfig) : undefined

    const exists = medusaSource && medusaOptions?.has(medusaSource)

    const rule: OutputAttributesRule["optionRules"][string] = {
      attributeId,
      is_error: Boolean(medusaSource && !exists),
      medusa_attribute: medusaSource,
    }

    if (Array.isArray(defaultValue) && defaultValue.length > 0) {
      rule.default = defaultValue
    }
    if (transform) rule.transform = transform

    categoryAttributeRules[medusaSource] = rule
  }

  const fields: OutputMappingRow["fields"] = []

  if (Object.keys(categoryAttributeRules).length) {
    fields.push({
      from: "attributes",
      to: "attributes",
      optionRules: categoryAttributeRules,
    })
  }

  const mapped = Object.keys(categoryAttributeRules).length
  const mappedWithErrors = Object.values(categoryAttributeRules).filter((r) => r.is_error).length

  const attrsSummary = selectedOzonValue ? attrsSummaryByValue?.get(selectedOzonValue) : undefined

  if (selectedOzonTree) {
    (selectedOzonTree as any).attributes = {
      total: attrsSummary?.total ?? 0,
      required: attrsSummary?.required ?? 0,
      mapped,
      mappedWithErrors,
    }
  }

  mapping[mappingId] = {
    ozon_category: selectedOzonTree,
    medusa_categories: selectedMedusaCategories,
    fields,
  }

  return { mapping }
}