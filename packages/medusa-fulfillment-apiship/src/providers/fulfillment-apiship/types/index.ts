import {
  type CostDeliveryCostVatEnum,
} from "../../../lib/apiship-client"

export const FulfillmentProviderKeys = {
  APISHIP: "apiship",
}

interface DefaultSenderSettings {
  /**
   * Код страны в соответствии с ISO 3166-1 alpha-2
   */
  countryCode: string
  /**
   * Полный адрес одной строкой. При заполнении этого поля остальные можно не заполнять, кроме countryCode
   */
  addressString: string
  /**
   * ФИО контактного лица
   */
  contactName: string
  /**
   * Контактный телефон
   */
  phone: string
}

interface DefaultProductSizes {
  /**
   * Длина товара по умолчанию
   */
  length: number
  /**
   * Ширина товара по умолчанию
   */
  width: number
  /**
   * Высота товара по умолчанию
   */
  height: number
  /**
   * Вес товара по умолчанию
   */
  weight: number
}

interface Settings {
  /**
   * Настройка подключений
   */
  connectionsMap?: Record<string, string>
  /**
   * Параменты магазина по умолчанию
   */
  defaultSenderSettings: DefaultSenderSettings
  /**
   * Размеры товара по умолчанию
   */
  defaultProductSizes?: DefaultProductSizes
  /**
   * Процентная ставка НДС:
   * -1 - Без НДС
   * 0 - НДС 0%
   * 5 - НДС 5%
   * 7 - НДС 7%
   * 10 - НДС 10%
   * 20 - НДС 20%
   */
  deliveryCostVat: CostDeliveryCostVatEnum
  /**
   * Использовать ли наложенный платеж при создании заказа
   */
  isCod?: boolean
}

export interface ApishipOptions {
  /**
   * Токен ApiShip
   */
  token: string
  /**
   * Использовать тестовый режим
   */
  isTest?: boolean
  /**
   * Параменты провайдера
   */
  settings: Settings
}
