import { Badge } from "@medusajs/ui"
import {
  useLoaderData
} from "react-router-dom"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import type { AdminMarketplaceResponse } from "@gorgo/medusa-marketplace/types"
import { Pencil } from "@medusajs/icons"
import { Container } from "../../../common/container"
import { Header } from "../../../common/header"
import { SectionRow } from "../../../common/section-row"
import { MarketplaceCredentialsEditModal } from "./marketplace-credentials-edit-modal"

export const MarketplaceCredentialsSection = () => {

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

      <MarketplaceCredentialsEditModal
        response={{ marketplace }}
        open={editOpen}
        setOpen={setEditOpen}
      />
    </>
  )
}
