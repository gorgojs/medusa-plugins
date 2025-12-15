import {
  LoaderFunctionArgs,
  UIMatch,
  useLoaderData,
  useRevalidator,
} from "react-router-dom"
import { z } from "zod"
import { Container, Heading, Text, Button, Drawer, Input, Label } from "@medusajs/ui"
import { useState } from "react"
import { marketplacesData, Marketplace } from "../../../lib/marketplaces"

export async function loader({ params }: LoaderFunctionArgs) {
  const marketplace = marketplacesData.get(params.id!)
  if (!marketplace) throw new Response("Not Found", { status: 404 })
  return { marketplace }
}

export const handle = {
  breadcrumb: (match: UIMatch<Awaited<ReturnType<typeof loader>>>) =>
    match.data.marketplace.title,
}

export default function MarketplaceDetail() {
  const { marketplace } = useLoaderData() as Awaited<ReturnType<typeof loader>>
  const revalidator = useRevalidator()

  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <Text size="small" className="text-ui-fg-subtle">Common settings</Text>
          <Heading level="h1">{marketplace.title}</Heading>
        </div>

        <EditDrawer marketplace={marketplace} onSaved={() => revalidator.revalidate()} />
      </div>

      <div className="px-6 py-4">
        <Text size="small" className="text-ui-fg-subtle">Marketplace provider</Text>
        <Text>{marketplace.provider}</Text>
      </div>
    </Container>
  )
}

const editMarketplaceSchema = z.object({
  title: z.string().trim().min(1, "Min 1 chars").max(60, "Max 60 chars"),
})

type EditMarketplaceData = z.infer<typeof editMarketplaceSchema>


type EditMarketplaceFormValues = {
  title: string
}

function zodFieldErrors<T extends Record<string, any>>(error: z.ZodError<T>) {
  const out: Partial<Record<keyof T, string>> = {}
  for (const issue of error.issues) {
    const key = issue.path[0] as keyof T
    if (key && !out[key]) out[key] = issue.message
  }
  return out
}

function EditDrawer({
  marketplace,
  onSaved,
}: {
  marketplace: Marketplace
  onSaved: () => void
}) {
  const [open, setOpen] = useState(false)

  const [values, setValues] = useState<EditMarketplaceFormValues>({
    title: marketplace.title,
  })

  const [touched, setTouched] = useState({ title: false })
  const [errors, setErrors] = useState<Partial<Record<keyof EditMarketplaceFormValues, string>>>({})

  const parsed = editMarketplaceSchema.safeParse(values)
  const isDirty = values.title.trim() !== marketplace.title.trim()
  const canSave = parsed.success && isDirty

  const onSave = () => {
    setTouched({ title: true })

    const res = editMarketplaceSchema.safeParse(values)
    if (!res.success) {
      setErrors(zodFieldErrors(res.error))
      return
    }

    const data: EditMarketplaceData = res.data
    marketplacesData.update(marketplace.id, { title: data.title })
    setOpen(false)
    onSaved()
  }

  const onCancel = () => {
    setOpen(false)
    setTouched({ title: false })
    setErrors({})
    setValues({ title: marketplace.title })
  }

  return (
    <Drawer
      open={open}
      onOpenChange={(next) => {
        setOpen(next)
        if (next) {
          setValues({ title: marketplace.title })
          setTouched({ title: false })
          setErrors({})
        }
      }}
    >
      <Drawer.Trigger asChild>
        <Button variant="secondary" size="small">Edit</Button>
      </Drawer.Trigger>

      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Edit Marketplace</Drawer.Title>
        </Drawer.Header>

        <Drawer.Body>
          <div className="flex flex-col gap-y-2">
            <Label htmlFor="title" size="small">Title</Label>

            <Input
              id="title"
              value={values.title}
              onChange={(e) => {
                const next = { ...values, title: e.target.value }
                setValues(next)

                const r = editMarketplaceSchema.safeParse(next)
                setErrors(r.success ? {} : zodFieldErrors(r.error))
              }}
              onBlur={() => setTouched({ title: true })}
              aria-invalid={Boolean(touched.title && errors.title)}
              aria-describedby={touched.title && errors.title ? "title-error" : undefined}
            />

            {touched.title && errors.title && (
              <Text id="title-error" size="small" className="text-ui-fg-error">
                {errors.title}
              </Text>
            )}
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
