import { useToggleState, Container } from "@medusajs/ui"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { useRevalidator } from "react-router-dom"
import { IntegrationHttpTypes } from "@gorgo/medusa-integration/types"
import { CategoryMappingRulesTable } from "./components/category-mapping-rules-table"
import { CategoryMappingRuleAddModal } from "./components/category-mapping-rule-add-modal"
import { sdk } from "../../../lib/sdk"

type IntegrationDetailMappingSectionProps = {
  integration: IntegrationHttpTypes.AdminIntegration
}

export const IntegrationDetailMappingSection = ({
  integration,
}: IntegrationDetailMappingSectionProps) => {
  const [stateModal, openModal, closeModal] = useToggleState()
  const [editingId, setEditingId] = useState<string | null>(null)
  const { revalidate } = useRevalidator()

  const deleteMapping = useMutation({
    mutationFn: async (ruleId: string) => {
      const settings = (integration.settings || {}) as any
      const mapping = { ...(settings.mapping || {}) }

      await sdk.client.fetch(`/admin/integrations/${integration.id}`, {
        method: "POST",
        body: {
          settings: { mapping: "" },
        },
      })

      delete mapping[ruleId]

      const res = await sdk.client.fetch(`/admin/integrations/${integration.id}`,
        {
          method: "POST",
          body: {
            settings: { mapping: mapping },
          },
        }
      )

      return res
    },
    onSuccess: () => {
      revalidate()
    }
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
    deleteMapping.mutate(id)
  }

  return (
    <Container className="p-0">
      <CategoryMappingRulesTable
        stateModal={stateModal}
        openModal={handleAdd}
        onEdit={onEdit}
        onDelete={onDelete}
        integration={integration}
      />
      <CategoryMappingRuleAddModal
        stateModal={stateModal}
        closeModal={() => {
          setEditingId(null)
          closeModal()
        }}
        integration={integration}
        editingId={editingId}
      />
    </Container>
  )
}
