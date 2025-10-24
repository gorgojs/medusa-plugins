/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { B2cplOrderCallRequest } from '../models/B2cplOrderCallRequest';
import type { B2cplOrderCallResponse } from '../models/B2cplOrderCallResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class B2CplService {
    /**
     * Загрузка заявок
     * Загрузка заявок на исходящий обзвон
     * @param requestBody Объект типа B2cplOrderCallRequest
     * @returns any OK
     * @throws ApiError
     */
    public static addOrderCall(
        requestBody?: B2cplOrderCallRequest,
    ): CancelablePromise<{
        orders?: Array<B2cplOrderCallResponse>;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/b2cpl/call',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
