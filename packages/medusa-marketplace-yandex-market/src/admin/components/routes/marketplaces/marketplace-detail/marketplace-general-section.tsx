import { Heading, Badge, StatusBadge, Button } from "@medusajs/ui"
import { useLoaderData } from "react-router-dom"
import { useState, useEffect } from "react"
import { useMutation } from "@tanstack/react-query"
import { sdk } from "../../../../lib/sdk"
import { useLocation } from "react-router-dom"
import { MarketplaceActionMenu } from "../marketplace-list/marketplace-action-menu"
import { MarketplaceEditModal } from "./marketplace-edit-modal"
import type { AdminMarketplaceResponse } from "@gorgo/medusa-marketplace/types"
import { Container } from "../../../common/container"
import { SectionRow } from "../../../common/section-row"
import { JsonViewSection } from "../../../common/json-view-section"

export const MarketplaceGeneralSection = () => {

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
    <>
      <Container>
        <div className="px-6 py-4 flex items-center justify-between gap-x-4">
          <Heading level="h1" className="truncate">
            {marketplace.title || "Untitled"}
          </Heading>

          <div className="flex items-center gap-x-3">
            <StatusBadge color={marketplace.is_enabled ? "green" : "red"}>
              {marketplace.is_enabled ? "Enabled" : "Disabled"}
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
            marketplace.provider_id ? (
              <Badge size="xsmall" color="grey">
                {marketplace.provider_id}
              </Badge>
            ) : (
              "-"
            )
          }
        />
        <SectionRow
          title="Sales channel"
          value={
            marketplace.sales_channel?.name ? (
              <Badge size="xsmall" color="grey">
                {marketplace.sales_channel.name}
              </Badge>
            ) : (
              "-"
            )
          }
        />
      </Container>

      <JsonViewSection data={marketplace} />

      <MarketplaceEditModal
        response={{ marketplace }}
        open={editOpen}
        setOpen={setEditOpen}
      />
    </>
  )
}
