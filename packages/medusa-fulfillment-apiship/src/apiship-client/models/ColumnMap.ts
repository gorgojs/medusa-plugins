/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Item } from './Item';
export type ColumnMap = {
    /**
     * Номер заказа в системе клиента
     */
    'order.clientNumber': string;
    /**
     * Вес всего заказа в граммах
     */
    'order.weight'?: number;
    /**
     * Высота заказа в сантиметрах
     */
    'order.height'?: number;
    /**
     * Длина заказа в сантиметрах
     */
    'order.length'?: number;
    /**
     * Ширина заказа в сантиметрах
     */
    'order.width'?: number;
    /**
     * Код службы доставки
     */
    'order.providerKey'?: string;
    /**
     * ID подключения к СД
     */
    'order.providerConnectId'?: number;
    /**
     * Тип забора груза (1 - от двери клиента; 2 – клиент привозит заказ на склад СД)
     */
    'order.pickupType': number;
    /**
     * Тип доставки (1 - до двери; 2 – до ПВЗ)
     */
    'order.deliveryType': number;
    /**
     * Идентификатор точки забора товара в системе apiship
     */
    'order.pointInId'?: number;
    /**
     * Идентификатор точки выдачи товара в системе apiship
     */
    'order.pointOutId'?: number;
    /**
     * Тариф службы доставки, по которому осуществляется доставка
     */
    'order.tariffId': number;
    /**
     * Начальное время доставки
     */
    'order.deliveryTimeStart'?: string;
    /**
     * Конечное время доставки
     */
    'order.deliveryTimeEnd'?: string;
    /**
     * Оценочная стоимость / сумма страховки (в рублях)
     */
    'cost.assessedCost': number;
    /**
     * Сумма наложенного платежа с учетом НДС (в рублях)
     */
    'cost.codCost': number;
    /**
     * Стоимость доставки с получателя. codCost должен содержать в себе эту сумму.
     */
    'cost.deliveryCost'?: number;
    /**
     * Контактный телефон
     */
    'sender.phone': string;
    /**
     * Название компании
     */
    'sender.companyName'?: string;
    /**
     * ФИО контактного лица
     */
    'sender.contactName': string;
    /**
     * Код страны в соответствии с ISO 3166-1 alpha-2
     */
    'sender.countryCode': string;
    /**
     * Область или республика или край
     */
    'sender.region': string;
    /**
     * Город или населенный пункт
     */
    'sender.city': string;
    /**
     * Улица
     */
    'sender.street': string;
    /**
     * Дом
     */
    'sender.house': string;
    /**
     * Строение/Корпус
     */
    'sender.block'?: string;
    /**
     * Офис/Квартира
     */
    'sender.office'?: string;
    /**
     * Контактный email адрес
     */
    'sender.email'?: string;
    /**
     * Адрес одной строкой
     */
    'sender.AddressString'?: string;
    /**
     * Контактный телефон
     */
    'recipient.phone': string;
    /**
     * Название компании
     */
    'recipient.companyName'?: string;
    /**
     * ФИО контактного лица
     */
    'recipient.contactName': string;
    /**
     * Код страны в соответствии с ISO 3166-1 alpha-2
     */
    'recipient.countryCode': string;
    /**
     * Область или республика или край
     */
    'recipient.region': string;
    /**
     * Город или населенный пункт
     */
    'recipient.city': string;
    /**
     * Улица
     */
    'recipient.street': string;
    /**
     * Дом
     */
    'recipient.house': string;
    /**
     * Строение/Корпус
     */
    'recipient.block'?: string;
    /**
     * Офис/Квартира
     */
    'recipient.office'?: string;
    /**
     * Контактный email адрес
     */
    'recipient.email'?: string;
    /**
     * Адрес одной строкой
     */
    'recipient.AddressString'?: string;
    /**
     * Наименование товара
     */
    'item.description': string;
    /**
     * Кол-во товара
     */
    'item.quantity': number;
    /**
     * Артикул товара
     */
    'item.articul'?: string;
    /**
     * ШК предмета
     */
    'item.barcode'?: string;
    /**
     * Оценочная стоимость единицы товара в рублях
     */
    'item.assessedCost'?: number;
    /**
     * Наложенная стоимость товара в рублях
     */
    'item.cost'?: number;
    /**
     * Вес единицы товара в граммах
     */
    'item.weight': number;
    /**
     * Высота единицы товара в сантиметрах
     */
    'item.height'?: number;
    /**
     * Длина единицы товара в сантиметрах
     */
    'item.length'?: number;
    /**
     * Ширина единицы товара в сантиметрах
     */
    'item.width'?: number;
    /**
     * Номер места в информационной системе клиента
     */
    'place.placeNumber'?: string;
    /**
     * Штрихкод места
     */
    'place.barcode'?: string;
    /**
     * Высота места в сантиметрах
     */
    'place.height'?: number;
    /**
     * Ширина места в сантиметрах
     */
    'place.width'?: number;
    /**
     * Длина места в сантиметрах
     */
    'place.length'?: number;
    /**
     * Вес места в граммах
     */
    'place.weight'?: number;
    /**
     * Содержимое места
     */
    'place.items'?: Array<Item>;
    /**
     * Дополнительная услуга (вместо звёздочки в названии параметра необходимо подставить название дополнительной услуги)
     */
    'extraParams.*'?: string;
};

