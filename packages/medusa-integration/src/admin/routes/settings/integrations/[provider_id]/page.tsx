import {
  Container,
  Heading,
  Text,
  Badge,
  StatusBadge,
  IconButton,
  DropdownMenu,
  toast,
  usePrompt,
} from "@medusajs/ui"
import { EllipsisHorizontal, PencilSquare, Trash, Spinner } from "@medusajs/icons"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useState, type ReactNode } from "react"
import { LayoutComposer } from "@medusajs/dashboard/components"
import { sdk } from "../../../../lib/sdk"
import { IntegrationFieldValue } from "../../../../components/integration-form/field-value"
import { EditSectionDrawer } from "../../../../components/integration-form/edit-section-drawer"
import type { AdminIntegrationResponse, IntegrationSectionData, UiSection } from "../../../../../types"

const testColor = (s: string | null) =>
  s === "ok" ? "green" : s === "fail" ? "red" : "grey"

/** A Medusa-admin section row: label on the left, value on the right. */
const Row = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="text-ui-fg-subtle grid grid-cols-2 px-6 py-4">
    <Text size="small" weight="plus" leading="compact">
      {label}
    </Text>
    <div className="flex items-center gap-x-2">{children}</div>
  </div>
)

const EditPage = () => {
  const { provider_id } = useParams()
  const qc = useQueryClient()
  const navigate = useNavigate()
  const prompt = usePrompt()
  const [editingSection, setEditingSection] = useState<string | null>(null)

  // Single query: the resource endpoint returns descriptor (UI schema) + current values.
  const { data, isLoading } = useQuery({
    queryKey: ["integration", provider_id],
    queryFn: () => sdk.client.fetch<AdminIntegrationResponse>(`/admin/integrations/${provider_id}`),
  })

  const descriptor = data?.descriptor
  const record = data?.integration
  const isConfigured = !!record
  // A configured row whose stored config still fails full validation (missing required
  // fields somewhere, or a cross-section rule). Incomplete configs don't resolve at runtime.
  const isComplete = data?.is_complete ?? false

  const invalidate = () => {
    qc.invalidateQueries({ queryKey: ["integration", provider_id] })
    qc.invalidateQueries({ queryKey: ["integration-overview"] })
  }

  const test = useMutation({
    mutationFn: () =>
      sdk.client.fetch<{ status: string; message?: string }>(
        `/admin/integrations/${provider_id}/test-connection`,
        { method: "POST" }
      ),
    onSuccess: (r) => {
      r.status === "ok" ? toast.success("Connection OK") : toast.warning(r.message ?? r.status)
      invalidate()
    },
    onError: (e: any) => toast.error(e?.message ?? "Test failed"),
  })

  const toggleEnabled = useMutation({
    mutationFn: (next: boolean) =>
      sdk.client.fetch(`/admin/integrations/${provider_id}/enable`, {
        method: "POST",
        body: { is_enabled: next },
      }),
    onSuccess: (_d, next) => {
      toast.success(next ? "Enabled" : "Disabled")
      invalidate()
    },
    onError: (e: any) => toast.error(e?.message ?? "Update failed"),
  })

  const remove = useMutation({
    mutationFn: () =>
      sdk.client.fetch(`/admin/integrations/${provider_id}`, { method: "DELETE" }),
    onSuccess: () => {
      toast.success("Configuration deleted")
      invalidate()
      navigate("/settings/integrations")
    },
    onError: (e: any) => toast.error(e?.message ?? "Delete failed"),
  })

  const onDelete = async () => {
    const confirmed = await prompt({
      title: "Delete configuration",
      description: `Remove the stored configuration for ${descriptor?.displayName.en}? This can't be undone.`,
      confirmText: "Delete",
      cancelText: "Cancel",
    })
    if (confirmed) remove.mutate()
  }

  if (isLoading) {
    return (
      <Container className="flex items-center justify-center p-8">
        <Spinner className="text-ui-fg-subtle animate-spin" />
      </Container>
    )
  }

  if (!descriptor) {
    return (
      <Container className="p-6">
        <Text size="small" className="text-ui-fg-subtle">
          Unknown integration "{provider_id}".
        </Text>
        <Link to="/settings/integrations" className="text-ui-fg-interactive">
          Back to integrations
        </Link>
      </Container>
    )
  }

  const editing = descriptor.sections.find((s) => s.id === editingSection) ?? null

  // Data handed to provider-supplied custom-section widgets (injected via LayoutComposer's
  // per-plugin zone). Secrets are never included.
  const sectionData: IntegrationSectionData = {
    providerId: provider_id!,
    pluginId: descriptor.pluginId,
    values: (record?.values as Record<string, unknown>) ?? {},
    isComplete,
  }

  const renderSection = (section: UiSection) => (
    <Container key={section.id} className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h2">{section.title.en}</Heading>
        <DropdownMenu>
          <DropdownMenu.Trigger asChild>
            <IconButton size="small" variant="transparent">
              <EllipsisHorizontal />
            </IconButton>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item className="gap-x-2" onClick={() => setEditingSection(section.id)}>
              <PencilSquare className="text-ui-fg-subtle" />
              Edit
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      </div>
      {section.fields.map((f) => (
        <Row key={f.name} label={f.label.en}>
          <IntegrationFieldValue
            field={f}
            value={record?.values?.[f.name]}
            secretConfigured={!!record?.has_secrets}
          />
        </Row>
      ))}
    </Container>
  )

  // Sections opt into the side column via the descriptor's `column` (default "main").
  const mainSections = descriptor.sections.filter((s) => s.column !== "side")
  const sideSections = descriptor.sections.filter((s) => s.column === "side")

  const main = (
    <div className="flex flex-col gap-y-3">
      {/* Identity / overview card */}
      <Container className="divide-y p-0">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex flex-col gap-y-1">
            <div className="flex items-center gap-x-2">
              <Heading>{descriptor.displayName.en}</Heading>
              {descriptor.instanceId && (
                <Badge size="2xsmall" color="grey">
                  {descriptor.instanceId}
                </Badge>
              )}
            </div>
            {descriptor.description && (
              <Text size="small" className="text-ui-fg-subtle">
                {descriptor.description.en}
              </Text>
            )}
          </div>
          {isConfigured &&
            (<DropdownMenu>
              <DropdownMenu.Trigger asChild>
                <IconButton size="small" variant="transparent">
                  <EllipsisHorizontal />
                </IconButton>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                {descriptor.hasTestConnection && record!.is_enabled && isComplete && (
                  <DropdownMenu.Item disabled={test.isPending} onClick={() => test.mutate()}>
                    Test connection
                  </DropdownMenu.Item>
                )}
                {isConfigured && (
                  <DropdownMenu.Item
                    disabled={toggleEnabled.isPending}
                    onClick={() => toggleEnabled.mutate(!record!.is_enabled)}
                  >
                    {record!.is_enabled ? "Disable" : "Enable"}
                  </DropdownMenu.Item>
                )}
                {isConfigured && <DropdownMenu.Separator />}
                {isConfigured && (
                  <DropdownMenu.Item className="gap-x-2" onClick={onDelete}>
                    <Trash className="text-ui-fg-subtle" />
                    Delete
                  </DropdownMenu.Item>
                )}
              </DropdownMenu.Content>
            </DropdownMenu>
          )}
        </div>

        <Row label="Status">
          {!isConfigured ? (
            <StatusBadge color="grey">Not configured</StatusBadge>
          ) : !isComplete ? (
            <StatusBadge color="orange">Incomplete</StatusBadge>
          ) : (
            <StatusBadge color={record!.is_enabled ? "green" : "grey"}>
              {record!.is_enabled ? "Enabled" : "Disabled"}
            </StatusBadge>
          )}
        </Row>
        <Row label="Module">
          <Badge size="2xsmall" color="grey" className="capitalize">
            {descriptor.module}
          </Badge>
        </Row>
        <Row label="Last test">
          {record?.last_test_status ? (
            <>
              <StatusBadge color={testColor(record.last_test_status)}>
                {record.last_test_status}
              </StatusBadge>
              <Text size="small" leading="compact" className="text-ui-fg-subtle">
                {record.last_test_at && new Date(record.last_test_at).toLocaleString()}
                {record.last_test_message ? ` · ${record.last_test_message}` : ""}
              </Text>
            </>
          ) : (
            <Text size="small" leading="compact" className="text-ui-fg-subtle">
              Never tested
            </Text>
          )}
        </Row>
      </Container>

      {/* Main-column descriptor sections */}
      {mainSections.map(renderSection)}

      {editing && (
        <EditSectionDrawer
          key={editing.id}
          open
          onOpenChange={(open) => !open && setEditingSection(null)}
          providerId={provider_id!}
          section={editing}
          values={record?.values ?? {}}
          hasSecrets={!!record?.has_secrets}
        />
      )}
    </div>
  )

  const side = <div className="flex flex-col gap-y-3">{sideSections.map(renderSection)}</div>

  return (
    <LayoutComposer
      widgetsZonePrefix={`gorgo.integration.${descriptor.pluginId}`}
      preferredLayoutId={descriptor.preferredLayoutId}
      sections={{ main, side }}
      data={sectionData}
      hasOutlet={false}
    />
  )
}

export default EditPage
