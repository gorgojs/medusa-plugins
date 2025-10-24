/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PayReceiptData = {
    /**
     * Номер заказа в системе заказчика
     */
    clientNumber?: string;
    /**
     * Номер заказа для печати на бумажном чеке
     */
    printNumber?: string;
    /**
     * Тип чека sale - приход или return - возврат
     */
    type: string;
    /**
     * Тип оплаты чека cash - наличные или card - банковская карта
     */
    payType: string;
    /**
     * Итоговая цена в чеке
     */
    totalPrice: number;
    /**
     * E-mail покупателя
     */
    email?: string;
    /**
     * Телефон покупателя
     */
    phone?: string;
};

