import { SelectOption, OzonCategoryNode, OzonTypeNode, OzonNode, AggregatedMedusaOption, ComboboxGroupOption, ComboboxOption } from "../types"

export const isOzonCategory = (node: OzonNode): node is OzonCategoryNode => "description_category_id" in node
export const isOzonType = (node: OzonNode): node is OzonTypeNode => "type_id" in node
export const getEnabledOzonNodes = (nodes: OzonNode[] = []) => nodes.filter((node) => !node.disabled)

export const buildOzonCategoryTypeSelectOptionsDeep = (
  nodes: OzonNode[] = [],
  parentPathSegments: string[] = []
): SelectOption[] => {
  return getEnabledOzonNodes(nodes).flatMap((node) => {
    if (!isOzonCategory(node)) return []

    const nextPathSegments = [...parentPathSegments, node.category_name].filter(Boolean)

    const enabledChildren = getEnabledOzonNodes(node.children ?? [])
    const hasChildCategories = enabledChildren.some(isOzonCategory)

    if (hasChildCategories) {
      return buildOzonCategoryTypeSelectOptionsDeep(enabledChildren, nextPathSegments)
    }

    const typeOptions = buildOzonTypeSelectOptionsFromCategory(node)

    return typeOptions.map((t) => ({
      value: `${node.description_category_id}:${t.value}`,
      label: `${nextPathSegments.join(" / ")} / ${t.label}`,
    }))
  })
}

export const buildOzonTypeSelectOptionsFromCategory = (categoryNode: OzonCategoryNode | null): SelectOption[] => {
  if (!categoryNode) return []
  const typeOptions: SelectOption[] = []
  const walk = (nodes: OzonNode[]) => {
    for (const node of getEnabledOzonNodes(nodes)) {
      if (isOzonType(node)) typeOptions.push({ value: String(node.type_id), label: node.type_name })
      if (isOzonCategory(node)) walk(node.children ?? [])
    }
  }
  walk(categoryNode.children ?? [])
  return typeOptions
}

export const aggregateMedusaProductOptionsByTitle = (products: any[] = []): AggregatedMedusaOption[] => {
  const valuesByTitle = new Map<string, Set<string>>()

  for (const product of products) {
    const titleByOptionId = new Map<string, string>(
      (product?.options ?? []).map((opt: any) => [String(opt.id), String(opt.title)])
    )

    for (const variant of product?.variants ?? []) {
      for (const optionValue of variant?.options ?? []) {
        const optionTitle = titleByOptionId.get(String(optionValue.option_id)) ?? String(optionValue.option_id)
        const value = String(optionValue.value)

        if (!valuesByTitle.has(optionTitle)) valuesByTitle.set(optionTitle, new Set())
        valuesByTitle.get(optionTitle)!.add(value)
      }
    }
  }

  return Array.from(valuesByTitle.entries())
    .map(([title, set]) => ({ title, values: Array.from(set).sort() }))
    .sort((a, b) => a.title.localeCompare(b.title))
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