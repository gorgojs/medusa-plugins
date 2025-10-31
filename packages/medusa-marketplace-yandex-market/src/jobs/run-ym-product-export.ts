import { MedusaContainer } from "@medusajs/framework/types"
import { runYmProductExportWorkflow } from "../workflows/product/workflows/run-ym-product-export"

export default async function (container: MedusaContainer) {
  const logger = container.resolve("logger")
  
  const { result } = await runYmProductExportWorkflow(container).run({
    input: { medusaCategoryName: "Mobile Phones" },
  })
  logger.info(`YM export: sent=${result.sentCount}, http=${result.status}`)
}

export const config = {
  name: "run-ym-product-export",
  schedule: "* * * * *",
}
