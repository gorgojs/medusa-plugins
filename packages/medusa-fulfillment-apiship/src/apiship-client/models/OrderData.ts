/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Sizes } from './Sizes';
export type OrderData = ({
    /**
     * Номер заказа в системе клиента
     */
    clientNumber: string;
    /**
     * Штрих-код
     */
    barcode?: string;
    /**
     * Комментарий
     */
    description?: string;
    /**
     * Код службы доставки
     */
    providerKey: string;
    /**
     * ID подключения вашей компании к СД
     */
    providerConnectId?: string;
    /**
     * Тип забора груза. 1 - отгрузка груза курьером; 2 - отгрузка груза на ПВЗ;
     */
    pickupType: number;
    /**
     * Тип доставки. 1 - доставка курьером; 2 - доставка на ПВЗ;
     */
    deliveryType: number;
    /**
     * Тариф службы доставки по которому осуществляется доставка
     */
    tariffId: number;
    /**
     * ID точки приема заказа
     */
    pointInId?: number | null;
    /**
     * ID точки выдачи заказа
     */
    pointOutId?: number | null;
    /**
     * Предполагаемая дата передачи груза в службу доставки
     */
    pickupDate?: string | null;
    /**
     * Начальное время забора груза
     */
    pickupTimeStart?: string;
    /**
     * Конечное время забора груза
     */
    pickupTimeEnd?: string;
    /**
     * Дата доставки
     */
    deliveryDate?: string;
    /**
     * Начальное время доставки
     */
    deliveryTimeStart?: string;
    /**
     * Конечное время доставки
     */
    deliveryTimeEnd?: string;
    /**
     * Ссылка отслеживания из системы СД
     */
    trackingUrl?: string;
} & Sizes);

