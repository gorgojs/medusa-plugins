import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import { MarketplaceHttpTypes } from "../../../types"
import { sdk } from "../../lib/sdk"

export const useWarehouses = (
  marketplace_id: string,
  query?: Record<string, unknown>,
  options?: Omit<
    UseQueryOptions<MarketplaceHttpTypes.AdminMarketplaceWarehouseListResponse>,
    "queryKey" | "queryFn"
  >
) => {
  const { data, ...rest } = useQuery<MarketplaceHttpTypes.AdminMarketplaceWarehouseListResponse>({
    queryKey: ["admin-warehouses"],
    queryFn: () => sdk.client.fetch(`/admin/marketplaces/${marketplace_id}/warehouses`, { query }),
    ...options
  })

  return { ...data, ...rest }
}

export const useOrderTypes = (
  marketplace_id: string,
  query?: Record<string, unknown>,
  options?: Omit<
    UseQueryOptions<MarketplaceHttpTypes.AdminMarketplaceOrderTypeListResponse>,
    "queryKey" | "queryFn"
  >
) => {
  const { data, ...rest } = useQuery<MarketplaceHttpTypes.AdminMarketplaceOrderTypeListResponse>({
    queryKey: ["admin-order-types"],
    queryFn: () => sdk.client.fetch(`/admin/marketplaces/${marketplace_id}/order-types`, { query }),
    ...options
  })

  return { ...data, ...rest }
}
