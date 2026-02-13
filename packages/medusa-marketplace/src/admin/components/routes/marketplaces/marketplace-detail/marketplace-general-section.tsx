import { Heading, Badge, StatusBadge } from "@medusajs/ui"
import { useLoaderData } from "react-router-dom"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { MarketplaceActionMenu } from "../marketplace-list/marketplace-action-menu"
import { MarketplaceEditModal } from "./marketplace-edit-modal"
import type { AdminMarketplaceResponse } from "../../../../../types"
import { MarketplaceCredentialsSection } from "./marketplace-credentials-section"
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

      <MarketplaceCredentialsSection />
      <JsonViewSection data={marketplace} />

      <MarketplaceEditModal
        response={{ marketplace }}
        open={editOpen}
        setOpen={setEditOpen}
      />
    </>
  )
}
