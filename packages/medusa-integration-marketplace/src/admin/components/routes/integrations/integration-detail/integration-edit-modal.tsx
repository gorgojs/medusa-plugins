import { z } from "@medusajs/framework/zod"
import {
  Button,
  Drawer,
  Input,
  Label,
  Switch,
  Text,
  Select,
} from "@medusajs/ui"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import type { HttpTypes } from "@medusajs/framework/types"
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query"
import { useRevalidator } from "react-router-dom"
import { IntegrationHttpTypes } from "../../../../../types"
import { sdk } from "../../../../lib/sdk"

type IntegrationEditModalProps = {
  integration: IntegrationHttpTypes.AdminIntegration
  open: boolean
  setOpen: (open: boolean) => void
}

const IntegrationEditSchema = z.object({
  title: z.string().trim().min(1, "Min 1 chars").max(20, "Max 20 chars"),
  is_enabled: z.boolean(),
  sales_channel_id: z.string().optional(),
})

type IntegrationEditValues = z.infer<typeof IntegrationEditSchema>

export const IntegrationEditModal = ({
  integration,
  open,
  setOpen,
}: IntegrationEditModalProps) => {
  const queryClient = useQueryClient()
  const { revalidate } = useRevalidator()

  const { data: salesChannelsData, isLoading: isSalesChannelsLoading } =
    useQuery<HttpTypes.AdminSalesChannelListResponse>({
      queryKey: ["admin-sales-channels"],
      queryFn: () => sdk.admin.salesChannel.list({ limit: 50 }),
      enabled: open,
      staleTime: 5 * 60 * 1000,
    })

  const salesChannels = salesChannelsData?.sales_channels ?? []

  const form = useForm<IntegrationEditValues>({
    defaultValues: {
      title: String(integration.title),
      is_enabled: Boolean(integration.is_enabled),
      sales_channel_id: integration.sales_channel?.id ?? "",
    },
    resolver: zodResolver(IntegrationEditSchema),
    mode: "onSubmit",
  })

  const resetForm = () =>
    form.reset({
      title: String(integration.title),
      is_enabled: Boolean(integration.is_enabled),
      sales_channel_id: integration.sales_channel?.id ?? "",
    })

  useEffect(() => {
    resetForm()
  }, [open, integration.id, integration.title, integration.is_enabled])

  const updateIntegration = useMutation({
    mutationFn: async (values: IntegrationEditValues) => {
      return sdk.client.fetch(`/admin/integrations/${integration.id}`, {
        method: "POST",
        body: {
          title: values.title.trim(),
          provider_id: integration.provider_id,
          is_enabled: values.is_enabled,
          credentials: integration.credentials ?? {},
          settings: integration.settings ?? {},
          sales_channel_id: values.sales_channel_id || null,
        },
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["integrations"] })
      revalidate()
      resetForm()
      setOpen(false)
    },
  })

  const onSubmit = form.handleSubmit((values) => updateIntegration.mutate(values))

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
            <Drawer.Title>Edit Integration</Drawer.Title>
          </Drawer.Header>

          <Drawer.Body>
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-col gap-y-2">
                <Label size="small">Provider ID</Label>
                <Text size="small" className="text-ui-fg-subtle">
                  {integration.provider_id}
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

              <div className="flex flex-col gap-y-2">
                <Label htmlFor="sales_channel_id" size="small">
                  Sales Channel
                </Label>

                <Controller
                  control={form.control}
                  name="sales_channel_id"
                  render={({ field }) => (
                    <Select
                      value={field.value || undefined}
                      onValueChange={(v: string) => field.onChange(v)}
                      disabled={isSalesChannelsLoading || salesChannels.length === 0}
                    >
                      <Select.Trigger>
                        <Select.Value placeholder="Select sales channel" />
                      </Select.Trigger>

                      <Select.Content>
                        {salesChannels.map((sc) => (
                          <Select.Item key={sc.id} value={sc.id}>
                            {sc.name}
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select>
                  )}
                />

                {form.formState.errors.sales_channel_id?.message && (
                  <Text size="small" className="text-ui-fg-error">
                    {form.formState.errors.sales_channel_id.message}
                  </Text>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <Text size="small" className="text-ui-fg-subtle">
                    Enabled
                  </Text>
                  <Text size="small">
                    Specify whether the integration is enabled.
                  </Text>
                </div>

                <Controller
                  control={form.control}
                  name="is_enabled"
                  render={({ field }) => (
                    <Switch
                      checked={field.value}
                      onCheckedChange={(v: boolean) => field.onChange(Boolean(v))}
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

            <Button size="small" type="submit" disabled={updateIntegration.isPending}>
              Save
            </Button>
          </Drawer.Footer>
        </form>
      </Drawer.Content>
    </Drawer>
  )
}
