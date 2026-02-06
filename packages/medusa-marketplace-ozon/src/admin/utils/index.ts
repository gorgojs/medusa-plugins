
const isOzonCategory = (node: OzonNode): node is OzonCategoryNode => "description_category_id" in node
const isOzonType = (node: OzonNode): node is OzonTypeNode => "type_id" in node
const getEnabledOzonNodes = (nodes: OzonNode[] = []) => nodes.filter((node) => !node.disabled)

const buildOzonCategorySelectOptionsDeep = (nodes: OzonNode[] = [], parentPathSegments: string[] = []): SelectOption[] => {
  return getEnabledOzonNodes(nodes).flatMap((node) => {
    if (!isOzonCategory(node)) return []

    const nextPathSegments = [...parentPathSegments, node.category_name].filter(Boolean)

    const enabledChildren = getEnabledOzonNodes(node.children ?? [])
    const hasChildCategories = enabledChildren.some(isOzonCategory)

    const childrenOptions = buildOzonCategorySelectOptionsDeep(enabledChildren, nextPathSegments)

    if (hasChildCategories) return childrenOptions

    const currentOption: SelectOption = {
      value: String(node.description_category_id),
      label: nextPathSegments.join(" / "),
    }

    return [currentOption, ...childrenOptions]
  })
}

const findEnabledOzonCategoryByDescriptionId = (nodes: OzonNode[], descriptionCategoryId: number): OzonCategoryNode | null => {
  for (const node of nodes) {
    if (!isOzonCategory(node) || node.disabled) continue
    if (node.description_category_id === descriptionCategoryId) return node

    const found = findEnabledOzonCategoryByDescriptionId(
      getEnabledOzonNodes(node.children ?? []),
      descriptionCategoryId
    )
    if (found) return found
  }
  return null
}

const buildOzonTypeSelectOptionsFromCategory = (categoryNode: OzonCategoryNode | null): SelectOption[] => {
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

const buildMedusaCategorySelectOptions = (medusaCategoriesResponse: any): SelectOption[] => {
  const categories: Array<{ id: string; name: string }> = medusaCategoriesResponse?.product_categories ?? []
  return categories.map((category) => ({ value: String(category.id), label: category.name }))
}

const aggregateMedusaProductOptionsByTitle = (products: any[] = []): AggregatedMedusaOption[] => {
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
