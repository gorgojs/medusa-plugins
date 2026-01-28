import { z } from "zod"
import { Text, Button, Drawer, Input, Label, Switch } from "@medusajs/ui"
import { useState } from "react"
import { sdk } from "../../../../lib/sdk"

type Marketplace = {
  id: string
  provider_id: string
  credentials: Record<string, unknown>
  settings: Record<string, unknown>
  is_enabled: boolean
}

const editMarketplaceSchema = z.object({
  provider_id: z.string().trim().min(1, "Min 1 chars").max(120, "Max 120 chars"),
  is_enabled: z.boolean(),
})

type EditMarketplaceFormValues = {
  provider_id: string
  is_enabled: boolean
}

const zodFieldErrors = <T extends Record<string, any>>(error: z.ZodError<T>) => {
  const out: Partial<Record<keyof T, string>> = {}
  for (const issue of error.issues) {
    const key = issue.path[0] as keyof T
    if (key && !out[key]) out[key] = issue.message
  }
  return out
}

export const MarketplaceEditDrawer = ({
  marketplace,
}: {
  marketplace: Marketplace
}) => {
  const [open, setOpen] = useState(false)

  const [values, setValues] = useState<EditMarketplaceFormValues>({
    provider_id: marketplace.provider_id,
    is_enabled: Boolean(marketplace.is_enabled),
  })

  const [touched, setTouched] = useState<{ provider_id: boolean }>({
    provider_id: false,
  })

  const [errors, setErrors] = useState<
    Partial<Record<keyof EditMarketplaceFormValues, string>>
  >({})

  const parsed = editMarketplaceSchema.safeParse(values)

  const isDirty =
    values.provider_id.trim() !== marketplace.provider_id.trim() ||
    values.is_enabled !== Boolean(marketplace.is_enabled)

  const canSave = parsed.success && isDirty

  const onSave = async () => {
    setTouched({ provider_id: true })

    const res = editMarketplaceSchema.safeParse(values)
    if (!res.success) {
      setErrors(zodFieldErrors(res.error))
      return
    }

    await sdk.client.fetch(`/admin/marketplaces/${marketplace.id}`, {
      method: "POST",
      body: {
        provider_id: values.provider_id.trim(),
        is_enabled: values.is_enabled,
        credentials: marketplace.credentials ?? {},
        settings: marketplace.settings ?? {},
      },
    })


    setOpen(false)
    // await onSaved()
  }

  const onCancel = () => {
    setOpen(false)
    setTouched({ provider_id: false })
    setErrors({})
    setValues({
      provider_id: marketplace.provider_id,
      is_enabled: Boolean(marketplace.is_enabled),
    })
  }

  return (
    <Drawer
      open={open}
      onOpenChange={(next) => {
        setOpen(next)
        if (next) {
          setValues({
            provider_id: marketplace.provider_id,
            is_enabled : Boolean(marketplace.is_enabled),
          })
          setTouched({ provider_id: false })
          setErrors({})
        }
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
                  touched.provider_id && errors.provider_id
                    ? "provider_id-error"
                    : undefined
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
                <Text size="small">{values.is_enabled ? "Enabled" : "Disabled"}</Text>
              </div>

              <Switch
                checked={values.is_enabled}
                onCheckedChange={(v) => setValues({ ...values, is_enabled: Boolean(v) })}
              />
            </div>
          </div>
        </Drawer.Body>

        <Drawer.Footer className="flex justify-end gap-x-2">
          <Button variant="secondary" size="small" onClick={onCancel}>
            Cancel
          </Button>

          <Button size="small" onClick={onSave} disabled={!canSave}>
            Save
          </Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  )
}
