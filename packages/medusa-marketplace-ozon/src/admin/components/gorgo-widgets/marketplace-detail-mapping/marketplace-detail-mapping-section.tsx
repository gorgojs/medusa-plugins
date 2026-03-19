import { useToggleState, Container } from "@medusajs/ui"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { useRevalidator } from "react-router-dom"
import { MarketplaceHttpTypes } from "@gorgo/medusa-marketplace/types"
import { CategoryMappingRulesTable } from "./components/category-mapping-rules-table"
import { CategoryMappingRuleAddModal } from "./components/category-mapping-rule-add-modal"
import { sdk } from "../../../lib/sdk"

type MarketplaceDetailMappingSectionProps = {
  marketplace: MarketplaceHttpTypes.AdminMarketplace
}

export const MarketplaceDetailMappingSection = ({
  marketplace,
}: MarketplaceDetailMappingSectionProps) => {
  const [stateModal, openModal, closeModal] = useToggleState()
  const [editingId, setEditingId] = useState<string | null>(null)
  const { revalidate } = useRevalidator()

  const deleteMapping = useMutation({
    mutationFn: async (ruleId: string) => {
      console.log("MUTATION start", ruleId)

      const settings = (marketplace.settings || {}) as any
      const mapping = { ...(settings.mapping || {}) }

      console.log("before keys", Object.keys(mapping))

      delete mapping[ruleId]

      console.log("after  keys", Object.keys(mapping))

      const payload = {
        ...settings,
        mapping,
      }

      const res = await sdk.client.fetch(`/admin/marketplaces/${marketplace.id}`, {
        method: "POST",
        body: { settings: payload },
      })

      console.log("MUTATION done", res)

      return res
    },
  })

  const handleAdd = () => {
    setEditingId(null)
    openModal()
  }

  const onEdit = (id: string) => {
    setEditingId(id)
    openModal()
  }

  const onDelete = (id: string) => {
    console.log("onDelete external", id)
    deleteMapping.mutate(id)
  }

  return (
    <Container className="p-0">
      <CategoryMappingRulesTable
        stateModal={stateModal}
        openModal={handleAdd}
        onEdit={onEdit}
        onDelete={onDelete}
        marketplace={marketplace}
      />
      <CategoryMappingRuleAddModal
        stateModal={stateModal}
        closeModal={() => {
          setEditingId(null)
          closeModal()
        }}
        marketplace={marketplace}
        editingId={editingId}
      />
    </Container>
  )
}
