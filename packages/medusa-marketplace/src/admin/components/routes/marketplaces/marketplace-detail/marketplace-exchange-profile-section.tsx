import { Badge, Text } from "@medusajs/ui"
import { useQuery } from "@tanstack/react-query"
import { sdk } from "../../../../lib/sdk"
import { Container } from "../../../common/container"
import { SectionRow } from "../../../common/section-row"
import { MarketplaceHttpTypes } from "../../../../../types"
import { Header } from "../../../common/header"
import { Pencil } from "@medusajs/icons"
import { useState } from "react"
import MarketplaceExchangeProfileEditModal from "./marketplace-exchange-profile-edit-modal"

type MarketplaceExchangeProfileSectionProps = {
  marketplace: MarketplaceHttpTypes.AdminMarketplace
}

export const MarketplaceExchangeProfileSection = ({
  marketplace
}: MarketplaceExchangeProfileSectionProps) => {
  const [editOpen, setEditOpen] = useState(false)

  const limit = 1

  const { data, isLoading, error } = useQuery<MarketplaceHttpTypes.AdminMarketplaceExchangeProfileListResponse>({
    queryKey: ["admin-marketplace-exchange-profiles", { limit, marketplace_id: marketplace.id }],
    queryFn: () =>
      sdk.client.fetch(`/admin/marketplaces/${marketplace.id}/exchange-profiles`, {
        query: {
          limit,
          offset: 0,
          order: "-created_at"
        },
      }),
  })

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const exchange_profile = data?.exchange_profiles[0]

  if (!exchange_profile) return (
    <Container>
      <Header
        title="Exchange settings"
        actions={[
          {
            type: "action-menu",
            props: {
              groups: [
                {
                  actions: [
                    {
                      icon: <Pencil />,
                      label: "Create exchange profile",
                      onClick: () => {
                        setEditOpen(true)
                      },
                    },
                  ],
                },
              ],
            },
          }
        ]}
      />
      <Text size="small" className="text-ui-fg-subtle px-6 py-3">
        No exchange profile found for this marketplace.
      </Text>

      <MarketplaceExchangeProfileEditModal
        exchangeProfile={{
          id: "",
          marketplace_id: marketplace.id,
          warehouse_id: "",
          order_type: "FBS",
        }}
        open={editOpen}
        setOpen={setEditOpen} 
      />
    </Container>
  )

  return (
    <>
      <Container>
        <Header
          title="Exchange settings"
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
            }
          ]}
        />

        <SectionRow
          title="Stock location"
          value={exchange_profile?.stock_location?.id ? (
            <Badge size="xsmall" color="grey">
              {exchange_profile.stock_location.name}
            </Badge>
          ) : (
            "-"
          )}
        />
        <SectionRow
          title="Marketplace warehouse"
          value={exchange_profile?.warehouse_id ? (
            <Badge size="xsmall" color="grey">
              {exchange_profile.warehouse_id}
            </Badge>
          ) : (
            "-"
          )}
        />
        <SectionRow
          title="Order type"
          value={exchange_profile?.order_type ? (
            <Badge size="xsmall" color="grey">
              {exchange_profile.order_type}
            </Badge>
          ) : (
            "-"
          )}
        />
      </Container>
      
      <MarketplaceExchangeProfileEditModal
        exchangeProfile={exchange_profile}
        open={editOpen}
        setOpen={setEditOpen} 
      />
    </>
  )
}
