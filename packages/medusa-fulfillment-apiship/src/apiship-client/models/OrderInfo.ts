/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type OrderInfo = {
    orderId?: (number | string);
    /**
     * Код службы доставки
     */
    providerKey?: string;
    /**
     * Номер заказа в системе службы доставки
     */
    providerNumber?: string;
    /**
     * Номер возврата заказа в системе службы доставки
     */
    returnProviderNumber?: string;
    /**
     * Дополнительный номер заказа в системе службы доставки
     */
    additionalProviderNumber?: string;
    /**
     * Номер заказа для печати штрих-кода
     */
    barcode?: string;
    /**
     * Номер заказа в системе клиента
     */
    clientNumber?: string;
    /**
     * Ссылка на отслеживание в системе СД
     */
    trackingUrl?: string;
};

