/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ExternalTrackingOrdersRequest = Array<{
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
    providerConnectId?: number | null;
}>;
