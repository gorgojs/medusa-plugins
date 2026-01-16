import { Heading, Badge, StatusBadge, Button } from "@medusajs/ui"
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
import type { AdminMarketplaceResponse } from "@gorgo/medusa-marketplace/types"
import { Pencil } from "@medusajs/icons"
import { Container } from "../../../../components/common/container"
import { Header } from "../../../../components/common/header"
import { SectionRow } from "../../../../components/common/section-row"
import { TwoColumnLayout } from "../../../../components/layout"
import { JsonViewSection } from "../../../../components/common/json-view-section"
import { MarketplaceTimeline } from "../../../../components/routes/marketplaces/marketplace-list/marketplace-timeline"

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
    <TwoColumnLayout
      firstCol={
        <>
          <Container>
            <div className="px-6 py-4 flex items-center justify-between gap-x-4">
              <Heading level="h1" className="truncate">
                {marketplace.title || "Untitled"}
              </Heading>

              <div className="flex items-center gap-x-3">
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
              </div>
            </div>

            <SectionRow
              title="Provider ID"
              value={
                <Badge size="xsmall" color="grey">
                  {marketplace.provider_id || "-"}
                </Badge>
              }
            />

            <SectionRow
              title="Sales channel"
              value={
                <Badge size="xsmall" color="grey">
                  {marketplace.sales_channel_name || "Default channel"}
                </Badge>
              }
            />
          </Container>

          <Container>
            <Header
              title="Credentials"
              actions={[
                {
                  type: "action-menu",
                  props: {
                    groups: [
                      {
                        actions: [
                          {
                            icon: <Pencil />,
                            label: "Edit",
                            onClick: () => {
                              setEditOpen(true)
                            },
                          },
                        ],
                      },
                    ],
                  },
                },
              ]}
            />

            <SectionRow
              title="API key"
              value={
                marketplace.credentials.api_key ? (
                  <Badge size="xsmall" color="grey">
                    {marketplace.credentials.api_key}
                  </Badge>
                ) : (
                  "-"
                )
              }
            />
            <SectionRow
              title="Business ID"
              value={
                marketplace.credentials.business_id ? (
                  <Badge size="xsmall" color="grey">
                    {marketplace.credentials.business_id}
                  </Badge>
                ) : (
                  "-"
                )
              }
            />
          </Container>

          <Container>   <JsonViewSection data={marketplace} /></Container>

          <MarketplaceEditDrawer
            response={{ marketplace }}
            open={editOpen}
            setOpen={setEditOpen}
          />
        </>
      }
      secondCol={
        <>
          <Container>
            <Header title="Events" />
            <div className="px-6 py-4">
              <MarketplaceTimeline />
            </div>
          </Container>
        </>
      }
    />
  )
}

export default MarketplaceDetail
