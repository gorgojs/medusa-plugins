import { MedusaContainer } from "@medusajs/framework/types"
import { syncIntegrationProductsWorkflow } from "../workflows/integration-product"

export default async function (container: MedusaContainer) {
  const logger = container.resolve("logger")

  const { result } = await syncIntegrationProductsWorkflow(container).run({
    input: { 
      integration: {
        id: "",
        title: "",
        provider_id: "mp_system_default",
        credentials: {
          apiKey: ""
        },
        settings: {},
        is_enabled: true
      }
    }
  })
  logger.info(`Exported products to integration: ${JSON.stringify(result, null, 2)}`)
}

export const config = {
  name: "sync-integration-products",
  schedule: "0 0 * * *", // change to * * * * * for debugging
}
