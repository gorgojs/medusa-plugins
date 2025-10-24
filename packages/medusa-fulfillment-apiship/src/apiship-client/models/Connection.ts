/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Connection = {
    readonly id?: string;
    /**
     * ID - компании (можно не указывать)
     */
    readonly companyId?: string;
    /**
     * Код службы доставки
     */
    providerKey?: string;
    /**
     * Название подключения
     */
    name?: string;
    /**
     * ИНН вашей организации
     */
    inn?: string;
    /**
     * Своя для компании процентная ставка страховки (%) - перекрывает общую для СД
     */
    insuranceRate?: number;
    /**
     * Своя для компании процентная ставка кассового обслуживания (%) - перекрывает общую для СД
     */
    cashServiceRate?: number;
    /**
     * Данные берутся из метода [/connections/schemas](#/connections/schemas)
     */
    connectParams?: Record<string, string>;
    /**
     * 0 - никогда не использовать базовое подключение ApiShip; 1 - подключение будет использовать базовое подключение ApiShip, т.е. передавать connectParams не нужно; 2 - будет использовано базовое подключение, если в процессе калькуляции по текущим параметрам подключения возникнет ошибка;
     */
    isUseBaseConnect?: number;
    /**
     * Дата создания
     */
    readonly created?: string;
    /**
     * Дата обновления
     */
    readonly updated?: string;
};

