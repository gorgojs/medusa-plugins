import { MedusaContainer } from "@medusajs/framework/types"
import { runFeedsWorkflow } from "../workflows/run-feeds"

export default async function job(container: MedusaContainer) {
  const logger = container.resolve("logger")
  const { result } = await runFeedsWorkflow(container).run({
    input: {
      ids: []
    },
  })
  logger.info(`Catalog exported: ${JSON.stringify(result, null, 2)}`)
}

export const config = {
  name: "run-feeds",
  schedule: "* * * * *",
}