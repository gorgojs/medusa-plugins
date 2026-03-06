import { useToggleState, Container } from "@medusajs/ui"
import { MarketplaceHttpTypes } from "@gorgo/medusa-marketplace/types"
import { CategoryMappingRulesTable } from "./components/category-mapping-rules-table"
import { CategoryMappingRuleAddModal } from "./components/category-mapping-rule-add-modal"

export type MarketplaceDetailMappingSectionProps = {
  marketplace: MarketplaceHttpTypes.AdminMarketplace
}

export const MarketplaceDetailMappingSection = ({
  marketplace
}: MarketplaceDetailMappingSectionProps) => {
  const [stateModal, openModal, closeModal] = useToggleState()

  const onEdit = () => {
    openModal()
  }

  const onDelete = () => { }

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
        marketplace={marketplace}
      />
    </Container>
  )
}
