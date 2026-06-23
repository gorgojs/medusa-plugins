import { Container, Heading, Button, Badge, StatusBadge, Text, toast } from "@medusajs/ui"
import { Spinner } from "@medusajs/icons"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { Link, useParams } from "react-router-dom"
import { sdk } from "../../../../lib/sdk"
import { IntegrationField } from "../../../../components/integration-form/field"
import type { AdminIntegrationResponse } from "../../../../../types"

const testColor = (s: string | null) =>
  s === "ok" ? "green" : s === "fail" ? "red" : "grey"

const EditPage = () => {
  const { provider_id } = useParams()
  const qc = useQueryClient()

  // Single query: the resource endpoint returns descriptor (UI schema) + current values.
  const { data, isLoading } = useQuery({
    queryKey: ["integration", provider_id],
    queryFn: () => sdk.client.fetch<AdminIntegrationResponse>(`/admin/integrations/${provider_id}`),
  })

  const descriptor = data?.descriptor
  const form = useForm<Record<string, unknown>>({ values: data?.integration?.values ?? {} })

  const save = useMutation({
    mutationFn: (values: Record<string, unknown>) =>
      sdk.client.fetch(`/admin/integrations/${provider_id}`, { method: "POST", body: { values } }),
    onSuccess: () => {
      toast.success("Saved")
      qc.invalidateQueries({ queryKey: ["integration", provider_id] })
      qc.invalidateQueries({ queryKey: ["integration-overview"] })
    },
    onError: (e: any) => toast.error(e?.message ?? "Save failed"),
  })

  const test = useMutation({
    mutationFn: () =>
      sdk.client.fetch<{ status: string; message?: string }>(
        `/admin/integrations/${provider_id}/test`,
        { method: "POST" }
      ),
    onSuccess: (r) => {
      r.status === "ok" ? toast.success("Connection OK") : toast.warning(r.message ?? r.status)
      // Refresh the persisted last-test status/time shown below the heading.
      qc.invalidateQueries({ queryKey: ["integration", provider_id] })
      qc.invalidateQueries({ queryKey: ["integration-overview"] })
    },
    onError: (e: any) => toast.error(e?.message ?? "Test failed"),
  })

  const record = data?.integration

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

  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Heading level="h2">{descriptor.displayName.en}</Heading>
            {descriptor.instanceId && (
              <Badge size="2xsmall" color="grey">
                {descriptor.instanceId}
              </Badge>
            )}
          </div>
          {record?.last_test_status && (
            <div className="flex items-center gap-2">
              <StatusBadge color={testColor(record.last_test_status)}>
                {record.last_test_status}
              </StatusBadge>
              <Text size="xsmall" className="text-ui-fg-subtle">
                {record.last_test_at && `tested ${new Date(record.last_test_at).toLocaleString()}`}
                {record.last_test_message ? ` · ${record.last_test_message}` : ""}
              </Text>
            </div>
          )}
        </div>
        <div className="flex gap-2">
          {descriptor.hasTestConnection && (
            <Button
              size="small"
              variant="secondary"
              disabled={test.isPending}
              isLoading={test.isPending}
              onClick={() => test.mutate()}
            >
              Test connection
            </Button>
          )}
          <Button
            size="small"
            disabled={save.isPending}
            isLoading={save.isPending}
            onClick={form.handleSubmit((v) => save.mutate(v))}
          >
            Save
          </Button>
        </div>
      </div>
      {descriptor.sections.map((s) => (
        <div key={s.id} className="flex flex-col gap-4 px-6 py-4">
          <Text size="small" weight="plus">
            {s.title.en}
          </Text>
          {s.fields.map((f) => (
            <IntegrationField
              key={f.name}
              field={f}
              control={form.control}
              secretConfigured={!!record?.has_secrets}
            />
          ))}
        </div>
      ))}
    </Container>
  )
}

export default EditPage
