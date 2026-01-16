import type { PluginCategory } from "@/components/landing/plugins-section";
import OneCIcon from "@/svg/icons/1c-icon.svg";
import RobokassaIcon from "@/svg/icons/robokassa-icon.svg";
import TbankIcon from "@/svg/icons/tbank-icon.svg";
import YandexIcon from "@/svg/icons/yandex-ru-icon.svg";
import YookassaIcon from "@/svg/icons/yookassa-icon.svg";
import ApishipIcon from "@/svg/icons/apiship-icon.svg";

export const pluginCategories: PluginCategory[] = [
  {
    id: "payment",
    title: {
      en: "Payment",
      ru: "Платежи",
    },
    description: {
      en: "Accept payment with a variety of payment providers.",
      ru: "Принимайте платежи с помощью различных платежных провайдеров.",
    },
    plugins: [
      {
        id: "t-kassa",
        name: {
          en: "T-Kassa",
          ru: "T-Kassa",
        },
        description: {
          en: "Enable payments with TKassa",
          ru: "Подключите платежи с помощью TKassa",
        },
        icon: <TbankIcon />,
      },
      {
        id: "yookassa",
        name: {
          en: "YooKassa",
          ru: "ЮKassa",
        },
        description: {
          en: "Handle payments through YooKassa",
          ru: "Обрабатывайте платежи через ЮKassa",
        },
        icon: <YookassaIcon />,
      },
      {
        id: "robokassa",
        name: {
          en: "Robokassa",
          ru: "Robokassa",
        },
        description: {
          en: "Accept Robokassa payments",
          ru: "Принимайте платежи через Robokassa",
        },
        icon: <RobokassaIcon />,
      },
    ],
  },
   {
    id: "fulfillment",
    title: {
      en: "Fulfillment",
      ru: "Фулфилмент",
    },
    description: {
      en: "Handle order fulfillment and shipping with multiple providers.",
      ru: "Управляйте выполнением заказов и доставкой через разных провайдеров.",
    },
    plugins: [
      {
        id: "apiship",
        name: {
          en: "ApiShip",
          ru: "ApiShip",
        },
        description: {
          en: "Ship orders with ApiShip",
          ru: "Отправляйте заказы с помощью ApiShip",
        },
        icon: <ApishipIcon />,
      },
    ],
  },
  {
    id: "erp",
    title: {
      en: "ERP",
      ru: "ERP",
    },
    description: {
      en: "Connect and streamline inventory, orders, and customer management through ERP integrations.",
      ru: "Подключайте и оптимизируйте управление остатками, заказами и клиентами через ERP-интеграции.",
    },
    plugins: [
      {
        id: "1c-enterprise",
        name: {
          en: "1C",
          ru: "1C",
        },
        description: {
          en: "Sync products, orders, and inventory",
          ru: "Синхронизируйте товары, заказы и остатки",
        },
        icon: <OneCIcon />,
      },
    ],
  },
  {
    id: "others",
    title: {
      en: "Others",
      ru: "Прочие",
    },
    description: {
      en: "Plugins for integrating third-party services and extending functionality.",
      ru: "Плагины интеграции сторонних сервисов и расширенния функциональности.",
    },
    plugins: [
      {
        id: "yandex-yml-feed",
        name: {
          en: "Yandex YML Feed",
          ru: "Яндекс YML-фид",
        },
        description: {
          en: "Create and manage Yandex Market product feeds",
          ru: "Создавайте и управляйте фидами продуктов для Яндекс Маркета",
        },
        icon: <YandexIcon />,
      },
    ],
  },
];
