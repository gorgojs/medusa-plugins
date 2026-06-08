import { AuthenticatedMedusaRequest, MedusaNextFunction } from "@medusajs/framework/http"

export function setIntegrationContext() {
  return async (req: AuthenticatedMedusaRequest, _, next: MedusaNextFunction) => {

    const query = req.scope.resolve("query")

    const { data, metadata } = await query.graph(
      {
        entity: "integration",
        fields: ["id", "provider_id", "credentials", "settings", "is_active", "sales_channel.*", "exchange_profiles.*"],
        filters: {
          id: [req.params.id]
        }
      },
      {
        cache: {
          enable: true
        }
      }
    )

    req["integrationContext"] = data[0]

    return next()
  }
}
