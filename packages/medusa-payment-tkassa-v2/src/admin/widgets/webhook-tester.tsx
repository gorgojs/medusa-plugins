import { defineWidgetConfig } from "@medusajs/admin-sdk"
import { Container, Heading, Button, Text, Badge, toast } from "@medusajs/ui"
import { useMutation } from "@tanstack/react-query"
import type { IntegrationSectionData } from "@gorgo/medusa-integration"
import { sdk } from "../lib/sdk"

/**
 * EXAMPLE custom integration section, shipped by the T-Kassa plugin.
 *
 * It's a plain Medusa widget injected into the integration settings page's per-plugin zone
 * `gorgo.integration.tkassa.after` (the page hosts that zone via LayoutComposer). The page
 * passes this integration's data through LayoutComposer's `data` prop, so the widget receives
 * it as `props.data` ({@link IntegrationSectionData}) — no registry, no cross-plugin imports
 * of components.
 *
 * It reads a non-secret option (terminalKey) and calls a provider endpoint. Anything needing
 * a secret (the password) is done server-side: the `/test-connection` route reads the resolved
 * options on the backend, so the secret never reaches the browser.
 */
const WebhookTester = ({ data }: { data: IntegrationSectionData }) => {
  const { providerId, values, isComplete } = data
  const terminalKey = (values.terminalKey as string) || "—"

  const ping = useMutation({
    mutationFn: () =>
      sdk.client.fetch<{ status: string; message?: string }>(
        `/admin/integrations/${providerId}/test-connection`,
        { method: "POST" }
      ),
    onSuccess: (r) =>
      r.status === "ok"
        ? toast.success("Endpoint reachable")
        : toast.warning(r.message ?? r.status),
    onError: (e: any) => toast.error(e?.message ?? "Request failed"),
  })

  return (
    <Container className="divide-y p-0">
      <div className="px-6 py-4">
        <Heading level="h2">Webhook tester</Heading>
      </div>
      <div className="flex flex-col gap-y-3 px-6 py-4">
        <Text size="small" className="text-ui-fg-subtle">
          Example custom section from the T-Kassa plugin — injected into the integration page
          through a widget zone. It reads this integration's options and calls a provider endpoint.
        </Text>
        <div className="flex items-center gap-x-2">
          <Text size="small" weight="plus" leading="compact">
            Terminal
          </Text>
          <Badge size="2xsmall" color="grey">
            {terminalKey}
          </Badge>
        </div>
        <div className="flex flex-col gap-y-1">
          <div>
            <Button
              size="small"
              variant="secondary"
              disabled={!isComplete || ping.isPending}
              isLoading={ping.isPending}
              onClick={() => ping.mutate()}
            >
              Send test request
            </Button>
          </div>
          {!isComplete && (
            <Text size="xsmall" className="text-ui-fg-subtle">
              Finish configuring the integration to enable this.
            </Text>
          )}
        </div>
      </div>
    </Container>
  )
}

export const config = defineWidgetConfig({
  zone: "gorgo.integration.tkassa.after",
})

export default WebhookTester
