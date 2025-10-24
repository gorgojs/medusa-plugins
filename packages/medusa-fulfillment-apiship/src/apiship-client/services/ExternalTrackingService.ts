/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExternalTrackingDeleteOrderResponse } from '../models/ExternalTrackingDeleteOrderResponse';
import type { ExternalTrackingOrderResponse } from '../models/ExternalTrackingOrderResponse';
import type { ExternalTrackingOrdersRequest } from '../models/ExternalTrackingOrdersRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ExternalTrackingService {
    /**
     * Трекинг внешних заказов
     * Отслеживание заказов, созданных не через ApiShip. Поддерживаемые службы доставки: 5POST, Boxberry, BXB, КСЭ, Logsis,Major Express, Почта России
     * @param requestBody Объект типа
     * @returns ExternalTrackingOrderResponse OK
     * @throws ApiError
     */
    public static postExternalTrackingOrders(
        requestBody: ExternalTrackingOrdersRequest,
    ): CancelablePromise<ExternalTrackingOrderResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/externalTracking/orders',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Удаление трекинга заказа
     * Удаление трекинга заказа
     * @param orderId ID трекинга
     * @returns ExternalTrackingDeleteOrderResponse OK
     * @throws ApiError
     */
    public static deleteExternalTrackingOrders(
        orderId: string,
    ): CancelablePromise<ExternalTrackingDeleteOrderResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/externalTracking/orders/{orderId}',
            path: {
                'orderId': orderId,
            },
        });
    }
}
