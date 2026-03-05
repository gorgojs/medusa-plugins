import { Heading, Badge, StatusBadge } from "@medusajs/ui"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
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
