import { z } from "@medusajs/framework/zod"
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
import { IntegrationHttpTypes } from "@gorgo/medusa-integration/types"
import { sdk } from "../../../lib/sdk"

type IntegrationDetailCredentialsEditModalProps = {
  integration: IntegrationHttpTypes.AdminIntegration
  open: boolean
  setOpen: (open: boolean) => void
}

const IntegrationDetailCredentialsEditSchema = z.object({
  api_key: z.string().trim(),
  business_id: z.string().trim(),
  campaign_id: z.string().trim(),
})

type IntegrationDetailCredentialsEditValues = z.infer<typeof IntegrationDetailCredentialsEditSchema>

export const IntegrationDetailCredentialsEditModal = ({
  integration,
  open,
  setOpen,
}: IntegrationDetailCredentialsEditModalProps) => {
  const queryClient = useQueryClient()
  const { revalidate } = useRevalidator()

  const form = useForm<IntegrationDetailCredentialsEditValues>({
    defaultValues: {
      api_key: String(integration.credentials?.api_key ?? ""),
      business_id: String(integration.credentials?.business_id ?? ""),
      campaign_id: String(integration.credentials?.campaign_id ?? "")
    },
    resolver: zodResolver(IntegrationDetailCredentialsEditSchema),
    mode: "onSubmit",
  })

  const resetForm = () =>
    form.reset({
      api_key: String(integration.credentials?.api_key ?? ""),
      business_id: String(integration.credentials?.business_id ?? ""),
      campaign_id: String(integration.credentials?.campaign_id ?? "")
    })

  useEffect(() => {
    resetForm()
  }, [open, integration.id, integration.title, integration.is_enabled])

  const updateIntegration = useMutation({
    mutationFn: async (values: IntegrationDetailCredentialsEditValues) => {
      return sdk.client.fetch(`/admin/integrations/${integration.id}`, {
        method: "POST",
        body: {
          title: integration.title,
          provider_id: integration.provider_id,
          is_enabled: integration.is_enabled,
          settings: integration.settings ?? {},
          credentials: {
            ...(integration.credentials ?? {}),
            api_key: values.api_key.trim(),
            business_id: values.business_id.trim(),
            campaign_id: values.campaign_id.trim()
          },
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
            <div className="flex flex-col gap-y-2">
              <Label htmlFor="campaign_id" size="small">
                Campaign ID
              </Label>
              <Input id="campaign_id" autoComplete="off" {...form.register("campaign_id")} />
            </div>
            {form.formState.errors.campaign_id?.message && (
              <Text size="small" className="text-ui-fg-error">
                {form.formState.errors.campaign_id.message}
              </Text>
            )}
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
