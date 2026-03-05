import { Badge } from "@medusajs/ui"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { MarketplaceHttpTypes } from "@gorgo/medusa-marketplace/types"
import { Pencil } from "@medusajs/icons"
import { Container } from "../../common/container"
import { Header } from "../../common/header"
import { SectionRow } from "../../common/section-row"
import { MarketplaceDetailCredentialsEditModal } from "./marketplace-detail-credentials-edit-modal"

type MarketplaceDetailCredentialsSectionProps = {
  marketplace: MarketplaceHttpTypes.AdminMarketplace
}

export const MarketplaceDetailCredentialsSection = ({
  marketplace,
}: MarketplaceDetailCredentialsSectionProps) => {
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
                {marketplace.credentials.api_key as React.ReactNode}
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
                {marketplace.credentials.business_id as React.ReactNode}
              </Badge>
            ) : (
              "-"
            )
          }
        />
      </Container>

      <MarketplaceDetailCredentialsEditModal
        marketplace={ marketplace }
        open={editOpen}
        setOpen={setEditOpen}
      />
    </>
  )
}
