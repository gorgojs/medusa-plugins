import { useMutation, useQueryClient } from "@tanstack/react-query"
import { PencilSquare, Trash } from "@medusajs/icons"
import { sdk } from "../../../../lib/sdk"
import { useNavigate } from "react-router-dom"
import { ActionMenu } from "../../../common/action-menu"
import type { AdminMarketplaceResponse } from "@gorgo/medusa-marketplace/types"


type Props = {
  marketplace: AdminMarketplaceResponse
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

  const deleteMarketplace = useMutation({
    mutationFn: async (id: string) => {
      return sdk.client.fetch(`/admin/marketplaces/${id}`, {
        method: "DELETE",
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["marketplaces"] })

      if (redirectOnDelete) {
        navigate("..")
      }
    },
  })

  return (
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
              onClick: () => {
                deleteMarketplace.mutate(marketplace.id)
              },
              disabled: deleteMarketplace.isPending,
            },
          ],
        },
      ]}
    />
  )
}
