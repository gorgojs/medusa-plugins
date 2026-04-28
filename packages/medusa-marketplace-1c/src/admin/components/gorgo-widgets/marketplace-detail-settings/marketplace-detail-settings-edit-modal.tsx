import { z } from "@medusajs/framework/zod"
import {
  Button,
  Drawer,
  Input,
  Label,
  Text,
  Switch,
} from "@medusajs/ui"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRevalidator } from "react-router-dom"
import { MarketplaceHttpTypes } from "@gorgo/medusa-marketplace/types"
import { sdk } from "../../../lib/sdk"
import { OneCSettings } from "../../../types"

type MarketplaceDetailSettingsEditModalProps = {
  marketplace: MarketplaceHttpTypes.AdminMarketplace
  open: boolean
  setOpen: (open: boolean) => void
}

const SettingsEditSchema = z.object({
  useZip: z.boolean(),
  chunkSize: z.coerce.number().int().positive().optional(),
  attributes: z.object({
    height: z.string().optional(),
    width: z.string().optional(),
    length: z.string().optional(),
    weight: z.string().optional(),
    mid_code: z.string().optional(),
    hs_code: z.string().optional(),
    origin_country: z.string().optional(),
  }),
})

type SettingsEditValues = z.infer<typeof SettingsEditSchema>

export const MarketplaceDetailSettingsEditModal = ({
  marketplace,
  open,
  setOpen,
}: MarketplaceDetailSettingsEditModalProps) => {
  const queryClient = useQueryClient()
  const { revalidate } = useRevalidator()
  const settings = (marketplace.settings || {}) as OneCSettings

  const form = useForm<SettingsEditValues>({
    defaultValues: {
      useZip: settings.useZip ?? false,
      chunkSize: settings.chunkSize,
      attributes: {
        height: settings.attributes?.height ?? "",
        width: settings.attributes?.width ?? "",
        length: settings.attributes?.length ?? "",
        weight: settings.attributes?.weight ?? "",
        mid_code: settings.attributes?.mid_code ?? "",
        hs_code: settings.attributes?.hs_code ?? "",
        origin_country: settings.attributes?.origin_country ?? "",
      },
    },
    resolver: zodResolver(SettingsEditSchema),
    mode: "onSubmit",
  })

  const resetForm = () =>
    form.reset({
      useZip: settings.useZip ?? false,
      chunkSize: settings.chunkSize,
      attributes: {
        height: settings.attributes?.height ?? "",
        width: settings.attributes?.width ?? "",
        length: settings.attributes?.length ?? "",
        weight: settings.attributes?.weight ?? "",
        mid_code: settings.attributes?.mid_code ?? "",
        hs_code: settings.attributes?.hs_code ?? "",
        origin_country: settings.attributes?.origin_country ?? "",
      },
    })

  useEffect(() => {
    resetForm()
  }, [open, marketplace.id])

  const updateMarketplace = useMutation({
    mutationFn: async (values: SettingsEditValues) => {
      return sdk.client.fetch(`/admin/marketplaces/${marketplace.id}`, {
        method: "POST",
        body: {
          title: marketplace.title,
          provider_id: marketplace.provider_id,
          is_enabled: marketplace.is_enabled,
          credentials: marketplace.credentials ?? {},
          settings: {
            ...(marketplace.settings ?? {}),
            useZip: values.useZip,
            chunkSize: values.chunkSize,
            attributes: values.attributes,
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

  const attributeFields = [
    { name: "attributes.height" as const, label: "Height property ID" },
    { name: "attributes.width" as const, label: "Width property ID" },
    { name: "attributes.length" as const, label: "Length property ID" },
    { name: "attributes.weight" as const, label: "Weight property ID" },
    { name: "attributes.mid_code" as const, label: "MID Code property ID" },
    { name: "attributes.hs_code" as const, label: "HS Code property ID" },
    { name: "attributes.origin_country" as const, label: "Origin Country property ID" },
  ]

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
            <Drawer.Title>Edit 1C Sync Settings</Drawer.Title>
          </Drawer.Header>

          <Drawer.Body className="flex max-w-full flex-1 flex-col gap-y-6 overflow-y-auto">
            <div className="flex items-center justify-between">
              <Label htmlFor="useZip" size="small">
                Use ZIP compression
              </Label>
              <Controller
                control={form.control}
                name="useZip"
                render={({ field }) => (
                  <Switch
                    id="useZip"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <Label htmlFor="chunkSize" size="small">
                Chunk size (bytes)
              </Label>
              <Input
                id="chunkSize"
                type="number"
                autoComplete="off"
                placeholder="104857600"
                {...form.register("chunkSize")}
              />
              {form.formState.errors.chunkSize?.message && (
                <Text size="small" className="text-ui-fg-error">
                  {form.formState.errors.chunkSize.message}
                </Text>
              )}
            </div>

            <div className="border-t pt-4">
              <Text size="small" weight="plus" className="mb-4">
                Attribute ID Mappings
              </Text>
              <Text size="xsmall" className="text-ui-fg-subtle mb-4">
                Map 1C property UUIDs to Medusa product attributes.
              </Text>

              {attributeFields.map((field) => (
                <div key={field.name} className="flex flex-col gap-y-2 mb-4">
                  <Label htmlFor={field.name} size="small">
                    {field.label}
                  </Label>
                  <Input
                    id={field.name}
                    autoComplete="off"
                    placeholder="1C property UUID"
                    {...form.register(field.name)}
                  />
                </div>
              ))}
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
