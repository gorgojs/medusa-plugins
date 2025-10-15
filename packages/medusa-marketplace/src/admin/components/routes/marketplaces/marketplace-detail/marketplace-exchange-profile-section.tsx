import { Badge, Text, Hint } from "@medusajs/ui"
import { useQuery } from "@tanstack/react-query"
import { sdk } from "../../../../lib/sdk"
import { Container } from "../../../common/container"
import { SectionRow } from "../../../common/section-row"
import { MarketplaceHttpTypes } from "../../../../../types"
import { Header } from "../../../common/header"
import { Pencil } from "@medusajs/icons"
import { useState } from "react"
import MarketplaceExchangeProfileEditModal from "./marketplace-exchange-profile-edit-modal"
import { useOrderTypes, useWarehouses } from "../../../../hooks/api/exchange-profiles"

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

  const { warehouses: warehousesData = [], isLoading: isWarehousesLoading } = useWarehouses(
    marketplace.id,
    { limit: 50 },
    { staleTime: 5 * 60 * 1000 }
  )

  const { orderTypes: orderTypesData = [], isLoading: isOrderTypesLoading } = useOrderTypes(
    marketplace.id,
    {},
    { staleTime: 5 * 60 * 1000 }
  )

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const exchange_profile = data?.exchange_profiles[0]

  const warehouseMismatch = Boolean(
    exchange_profile?.warehouse_id &&
      !isWarehousesLoading &&
      !warehousesData.some((w) => w.id === exchange_profile.warehouse_id)
  )

  const orderTypeMismatch = Boolean(
    exchange_profile?.order_type &&
      !isOrderTypesLoading &&
      !orderTypesData.includes(exchange_profile.order_type)
  )

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
            <div>
              <Badge size="xsmall" color="grey">
                {warehouseMismatch ? exchange_profile.warehouse_id: 
                  `${warehousesData.find((w) => w.id === exchange_profile.warehouse_id)?.name || ""} (ID: ${exchange_profile.warehouse_id})`}
              </Badge>
              {warehouseMismatch && (
                <Hint variant="error" className="p-1 pl-0">
                  The selected warehouses could not be found.
                </Hint>
              )}
            </div>
          ) : (
            "-"
          )}
        />
        <SectionRow
          title="Order type"
          value={exchange_profile?.order_type ? (
            <div>
              <Badge size="xsmall" color="grey">
                {exchange_profile.order_type}
              </Badge>
              {orderTypeMismatch && (
                <Hint variant="error" className="p-1 pl-0">
                  The selected order type could not be found.
                </Hint>
              )}
            </div>
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
