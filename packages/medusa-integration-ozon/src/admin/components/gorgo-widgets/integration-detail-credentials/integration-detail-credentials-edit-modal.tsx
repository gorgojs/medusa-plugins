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
  apiKey: z.string().trim(),
  clientId: z.string().trim(),
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
      apiKey: String(integration.credentials?.apiKey ?? ""),
      clientId: String(integration.credentials?.clientId ?? "")
    },
    resolver: zodResolver(IntegrationDetailCredentialsEditSchema),
    mode: "onSubmit",
  })

  const resetForm = () =>
    form.reset({
      apiKey: String(integration.credentials?.apiKey ?? ""),
      clientId: String(integration.credentials?.clientId ?? "")
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
            apiKey: values.apiKey.trim(),
            clientId: values.clientId.trim(),
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
              <Label htmlFor="apiKey" size="small">
                API Key
              </Label>
              <Input id="apiKey" autoComplete="off" {...form.register("apiKey")} />
              {form.formState.errors.apiKey?.message && (
                <Text size="small" className="text-ui-fg-error">
                  {form.formState.errors.apiKey.message}
                </Text>
              )}
            </div>

            <div className="flex flex-col gap-y-2">
              <Label htmlFor="clientId" size="small">
                Client ID
              </Label>
              <Input
                id="clientId"
                autoComplete="off"
                {...form.register("clientId")}
              />
              {form.formState.errors.clientId?.message && (
                <Text size="small" className="text-ui-fg-error">
                  {form.formState.errors.clientId.message}
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

            <Button size="small" type="submit" disabled={updateIntegration.isPending}>
              Save
            </Button>
          </Drawer.Footer>
        </form>
      </Drawer.Content>
    </Drawer>
  )
}
