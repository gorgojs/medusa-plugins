/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocumentsRequest } from '../models/DocumentsRequest';
import type { ErrorOrderInfo } from '../models/ErrorOrderInfo';
import type { LabelsRequest } from '../models/LabelsRequest';
import type { WaybillItem } from '../models/WaybillItem';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrderDocsService {
    /**
     * Получение ярлыков для заказов
     * Получение ярлыков для заказов
     * @param requestBody Объект типа LabelsRequest
     * @returns any ok
     * @throws ApiError
     */
    public static getLabels(
        requestBody?: LabelsRequest,
    ): CancelablePromise<{
        url?: string;
        failedOrders?: Array<ErrorOrderInfo>;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orders/labels',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Получение актов приема-передачи заказов
     * Получение актов приема-передачи заказов
     * @param requestBody Объект типа DocumentsRequest
     * @returns any ok
     * @throws ApiError
     */
    public static getWaybills(
        requestBody?: DocumentsRequest,
    ): CancelablePromise<{
        waybillItems?: Array<WaybillItem>;
        failedOrders?: Array<ErrorOrderInfo>;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orders/waybills',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
