/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BoxberryCityObject = {
    id?: string;
    /**
     * Код города
     */
    code?: string;
    /**
     * ФИАС Города
     */
    cityGuid?: string;
    /**
     * Регион
     */
    region?: string;
    /**
     * Район
     */
    district?: string;
    /**
     * Индексы
     */
    courierZips?: Array<string>;
    /**
     * Прием писем и посылок от физ. лиц (0/1)
     */
    receptionLaP?: string;
    /**
     * Выдача писем и посылок физ. лиц (0/1)
     */
    deliveryLaP?: string;
    /**
     * Прием заказов от ИМ на пунктах выдачи (0/1)
     */
    reception?: string;
    /**
     * Наличие пунктов выдачи заказов в городе (0/1)
     */
    pickupPoint?: string;
    /**
     * Наличие курьерской доставки в городе
     */
    courierDelivery?: string;
    /**
     * Прием международных возвратов (0/1)
     */
    foreignReceptionReturns?: string;
    /**
     * Наличие терминала в городе (0/1)
     */
    terminal?: string;
    /**
     * Наличие курьерского забора (0/1)
     */
    courierReception?: string;
};

