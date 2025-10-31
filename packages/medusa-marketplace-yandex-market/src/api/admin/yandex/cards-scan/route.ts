import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { yandexOfferCardsListAll } from "../../../../workflows/yandex-offer-cards-scan-all"

type BodySelective = {
  sessionId?: string
  offerIds?: string[]
  limitPerBatch?: number
  sleepMsBetweenBatches?: number
}

type BodyListAll = {
  cardStatuses?: string[]
  categoryIds?: number[]
  limitPerPage?: number
  sleepMsBetweenPages?: number
  maxPages?: number
}

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const body = (req.body ?? {}) as Partial<BodySelective & BodyListAll>

    const exec = await yandexOfferCardsListAll.run({
      container: req.scope,
      input: {
        cardStatuses: body.cardStatuses,
        categoryIds: body.categoryIds,
        limitPerPage: body.limitPerPage,
        sleepMsBetweenPages: body.sleepMsBetweenPages,
        maxPages: body.maxPages,
      },
    })
    return res.status(200).json(exec.result)
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? "Internal error" })
  }
}
