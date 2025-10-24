/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type OrderReturnData = {
    /**
     * Номер заказа в системе клиента
     */
    clientNumber: string;
    /**
     * Комментарий
     */
    description?: string;
    /**
     * Код службы доставки
     */
    providerKey: string;
    /**
     * ID подключения вашей компании к СД
     */
    providerConnectId?: string;
    /**
     * Тип забора груза. 1 - отгрузка груза курьером; 2 - отгрузка груза на ПВЗ;
     */
    pickupType: number;
    /**
     * Тип доставки. 1 - доставка курьером; 2 - доставка на ПВЗ;
     */
    deliveryType: number;
    /**
     * Тариф службы доставки по которому осуществляется доставка
     */
    tariffId: number;
    /**
     * ID точки приема заказа
     */
    pointInId?: number;
    /**
     * ID точки выдачи заказа
     */
    pointOutId?: number;
};

