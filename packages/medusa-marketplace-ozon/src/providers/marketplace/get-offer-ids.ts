export type GetOfferIdsStepInput = any

export const getOfferIds = async (input: GetOfferIdsStepInput) => {
  const offerIds: string[] = []

  input.items.forEach((element) => {
    offerIds.push(element.offer_id)
  })

  return offerIds
}
