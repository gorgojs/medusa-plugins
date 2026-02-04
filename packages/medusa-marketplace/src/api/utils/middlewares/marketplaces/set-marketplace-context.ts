import { AuthenticatedMedusaRequest, MedusaNextFunction } from "@medusajs/framework/http"

export function setMarketplaceContext() {
  return async (req: AuthenticatedMedusaRequest, _, next: MedusaNextFunction) => {

    const query = req.scope.resolve("query")

    const { data, metadata } = await query.graph(
      {
        entity: "marketplace",
        fields: ["id", "provider_id", "credentials", "settings", "is_active", "sales_channel.*"],
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

    req["marketplaceContext"] = data[0]

    return next()
  }
}
