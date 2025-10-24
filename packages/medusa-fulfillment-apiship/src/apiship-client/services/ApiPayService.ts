/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PayReceiptFullResponse } from '../models/PayReceiptFullResponse';
import type { PayReceiptRequest } from '../models/PayReceiptRequest';
import type { PayReceiptResponse } from '../models/PayReceiptResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ApiPayService {
    /**
     * Отправка чека
     * Отправка чека в ОФД
     * @param requestBody Объект типа PayReceiptRequest
     * @returns PayReceiptResponse ok
     * @throws ApiError
     */
    public static sendPayReceipt(
        requestBody?: PayReceiptRequest,
    ): CancelablePromise<PayReceiptResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/pay/receipt',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Получение статуса по чеку
     * Получает статуса по чеку
     * @param receiptId ID чека
     * @returns PayReceiptFullResponse OK
     * @throws ApiError
     */
    public static getPayReceiptStatus(
        receiptId: number,
    ): CancelablePromise<PayReceiptFullResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pay/receipt/{receiptId}',
            path: {
                'receiptId': receiptId,
            },
        });
    }
}
