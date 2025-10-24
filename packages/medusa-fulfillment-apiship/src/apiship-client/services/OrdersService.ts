/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelOrderResponse } from '../models/CancelOrderResponse';
import type { DeleteOrderResponse } from '../models/DeleteOrderResponse';
import type { OrderCourierResponse } from '../models/OrderCourierResponse';
import type { OrderInfoResponse } from '../models/OrderInfoResponse';
import type { OrderRequest } from '../models/OrderRequest';
import type { OrderResponse } from '../models/OrderResponse';
import type { OrderReturnRequest } from '../models/OrderReturnRequest';
import type { OrdersUploadRequest } from '../models/OrdersUploadRequest';
import type { OrderSyncResponse } from '../models/OrderSyncResponse';
import type { OrderUploadResponse } from '../models/OrderUploadResponse';
import type { PlacementCodeResponse } from '../models/PlacementCodeResponse';
import type { SuccessResponse } from '../models/SuccessResponse';
import type { UpdateOrderItemsRequest } from '../models/UpdateOrderItemsRequest';
import type { ValidateOrderResponse } from '../models/ValidateOrderResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrdersService {
    /**
     * Создание заказа
     * Создание заказа в системе
     * @param platform ТОЛЬКО ДЛЯ РАЗРАБОТЧИКОВ МОДУЛЕЙ! Код модуля (согласовывается со службой поддержки). Если заказ переедается из модуля, то поле обязательно!
     * @param requestBody Объект типа OrderRequest
     * @returns OrderResponse ok
     * @throws ApiError
     */
    public static addOrder(
        platform?: string,
        requestBody?: OrderRequest,
    ): CancelablePromise<OrderResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orders',
            headers: {
                'Platform': platform,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Создание синхронного заказа
     * Создание синхронного заказа в системе
     * @param platform ТОЛЬКО ДЛЯ РАЗРАБОТЧИКОВ МОДУЛЕЙ! Код модуля (согласовывается со службой поддержки). Если заказ переедается из модуля, то поле обязательно!
     * @param requestBody Объект типа OrderRequest
     * @returns OrderSyncResponse ok
     * @throws ApiError
     */
    public static addSyncOrder(
        platform?: string,
        requestBody?: OrderRequest,
    ): CancelablePromise<OrderSyncResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orders/sync',
            headers: {
                'Platform': platform,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Создание заказа на возврат (клиентский возврат)
     * Если по каким-то причинам товар не подошёл получателю, эта услуга легко позволит вернуть его отправителю. На данный момент поддерживается клиентский возврат для СДЕК, Почты России, E-Bulky и 5Post.
     * @param requestBody Объект типа OrderReturnRequest
     * @returns OrderSyncResponse ok
     * @throws ApiError
     */
    public static addReturnOrder(
        requestBody?: OrderReturnRequest,
    ): CancelablePromise<OrderSyncResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orders/return',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Валидация заказа
     * Валидация заказа в системе без отправки в Службу Доставки
     * @param platform ТОЛЬКО ДЛЯ РАЗРАБОТЧИКОВ МОДУЛЕЙ! Код модуля (согласовывается со службой поддержки). Если заказ переедается из модуля, то поле обязательно!
     * @param requestBody Объект типа OrderRequest
     * @returns ValidateOrderResponse valid:true или сообщение об ошибках
     * @throws ApiError
     */
    public static validateOrder(
        platform?: string,
        requestBody?: OrderRequest,
    ): CancelablePromise<ValidateOrderResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orders/validate',
            headers: {
                'Platform': platform,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Получение информации по заказу
     * Получает информацию по заказу
     * @param orderId ID заказа
     * @returns OrderInfoResponse OK
     * @throws ApiError
     */
    public static getOrderInfo(
        orderId: number,
    ): CancelablePromise<OrderInfoResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orders/{orderId}',
            path: {
                'orderId': orderId,
            },
        });
    }
    /**
     * Изменение заказа
     * Изменение заказа в системе
     * @param orderId ID заказа, который необходимо изменить
     * @param platform ТОЛЬКО ДЛЯ РАЗРАБОТЧИКОВ МОДУЛЕЙ! Код модуля (согласовывается со службой поддержки). Если заказ переедается из модуля, то поле обязательно!
     * @param requestBody Объект типа OrderRequest
     * @returns SuccessResponse ok
     * @throws ApiError
     */
    public static updateOrder(
        orderId: number,
        platform?: string,
        requestBody?: OrderRequest,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/orders/{orderId}',
            path: {
                'orderId': orderId,
            },
            headers: {
                'Platform': platform,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Удаление заказа
     * Помечает заказ удаленным. Данный метод не удаляет заказ из системы провайдера и не отменяет его. **В случае со СДЭК, заказ удаляется и из системы службы доставки.**
     * @param orderId ID заказа, который необходимо удалить
     * @returns DeleteOrderResponse ok
     * @throws ApiError
     */
    public static deleteOrder(
        orderId: number,
    ): CancelablePromise<DeleteOrderResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/orders/{orderId}',
            path: {
                'orderId': orderId,
            },
        });
    }
    /**
     * Повторная отправка заказа в СД
     * Повторно отправляет заказ в СД
     * @param orderId ID заказа
     * @returns OrderResponse OK
     * @throws ApiError
     */
    public static resend(
        orderId: number,
    ): CancelablePromise<OrderResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orders/{orderId}/resend',
            path: {
                'orderId': orderId,
            },
        });
    }
    /**
     * Отмена заказа
     * Данный метод пытается удалить или отменить заказа из системы провайдера.
     * @param orderId ID заказа, который необходимо отменить
     * @returns CancelOrderResponse ok
     * @throws ApiError
     */
    public static cancelOrder(
        orderId: number,
    ): CancelablePromise<CancelOrderResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orders/{orderId}/cancel',
            path: {
                'orderId': orderId,
            },
        });
    }
    /**
     * Обновление товаров заказа
     * Обновление доступно, если у заказа указано только 1 место, либо товары переданы в items заказа
     * @param orderId ID заказа
     * @param platform ТОЛЬКО ДЛЯ РАЗРАБОТЧИКОВ МОДУЛЕЙ! Код модуля (согласовывается со службой поддержки). Если заказ переедается из модуля, то поле обязательно!
     * @param requestBody Объект типа UpdateOrderItemsRequest
     * @returns SuccessResponse ok
     * @throws ApiError
     */
    public static updateOrderItems(
        orderId: number,
        platform?: string,
        requestBody?: UpdateOrderItemsRequest,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orders/{orderId}/items',
            path: {
                'orderId': orderId,
            },
            headers: {
                'Platform': platform,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Загрузка xlsx файла c данными о заказах
     * Загрузка xlsx файла c данными о заказах
     * @param requestBody Объект типа OrderRequest
     * @returns OrderUploadResponse ok
     * @throws ApiError
     */
    public static uploadOrders(
        requestBody?: OrdersUploadRequest,
    ): CancelablePromise<OrderUploadResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/orders/upload',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Получение информации о курьере
     * Получение информации о курьере, назначенном на заказ
     * @param orderId ID заказа
     * @returns OrderCourierResponse ok
     * @throws ApiError
     */
    public static getOrdersCourier(
        orderId: number,
    ): CancelablePromise<OrderCourierResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orders/{orderId}/courier',
            path: {
                'orderId': orderId,
            },
        });
    }
    /**
     * Получение кода подтверждения
     * Получения кода подтверждения
     * @param orderId ID заказа
     * @returns PlacementCodeResponse ok
     * @throws ApiError
     */
    public static getOrdersCode(
        orderId: number,
    ): CancelablePromise<PlacementCodeResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orders/{orderId}/code',
            path: {
                'orderId': orderId,
            },
        });
    }
}
