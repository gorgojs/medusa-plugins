import { MedusaContainer } from "@medusajs/framework/types"
import { runExportsWorkflow } from "../workflows/run-exports"

export default async function job(container: MedusaContainer) {
  const logger = container.resolve("logger")
  const { result } = await runExportsWorkflow(container).run({
    input: {
      ids: []
    },
  })
  logger.info(`Yandex-market catalog exported: ${JSON.stringify(result, null, 2)}`)
}

export const config = {
  name: "run-exports",
  schedule: "* * * * *",
}