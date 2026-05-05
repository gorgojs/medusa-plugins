import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast, usePrompt } from "@medusajs/ui"
import { PencilSquare, Trash } from "@medusajs/icons"
import { sdk } from "../../../../lib/sdk"
import { useNavigate } from "react-router-dom"
import { ActionMenu } from "../../../common/action-menu"
import type { IntegrationDTO } from "../../../../../types"

type Props = {
  integration: IntegrationDTO
  onEdit?: () => void
  redirectOnDelete?: boolean
}

export const IntegrationActionMenu = ({
  integration,
  onEdit,
  redirectOnDelete,
}: Props) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const prompt = usePrompt()

  const deleteIntegration = useMutation({
    mutationFn: async (id: string) => {
      return sdk.client.fetch(`/admin/integrations/${id}`, {
        method: "DELETE",
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["integrations"] })
      toast.success("Integration connection deleted", {
        description: `${integration.title} was successfully deleted`,
      })
      if (redirectOnDelete) {
        navigate("..")
      }
    },
  })

  return (
    <>
      <ActionMenu
        groups={[
          {
            actions: [
              {
                icon: <PencilSquare />,
                label: "Edit",
                onClick: () => {
                  if (onEdit) {
                    onEdit()
                    return
                  }
                },
              },
              {
                icon: <Trash />,
                label: "Delete",
                onClick: async () => {
                  const confirmed = await prompt({
                    title: "Are you sure?",
                    description: `You are about to delete the integration connection ${integration.title}. This action cannot be undone.`,
                  })

                  if (confirmed) {
                    deleteIntegration.mutate(integration.id)
                  }
                },
                disabled: deleteIntegration.isPending,
              },
            ],
          },
        ]}
      />
    </>
  )
}
