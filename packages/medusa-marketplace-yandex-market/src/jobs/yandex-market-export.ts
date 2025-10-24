import { MedusaContainer } from "@medusajs/framework/types"
import { exportYandexMarketWorkflow } from "../workflows/export-yandex-market"
import { getDemoYandexOffers } from "../config/yandex-offers"

export default async function (container: MedusaContainer) {
  const { result } = await exportYandexMarketWorkflow(container).run({
    input: { offers: getDemoYandexOffers() },
  })
  container.resolve("logger").info(`YM export: sent=${result.sentCount}, http=${result.status}`)
}

export const config = { name: "yandex-export", schedule: "* * * * *" }
