/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type OrderUploadItem = {
    /**
     * Номер заказа в системе клиента
     */
    clientNumber: string;
    /**
     * Номер строки в таблице
     */
    row: number;
    /**
     * Номер заказа в системе Apiship
     */
    orderId?: number;
    /**
     * Номер заказа в системе СД
     */
    providerNumber?: string;
    /**
     * Дата создания заказа
     */
    created?: string;
};

