/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExtraParamOnCourier } from './ExtraParamOnCourier';
export type CourierCallRequest = {
    /**
     * Код службы доставки
     */
    providerKey: string;
    /**
     * ID подключения вашей компании к СД
     */
    providerConnectId?: number;
    /**
     * Дата отгрузки
     */
    date: string;
    /**
     * Начальное время отгрузки
     */
    timeStart: string;
    /**
     * Конечное время отгрузки
     */
    timeEnd: string;
    /**
     * Вес всего заказа (в граммах)
     */
    weight: number;
    /**
     * Ширина заказа (в сантиметрах)
     */
    width: number;
    /**
     * Высота заказа (в сантиметрах)
     */
    height: number;
    /**
     * Длина заказа (в сантиметрах)
     */
    length: number;
    /**
     * Номера заказов которые планируются передать с этим курьером
     */
    orderIds: Array<number>;
    /**
     * Почтовый индекс
     */
    postIndex?: string;
    /**
     * Код страны в соответствии с ISO 3166-1 alpha-2
     */
    countryCode?: string;
    /**
     * Область или республика или край
     */
    region: string;
    /**
     * Район
     */
    area?: string;
    /**
     * Город или населенный пункт
     */
    city: string;
    /**
     * ID города в базе ФИАС
     */
    cityGuid?: string;
    /**
     * Улица
     */
    street: string;
    /**
     * Дом
     */
    house: string;
    /**
     * Строение/Корпус
     */
    block?: string;
    /**
     * Офис/Квартира
     */
    office?: string;
    /**
     * Широта
     */
    lat?: number;
    /**
     * Долгота
     */
    lng?: number;
    /**
     * 123
     */
    addressString?: string;
    /**
     * Название компании
     */
    companyName?: string;
    /**
     * ФИО контактного лица
     */
    contactName: string;
    /**
     * Контактный телефон
     */
    phone: string;
    /**
     * Контактный email адрес
     */
    email?: string;
    /**
     * Комментарий
     */
    comment?: string | null;
    extraParams?: ExtraParamOnCourier;
};

