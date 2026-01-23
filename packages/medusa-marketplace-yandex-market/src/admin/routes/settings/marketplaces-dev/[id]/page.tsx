import { Container, Heading, Text, StatusBadge, Button } from "@medusajs/ui"
import {
  LoaderFunctionArgs,
  UIMatch,
  useLoaderData,
} from "react-router-dom"
import { useState, useEffect } from "react"
import { useMutation } from "@tanstack/react-query"
import { sdk } from "../../../../lib/sdk"
import { useLocation } from "react-router-dom"
import { MarketplaceActionMenu } from "../../../../components/routes/marketplaces/marketplace-list/marketplace-action-menu"
import { MarketplaceEditDrawer } from "../../../../components/routes/marketplaces/marketplace-list/marketplace-edit-drawer"
import type { AdminMarketplaceResponse } from "@gorgo/medusa-marketplace/api/types"

const Breadcrumb = (
  props: UIMatch<AdminMarketplaceResponse>
) => {
  const { marketplace } = props.data || {}
  if (!marketplace)
    return null

  return <span>{marketplace.title}</span>
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params

  const response = await sdk.client.fetch(`/admin/marketplaces/${id}`)

  return response
}

export const handle = {
  breadcrumb: (match: UIMatch<AdminMarketplaceResponse>) => <Breadcrumb {...match} />,
}

const MarketplaceDetail = () => {

  const [editOpen, setEditOpen] = useState(false)
  const location = useLocation()
  const { marketplace } = useLoaderData() as AdminMarketplaceResponse

  if (!marketplace) {
    return <Container className="p-6">Not found</Container>
  }

  useEffect(() => {

    if ((location.state as any)?.openEdit) {
      setEditOpen(true)
    }
  }, [location.state])

  const syncProducts = useMutation({
    mutationFn: async () => {
      return sdk.client.fetch(`/admin/marketplaces/${marketplace.id}/products/sync`, {
        method: "POST",
        body: {
          ids: [],
        },
      })
    },
  })


  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <Text size="small" className="text-ui-fg-subtle">
            Marketplace title
          </Text>
          <Heading level="h1">{marketplace.title}</Heading>
        </div>

        <div className="mt-2 flex flex-col gap-y-1">
          <Text size="small" className="text-ui-fg-subtle">
            Provider ID
          </Text>
          <Heading level="h1">{marketplace.provider_id}</Heading>
        </div>

        <div className="flex items-center gap-x-2">
          <StatusBadge color={marketplace.is_active ? "green" : "red"}>
            {marketplace.is_active ? "Active" : "Inactive"}
          </StatusBadge>

          <Button
            size="small"
            variant="secondary"
            disabled={syncProducts.isPending}
            onClick={(event) => {
              event.stopPropagation()
              syncProducts.mutate()
            }}
          >
            Sync products
          </Button>

          <MarketplaceActionMenu
            marketplace={marketplace}
            onEdit={() => setEditOpen(true)}
            redirectOnDelete
          />
          <MarketplaceEditDrawer
            response={{ marketplace }}
            open={editOpen}
            setOpen={setEditOpen}
          />
        </div>
      </div>
    </Container>
  )
}

export default MarketplaceDetail
