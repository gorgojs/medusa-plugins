/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type WaybillItem = {
    /**
     * Ключ службы доставки
     */
    providerKey?: string;
    /**
     * Путь к накладной
     */
    file?: string;
    /**
     * Массив ID заказов, для которой сгенерирована накладная
     */
    orderIds?: Array<number>;
};

