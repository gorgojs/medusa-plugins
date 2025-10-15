import { CreateInventoryLevelInput, ExecArgs } from "@medusajs/framework/types";
import {
  ContainerRegistrationKeys,
  Modules,
  ProductStatus,
} from "@medusajs/framework/utils";
import {
  createApiKeysWorkflow,
  createInventoryLevelsWorkflow,
  createProductCategoriesWorkflow,
  createProductsWorkflow,
  createRegionsWorkflow,
  createSalesChannelsWorkflow,
  createShippingOptionsWorkflow,
  createShippingProfilesWorkflow,
  createStockLocationsWorkflow,
  createTaxRegionsWorkflow,
  linkSalesChannelsToApiKeyWorkflow,
  linkSalesChannelsToStockLocationWorkflow,
  updateStoresStep,
  updateStoresWorkflow,
} from "@medusajs/medusa/core-flows";
import {
  createWorkflow,
  transform,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk";
import { MARKETPLACE_MODULE } from "@gorgo/medusa-marketplace/modules/marketplace"
import { MarketplaceModuleService } from "@gorgo/medusa-marketplace/modules/marketplace/services"

const VARIANT_PRICES = [
  { amount: 100, currency_code: "rub" },
  { amount: 4, currency_code: "byn" },
  { amount: 600, currency_code: "kzt" },
  { amount: 16000, currency_code: "uzs" },
] as const

const updateStoreCurrencies = createWorkflow(
  "update-store-currencies",
  (input: {
    supported_currencies: { currency_code: string; is_default?: boolean }[];
    store_id: string;
  }) => {
    const normalizedInput = transform({ input }, (data) => {
      return {
        selector: { id: data.input.store_id },
        update: {
          supported_currencies: data.input.supported_currencies.map(
            (currency) => {
              return {
                currency_code: currency.currency_code,
                is_default: currency.is_default ?? false,
              };
            }
          ),
        },
      };
    });

    const stores = updateStoresStep(normalizedInput);

    return new WorkflowResponse(stores);
  }
);

export default async function seedDemoData({ container }: ExecArgs) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER);
  const link = container.resolve(ContainerRegistrationKeys.LINK);
  const query = container.resolve(ContainerRegistrationKeys.QUERY);
  const fulfillmentModuleService = container.resolve(Modules.FULFILLMENT);
  const salesChannelModuleService = container.resolve(Modules.SALES_CHANNEL);
  const storeModuleService = container.resolve(Modules.STORE);

  const countries = ["ru", "by", "kz", "uz"];

  logger.info("Seeding store data...");
  const [store] = await storeModuleService.listStores();

  let defaultSalesChannel = await salesChannelModuleService.listSalesChannels({
    name: "Default Sales Channel",
  });

  if (!defaultSalesChannel.length) {
    // create the default sales channel
    const { result: salesChannelResult } = await createSalesChannelsWorkflow(
      container
    ).run({
      input: {
        salesChannelsData: [
          {
            name: "Default Sales Channel",
          },
        ],
      },
    });
    defaultSalesChannel = salesChannelResult;
  }

  await createSalesChannelsWorkflow(
    container
  ).run({
    input: {
      salesChannelsData: [
        { name: "Yandex Market Sales Channel" },
        { name: "Wildberries Sales Channel" },
        { name: "Ozon Sales Channel" }
      ],
    },
  });

  const salesChannels = await salesChannelModuleService.listSalesChannels();

  await updateStoreCurrencies(container).run({
    input: {
      store_id: store.id,
      supported_currencies: [
        { currency_code: "rub", is_default: true },
        { currency_code: "byn" },
        { currency_code: "kzt" },
        { currency_code: "uzs" },
      ],
    },
  });

  await updateStoresWorkflow(container).run({
    input: {
      selector: { id: store.id },
      update: {
        default_sales_channel_id: defaultSalesChannel[0].id,
      },
    },
  });
  logger.info("Seeding region data...");
  const { result: regionResult } = await createRegionsWorkflow(container).run({
    input: {
      regions: [
        {
          name: "Россия и СНГ",
          currency_code: "rub",
          countries: ["ru", "by", "kz", "uz"],
          payment_providers: ["pp_system_default"],
        },
      ],
    },
  });
  const region = regionResult[0];
  logger.info("Finished seeding regions.");

  logger.info("Seeding tax regions...");
  await createTaxRegionsWorkflow(container).run({
    input: countries.map((country_code) => ({
      country_code,
      provider_id: "tp_system",
    })),
  });
  logger.info("Finished seeding tax regions.");

  logger.info("Seeding stock location data...");
  const { result: stockLocationResult } = await createStockLocationsWorkflow(
    container
  ).run({
    input: {
      locations: [
        {
          name: "Склад Medusa Store",
          address: {
            city: "Санкт-Петербург",
            country_code: "ru",
            address_1: "Улица Пушкина, дом 1",
          },
        },
      ],
    },
  });
  const stockLocation = stockLocationResult[0];

  await updateStoresWorkflow(container).run({
    input: {
      selector: { id: store.id },
      update: {
        default_location_id: stockLocation.id,
      },
    },
  });

  await link.create({
    [Modules.STOCK_LOCATION]: {
      stock_location_id: stockLocation.id,
    },
    [Modules.FULFILLMENT]: {
      fulfillment_provider_id: "manual_manual",
    },
  });

  logger.info("Seeding fulfillment data...");
  const shippingProfiles = await fulfillmentModuleService.listShippingProfiles({
    type: "default",
  });
  let shippingProfile = shippingProfiles.length ? shippingProfiles[0] : null;

  if (!shippingProfile) {
    const { result: shippingProfileResult } =
      await createShippingProfilesWorkflow(container).run({
        input: {
          data: [
            {
              name: "Default Shipping Profile",
              type: "default",
            },
          ],
        },
      });
    shippingProfile = shippingProfileResult[0];
  }

  const fulfillmentSet = await fulfillmentModuleService.createFulfillmentSets({
    name: "Доставка по России и СНГ",
    type: "shipping",
    service_zones: [
      {
        name: "Россия и СНГ",
        geo_zones: [
          {
            country_code: "ru",
            type: "country",
          },
          {
            country_code: "by",
            type: "country",
          },
          {
            country_code: "kz",
            type: "country",
          },
          {
            country_code: "uz",
            type: "country",
          },
        ],
      },
    ],
  });

  await link.create({
    [Modules.STOCK_LOCATION]: {
      stock_location_id: stockLocation.id,
    },
    [Modules.FULFILLMENT]: {
      fulfillment_set_id: fulfillmentSet.id,
    },
  });

  await createShippingOptionsWorkflow(container).run({
    input: [
      {
        name: "Standard Shipping",
        price_type: "flat",
        provider_id: "manual_manual",
        service_zone_id: fulfillmentSet.service_zones[0].id,
        shipping_profile_id: shippingProfile.id,
        type: {
          label: "Standard",
          description: "Ship in 2-3 days.",
          code: "standard",
        },
        prices: [
          {
            amount: 100,
            currency_code: "rub",
          },
        ],
        rules: [
          {
            attribute: "enabled_in_store",
            value: "true",
            operator: "eq",
          },
          {
            attribute: "is_return",
            value: "false",
            operator: "eq",
          },
        ],
      },
    ],
  });
  logger.info("Finished seeding fulfillment data.");

  await linkSalesChannelsToStockLocationWorkflow(container).run({
    input: {
      id: stockLocation.id,
      add: [defaultSalesChannel[0].id],
    },
  });
  logger.info("Finished seeding stock location data.");

  logger.info("Seeding publishable API key data...");
  const { result: publishableApiKeyResult } = await createApiKeysWorkflow(
    container
  ).run({
    input: {
      api_keys: [
        {
          title: "Webshop",
          type: "publishable",
          created_by: "",
        },
      ],
    },
  });
  const publishableApiKey = publishableApiKeyResult[0];

  await linkSalesChannelsToApiKeyWorkflow(container).run({
    input: {
      id: publishableApiKey.id,
      add: [defaultSalesChannel[0].id],
    },
  });
  logger.info("Finished seeding publishable API key data.");

  logger.info("Seeding product data...");

  const { result: categoryResult } = await createProductCategoriesWorkflow(
    container
  ).run({
    input: {
      product_categories: [
        {
          name: "Футболки",
          is_active: true,
        },
        {
          name: "Толстовки",
          is_active: true,
        },
        {
          name: "Брюки",
          is_active: true,
        },
        {
          name: "Мерч",
          is_active: true,
        },
      ],
    },
  });

  await createProductsWorkflow(container).run({
    input: {
      products: [
        {
          title: "Футболка Medusa",
          category_ids: [
            categoryResult.find((cat) => cat.name === "Футболки")!.id,
          ],
          description:
            "Классическая футболка из хлопка: базовый гардероб на каждый день.",
          handle: "t-shirt",
          height: 2,
          width: 48,
          length: 68,
          weight: 1,
          status: ProductStatus.PUBLISHED,
          shipping_profile_id: shippingProfile.id,
          images: [
            {
              url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-front.png",
            },
            {
              url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-back.png",
            },
            {
              url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-white-front.png",
            },
            {
              url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-white-back.png",
            },
          ],
          metadata: {
            vendor: "medusa"
          },
          options: [
            {
              title: "Размер",
              values: ["S", "M", "L", "XL"],
            },
            {
              title: "Цвет",
              values: ["Чёрный", "Белый"],
            },
          ],
          variants: [
            {
              title: "S / Чёрный",
              sku: "SHIRT-S-BLACK",
              options: {
                Размер: "S",
                Цвет: "Чёрный",
              },
              prices: [...VARIANT_PRICES],
            },
            {
              title: "S / Белый",
              sku: "SHIRT-S-WHITE",
              options: {
                Размер: "S",
                Цвет: "Белый",
              },
              prices: [...VARIANT_PRICES],
            },
            {
              title: "M / Чёрный",
              sku: "SHIRT-M-BLACK",
              options: {
                Размер: "M",
                Цвет: "Чёрный",
              },
              prices: [...VARIANT_PRICES],
            },
            {
              title: "M / Белый",
              sku: "SHIRT-M-WHITE",
              options: {
                Размер: "M",
                Цвет: "Белый",
              },
              prices: [...VARIANT_PRICES],
            },
            {
              title: "L / Чёрный",
              sku: "SHIRT-L-BLACK",
              options: {
                Размер: "L",
                Цвет: "Чёрный",
              },
              prices: [...VARIANT_PRICES],
            },
            {
              title: "L / Белый",
              sku: "SHIRT-L-WHITE",
              options: {
                Размер: "L",
                Цвет: "Белый",
              },
              prices: [...VARIANT_PRICES],
            },
            {
              title: "XL / Чёрный",
              sku: "SHIRT-XL-BLACK",
              options: {
                Размер: "XL",
                Цвет: "Чёрный",
              },
              prices: [...VARIANT_PRICES],
            },
            {
              title: "XL / Белый",
              sku: "SHIRT-XL-WHITE",
              options: {
                Размер: "XL",
                Цвет: "Белый",
              },
              prices: [...VARIANT_PRICES],
            },
          ],
          sales_channels: salesChannels
        },
        {
          title: "Толстовка Medusa",
          category_ids: [
            categoryResult.find((cat) => cat.name === "Толстовки")!.id,
          ],
          description:
            "Хлопковая толстовка для повседневного комфорта.",
          handle: "sweatshirt",
          height: 2,
          width: 48,
          length: 68,
          weight: 1,
          status: ProductStatus.PUBLISHED,
          shipping_profile_id: shippingProfile.id,
          images: [
            {
              url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png",
            },
            {
              url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-back.png",
            },
          ],
          metadata: {
            vendor: "medusa"
          },
          options: [
            {
              title: "Размер",
              values: ["S", "M", "L", "XL"],
            },
          ],
          variants: [
            {
              title: "S",
              sku: "SWEATSHIRT-S",
              options: {
                Размер: "S",
              },
              prices: [...VARIANT_PRICES],
            },
            {
              title: "M",
              sku: "SWEATSHIRT-M",
              options: {
                Размер: "M",
              },
              prices: [...VARIANT_PRICES],
            },
            {
              title: "L",
              sku: "SWEATSHIRT-L",
              options: {
                Размер: "L",
              },
              prices: [...VARIANT_PRICES],
            },
            {
              title: "XL",
              sku: "SWEATSHIRT-XL",
              options: {
                Размер: "XL",
              },
              prices: [...VARIANT_PRICES],
            },
          ],
          sales_channels: salesChannels,
        },
        {
          title: "Спортивные брюки Medusa",
          category_ids: [
            categoryResult.find((cat) => cat.name === "Брюки")!.id,
          ],
          description:
            "Хлопковые спортивные брюки для комфорта каждый день.",
          handle: "sweatpants",
          height: 2,
          width: 48,
          length: 68,
          weight: 1,
          status: ProductStatus.PUBLISHED,
          shipping_profile_id: shippingProfile.id,
          images: [
            {
              url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatpants-gray-front.png",
            },
            {
              url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatpants-gray-back.png",
            },
          ],
          metadata: {
            vendor: "medusa"
          },
          options: [
            {
              title: "Размер",
              values: ["S", "M", "L", "XL"],
            },
          ],
          variants: [
            {
              title: "S",
              sku: "SWEATPANTS-S",
              options: {
                Размер: "S",
              },
              prices: [...VARIANT_PRICES],
            },
            {
              title: "M",
              sku: "SWEATPANTS-M",
              options: {
                Размер: "M",
              },
              prices: [...VARIANT_PRICES],
            },
            {
              title: "L",
              sku: "SWEATPANTS-L",
              options: {
                Размер: "L",
              },
              prices: [...VARIANT_PRICES],
            },
            {
              title: "XL",
              sku: "SWEATPANTS-XL",
              options: {
                Размер: "XL",
              },
              prices: [...VARIANT_PRICES],
            },
          ],
          sales_channels: salesChannels,
        },
        {
          title: "Шорты Medusa",
          category_ids: [
            categoryResult.find((cat) => cat.name === "Мерч")!.id,
          ],
          description:
            "Хлопковые шорты для тёплой погоды и отдыха.",
          handle: "shorts",
          height: 2,
          width: 48,
          length: 68,
          weight: 1,
          status: ProductStatus.PUBLISHED,
          shipping_profile_id: shippingProfile.id,
          images: [
            {
              url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/shorts-vintage-front.png",
            },
            {
              url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/shorts-vintage-back.png",
            },
          ],
          metadata: {
            vendor: "medusa"
          },
          options: [
            {
              title: "Размер",
              values: ["S", "M", "L", "XL"],
            },
          ],
          variants: [
            {
              title: "S",
              sku: "SHORTS-S",
              options: {
                Размер: "S",
              },
              prices: [...VARIANT_PRICES],
            },
            {
              title: "M",
              sku: "SHORTS-M",
              options: {
                Размер: "M",
              },
              prices: [...VARIANT_PRICES],
            },
            {
              title: "L",
              sku: "SHORTS-L",
              options: {
                Размер: "L",
              },
              prices: [...VARIANT_PRICES],
            },
            {
              title: "XL",
              sku: "SHORTS-XL",
              options: {
                Размер: "XL",
              },
              prices: [...VARIANT_PRICES],
            },
          ],
          sales_channels: salesChannels,
        },
      ],
    },
  });
  logger.info("Finished seeding product data.");

  logger.info("Seeding inventory levels.");

  const { data: inventoryItems } = await query.graph({
    entity: "inventory_item",
    fields: ["id"],
  });

  const inventoryLevels: CreateInventoryLevelInput[] = [];
  for (const inventoryItem of inventoryItems) {
    const inventoryLevel = {
      location_id: stockLocation.id,
      stocked_quantity: 1000000,
      inventory_item_id: inventoryItem.id,
    };
    inventoryLevels.push(inventoryLevel);
  }

  await createInventoryLevelsWorkflow(container).run({
    input: {
      inventory_levels: inventoryLevels,
    },
  });

  logger.info("Finished seeding inventory levels data.");
}