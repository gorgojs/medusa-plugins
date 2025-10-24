/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ExternalTrackingOrderResponse = Array<{
    /**
     * Номер заказа в системе службы доставки
     */
    providerNumber?: string;
    /**
     * Код службы доставки
     */
    providerKey?: string;
    /**
     * ID подключения вашей компании к СД
     */
    providerConnectId?: number;
    /**
     * ID отслеживания заказа
     */
    orderId?: string;
    created?: string;
}>;
