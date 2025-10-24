/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateWarehouseRequest } from '../models/CreateWarehouseRequest';
import type { CreateWarehouseResponse } from '../models/CreateWarehouseResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class X5Service {
    /**
     * Создание склада
     * Создание склада
     * @param requestBody Объект типа CreateWarehouseRequest
     * @returns CreateWarehouseResponse OK
     * @throws ApiError
     */
    public static createWarehouse(
        requestBody?: CreateWarehouseRequest,
    ): CancelablePromise<CreateWarehouseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/x5/createWarehouse',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
