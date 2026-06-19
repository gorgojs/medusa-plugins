import { defineRouteConfig } from "@medusajs/admin-sdk"
import { CogSixTooth, Spinner } from "@medusajs/icons"
import { Container, Heading, Text, StatusBadge, Badge } from "@medusajs/ui"
import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import { sdk } from "../../../lib/sdk"

// One entry per declared registration (instances are declared in medusa-config).
type IntegrationOverview = {
  provider_id: string
  plugin_id: string
  instance_id: string | null
  module: string
  display_name: { en: string; ru: string }
  supports_multiple_instances: boolean
  has_test_connection: boolean
  is_configured: boolean
  is_enabled: boolean
  last_test_status: "ok" | "fail" | "skipped" | null
}

const IntegrationsPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["integration-overview"],
    queryFn: () => sdk.client.fetch<{ integrations: IntegrationOverview[] }>("/admin/integrations"),
  })

  const items = data?.integrations ?? []
  const byModule = items.reduce<Record<string, IntegrationOverview[]>>((acc, i) => {
    ;(acc[i.module] ??= []).push(i)
    return acc
  }, {})

  return (
    <Container className="divide-y p-0">
      <div className="px-6 py-4">
        <Heading level="h2">Integrations</Heading>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center px-6 py-8">
          <Spinner className="text-ui-fg-subtle animate-spin" />
        </div>
      ) : items.length === 0 ? (
        <div className="px-6 py-4">
          <Text size="small" className="text-ui-fg-subtle">
            No integrations registered. Declare providers under the integration plugin's
            options.providers in medusa-config.
          </Text>
        </div>
      ) : (
        Object.entries(byModule).map(([module, group]) => (
          <div key={module} className="px-6 py-4">
            <Text size="small" weight="plus" className="capitalize">
              {module}
            </Text>
            <div className="mt-2 flex flex-col gap-2">
              {group.map((i) => {
                const configured = i.is_configured && i.is_enabled
                return (
                  <Link
                    key={i.provider_id}
                    to={`/settings/integrations/${i.provider_id}`}
                    className="flex items-center justify-between rounded-md border px-3 py-2 hover:bg-ui-bg-base-hover"
                  >
                    <div className="flex items-center gap-2">
                      <Text size="small">{i.display_name.en}</Text>
                      {i.instance_id && (
                        <Badge size="2xsmall" color="grey">
                          {i.instance_id}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {i.last_test_status === "ok" && (
                        <Badge color="green" size="2xsmall">
                          tested
                        </Badge>
                      )}
                      {i.last_test_status === "fail" && (
                        <Badge color="red" size="2xsmall">
                          test failed
                        </Badge>
                      )}
                      <StatusBadge color={configured ? "green" : "grey"}>
                        {configured ? "configured" : "not configured"}
                      </StatusBadge>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        ))
      )}
    </Container>
  )
}

export const config = defineRouteConfig({
  label: "Integrations",
  icon: CogSixTooth,
})

export default IntegrationsPage
