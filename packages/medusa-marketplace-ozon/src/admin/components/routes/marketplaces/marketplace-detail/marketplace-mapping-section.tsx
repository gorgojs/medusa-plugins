import { useToggleState, Container } from "@medusajs/ui"
import { CategoryMappingRulesTable } from "./components/mapping-list-table"
import { CategoryMappingRuleAddModal } from "./components/mapping-add-modal"
import { MarketplaceMappingSectionProps } from "../../../../types"

export const MarketplaceMappingSection = ({ marketplace }: MarketplaceMappingSectionProps) => {
  const [stateModal, openModal, closeModal] = useToggleState()

  const onEdit = () => {
    openModal()
  }

  const onDelete = () => {}

  return (
    <Container className="p-0">
      <CategoryMappingRulesTable
        stateModal={stateModal}
        openModal={openModal}
        onEdit={onEdit}
        onDelete={onDelete}
        marketplace={marketplace}
      />
      <CategoryMappingRuleAddModal
        stateModal={stateModal}
        closeModal={closeModal}
        marketplaceId={marketplace.id} 
      />
    </Container>
  )
}
