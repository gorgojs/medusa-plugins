/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DefaultData = {
    /**
     * Контактный телефон по умолчанию
     */
    'sender.phone'?: string;
    /**
     * Город по умолчанию
     */
    'sender.city'?: string;
    /**
     * Код страны в соответствии с ISO 3166-1 alpha-2 по умолчанию
     */
    'sender.countryCode'?: string;
    /**
     * Улица по умолчанию
     */
    'sender.street'?: string;
    /**
     * Номер дома по умолчанию
     */
    'sender.house'?: string;
    /**
     * Тип забора груза по умолчанию
     */
    'order.pickupType'?: number;
    /**
     * Тип доставки по умолчанию
     */
    'order.deliveryType'?: number;
    /**
     * Сумма наложенного платежа будет считаться по указанной колонке или можно указать значение по умолчанию
     */
    'cost.codCost'?: string;
};

