import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import { IntegrationHttpTypes } from "../../../types"
import { sdk } from "../../lib/sdk"

export const useWarehouses = (
  integration_id: string,
  query?: Record<string, unknown>,
  options?: Omit<
    UseQueryOptions<IntegrationHttpTypes.AdminIntegrationWarehouseListResponse>,
    "queryKey" | "queryFn"
  >
) => {
  const { data, ...rest } = useQuery<IntegrationHttpTypes.AdminIntegrationWarehouseListResponse>({
    queryKey: ["admin-warehouses"],
    queryFn: () => sdk.client.fetch(`/admin/integrations/${integration_id}/warehouses`, { query }),
    ...options
  })

  return { ...data, ...rest }
}

export const useOrderTypes = (
  integration_id: string,
  query?: Record<string, unknown>,
  options?: Omit<
    UseQueryOptions<IntegrationHttpTypes.AdminIntegrationOrderTypeListResponse>,
    "queryKey" | "queryFn"
  >
) => {
  const { data, ...rest } = useQuery<IntegrationHttpTypes.AdminIntegrationOrderTypeListResponse>({
    queryKey: ["admin-order-types"],
    queryFn: () => sdk.client.fetch(`/admin/integrations/${integration_id}/order-types`, { query }),
    ...options
  })

  return { ...data, ...rest }
}
