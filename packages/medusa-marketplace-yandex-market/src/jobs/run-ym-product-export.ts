import { MedusaContainer } from "@medusajs/framework/types"
import { runYmProductExportWorkflow } from "../workflows/product/workflows/run-ym-product-export"

export default async function job(container: MedusaContainer) {

  const { result } = await runYmProductExportWorkflow(container).run({
    input: { medusaCategoryName: "Mobile Phones" },
  })

  const logger = container.resolve("logger")
  logger.info(`YM export: sent=${result.sentCount}, http=${result.status}`)

}

export const config = {
  name: "run-ym-product-export",
  schedule: "* * * * *",
}
