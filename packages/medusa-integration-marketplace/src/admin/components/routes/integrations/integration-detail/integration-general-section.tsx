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
import { IntegrationActionMenu } from "../integration-list/integration-action-menu"
import { IntegrationEditModal } from "./integration-edit-modal"
import { IntegrationHttpTypes } from "../../../../../types"
import { Container } from "../../../common/container"
import { SectionRow } from "../../../common/section-row"

type IntegrationGeneralSectionProps = {
  integration: IntegrationHttpTypes.AdminIntegration
}

export const IntegrationGeneralSection = ({
  integration
}: IntegrationGeneralSectionProps) => {

  const [editOpen, setEditOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {

    if ((location.state as any)?.openEdit) {
      setEditOpen(true)
    }
  }, [location.state])

  const syncProducts = useMutation({
    mutationFn: async () => {
      return sdk.client.fetch(`/admin/integrations/${integration.id}/products/sync`, {
        method: "POST",
        body: {
          ids: [],
        },
      })
    },
  })

  const syncOrders = useMutation({
    mutationFn: async () => {
      return sdk.client.fetch(`/admin/integrations/${integration.id}/orders/sync`, {
        method: "POST"
      })
    },
  })

  return (
    <>
      <Container>
        <div className="px-6 py-4 flex items-center justify-between gap-x-4">
          <Heading level="h1" className="truncate">
            {integration.title || "Untitled"}
          </Heading>

          <div className="flex items-center gap-x-3">
            <StatusBadge color={integration.is_enabled ? "green" : "red"}>
              {integration.is_enabled ? "Enabled" : "Disabled"}
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

            <IntegrationActionMenu
              integration={integration}
              onEdit={() => setEditOpen(true)}
              redirectOnDelete
            />
          </div>
        </div>
        <SectionRow
          title="Provider ID"
          value={
            integration.provider_id ? (
              <Badge size="xsmall" color="grey">
                {integration.provider_id}
              </Badge>
            ) : (
              "-"
            )
          }
        />
        <SectionRow
          title="Sales channel"
          value={
            integration.sales_channel?.name ? (
              <Badge size="xsmall" color="grey">
                {integration.sales_channel.name}
              </Badge>
            ) : (
              "-"
            )
          }
        />
      </Container>

      <IntegrationEditModal
        integration={integration}
        open={editOpen}
        setOpen={setEditOpen}
      />
    </>
  )
}
