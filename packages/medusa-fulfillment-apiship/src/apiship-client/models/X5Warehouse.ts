/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type X5Warehouse = {
    /**
     * Код склада в системе клиента
     */
    code: string;
    /**
     * Название
     */
    name: string;
    /**
     * Индекс
     */
    postIndex: string;
    /**
     * Широта
     */
    lat?: number;
    /**
     * Долгота
     */
    lng?: number;
    /**
     * Код страны
     */
    countryCode: string;
    /**
     * Регион
     */
    region: string;
    /**
     * Тип региона
     */
    regionType?: string;
    /**
     * Город
     */
    city: string;
    /**
     * ID города в базе ФИАС
     */
    cityGuid?: string;
    /**
     * Тип населенного пункта
     */
    cityType?: string;
    /**
     * Район
     */
    area: string;
    /**
     * Улица
     */
    street: string;
    /**
     * Тип улицы (ул., переулок и т.п.)
     */
    streetType?: string;
    /**
     * Дом
     */
    house: string;
    /**
     * Корпус
     */
    block?: string;
    /**
     * Офис
     */
    office?: string;
    /**
     * Полный адрес
     */
    address?: string;
    /**
     * Телефон
     */
    phone: string;
};

