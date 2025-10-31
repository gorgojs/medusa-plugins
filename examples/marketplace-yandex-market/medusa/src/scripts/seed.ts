// src/scripts/seed-rub-phones.ts
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

export default async function seedRubPhones({ container }: ExecArgs) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER)
  const salesChannelModuleService = container.resolve(Modules.SALES_CHANNEL)
  const storeModuleService = container.resolve(Modules.STORE)

  // 1) Сделаем RUB дефолтной валютой и убедимся, что есть Default Sales Channel
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

  // 2) Категория "Mobile Phones"
  const { result: categories } = await createProductCategoriesWorkflow(container).run({
    input: { product_categories: [{ name: "Mobile Phones", is_active: true }] },
  })
  const phonesCatId = categories[0].id

  // helper: ₽ → копейки
  const RUB = (v: number) => Math.round(v * 100)

  // Общие атрибуты (чтобы не дублировать)
  const COMMON = {
    subtitle: "Smartphone",
    origin_country: "CN",       // ISO2 страны происхождения
    material: "Aluminum/Glass",
    hs_code: "8517130000",      // ТН ВЭД для смартфонов
    weight: 190,                // граммы
    length: 150,                // мм (высота корпуса)
    height: 8,                  // мм (толщина)
    width: 72,                  // мм (ширина)
    metadata: { warranty_months: 12 },
  }

  // 3) Продукты: 3 смартфона с вариантами и ценами в RUB (minor units)
  const { result: products } = await createProductsWorkflow(container).run({
    input: {
      products: [
        {
          title: "MedusaPhone X",
          handle: `medusaphone-x-${Date.now()}`,
          description: 'Flagship 6.7" OLED, triple camera, 5G.',
          status: ProductStatus.PUBLISHED,
          category_ids: [phonesCatId],

          // заполнение ранее пустых полей
          subtitle: COMMON.subtitle,
          origin_country: COMMON.origin_country,
          material: COMMON.material,
          hs_code: COMMON.hs_code,
          weight: COMMON.weight,
          length: 161,
          height: 8.2,
          width: 76,
          metadata: COMMON.metadata,

          images: [
            {
              url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
            },
            {
              url: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80",
            },
          ],
          thumbnail:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",

          options: [
            { title: "Storage", values: ["128GB", "256GB", "512GB"] },
            { title: "Color", values: ["Black", "Silver"] },
          ],
          variants: [
            {
              title: "128GB / Black",
              sku: `MPX-128-BLK-${Date.now()}`,
              options: { Storage: "128GB", Color: "Black" },
              prices: [{ currency_code: "rub", amount: RUB(69990) }], // 69 990 ₽
            },
            {
              title: "256GB / Silver",
              sku: `MPX-256-SLV-${Date.now()}`,
              options: { Storage: "256GB", Color: "Silver" },
              prices: [{ currency_code: "rub", amount: RUB(79990) }],
            },
          ],
          sales_channels: [{ id: defaultSalesChannel[0].id }],
        },

        {
          title: "MedusaPhone S",
          handle: `medusaphone-s-${Date.now()}`,
          description: 'Balanced 6.1" AMOLED, dual camera, 5G.',
          status: ProductStatus.PUBLISHED,
          category_ids: [phonesCatId],

          subtitle: COMMON.subtitle,
          origin_country: COMMON.origin_country,
          material: COMMON.material,
          hs_code: COMMON.hs_code,
          weight: 178,
          length: 147,
          height: 7.9,
          width: 71,
          metadata: COMMON.metadata,

          images: [
            {
              url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
            },
          ],
          thumbnail:
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",

          options: [
            { title: "Storage", values: ["128GB", "256GB"] },
            { title: "Color", values: ["Blue", "Black"] },
          ],
          variants: [
            {
              title: "128GB / Blue",
              sku: `MPS-128-BLU-${Date.now()}`,
              options: { Storage: "128GB", Color: "Blue" },
              prices: [{ currency_code: "rub", amount: RUB(49990) }],
            },
            {
              title: "256GB / Black",
              sku: `MPS-256-BLK-${Date.now()}`,
              options: { Storage: "256GB", Color: "Black" },
              prices: [{ currency_code: "rub", amount: RUB(54990) }],
            },
          ],
          sales_channels: [{ id: defaultSalesChannel[0].id }],
        },

        {
          title: "MedusaPhone Lite",
          handle: `medusaphone-lite-${Date.now()}`,
          description: 'Budget 6.5" IPS, single camera, 4G.',
          status: ProductStatus.PUBLISHED,
          category_ids: [phonesCatId],

          subtitle: COMMON.subtitle,
          origin_country: COMMON.origin_country,
          material: COMMON.material,
          hs_code: COMMON.hs_code,
          weight: 195,
          length: 164,
          height: 8.6,
          width: 76,
          metadata: COMMON.metadata,

          images: [
            {
              url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
            },
          ],
          thumbnail:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",

          options: [{ title: "Storage", values: ["64GB", "128GB"] }],
          variants: [
            {
              title: "64GB",
              sku: `MPL-64-${Date.now()}`,
              options: { Storage: "64GB" },
              prices: [{ currency_code: "rub", amount: RUB(19990) }],
            },
            {
              title: "128GB",
              sku: `MPL-128-${Date.now()}`,
              options: { Storage: "128GB" },
              prices: [{ currency_code: "rub", amount: RUB(22990) }],
            },
          ],
          sales_channels: [{ id: defaultSalesChannel[0].id }],
        },
      ],
    },
  })

  logger.info(`Seeded phones: ${products.length}`)
}
