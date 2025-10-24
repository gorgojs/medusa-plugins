/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TariffObject = {
    /**
     * Идентификатор тарифа
     */
    id?: number;
    /**
     * Идентификатор службы доставки, которой принадлежит тариф
     */
    providerKey?: string;
    /**
     * Название тарифа
     */
    name?: string;
    /**
     * Описание тарифа
     */
    description?: string;
    /**
     * Альтернативное название тарифа
     */
    aliasName?: string;
    /**
     * Минимальное ограничение по весу для тарифа (граммы)
     */
    weightMin?: number;
    /**
     * Максимальное ограничение по весу для тарифа (граммы)
     */
    weightMax?: number;
    /**
     * Тип приема тарифа (1 - от двери, 2 - от ПВЗ, null - доступны оба варианта)
     */
    pickupType?: number;
    /**
     * Тип выдачи тарифа (1 - до двери, 2 - до ПВЗ, null - доступны оба варианта)
     */
    deliveryType?: number;
};

