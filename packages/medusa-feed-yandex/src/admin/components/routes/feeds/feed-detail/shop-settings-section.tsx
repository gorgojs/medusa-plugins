import { z } from "zod"
import { Text, Button, Drawer, Input, Label, Switch } from "@medusajs/ui"
import { useState } from "react"
import { useRevalidator } from "react-router-dom"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { sdk } from "../../../../lib/sdk"
import type { MarketplaceDTO } from "@gorgo/medusa-marketplace/modules/marketplace/types"

const editMarketplaceSchema = z.object({
  provider_id: z.string().trim().min(1, "Min 1 chars").max(120, "Max 120 chars"),
  is_active: z.boolean(),
})

type EditMarketplaceFormValues = {
  provider_id: string
  is_active: boolean
}

const zodFieldErrors = <T extends Record<string, any>>(error: z.ZodError<T>) => {
  const out: Partial<Record<keyof T, string>> = {}
  for (const issue of error.issues) {
    const key = issue.path[0] as keyof T
    if (key && !out[key]) out[key] = issue.message
  }
  return out
}

export const MarketplaceEditDrawer = ({ marketplace }: { marketplace: MarketplaceDTO }) => {
  const { revalidate } = useRevalidator()
  const queryClient = useQueryClient()

  const [open, setOpen] = useState(false)
  const [values, setValues] = useState<EditMarketplaceFormValues>({
    provider_id: marketplace.provider_id,
    is_active: Boolean(marketplace.is_active),
  })
  const [touched, setTouched] = useState<{ provider_id: boolean }>({ provider_id: false })
  const [errors, setErrors] = useState<
    Partial<Record<keyof EditMarketplaceFormValues, string>>
  >({})

  const resetForm = () => {
    setTouched({ provider_id: false })
    setErrors({})
    setValues({
      provider_id: marketplace.provider_id,
      is_active: Boolean(marketplace.is_active),
    })
  }

  const { mutate: updateMarketplaceMutate, isPending } = useMutation({
    mutationFn: async (payload: EditMarketplaceFormValues) => {
      return sdk.client.fetch(`/admin/marketplaces/${marketplace.id}`, {
        method: "POST", 
        body: {
          provider_id: payload.provider_id.trim(),
          is_active: payload.is_active,
          credentials: marketplace.credentials ?? {},
          settings: marketplace.settings ?? {},
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["marketplaces"] })
      queryClient.invalidateQueries({ queryKey: ["marketplace", marketplace.id] })
      revalidate()
      setOpen(false)
    },
    onError: (error) => {
      console.error("Error updating marketplace:", error)
    },
  })

  const parsed = editMarketplaceSchema.safeParse(values)
  const isDirty =
    values.provider_id.trim() !== marketplace.provider_id.trim() ||
    values.is_active !== Boolean(marketplace.is_active)

  const canSave = parsed.success && isDirty && !isPending

  const onSave = () => {
    setTouched({ provider_id: true })

    const res = editMarketplaceSchema.safeParse(values)
    if (!res.success) {
      setErrors(zodFieldErrors(res.error))
      return
    }
    updateMarketplaceMutate(res.data)
  }

  const onCancel = () => {
    setOpen(false)
    resetForm()
  }

  return (
    <Drawer
      open={open}
      onOpenChange={(next) => {
        setOpen(next)
        resetForm()
      }}
    >
      <Drawer.Trigger asChild>
        <Button variant="secondary" size="small">
          Edit
        </Button>
      </Drawer.Trigger>

      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Edit Marketplace</Drawer.Title>
        </Drawer.Header>

        <Drawer.Body>
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2">
              <Label htmlFor="provider_id" size="small">
                Provider ID
              </Label>

              <Input
                id="provider_id"
                value={values.provider_id}
                onChange={(e) => {
                  const next = { ...values, provider_id: e.target.value }
                  setValues(next)

                  const r = editMarketplaceSchema.safeParse(next)
                  setErrors(r.success ? {} : zodFieldErrors(r.error))
                }}
                onBlur={() => setTouched({ provider_id: true })}
                aria-invalid={Boolean(touched.provider_id && errors.provider_id)}
                aria-describedby={
                  touched.provider_id && errors.provider_id ? "provider_id-error" : undefined
                }
              />

              {touched.provider_id && errors.provider_id && (
                <Text id="provider_id-error" size="small" className="text-ui-fg-error">
                  {errors.provider_id}
                </Text>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <Text size="small" className="text-ui-fg-subtle">
                  Active
                </Text>
                <Text size="small">{values.is_active ? "Enabled" : "Disabled"}</Text>
              </div>

              <Switch
                checked={values.is_active}
                onCheckedChange={(v) => setValues({ ...values, is_active: Boolean(v) })}
              />
            </div>
          </div>
        </Drawer.Body>

        <Drawer.Footer className="flex justify-end gap-x-2">
          <Button variant="secondary" size="small" onClick={onCancel}>
            Cancel
          </Button>

          <Button size="small" onClick={onSave} disabled={!canSave}>
            {isPending ? "Saving..." : "Save"}
          </Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  )
}
