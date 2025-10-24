/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderInfo } from './OrderInfo';
import type { OrderStatus } from './OrderStatus';
/**
 * Информация об истории статусов заказов с описанием заказа
 */
export type StatusHistoryByDate = {
    orderInfo?: OrderInfo;
    /**
     * Массив истории статусов
     */
    statuses?: Array<OrderStatus>;
};

