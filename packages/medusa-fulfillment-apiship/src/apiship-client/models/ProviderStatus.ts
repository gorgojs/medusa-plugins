/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ProviderStatus = {
    /**
     * Идентификатор статуса
     */
    id?: string;
    /**
     * Код статуса в сервисе
     */
    code?: string;
    /**
     * Название статуса в сервисе
     */
    name?: string;
    /**
     * Описание статуса в сервисе
     */
    description?: string;
    /**
     * Код статуса в СД
     */
    providerCode?: string;
    /**
     * Название статуса в СД
     */
    providerName?: string;
    /**
     * Описание статуса в СД
     */
    providerDescription?: string;
    provider?: {
        /**
         * Ключ СД
         */
        key?: string;
        /**
         * Название СД
         */
        name?: string;
    };
};

