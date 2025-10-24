/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LogsisConfirmOrderRequest } from '../models/LogsisConfirmOrderRequest';
import type { LogsisConfirmOrderResponse } from '../models/LogsisConfirmOrderResponse';
import type { LogsisUpdateWarehouseRequest } from '../models/LogsisUpdateWarehouseRequest';
import type { LogsisUpdateWarehouseResponse } from '../models/LogsisUpdateWarehouseResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LogsisService {
    /**
     * Подтвердить заказ
     * Подтверждение заказа
     * @param requestBody Объект типа ConfirmOrderRequest
     * @returns LogsisConfirmOrderResponse OK
     * @throws ApiError
     */
    public static logsisConfirmOrder(
        requestBody?: LogsisConfirmOrderRequest,
    ): CancelablePromise<LogsisConfirmOrderResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/logsis/confirmOrder',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Обновить склад
     * Обновление склада в системе Logsis
     * @param requestBody Объект типа UpdateWarehouseRequest
     * @returns LogsisUpdateWarehouseResponse OK
     * @throws ApiError
     */
    public static logsisUpdateWarehouse(
        requestBody?: LogsisUpdateWarehouseRequest,
    ): CancelablePromise<LogsisUpdateWarehouseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/logsis/updateWarehouse',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
