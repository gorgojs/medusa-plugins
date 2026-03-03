import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Toaster, toast, usePrompt } from "@medusajs/ui"
import { PencilSquare, Trash } from "@medusajs/icons"
import { sdk } from "../../../../lib/sdk"
import { useNavigate } from "react-router-dom"
import { ActionMenu } from "../../../common/action-menu"
import type { MarketplaceDTO } from "../../../../../types"

type Props = {
  marketplace: MarketplaceDTO
  onEdit?: () => void
  redirectOnDelete?: boolean
}

export const MarketplaceActionMenu = ({
  marketplace,
  onEdit,
  redirectOnDelete,
}: Props) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const prompt = usePrompt()

  const deleteMarketplace = useMutation({
    mutationFn: async (id: string) => {
      return sdk.client.fetch(`/admin/marketplaces/${id}`, {
        method: "DELETE",
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["marketplaces"] })
      toast.success("Marketplace connection deleted", {
        description: `${marketplace.title} was successfully deleted`,
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
                    description: `You are about to delete the marketplace connection ${marketplace.title}. This action cannot be undone.`,
                  })

                  if (confirmed) {
                    deleteMarketplace.mutate(marketplace.id)
                  }
                },
                disabled: deleteMarketplace.isPending,
              },
            ],
          },
        ]}
      />
      <Toaster />
    </>
  )
}
