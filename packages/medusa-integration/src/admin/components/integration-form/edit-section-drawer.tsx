import { Drawer, Button, toast } from "@medusajs/ui"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { sdk } from "../../lib/sdk"
import { IntegrationField } from "./field"
import type { UiSection } from "../../../types"

/** Pre-fill the form: current non-secret values, secrets always blank (blank = keep). */
function sectionDefaults(
  section: UiSection,
  values: Record<string, unknown>
): Record<string, unknown> {
  const out: Record<string, unknown> = {}
  for (const f of section.fields) {
    if (f.secret || f.control === "secret") out[f.name] = ""
    else if (f.control === "switch") out[f.name] = values?.[f.name] ?? false
    else out[f.name] = values?.[f.name] ?? ""
  }
  return out
}

/**
 * Edit one descriptor section in a Drawer (Medusa's convention for editing existing
 * entities). Reuses {@link IntegrationField} for inputs and persists through the same
 * upsert endpoint the page already uses.
 */
export const EditSectionDrawer = ({
  open,
  onOpenChange,
  providerId,
  section,
  values,
  hasSecrets = false,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  providerId: string
  section: UiSection
  /** Full current non-secret values across all sections (used to merge on save). */
  values: Record<string, unknown>
  hasSecrets?: boolean
}) => {
  const qc = useQueryClient()
  // Snapshot the section's values once at mount (lazy initializer → computed a single time).
  // The drawer remounts per open (the page conditionally renders it keyed by section), so
  // each open re-snapshots the latest stored values; meanwhile a background refetch of the
  // page query keeps a stable reference here and won't reset the user's in-progress edits.
  const [defaults] = useState(() => sectionDefaults(section, values))
  const form = useForm<Record<string, unknown>>({ values: defaults })

  const save = useMutation({
    mutationFn: (sectionValues: Record<string, unknown>) =>
      sdk.client.fetch(`/admin/integrations/${providerId}`, {
        method: "POST",
        // Merge this section's edits over the full current values. Blank secrets are kept
        // server-side; untouched secrets from other sections are absent and likewise kept.
        body: { values: { ...values, ...sectionValues } },
      }),
    onSuccess: () => {
      toast.success("Saved")
      qc.invalidateQueries({ queryKey: ["integration", providerId] })
      qc.invalidateQueries({ queryKey: ["integration-overview"] })
      onOpenChange(false)
    },
    onError: (e: any) => toast.error(e?.message ?? "Save failed"),
  })

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>{section.title.en}</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body className="flex flex-1 flex-col gap-y-4 overflow-auto">
          {section.fields.map((f) => (
            <IntegrationField
              key={f.name}
              field={f}
              control={form.control}
              secretConfigured={hasSecrets}
            />
          ))}
        </Drawer.Body>
        <Drawer.Footer>
          <Drawer.Close asChild>
            <Button size="small" variant="secondary" disabled={save.isPending}>
              Cancel
            </Button>
          </Drawer.Close>
          <Button
            size="small"
            isLoading={save.isPending}
            onClick={form.handleSubmit((v) => save.mutate(v))}
          >
            Save
          </Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  )
}
