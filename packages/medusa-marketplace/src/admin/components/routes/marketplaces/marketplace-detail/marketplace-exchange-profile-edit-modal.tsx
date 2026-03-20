import { Drawer, Label, Text, Select, Button } from "@medusajs/ui"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "@medusajs/framework/zod"
import { useEffect } from "react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { HttpTypes } from "@medusajs/framework/types"
import { MarketplaceHttpTypes } from "../../../../../types"
import { sdk } from "../../../../lib/sdk"
import { useOrderTypes, useWarehouses } from "../../../../hooks/api/exchange-profiles"

type MarketplaceExchangeProfileEditModalProps = {
  exchangeProfile: MarketplaceHttpTypes.AdminMarketplaceExchangeProfile
  open: boolean
  setOpen: (open: boolean) => void
}

const ExchangeProfileEditSchema = z.object({
  stock_location_id: z.string().optional(),
  warehouse_id: z.string().optional(),
  order_type: z.string().optional(),
})

type ExchangeProfileEditValues = z.infer<typeof ExchangeProfileEditSchema>

export const MarketplaceExchangeProfileEditModal = ({
  exchangeProfile,
  open,
  setOpen
}: MarketplaceExchangeProfileEditModalProps) => {
  const queryClient = useQueryClient()

  const { data: stockLocationData, isLoading: isStockLocationsLoading } = useQuery<HttpTypes.AdminStockLocationListResponse>({
    queryKey: ["admin-stock-locations"],
    queryFn: () => sdk.admin.stockLocation.list({ limit: 50}),
    enabled: open,
    staleTime: 5 * 60 * 1000,
  })
  const stockLocations = stockLocationData?.stock_locations ?? []

  const { warehouses: warehousesData, isLoading: isWarehousesLoading } = useWarehouses(
    exchangeProfile.marketplace_id, { limit: 50 }, { enabled: open, staleTime: 5 * 60 * 1000 }
  )
  const warehouses = warehousesData ?? []

  const { orderTypes: orderTypesData, isLoading: isOrderTypesLoading } = useOrderTypes(
    exchangeProfile.marketplace_id, {}, { enabled: open, staleTime: 5 * 60 * 1000 }
  )
  const orderTypes = orderTypesData ?? []

  const form = useForm<ExchangeProfileEditValues>({
    defaultValues: {
      stock_location_id: exchangeProfile.stock_location?.id,
      warehouse_id: exchangeProfile.warehouse_id,
      order_type: exchangeProfile.order_type,
    },
    resolver: zodResolver(ExchangeProfileEditSchema),
    mode: "onSubmit",
  })

  const resetForm = () =>
    form.reset({
      stock_location_id: exchangeProfile.stock_location?.id,
      warehouse_id: exchangeProfile.warehouse_id,
      order_type: exchangeProfile.order_type,
    })

  useEffect(() => {
    if (open) {
      resetForm()
    }
  }, [open])

  const updateExchangeProfile = useMutation({
    mutationFn: async (values: ExchangeProfileEditValues) => {
      return sdk.client.fetch(
        `/admin/marketplaces/${exchangeProfile.marketplace_id}/exchange-profiles/${exchangeProfile.id}`,
        {
          method: "POST",
          body: {
            stock_location_id: values.stock_location_id,
            warehouse_id: values.warehouse_id,
            order_type: values.order_type,
          },
        }
      )
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-marketplace-exchange-profiles"],
      })
      resetForm()
      setOpen(false)
    },
  })

  const onSubmit = form.handleSubmit((values) => {
    console.log("Submitted values:", values)
    updateExchangeProfile.mutate(values)
  })

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <Drawer.Content>
        <form onSubmit={onSubmit}>
          <Drawer.Header>
            <Drawer.Title>Exchange settings</Drawer.Title>
          </Drawer.Header>

          <Drawer.Body>
            <div className="flex flex-col gap-y-6">

              {/* Stock location selector */}
              <div className="flex flex-col gap-y-2">
                <Label size="small">Stock Location</Label>
                <Controller
                  control={form.control}
                  name="stock_location_id"
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={(v: string) => field.onChange(v)}
                      disabled={isStockLocationsLoading}
                    >
                      <Select.Trigger>
                        <Select.Value placeholder="Select stock location" />
                      </Select.Trigger>

                      <Select.Content>
                        {stockLocations.map((loc) => (
                          <Select.Item key={loc.id} value={loc.id}>
                            {loc.name}
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select>
                  )}
                />

                {form.formState.errors.stock_location_id?.message && (
                  <Text size="small" className="text-ui-fg-error">
                    {form.formState.errors.stock_location_id.message}
                  </Text>
                )}
              </div>

               {/* Warehouse selector */}
              <div className="flex flex-col gap-y-2">
                <Label size="small">Marketplace Warehouse</Label>
                <Controller
                  control={form.control}
                  name="warehouse_id"
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={(v: string) => field.onChange(v)}
                      disabled={isWarehousesLoading}
                    >
                      <Select.Trigger>
                        <Select.Value placeholder="Select warehouse" />
                      </Select.Trigger>

                      <Select.Content>
                        {warehouses.map((wh) => (
                          <Select.Item key={wh.id} value={wh.id}>
                            {wh.name}
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select>
                  )}
                />

                {form.formState.errors.warehouse_id?.message && (
                  <Text size="small" className="text-ui-fg-error">
                    {form.formState.errors.warehouse_id.message}
                  </Text>
                )}
              </div>

              {/* Order Type Selector */}
              <div className="flex flex-col gap-y-2">
                <Label htmlFor="order_type" size="small">
                  Order Type
                </Label>

                <Controller
                  control={form.control}
                  name="order_type"
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={(v: string) => field.onChange(v)}
                      disabled={isOrderTypesLoading}
                    >
                      <Select.Trigger>
                        <Select.Value placeholder="Select order type" />
                      </Select.Trigger>

                      <Select.Content>
                        {orderTypes.map((type) => (
                          <Select.Item key={type} value={type}>
                            {type}
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select>
                  )}
                />

                {form.formState.errors.order_type?.message && (
                  <Text size="small" className="text-ui-fg-error">
                    {form.formState.errors.order_type.message}
                  </Text>
                )}
              </div>
            </div>
          </Drawer.Body>

          <Drawer.Footer className="flex justify-end gap-x-2">
            <Button
              type="button"
              variant="secondary"
              size="small"
              onClick={() => {
                resetForm()
                setOpen(false)
              }}
            >
              Cancel
            </Button>

            <Button size="small" type="submit">
              Save
            </Button>
          </Drawer.Footer>
        </form>
      </Drawer.Content>
    </Drawer>
  )
}

export default MarketplaceExchangeProfileEditModal
