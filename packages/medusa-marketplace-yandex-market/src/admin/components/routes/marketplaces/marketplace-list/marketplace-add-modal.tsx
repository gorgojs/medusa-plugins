import {
  Button,
  FocusModal,
  Input,
  Label,
  Select,
  Text,
} from "@medusajs/ui"
import { marketplacesData } from "../../../../lib/marketplaces"
import { useForm, Controller } from "react-hook-form"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const PROVIDERS = [
  { value: "Wildberries", label: "Wildberies" },
  { value: "Ozon", label: "Ozon" },
  { value: "Yandex Market", label: "Yandex Market" },
] as const

const allowedProviders = new Set<string>(PROVIDERS.map((p) => p.value))

const MarketplaceAddSchema = zod.object({
  title: zod.string().min(1, "Title is required"),
  provider: zod
    .string()
    .min(1, "Select provider")
    .refine((v) => allowedProviders.has(v), "Invalid provider"),
})


type MarketplaceAddValues = zod.infer<typeof MarketplaceAddSchema>

export const MarketplaceAddModal = ({
  stateModal,
  closeModal,
  onCreated,
}: {
  stateModal: boolean
  closeModal: () => void
  onCreated: () => void
}) => {
  const form = useForm<MarketplaceAddValues>({
    defaultValues: { title: "", provider: "" },
    resolver: zodResolver(MarketplaceAddSchema),
    mode: "onSubmit",
  })

  const onSubmit = form.handleSubmit((data) => {
    marketplacesData.create({
      title: data.title.trim(),
      provider: data.provider,
    })

    form.reset({ title: "", provider: "" })
    closeModal()
    onCreated()
  })

  return (
    <FocusModal
      open={stateModal}
      onOpenChange={(open) => {
        if (!open) {
          form.reset({ title: "", provider: "" })
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
                <div className="flex w-full items-center justify-between">
                  <Text className="flex w-full items-center justify-between">
                    Add marketplace connection
                  </Text>
                </div>

                <div className="flex flex-col gap-y-2">
                  <Label htmlFor="title" size="small">Title</Label>
                  <Input
                    id="title"
                    placeholder="e.g. My marketplace"
                    autoComplete="off"
                    {...form.register("title")}
                  />
                  {form.formState.errors.title?.message && (
                    <Text size="small" className="text-ui-fg-error">
                      {form.formState.errors.title.message}
                    </Text>
                  )}
                </div>

                <div className="flex flex-col gap-y-2">
                  <Label size="small">Marketplace provider</Label>

                  <Controller
                    control={form.control}
                    name="provider"
                    render={({ field }) => (
                      <Select value={field.value} onValueChange={field.onChange}>
                        <Select.Trigger>
                          <Select.Value placeholder="Select provider" />
                        </Select.Trigger>

                        <Select.Content>
                          {PROVIDERS.map((p) => (
                            <Select.Item key={p.value} value={p.value}>
                              {p.label}
                            </Select.Item>
                          ))}
                        </Select.Content>
                      </Select>
                    )}
                  />
                  {form.formState.errors.provider?.message && (
                    <Text size="small" className="text-ui-fg-error">
                      {form.formState.errors.provider.message}
                    </Text>
                  )}
                </div>
              </div>
            </div>
          </FocusModal.Body>

          <FocusModal.Footer>
            <div className="flex items-center gap-x-2">
              <FocusModal.Close asChild>
                <Button size="small" variant="secondary" type="button">
                  Cancel
                </Button>
              </FocusModal.Close>
              
              <Button size="small" type="submit" isLoading={form.formState.isSubmitting}>
                Add
              </Button>
            </div>
          </FocusModal.Footer>
        </form>
      </FocusModal.Content>
    </FocusModal>
  )
}
