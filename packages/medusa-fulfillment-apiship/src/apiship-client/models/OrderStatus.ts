/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Статус заказа
 */
export type OrderStatus = {
    /**
     * Идентификатор статуса заказа
     */
    key?: string;
    /**
     * Название статуса
     */
    name?: string;
    /**
     * Описание статуса
     */
    description?: string;
    /**
     * дата и время установки данного статуса
     */
    created?: string;
    /**
     * Код статуса в системе службы доставки
     */
    providerCode?: string;
    /**
     * Название статуса в системе службы доставки
     */
    providerName?: string;
    /**
     * Описание статуса в системе службы доставки
     */
    providerDescription?: string;
    /**
     * Дата создания статуса в системе службы доставки
     */
    createdProvider?: string;
    /**
     * Коды ошибок:
     * 100 - ошибка в ApiShip;
     * 200 - ошибка в СД;
     * 300 - ошибка клиента (некорректные данные).
     */
    errorCode?: string;
};

