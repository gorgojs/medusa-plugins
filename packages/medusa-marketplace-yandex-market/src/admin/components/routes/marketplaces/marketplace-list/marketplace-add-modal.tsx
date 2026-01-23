import { Button, FocusModal, Label, Switch, Text, Select, Input } from "@medusajs/ui"
import { Controller, useForm } from "react-hook-form"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { sdk } from "../../../../lib/sdk"
import type { AdminMarketplaceProviderList, AdminMarketplaceResponse } from "@gorgo/medusa-marketplace/modules/marketplace/types"


const MarketplaceAddSchema = zod.object({
  provider_id: zod.string().min(1, "Provider is required"),
  title: zod.string().trim().min(1, "Title is required").max(20, "Max 20 chars"),
  is_active: zod.boolean().default(true),
})

type MarketplaceAddValues = zod.infer<typeof MarketplaceAddSchema>


export const MarketplaceAddModal = ({
  stateModal,
  closeModal,
}: {
  stateModal: boolean
  closeModal: () => void
}) => {
  const queryClient = useQueryClient()

  const form = useForm<MarketplaceAddValues>({
    defaultValues: { provider_id: "", title: "", is_active: true },
    resolver: zodResolver(MarketplaceAddSchema),
    mode: "onSubmit",
  })

  const resetForm = () => form.reset({ provider_id: "", title: "", is_active: true })

  const { data: providersData, isLoading: isProvidersLoading } =
    useQuery<AdminMarketplaceProviderList>({
      queryKey: ["marketplace-providers"],
      queryFn: () => sdk.client.fetch("/admin/marketplaces/providers"),
      enabled: stateModal,
      staleTime: 5 * 60 * 1000,
    })

  const providers = providersData?.providers ?? []

  const createMarketplace = useMutation<
    AdminMarketplaceResponse,
    Error,
    MarketplaceAddValues
  >({
    mutationFn: async (values) => {
      return sdk.client.fetch<AdminMarketplaceResponse>("/admin/marketplaces", {
        method: "POST",
        body: {
          title: values.title.trim(),
          provider_id: values.provider_id.trim(),
          is_active: values.is_active,
          credentials: {},
          settings: {},
        },
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["marketplaces"] })
      resetForm()
      closeModal()
    },
  })

  const onSubmit = form.handleSubmit((values) => {
    createMarketplace.mutate(values)
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
                <Text>Add marketplace connection</Text>

                <div className="flex flex-col gap-y-2">
                  <Label htmlFor="title" size="small">
                    Title
                  </Label>

                  <Input
                    id="title"
                    autoComplete="off"
                    placeholder="Wildberries (Test)"
                    {...form.register("title")}
                  />

                  {form.formState.errors.title?.message && (
                    <Text size="small" className="text-ui-fg-error">
                      {form.formState.errors.title.message}
                    </Text>
                  )}
                </div>


                { }
                <div className="flex flex-col gap-y-2">
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
                          <Select.Value
                            placeholder={
                              isProvidersLoading
                                ? "Loading providers..."
                                : providers.length
                                  ? "Select provider..."
                                  : "No providers available"
                            }
                          />
                        </Select.Trigger>

                        <Select.Content>
                          {providers.map((providers: string) => (
                            <Select.Item key={providers} value={providers}>
                              {providers}
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

                { }
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
                disabled={createMarketplace.isPending}
              >
                {createMarketplace.isPending ? "Adding..." : "Add"}
              </Button>
            </div>
          </FocusModal.Footer>
        </form>
      </FocusModal.Content>
    </FocusModal>
  )
}
