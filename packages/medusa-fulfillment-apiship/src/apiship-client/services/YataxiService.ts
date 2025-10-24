/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConfirmOrderYataxiRequest } from '../models/ConfirmOrderYataxiRequest';
import type { ConfirmOrderYataxiResponse } from '../models/ConfirmOrderYataxiResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class YataxiService {
    /**
     * Подтверждение заказа
     * Подтверждение заказа
     * @param requestBody Объект типа ConfirmOrderYataxi
     * @returns ConfirmOrderYataxiResponse OK
     * @throws ApiError
     */
    public static confirmOrderYataxi(
        requestBody?: ConfirmOrderYataxiRequest,
    ): CancelablePromise<ConfirmOrderYataxiResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/yataxi/confirm',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
