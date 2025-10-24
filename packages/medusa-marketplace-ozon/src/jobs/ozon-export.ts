import { MedusaContainer } from "@medusajs/framework/types"
import { adminOzonProductImportWorkflow } from "../workflows/import-product"
import { getDemoOzonOffers } from "../config/ozon-offers"

export default async function (container: MedusaContainer) {
  try {
    const { result } = await adminOzonProductImportWorkflow(container).run({
      input: { items: getDemoOzonOffers() },
    })
    container.resolve("logger").info(`Ozon import: result=${JSON.stringify(result)}`)

    return result;
  } catch (error) {
    container.resolve("logger").error(`Ozon import failed: ${error.message}`)
    throw error;
  }
}

export const config = { name: "ozon-import", schedule: "* * * * *" }
