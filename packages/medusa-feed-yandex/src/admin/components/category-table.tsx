import {
  Container,
  DataTable,
  createDataTableColumnHelper,
  useDataTable,
  Text,
  DataTableRowSelectionState,
} from "@medusajs/ui"
import { useQuery } from "@tanstack/react-query"
import { useState, useMemo, useEffect } from "react"
import { sdk } from "../lib/sdk"
import { Header } from "./header"
import { I18n } from "./utilities/i18n"
import { useTranslation } from "react-i18next"

type Category = {
  id: string
  name: string
  description: string
  rank: number | null
  parent_category_id: string | null
}

type CategoryWithChildren = Category & { children: CategoryWithChildren[] }

function buildCategoryTree(categories: Category[]): CategoryWithChildren[] {
  const map = new Map<string, CategoryWithChildren>()
  const roots: CategoryWithChildren[] = []

  categories.forEach((cat) => {
    map.set(cat.id, { ...cat, children: [] })
  })

  categories.forEach((cat) => {
    const node = map.get(cat.id)!
    if (cat.parent_category_id && map.has(cat.parent_category_id)) {
      map.get(cat.parent_category_id)!.children.push(node)
    } else {
      roots.push(node)
    }
  })

  return roots
}

function flattenCategoryTree(tree: CategoryWithChildren[], level = 0): Category[] {
  const result: Category[] = []

  for (const node of tree) {
    result.push({
      ...node,
      name: `${"  ".repeat(level)}${node.name}`,
    })

    if (node.children.length) {
      result.push(...flattenCategoryTree(node.children, level + 1))
    }
  }

  return result
}

const columnHelper = createDataTableColumnHelper<Category>()

const columns = [
  columnHelper.select(),
  columnHelper.accessor("name", {
    header: "Name",
    cell: ({ getValue }) => <Text className="whitespace-pre">{getValue()}</Text>,
  }),
  columnHelper.accessor("description", {
    header: "Description",
    cell: ({ getValue }) => getValue() || "-",
  }),
]

type Props = {
  onSave: (selectedCategories: {
    id: string
    parentId?: string
    value: string
  }[]) => void
  defaultSelectedIds?: string[]
}

const CategoryTable = ({ onSave, defaultSelectedIds = [] }: Props) => {
  const { t } = useTranslation()
  const [rowSelection, setRowSelection] = useState<DataTableRowSelectionState>({})

  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { product_categories } = await sdk.admin.productCategory.list({
        is_active: true,
        fields: "id,name,description,rank,parent_category_id",
      })
      const tree = buildCategoryTree(product_categories)
      return flattenCategoryTree(tree)
    },
  })

  useEffect(() => {
    if (data && defaultSelectedIds.length > 0) {
      setRowSelection(
        Object.fromEntries(defaultSelectedIds.map((id) => [id, true]))
      )
    }
  }, [data, defaultSelectedIds])

  const isModified = useMemo(() => {
    return JSON.stringify(rowSelection) !== JSON.stringify(Object.fromEntries(defaultSelectedIds.map((id) => [id, true])))
  }, [rowSelection, defaultSelectedIds])

  const table = useDataTable({
    columns,
    data: data || [],
    getRowId: (row) => row.id,
    isLoading,
    rowSelection: {
      state: rowSelection,
      onRowSelectionChange: setRowSelection,
    },
  })

  const selectedCategories = useMemo(() => {
    if (!data) return []
    return data
      .filter((cat) => rowSelection[cat.id])
      .map((cat) => ({
        id: cat.id,
        parentId: cat.parent_category_id || undefined,
        value: cat.name.trim(),
      }))
  }, [rowSelection, data])

  return (
    <>
      <I18n />
      <Container className="divide-y p-0">
        <DataTable instance={table}>
          <Header
            title={t("settings.categories.title")}
            subtitle={t("settings.categories.subtitle")}
            actions={[
              {
                type: "button",
                props: {
                  children: t("actions.save"),
                  variant: "secondary",
                  onClick: () => {
                    onSave(selectedCategories)
                  },
                  disabled: !isModified,
                },
              },
            ]}
          />
          <DataTable.Table />
        </DataTable>
      </Container>
    </>
  )
}

export default CategoryTable
