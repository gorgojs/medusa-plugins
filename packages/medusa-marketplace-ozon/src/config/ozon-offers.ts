export const OZONE_CATEGORY_ID = Number(process.env.OZONE_CATEGORY_ID || 200001517);

export type OzonOffer = {
  offer_id: string;
  price: string;
  quantity: number;
  description_category_id: number;
  type_id: number;
  name: string;
  attributes: {
    complex_id: number;
    id: number;
    values: { dictionary_value_id?: number; value: string }[];
  }[];
  images: string[];
  weight: number;
  weight_unit: string;
  dimensions: {
    length: number;
    width: number;
    height: number;
    depth: number;
  };
  vat: string;
};

export const DEMO_OZON_OFFERS: OzonOffer[] = [
  {
    offer_id: "SKU-12345-NEW",
    price: "1500",
    quantity: 1,
    description_category_id: OZONE_CATEGORY_ID,
    type_id: 93228,
    name: "Термофутболка",
    attributes: [
      { complex_id: 0, id: 4295, values: [{ dictionary_value_id: 971082156, value: "48;50;52" }] },
      { complex_id: 0, id: 10096, values: [{ dictionary_value_id: 61576, value: "Черный" }] },
      { complex_id: 0, id: 8292, values: [{ value: "SKU-12345-NEW" }] },
      { complex_id: 0, id: 9163, values: [{ value: "Мужской" }] },
      { complex_id: 0, id: 4495, values: [{ value: "Зима" }] },
      { complex_id: 0, id: 4496, values: [{ value: "80% хлопок, 15% полиэстер, 5% эластан" }] },
      { complex_id: 0, id: 4596, values: [{ value: "Длинный" }] },
      { complex_id: 0, id: 4389, values: [{ value: "Россия" }] },
    ],
    images: [
      "https://kelme.ua/wp-content/uploads/2021/06/termo-futbolka-kelme-tech-fit-3891112.9000.jpg",
    ],
    weight: 300,
    weight_unit: "g",
    dimensions: {
      length: 20,
      width: 10,
      height: 5,
      depth: 2,
    },
    vat: "0.1",
  },
  {
    offer_id: "SKU-12346-NEW",
    price: "1200",
    quantity: 1,
    description_category_id: OZONE_CATEGORY_ID,
    type_id: 93229,
    name: "Спортивная футболка",
    attributes: [
      { complex_id: 0, id: 4295, values: [{ dictionary_value_id: 971082156, value: "48;50" }] },
      { complex_id: 0, id: 10096, values: [{ dictionary_value_id: 61577, value: "Синий" }] },
      { complex_id: 0, id: 9163, values: [{ value: "Мужской" }] },
      { complex_id: 0, id: 8292, values: [{ value: "SKU-12346-NEW" }] },
      { complex_id: 0, id: 4596, values: [{ value: "Короткий" }] },
      { complex_id: 0, id: 4495, values: [{ value: "Лето" }] },
      { complex_id: 0, id: 4496, values: [{ value: "Полиэстер" }] },
      { complex_id: 0, id: 4389, values: [{ value: "Россия" }] },
    ],
    images: [
      "https://kelme.ua/wp-content/uploads/2021/06/sport-futbolka-3891112.9000.jpg",
    ],
    weight: 250,
    weight_unit: "g",
    dimensions: {
      length: 19,
      width: 9,
      height: 4,
      depth: 1,
    },
    vat: "0.1",
  },
];

export const getDemoOzonOffers = (): OzonOffer[] => {
  return DEMO_OZON_OFFERS.map((offer) => ({ ...offer, images: [...offer.images] }));
};
