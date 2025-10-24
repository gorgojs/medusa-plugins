/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ErrorOrderInfo } from '../models/ErrorOrderInfo';
import type { OrderInfo } from '../models/OrderInfo';
import type { OrderStatus } from '../models/OrderStatus';
import type { PaginationMeta } from '../models/PaginationMeta';
import type { StatusCommon } from '../models/StatusCommon';
import type { StatusHistoryByDate } from '../models/StatusHistoryByDate';
import type { StatusHistoryByInterval } from '../models/StatusHistoryByInterval';
import type { StatusIdsRequest } from '../models/StatusIdsRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StatusesService {
    /**
     * Получение статуса заказа
     * Получение статуса заказа
     * @param orderId ID заказа
     * @returns any ok
     * @throws ApiError
     */
    public static getOrderStatus(
        orderId: (number | string),
    ): CancelablePromise<{
        orderInfo?: OrderInfo;
        status?: OrderStatus;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orders/{orderId}/status',
            path: {
                'orderId': orderId,
            },
        });
    }
    /**
     * Получение статуса заказа по номеру заказа в системе клиента
     * Получение статуса заказа по номеру заказа в системе клиента
     * @param clientNumber ID заказа в системе клиента
     * @returns any ok
     * @throws ApiError
     */
    public static getOrderStatusByClientNumber(
        clientNumber: string,
    ): CancelablePromise<{
        orderInfo?: OrderInfo;
        status?: OrderStatus;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orders/status',
            query: {
                'clientNumber': clientNumber,
            },
        });
    }
    /**
     * Получение истории статуса заказа по номеру заказа в системе клиента
     * Получение истории статуса заказа по номеру заказа в системе клиента
     * @param clientNumber ID заказа в системе клиента
     * @returns any ok
     * @throws ApiError
     */
    public static getOrderStatusHistoryByClientNumber(
        clientNumber: string,
    ): CancelablePromise<{
        orderInfo?: OrderInfo;
        /**
         * Массив статусов (сортировка created DESC)
         */
        statuses?: Array<OrderStatus>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orders/status/history',
            query: {
                'clientNumber': clientNumber,
            },
        });
    }
    /**
     * Получение статусов по нескольким заказам
     * Получение статусов по нескольким заказам
     * @param requestBody Объект типа OrderRequest
     * @returns any ok
     * @throws ApiError
     */
    public static getOrderStatuses(
        requestBody?: StatusIdsRequest,
    ): CancelablePromise<{
        succeedOrders?: Array<StatusCommon>;
        failedOrders?: Array<ErrorOrderInfo>;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orders/statuses',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Получение измененных статусов по всем заказам клиента (company) после указанной в методе даты
     * Получение измененных статусов по всем заказам клиента (company) после указанной в методе даты
     * @param date Дата (в формате '2015-07-30T13:14:37+03:00'), после которой запрашиваются статусы
     * @returns StatusCommon ok
     * @throws ApiError
     */
    public static getStatusesByDateNew(
        date: string,
    ): CancelablePromise<Array<StatusCommon>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orders/statuses/date/{date}',
            path: {
                'date': date,
            },
        });
    }
    /**
     * Получение истории изменения всех статусов с определенной даты
     * Получение истории изменения всех статусов с определенной даты
     * @param date Дата заказов (в формате 2015-07-30T13:14:37+03:00), с которой необходимо получить историю статусов
     * @param offset Minimum - 0
     * @param limit Minimum - 1, Maximum - 1000
     * @returns any ok
     * @throws ApiError
     */
    public static getStatusHistoryByDate(
        date: string,
        offset?: number,
        limit: number = 10,
    ): CancelablePromise<{
        /**
         * Массив заказов с их статусами
         */
        rows?: Array<StatusHistoryByDate>;
        meta?: PaginationMeta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orders/statuses/history/date/{date}',
            path: {
                'date': date,
            },
            query: {
                'offset': offset,
                'limit': limit,
            },
        });
    }
    /**
     * Получение истории статусов заказа
     * Получение истории статусов заказа
     * @param orderId ID заказа
     * @param offset Minimum - 0, Maximum - 5000
     * @param limit Minimum - 1, Maximum - 100
     * @returns any ok
     * @throws ApiError
     */
    public static getOrderStatusHistory(
        orderId: (number | string),
        offset?: number,
        limit: number = 10,
    ): CancelablePromise<{
        orderInfo?: OrderInfo;
        /**
         * Массив статусов (сортировка created DESC)
         */
        rows?: Array<OrderStatus>;
        meta?: PaginationMeta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orders/{orderId}/statusHistory',
            path: {
                'orderId': orderId,
            },
            query: {
                'offset': offset,
                'limit': limit,
            },
        });
    }
    /**
     * Получение истории изменения всех статусов по заданному интервалу
     * Получение истории изменения всех статусов по заданному интервалу
     * @param from Дата начала периода (в формате '2015-07-30T13:14:37+03:00')
     * @param to Дата окончания периода (в формате '2015-08-010T13:14:37+03:00')
     * @param filter Возможна фильтрация по providerKey. Например providerKey=cdek или providerKey=[cdek,dpd]
     * @param offset Minimum - 0
     * @param limit Minimum - 1, Maximum - 1000
     * @returns any ok
     * @throws ApiError
     */
    public static getStatusHistoryByInterval(
        from: string,
        to: string,
        filter?: string,
        offset?: number,
        limit: number = 10,
    ): CancelablePromise<{
        /**
         * Массив заказов с их статусами
         */
        rows?: Array<StatusHistoryByInterval>;
        meta?: PaginationMeta;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orders/statuses/interval',
            query: {
                'from': from,
                'to': to,
                'filter': filter,
                'offset': offset,
                'limit': limit,
            },
        });
    }
}
