import { defineRouteConfig } from "@medusajs/admin-sdk"
import { CogSixTooth, Spinner } from "@medusajs/icons"
import { Container, Heading, Text, StatusBadge, Badge } from "@medusajs/ui"
import { useQuery } from "@tanstack/react-query"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { sdk } from "../../../lib/sdk"
import { IntegrationIcon } from "../../../components/integration-icon"
import type { AdminIntegrationListResponse, IntegrationOverviewItem } from "../../../../types"

const IntegrationsPage = () => {
  const { t } = useTranslation()
  const { data, isLoading } = useQuery({
    queryKey: ["integration-overview"],
    queryFn: () => sdk.client.fetch<AdminIntegrationListResponse>("/admin/integrations"),
  })

  const items = data?.integrations ?? []
  const byModule = items.reduce<Record<string, IntegrationOverviewItem[]>>((acc, i) => {
    ;(acc[i.module] ??= []).push(i)
    return acc
  }, {})

  return (
    <Container className="divide-y p-0">
      <div className="px-6 py-4">
        <Heading level="h2">{t("integration.list.title")}</Heading>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center px-6 py-8">
          <Spinner className="text-ui-fg-subtle animate-spin" />
        </div>
      ) : items.length === 0 ? (
        <div className="px-6 py-4">
          <Text size="small" className="text-ui-fg-subtle">
            {t("integration.list.empty")}
          </Text>
        </div>
      ) : (
        Object.entries(byModule).map(([module, group]) => (
          <div key={module} className="px-6 py-4">
            <Text size="small" weight="plus">
              {t(`integration.modules.${module}`)}
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
                      <IntegrationIcon src={i.icon} alt={t(i.display_name)} size="small" />
                      <Text size="small">{t(i.display_name)}</Text>
                      {i.instance_id && (
                        <Badge size="2xsmall" color="grey">
                          {i.instance_id}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {i.last_test_status === "passed" && (
                        <Badge color="green" size="2xsmall">
                          {t("integration.list.tested")}
                        </Badge>
                      )}
                      {i.last_test_status === "failed" && (
                        <Badge color="red" size="2xsmall">
                          {t("integration.list.testFailed")}
                        </Badge>
                      )}
                      {i.is_configured && !i.is_complete ? (
                        <StatusBadge color="orange">{t("integration.status.incomplete")}</StatusBadge>
                      ) : (
                        <StatusBadge color={configured ? "green" : "grey"}>
                          {!i.is_configured
                            ? t("integration.status.notConfigured")
                            : i.is_enabled
                              ? t("integration.status.enabled")
                              : t("integration.status.disabled")}
                        </StatusBadge>
                      )}
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
  label: "integration.list.title",
  translationNs: "translation",
  icon: CogSixTooth,
})

const IntegrationsBreadcrumb = () => {
  const { t } = useTranslation()
  return <>{t("integration.list.title")}</>
}

export const handle = {
  breadcrumb: () => <IntegrationsBreadcrumb />,
}

export default IntegrationsPage
