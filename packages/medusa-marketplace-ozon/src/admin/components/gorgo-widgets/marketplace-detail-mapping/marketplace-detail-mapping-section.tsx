import { useToggleState, Container } from "@medusajs/ui"
import { useState } from "react"
import { MarketplaceHttpTypes } from "@gorgo/medusa-marketplace/types"
import { CategoryMappingRulesTable } from "./components/category-mapping-rules-table"
import { CategoryMappingRuleAddModal } from "./components/category-mapping-rule-add-modal"

export type MarketplaceDetailMappingSectionProps = {
  marketplace: MarketplaceHttpTypes.AdminMarketplace
}

export const MarketplaceDetailMappingSection = ({
  marketplace,
}: MarketplaceDetailMappingSectionProps) => {
  const [stateModal, openModal, closeModal] = useToggleState()
  const [editingId, setEditingId] = useState<string | null>(null)

  const handleAdd = () => {
    setEditingId(null)
    openModal()
  }

  const onEdit = (id: string) => {
    setEditingId(id)
    openModal()
  }

  const onDelete = () => {}

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
