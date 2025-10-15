import {
  Heading,
  Badge,
  StatusBadge,
  DropdownMenu,
  Button
} from "@medusajs/ui"
import {
  ArrowPath,
  Tag,
  ShoppingCart
} from "@medusajs/icons"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import { sdk } from "../../../../lib/sdk"
import { MarketplaceActionMenu } from "../marketplace-list/marketplace-action-menu"
import { MarketplaceEditModal } from "./marketplace-edit-modal"
import { MarketplaceHttpTypes } from "../../../../../types"
import { Container } from "../../../common/container"
import { SectionRow } from "../../../common/section-row"

type MarketplaceGeneralSectionProps = {
  marketplace: MarketplaceHttpTypes.AdminMarketplace
}

export const MarketplaceGeneralSection = ({
  marketplace
}: MarketplaceGeneralSectionProps) => {

  const [editOpen, setEditOpen] = useState(false)
  const location = useLocation()

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

  const syncOrders = useMutation({
    mutationFn: async () => {
      return sdk.client.fetch(`/admin/marketplaces/${marketplace.id}/orders/sync`, {
        method: "POST"
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

            <DropdownMenu>
              <DropdownMenu.Trigger asChild>
                <Button size="small" variant="secondary">
                  <ArrowPath className="mr-1 text-ui-fg-subtle" />
                  Synchronize
                </Button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Content>
                <DropdownMenu.Group>
                  <DropdownMenu.Item onClick={() => {
                    syncOrders.mutate()
                  }}>
                    <ShoppingCart className="mr-1 text-ui-fg-subtle" />
                    Orders
                  </DropdownMenu.Item>
                  <DropdownMenu.Item onClick={() => {
                    syncProducts.mutate()
                  }}>
                    <Tag className="mr-1 text-ui-fg-subtle" />
                    Products
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
              </DropdownMenu.Content>
            </DropdownMenu>

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

      <MarketplaceEditModal
        marketplace={marketplace}
        open={editOpen}
        setOpen={setEditOpen}
      />
    </>
  )
}
