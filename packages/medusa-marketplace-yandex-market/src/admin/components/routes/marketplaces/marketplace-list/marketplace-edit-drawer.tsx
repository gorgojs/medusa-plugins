import { z } from "zod"
import { Button, Drawer, Input, Label, Switch, Text } from "@medusajs/ui"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRevalidator } from "react-router-dom"
import { sdk } from "../../../../lib/sdk"
import type { AdminMarketplaceResponse } from "@gorgo/medusa-marketplace/modules/marketplace/types"

const MarketplaceEditSchema = z.object({
  title: z.string().trim().min(1, "Min 1 chars").max(20, "Max 20 chars"),
  is_active: z.boolean(),
})

type MarketplaceEditValues = z.infer<typeof MarketplaceEditSchema>


export const MarketplaceEditDrawer = ({
  response,
  open,
  setOpen,
}: {
  response: AdminMarketplaceResponse
  open: boolean
  setOpen: (open: boolean) => void
}) => {
  const marketplace = response.marketplace
  const queryClient = useQueryClient()
  const { revalidate } = useRevalidator()

  const form = useForm<MarketplaceEditValues>({
    defaultValues: {
      title: String(marketplace.title),
      is_active: Boolean(marketplace.is_active),
    },
    resolver: zodResolver(MarketplaceEditSchema),
    mode: "onSubmit",
  })

  const resetForm = () =>
    form.reset({
      title: String(marketplace.title),
      is_active: Boolean(marketplace.is_active),
    })

  useEffect(() => {
    resetForm()
  }, [marketplace.id])

  const updateMarketplace = useMutation({
    mutationFn: async (values: MarketplaceEditValues) => {
      console.log("EDIT ID:", marketplace.id, marketplace.marketplace?.id)
      return sdk.client.fetch(`/admin/marketplaces/${marketplace.id}`, {
        method: "POST",
        body: {
          title: values.title.trim(),
          provider_id: marketplace.provider_id, 
          is_active: values.is_active,
          credentials: marketplace.credentials ?? {},
          settings: marketplace.settings ?? {},
        },
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["marketplaces"] })
      revalidate()
      resetForm()
      setOpen(false)
    },
  })

  const onSubmit = form.handleSubmit((values) => updateMarketplace.mutate(values))

  return (
    <Drawer
      open={open}
      onOpenChange={(next) => {
        if (!next) resetForm()
        if (next) resetForm()
        setOpen(next)
      }}
    >
      <Drawer.Content>
        <form onSubmit={onSubmit}>
          <Drawer.Header>
            <Drawer.Title>Edit Marketplace</Drawer.Title>
          </Drawer.Header>

          <Drawer.Body>
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-col gap-y-2">
                <Label size="small">Provider ID</Label>
                <Text size="small" className="text-ui-fg-subtle">
                  {marketplace.provider_id}
                </Text>
              </div>

              <div className="flex flex-col gap-y-2">
                <Label htmlFor="title" size="small">
                  Title
                </Label>
                <Input id="title" autoComplete="off" {...form.register("title")} />
                {form.formState.errors.title?.message && (
                  <Text size="small" className="text-ui-fg-error">
                    {form.formState.errors.title.message}
                  </Text>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <Text size="small" className="text-ui-fg-subtle">
                    Active
                  </Text>
                  <Text size="small">
                    {form.watch("is_active") ? "Enabled" : "Disabled"}
                  </Text>
                </div>

                <Controller
                  control={form.control}
                  name="is_active"
                  render={({ field }) => (
                    <Switch
                      checked={field.value}
                      onCheckedChange={(v) => field.onChange(Boolean(v))}
                    />
                  )}
                />
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

            <Button size="small" type="submit" disabled={updateMarketplace.isPending}>
              Save
            </Button>
          </Drawer.Footer>
        </form>
      </Drawer.Content>
    </Drawer>
  )
}
