export const YM_LEAF_CATEGORY_ID = Number(process.env.YM_DEMO_CATEGORY_ID || 91491)

export type YmOffer = {
  offerId: string
  name: string
  marketCategoryId: number
  pictures: string[]
  vendor: string
  description: string
}

export const DEMO_YM_OFFERS: YmOffer[] = [
  {
    offerId: "DEMO-001",
    name: "Demo Product One",
    marketCategoryId: YM_LEAF_CATEGORY_ID,
    pictures: ["https://picsum.photos/seed/ymdemo1/800/800"],
    vendor: "Demo",
    description: "Minimal description",
  },
  {
    offerId: "DEMO-002",
    name: "Demo Product Two",
    marketCategoryId: YM_LEAF_CATEGORY_ID,
    pictures: ["https://picsum.photos/seed/ymdemo2/800/800"],
    vendor: "Demo",
    description: "Minimal description",
  },
]

export const getDemoYandexOffers = (): YmOffer[] => DEMO_YM_OFFERS.map(o => ({ ...o, pictures: [...o.pictures] }))
