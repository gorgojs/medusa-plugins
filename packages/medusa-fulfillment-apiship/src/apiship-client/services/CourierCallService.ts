/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelCourierCallResponse } from '../models/CancelCourierCallResponse';
import type { CourierCallRequest } from '../models/CourierCallRequest';
import type { CourierCallResponse } from '../models/CourierCallResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CourierCallService {
    /**
     * Создание заявки на вызов курьера
     * Создание заявки на вызов курьера
     * @param requestBody Объект типа CourierCallRequest
     * @returns CourierCallResponse ok
     * @throws ApiError
     */
    public static courierCall(
        requestBody?: CourierCallRequest,
    ): CancelablePromise<CourierCallResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/courierCall',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Отмена заявки на вызов курьера
     * Отмена заявки на вызов курьера
     * @param courierCallId ID заявки на вызов курьера, которую необходимо отменить
     * @returns CancelCourierCallResponse ok
     * @throws ApiError
     */
    public static cancelCourierCall(
        courierCallId: number,
    ): CancelablePromise<CancelCourierCallResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/courierCall/{courierCallId}/cancel',
            path: {
                'courierCallId': courierCallId,
            },
        });
    }
}
