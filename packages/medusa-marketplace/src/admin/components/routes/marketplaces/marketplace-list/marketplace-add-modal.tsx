import { Button, FocusModal, Input, Label, Switch, Text } from "@medusajs/ui"
import { Controller, useForm } from "react-hook-form"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { sdk } from "../../../../lib/sdk"

const MarketplaceAddSchema = zod.object({
  provider_id: zod.string().min(1, "Provider ID is required"),
  is_enabled: zod.boolean().default(true),
})

type MarketplaceAddValues = zod.infer<typeof MarketplaceAddSchema>

export const MarketplaceAddModal = ({
  stateModal,
  closeModal,
}: {
  stateModal: boolean
  closeModal: () => void
}) => {
  const form = useForm<MarketplaceAddValues>({
    defaultValues: { provider_id: "", is_enabled: true },
    resolver: zodResolver(MarketplaceAddSchema),
    mode: "onSubmit",
  })

  const onSubmit = form.handleSubmit(async (values) => {
    await sdk.client.fetch("/admin/marketplaces", {
      method: "POST",
      body: {
        provider_id: values.provider_id.trim(),
        is_enabled: values.is_enabled,
        credentials: {},
        settings: {},
      },
    })

    // await onCreated()
    form.reset({ provider_id: "", is_enabled: true })
    closeModal()
  })

  return (
    <FocusModal open={stateModal} onOpenChange={(open) => !open && closeModal()}>
      <FocusModal.Content>
        <form className="flex h-full flex-col overflow-hidden" onSubmit={onSubmit}>
          <FocusModal.Header />

          <FocusModal.Body className="flex size-full flex-col overflow-auto">
            <div className="mx-auto flex w-full max-w-lg flex-col gap-y-6 px-2 py-8">
              <div className="flex flex-col gap-y-4">
                <Text>Add marketplace connection</Text>

                <div className="flex flex-col gap-y-2">
                  <Label htmlFor="provider_id" size="small">
                    Provider ID
                  </Label>
                  <Input
                    id="provider_id"
                    autoComplete="off"
                    placeholder="mp_wildberries_test"
                    {...form.register("provider_id")}
                  />
                  {form.formState.errors.provider_id?.message && (
                    <Text size="small" className="text-ui-fg-error">
                      {form.formState.errors.provider_id.message}
                    </Text>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <Text size="small" className="text-ui-fg-subtle">
                      Active
                    </Text>
                    <Text size="small">
                      {form.watch("is_enabled") ? "Enabled" : "Disabled"}
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
                  form.reset({ provider_id: "", is_enabled: true })
                  closeModal()
                }}
              >
                Cancel
              </Button>

              <Button size="small" type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Adding..." : "Add"}
              </Button>
            </div>
          </FocusModal.Footer>
        </form>
      </FocusModal.Content>
    </FocusModal>
  )
}
