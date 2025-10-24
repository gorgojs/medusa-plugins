/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeliveryInterval } from './DeliveryInterval';
export type CalculatorIntervalsTariffResult = {
    /**
     * ID тарифа в службе доставки
     */
    tariffProviderId?: string;
    /**
     * ID тарифа в ApiShip
     */
    tariffId?: number;
    /**
     * Название тарифа
     */
    tariffName?: string;
    /**
     * Типы забора (см. /lists/pickupTypes), если не переданы берутся оба типа
     */
    pickupTypes?: Array<number>;
    /**
     * Типы доставки (см. /lists/deliveryTypes), если не переданы берутся оба типа
     */
    deliveryTypes?: Array<number>;
    toIntervals?: Array<DeliveryInterval>;
};

