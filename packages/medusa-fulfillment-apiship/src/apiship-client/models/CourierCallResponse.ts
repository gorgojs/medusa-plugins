/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CourierCallResponse = {
    /**
     * Номер заявки
     */
    id?: number;
    /**
     * Номер заявки в системе СД
     */
    providerNumber?: string;
    /**
     * Дополнительный номер заявки в системе СД
     */
    additionalProviderNumber?: string;
    /**
     * Дата создания заявки
     */
    created?: string;
    /**
     * Описан≠ие ошибки в случае невозможности вызова курьера
     */
    error?: string;
};

