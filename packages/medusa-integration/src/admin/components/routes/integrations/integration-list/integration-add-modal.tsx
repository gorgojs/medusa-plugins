import {
  Button,
  FocusModal,
  Label,
  Switch,
  Text,
  Select,
  Input,
  Heading,
  toast
} from "@medusajs/ui"
import { Controller, useForm } from "react-hook-form"
import { z } from "@medusajs/framework/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { sdk } from "../../../../lib/sdk"
import type { AdminIntegrationProviderList, AdminIntegrationResponse } from "../../../../../types"
import type { HttpTypes } from "@medusajs/framework/types"

const IntegrationAddSchema = z.object({
  provider_id: z.string().min(1, "Provider is required"),
  sales_channel_id: z.string().min(1, "Provider is required"),
  title: z.string().trim().min(1, "Title is required").max(20, "Max 20 chars"),
  is_enabled: z.boolean().default(true),
})

type IntegrationAddValues = z.infer<typeof IntegrationAddSchema>

export const IntegrationAddModal = ({
  stateModal,
  closeModal,
}: {
  stateModal: boolean
  closeModal: () => void
}) => {
  const queryClient = useQueryClient()

  const form = useForm<IntegrationAddValues>({
    defaultValues: { provider_id: "", sales_channel_id: "", title: "", is_enabled: true },
    resolver: zodResolver(IntegrationAddSchema),
    mode: "onSubmit",
  })

  const resetForm = () => form.reset({ provider_id: "", sales_channel_id: "", title: "", is_enabled: true })

  const { data: providersData, isLoading: isProvidersLoading } =
    useQuery<AdminIntegrationProviderList>({
      queryKey: ["integration-providers"],
      queryFn: () => sdk.client.fetch("/admin/integrations/providers"),
      enabled: stateModal,
      staleTime: 5 * 60 * 1000,
    })

  const providers = providersData?.providers ?? []

  const { data: salesChannelsData, isLoading: isSalesChannelsLoading } =
    useQuery<HttpTypes.AdminSalesChannelListResponse>({
      queryKey: ["admin-sales-channels"],
      queryFn: () => sdk.admin.salesChannel.list({ limit: 50 }),
      enabled: stateModal,
      staleTime: 5 * 60 * 1000,
    })

  const salesChannels = salesChannelsData?.sales_channels ?? []

  const createIntegration = useMutation<
    AdminIntegrationResponse,
    Error,
    IntegrationAddValues
  >({
    mutationFn: async (values) => {
      return sdk.client.fetch<AdminIntegrationResponse>("/admin/integrations", {
        method: "POST",
        body: {
          title: values.title.trim(),
          provider_id: values.provider_id.trim(),
          sales_channel_id: values.sales_channel_id,
          is_enabled: values.is_enabled,
          credentials: {},
          settings: {},
        },
      })
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["integrations"] })
      toast.success("Integration connection added", {
        description: `${variables.title} was successfully added`
      })
      resetForm()
      closeModal()
    },
  })

  const onSubmit = form.handleSubmit((values) => {
    createIntegration.mutate(values)
  })

  return (
    <FocusModal
      open={stateModal}
      onOpenChange={(open) => {
        if (!open) {
          resetForm()
          closeModal()
        }
      }}
    >
      <FocusModal.Content>
        <form className="flex h-full flex-col overflow-hidden" onSubmit={onSubmit}>
          <FocusModal.Header />

          <FocusModal.Body className="flex size-full flex-col overflow-auto">
            <div className="mx-auto flex w-full max-w-lg flex-col gap-y-6 px-2 py-8">
              <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-1">
                  <Heading>Add integration connection</Heading>
                  <Text size="small" className="text-ui-fg-subtle">
                    Create a new integration connection to sell your products on.
                  </Text>
                </div>

                <div className="flex flex-col gap-y-2">
                  <Label htmlFor="title" size="small">
                    Title
                  </Label>

                  <Input
                    id="title"
                    autoComplete="off"
                    placeholder="Ozon"
                    {...form.register("title")}
                  />

                  {form.formState.errors.title?.message && (
                    <Text size="small" className="text-ui-fg-error">
                      {form.formState.errors.title.message}
                    </Text>
                  )}
                </div>

                <div className="flex gap-x-4">
                  <div className="flex w-1/2 flex-col gap-y-2">
                    <Label htmlFor="provider_id" size="small">
                      Provider
                    </Label>

                    <Controller
                      control={form.control}
                      name="provider_id"
                      render={({ field }) => (
                        <Select
                          value={field.value || undefined}
                          onValueChange={(v) => field.onChange(v)}
                          disabled={isProvidersLoading || providers.length === 0}
                        >
                          <Select.Trigger>
                            <Select.Value />
                          </Select.Trigger>

                          <Select.Content>
                            {providers.map((provider: string) => (
                              <Select.Item key={provider} value={provider}>
                                {provider}
                              </Select.Item>
                            ))}
                          </Select.Content>
                        </Select>
                      )}
                    />

                    {form.formState.errors.provider_id?.message && (
                      <Text size="small" className="text-ui-fg-error">
                        {form.formState.errors.provider_id.message}
                      </Text>
                    )}
                  </div>

                  <div className="flex w-1/2 flex-col gap-y-2">
                    <Label htmlFor="sales_channel_id" size="small">
                      Sales Channel
                    </Label>

                    <Controller
                      control={form.control}
                      name="sales_channel_id"
                      render={({ field }) => (
                        <Select
                          value={field.value || undefined}
                          onValueChange={(v) => field.onChange(v)}
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
                  </div>
                </div>

                { }
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-y-1">
                    <Text size="small" weight="plus">
                      Enabled
                    </Text>

                    <Text size="small" className="text-ui-fg-subtle">
                      Specify whether the integration is enabled.
                    </Text>
                  </div>
                  <Controller
                    control={form.control}
                    name="is_enabled"
                    render={({ field }) => (
                      <Switch
                        checked={field.value}
                        onCheckedChange={(v) => field.onChange(Boolean(v))}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
          </FocusModal.Body>

          <FocusModal.Footer>
            <div className="flex items-center gap-x-2">
              <Button
                size="small"
                variant="secondary"
                type="button"
                onClick={() => {
                  resetForm()
                  closeModal()
                }}
              >
                Cancel
              </Button>

              <Button
                size="small"
                type="submit"
                disabled={createIntegration.isPending}
              >
                Add
              </Button>
            </div>
          </FocusModal.Footer>
        </form>
      </FocusModal.Content>
    </FocusModal>
  )
}
