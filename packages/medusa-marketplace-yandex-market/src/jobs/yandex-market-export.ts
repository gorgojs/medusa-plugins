import { MedusaContainer } from "@medusajs/framework/types"
import { exportYandexMarketWorkflow } from "../workflows/export-yandex-market"

export default async function (container: MedusaContainer) {
  const { result } = await exportYandexMarketWorkflow(container).run({
    input: { medusaCategoryName: "Mobile Phones" },
  })
  container.resolve("logger").info(`YM export: sent=${result.sentCount}, http=${result.status}`)
}

export const config = {
  name: "yandex-export",
  schedule: "* * * * *",
}
