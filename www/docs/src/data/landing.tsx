import type { PluginCategory } from "@/components/landing/plugins-section";
import OneCIcon from "@/svg/icons/1c-icon.svg";
import RobokassaIcon from "@/svg/icons/robokassa-icon.svg";
import TbankIcon from "@/svg/icons/tbank-icon.svg";
import YandexIcon from "@/svg/icons/yandex-ru-icon.svg";
import YookassaIcon from "@/svg/icons/yookassa-icon.svg";

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
          en: "Enable seamless payments with TKassa",
          ru: "Обеспечьте бесшовные платежи с помощью TKassa",
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
        id: "1c-erp",
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
      en: "A variety of plugins to integrate advanced features and third-party services.",
      ru: "Разнообразные плагины для интеграции расширенных функций и сторонних сервисов.",
    },
    plugins: [
      {
        id: "yandex-feed",
        name: {
          en: "Yandex Feed",
          ru: "Яндекс Фид",
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
