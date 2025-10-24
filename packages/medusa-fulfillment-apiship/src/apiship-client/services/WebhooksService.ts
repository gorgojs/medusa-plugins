/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WebhookListResponse } from '../models/WebhookListResponse';
import type { WebhookSubscribeRequest } from '../models/WebhookSubscribeRequest';
import type { WebhookSubscribeResponse } from '../models/WebhookSubscribeResponse';
import type { WebhookSubscriptionDeleteResponse } from '../models/WebhookSubscriptionDeleteResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WebhooksService {
    /**
     * Подписка на вебхуки
     * Подписка на событие выбранного типа. Подробнее о типах и формате запроса с нашей стороны читайте здесь: https://docs.apiship.ru/docs/api/webhooks
     * @param requestBody Объект типа
     * @returns WebhookSubscribeResponse OK
     * @throws ApiError
     */
    public static postWebhooks(
        requestBody: WebhookSubscribeRequest,
    ): CancelablePromise<WebhookSubscribeResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/webhooks',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Список зарегистрированных подписок
     * Список зарегистрированных подписок
     * @returns WebhookListResponse OK
     * @throws ApiError
     */
    public static getWebhooks(): CancelablePromise<WebhookListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/webhooks',
        });
    }
    /**
     * Удаление вебхука
     * Удаление подписки на событие
     * @param uuid Уникальный идентификатор подписки
     * @returns WebhookSubscriptionDeleteResponse OK
     * @throws ApiError
     */
    public static deleteWebhooks(
        uuid: string,
    ): CancelablePromise<WebhookSubscriptionDeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/webhooks/{uuid}',
            path: {
                'uuid': uuid,
            },
        });
    }
}
