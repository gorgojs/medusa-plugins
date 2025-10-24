/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SuccessResponse } from '../models/SuccessResponse';
import type { WarehouseBoxberry } from '../models/WarehouseBoxberry';
import type { WarehouseCreateBoxberry } from '../models/WarehouseCreateBoxberry';
import type { WarehouseInfoBoxberry } from '../models/WarehouseInfoBoxberry';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BoxberryService {
    /**
     * Создание склада
     * Создание склада
     * @param requestBody Объект типа WarehouseCreateBoxberry
     * @returns SuccessResponse OK
     * @throws ApiError
     */
    public static postBoxberryWarehouse(
        requestBody?: WarehouseCreateBoxberry,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/boxberry/warehouse',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Получение информации о складе
     * Получение информации о складе
     * @param code Уникальный код склада
     * @param providerConnectId ID подключения к СД
     * @returns WarehouseInfoBoxberry OK
     * @throws ApiError
     */
    public static getBoxberryWarehouse(
        code: string,
        providerConnectId?: string,
    ): CancelablePromise<WarehouseInfoBoxberry> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/boxberry/warehouse/{code}',
            path: {
                'code': code,
            },
            query: {
                'providerConnectId': providerConnectId,
            },
        });
    }
    /**
     * Обновление склада
     * Обновление склада
     * @param code Уникальный код склада
     * @param requestBody Объект типа WarehouseBoxberry
     * @returns SuccessResponse OK
     * @throws ApiError
     */
    public static putBoxberryWarehouse(
        code: string,
        requestBody?: WarehouseBoxberry,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/boxberry/warehouse/{code}',
            path: {
                'code': code,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Удаление склада
     * Удаление склада
     * @param code Уникальный код склада
     * @param providerConnectId ID подключения к СД
     * @returns SuccessResponse OK
     * @throws ApiError
     */
    public static deleteBoxberryWarehouse(
        code: string,
        providerConnectId?: string,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/boxberry/warehouse/{code}',
            path: {
                'code': code,
            },
            query: {
                'providerConnectId': providerConnectId,
            },
        });
    }
}
