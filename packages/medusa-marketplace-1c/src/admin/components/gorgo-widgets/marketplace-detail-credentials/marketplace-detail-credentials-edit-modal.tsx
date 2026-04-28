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
import { MarketplaceHttpTypes } from "@gorgo/medusa-marketplace/types"
import { sdk } from "../../../lib/sdk"

type MarketplaceDetailCredentialsEditModalProps = {
  marketplace: MarketplaceHttpTypes.AdminMarketplace
  open: boolean
  setOpen: (open: boolean) => void
}

const MarketplaceDetailCredentialsEditSchema = z.object({
  login: z.string().trim().min(1, "Login is required"),
  password: z.string().trim().min(1, "Password is required"),
})

type MarketplaceDetailCredentialsEditValues = z.infer<typeof MarketplaceDetailCredentialsEditSchema>

export const MarketplaceDetailCredentialsEditModal = ({
  marketplace,
  open,
  setOpen,
}: MarketplaceDetailCredentialsEditModalProps) => {
  const queryClient = useQueryClient()
  const { revalidate } = useRevalidator()

  const form = useForm<MarketplaceDetailCredentialsEditValues>({
    defaultValues: {
      login: String(marketplace.credentials?.login ?? ""),
      password: String(marketplace.credentials?.password ?? ""),
    },
    resolver: zodResolver(MarketplaceDetailCredentialsEditSchema),
    mode: "onSubmit",
  })

  const resetForm = () =>
    form.reset({
      login: String(marketplace.credentials?.login ?? ""),
      password: String(marketplace.credentials?.password ?? ""),
    })

  useEffect(() => {
    resetForm()
  }, [open, marketplace.id, marketplace.title, marketplace.is_enabled])

  const updateMarketplace = useMutation({
    mutationFn: async (values: MarketplaceDetailCredentialsEditValues) => {
      return sdk.client.fetch(`/admin/marketplaces/${marketplace.id}`, {
        method: "POST",
        body: {
          title: marketplace.title,
          provider_id: marketplace.provider_id,
          is_enabled: marketplace.is_enabled,
          settings: marketplace.settings ?? {},
          credentials: {
            ...(marketplace.credentials ?? {}),
            login: values.login.trim(),
            password: values.password.trim(),
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
            <Drawer.Title>Edit 1C Credentials</Drawer.Title>
          </Drawer.Header>

          <Drawer.Body className="flex max-w-full flex-1 flex-col gap-y-6 overflow-y-auto">
            <div className="flex flex-col gap-y-2">
              <Label htmlFor="login" size="small">
                Login (email)
              </Label>
              <Input id="login" autoComplete="off" {...form.register("login")} />
              {form.formState.errors.login?.message && (
                <Text size="small" className="text-ui-fg-error">
                  {form.formState.errors.login.message}
                </Text>
              )}
            </div>

            <div className="flex flex-col gap-y-2">
              <Label htmlFor="password" size="small">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                autoComplete="off"
                {...form.register("password")}
              />
              {form.formState.errors.password?.message && (
                <Text size="small" className="text-ui-fg-error">
                  {form.formState.errors.password.message}
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
