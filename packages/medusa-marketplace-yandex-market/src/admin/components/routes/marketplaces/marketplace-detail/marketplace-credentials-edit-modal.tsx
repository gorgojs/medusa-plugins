import { z } from "zod"
import {
  Button,
  Drawer,
  Input,
  Label,
  Text,
} from "@medusajs/ui"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRevalidator } from "react-router-dom"
import { sdk } from "../../../../lib/sdk"
import type { AdminMarketplaceResponse } from "@gorgo/medusa-marketplace/types"

const MarketplaceEditSchema = z.object({
  api_key: z.string().trim().min(1, "Min 1 chars"),
  business_id: z.string().trim().min(1, "Min 1 chars"),
})

type MarketplaceEditValues = z.infer<typeof MarketplaceEditSchema>

export const MarketplaceCredentialsEditModal = ({
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
      api_key: String(marketplace.credentials?.api_key ?? ""),
      business_id: String(marketplace.credentials?.business_id ?? "")
    },
    resolver: zodResolver(MarketplaceEditSchema),
    mode: "onSubmit",
  })

  const resetForm = () =>
    form.reset({
      api_key: String(marketplace.credentials?.api_key ?? ""),
      business_id: String(marketplace.credentials?.business_id ?? "")
    })

  useEffect(() => {
    resetForm()
  }, [open, marketplace.id, marketplace.title, marketplace.is_enabled])

  const updateMarketplace = useMutation({
    mutationFn: async (values: MarketplaceEditValues) => {
      return sdk.client.fetch(`/admin/marketplaces/${marketplace.id}`, {
        method: "POST",
        body: {
          title: marketplace.title,
          provider_id: marketplace.provider_id,
          is_enabled: marketplace.is_enabled,
          settings: marketplace.settings ?? {},
          credentials: {
            ...(marketplace.credentials ?? {}),
            api_key: values.api_key.trim(),
            business_id: values.business_id.trim(),
          },
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
      onOpenChange={(next: boolean) => {
        setOpen(next)
      }}
    >
      <Drawer.Content>
        <form onSubmit={onSubmit}>
          <Drawer.Header>
            <Drawer.Title>Edit Credentials</Drawer.Title>
          </Drawer.Header>

          <Drawer.Body className="flex max-w-full flex-1 flex-col gap-y-6 overflow-y-auto">
            <div className="flex flex-col gap-y-2">
              <Label htmlFor="api_key" size="small">
                API Key
              </Label>
              <Input id="api_key" autoComplete="off" {...form.register("api_key")} />
              {form.formState.errors.api_key?.message && (
                <Text size="small" className="text-ui-fg-error">
                  {form.formState.errors.api_key.message}
                </Text>
              )}
            </div>

            <div className="flex flex-col gap-y-2">
              <Label htmlFor="business_id" size="small">
                Business ID
              </Label>
              <Input
                id="business_id"
                autoComplete="off"
                {...form.register("business_id")}
              />
              {form.formState.errors.business_id?.message && (
                <Text size="small" className="text-ui-fg-error">
                  {form.formState.errors.business_id.message}
                </Text>
              )}
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
