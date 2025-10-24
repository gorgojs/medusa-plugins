/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * @deprecated
 */
export type Params = {
    id?: number;
    /**
     * ID компании
     */
    companyId?: number;
    /**
     * Ключ (alias) провайдера (службы доставки)
     */
    providerKey?: string;
    /**
     * Параметры подключения. Для разных служб - разные ключи в объекте
     */
    connectParams?: any;
    /**
     * Своя для компании процентная ставка страховки (%)
     */
    insuranceRate?: number;
    /**
     * Своя для компании процентная ставка кассового обслуживания (%)
     */
    cashServiceRate?: number;
    /**
     * Дата создания
     */
    created?: number;
    /**
     * Дата обновления
     */
    updated?: number;
    /**
     * Информация о связанной с настройками компании
     */
    company?: any;
};

