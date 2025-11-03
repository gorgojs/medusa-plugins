// src/scripts/seed-ozon-shirts.ts
import type { ExecArgs } from "@medusajs/framework/types"
import {
  ContainerRegistrationKeys,
  Modules,
  ProductStatus,
} from "@medusajs/framework/utils"
import {
  createProductsWorkflow,
  createProductCategoriesWorkflow,
  createSalesChannelsWorkflow,
  updateStoresWorkflow,
} from "@medusajs/medusa/core-flows"

export default async function seedOzonShirts({ container }: ExecArgs) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER)
  const salesChannelModuleService = container.resolve(Modules.SALES_CHANNEL)
  const storeModuleService = container.resolve(Modules.STORE)

  const [store] = await storeModuleService.listStores()
  let defaultSalesChannel = await salesChannelModuleService.listSalesChannels({
    name: "Default Sales Channel",
  })

  if (!defaultSalesChannel.length) {
    const { result } = await createSalesChannelsWorkflow(container).run({
      input: { salesChannelsData: [{ name: "Default Sales Channel" }] },
    })
    defaultSalesChannel = result
  }

  await updateStoresWorkflow(container).run({
    input: {
      selector: { id: store.id },
      update: {
        supported_currencies: [{ currency_code: "rub", is_default: true }],
        default_sales_channel_id: defaultSalesChannel[0].id,
      },
    },
  })

  const { result: categories } = await createProductCategoriesWorkflow(container).run({
    input: { product_categories: [{ name: "Shirts", is_active: true }] },
  })
  const shirtsCatId = categories[0].id

  const RUB = (v: number) => Math.round(v * 100)
  const now = Date.now()

  
  const COMMON = {
    origin_country: "RU" as const,
    hs_code: "610910",
    weight: 350,
    metadata_base: {
      ozon_description_category_id: 200001517,
      ozon_type_id: 93228,
      vat: "0",
      package_length_cm: 30,
      package_width_cm: 20,
      package_height_cm: 3,
      package_weight_kg: 0.35,
      manufacturerCountries: ["Россия"],
      size: "48;50",
    },
    options: [
      { title: "Size", values: ["48;50"] },
    ],
  }

  const { result: products } = await createProductsWorkflow(container).run({
    input: {
      products: [
        {
          title: "Thermal T-Shirt Black",
          handle: `thermal-tshirt-black-${now}`,
          description: "Термофутболка, тёплая, чёрная.",
          status: ProductStatus.PUBLISHED,
          category_ids: [shirtsCatId],

          origin_country: COMMON.origin_country,
          hs_code: COMMON.hs_code,
          weight: COMMON.weight,
          metadata: { ...COMMON.metadata_base, color: "Черный" },

          images: [
            { url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-front.png" },
            { url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-back.png" },
          ],
          thumbnail:
            "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-front.png",

          options: [
            ...COMMON.options,
            { title: "Color", values: ["Черный"] },
          ],
          variants: [
            {
              title: "48;50 / Черный",
              sku: `THERMO-BLACK-48-50-${now}`,
              options: { Size: "48;50", Color: "Черный" },
              prices: [{ currency_code: "rub", amount: RUB(1999) }],
            },
          ],
          sales_channels: [{ id: defaultSalesChannel[0].id }],
        },

        {
          title: "Thermal T-Shirt Gray",
          handle: `thermal-tshirt-gray-${now}`,
          description: "Термофутболка, серая.",
          status: ProductStatus.PUBLISHED,
          category_ids: [shirtsCatId],

          origin_country: COMMON.origin_country,
          hs_code: COMMON.hs_code,
          weight: COMMON.weight,
          metadata: { ...COMMON.metadata_base, color: "Серый" },

          images: [
            { url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-white-front.png" },
            { url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-white-back.png" },
          ],
          thumbnail:
            "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-white-front.png",

          options: [
            ...COMMON.options,
            { title: "Color", values: ["Серый"] },
          ],
          variants: [
            {
              title: "48;50 / Серый",
              sku: `THERMO-GRAY-48-50-${now}`,
              options: { Size: "48;50", Color: "Серый" },
              prices: [{ currency_code: "rub", amount: RUB(1899) }],
            },
          ],
          sales_channels: [{ id: defaultSalesChannel[0].id }],
        },
      ],
    },
  })

  logger.info(`Seeded OZON shirts: ${products.length}`)
}
