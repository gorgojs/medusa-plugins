/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateAddressCodeRequest } from '../models/CreateAddressCodeRequest';
import type { CreateAddressCodeResponse } from '../models/CreateAddressCodeResponse';
import type { DpdBindPreorderPickupRequest } from '../models/DpdBindPreorderPickupRequest';
import type { DpdBindPreorderPickupResponse } from '../models/DpdBindPreorderPickupResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DpdService {
    /**
     * Соединить заказ с заявкой на приезд курьера
     * Соединить заказ с заявкой на приезд курьера
     * @param requestBody Объект типа DpdBindPreorderPickupRequest
     * @returns DpdBindPreorderPickupResponse OK
     * @throws ApiError
     */
    public static bindPreorderPickup(
        requestBody?: DpdBindPreorderPickupRequest,
    ): CancelablePromise<DpdBindPreorderPickupResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dpd/bindPreorderPickup',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Создание кода адреса
     * Создание кода адреса
     * @param requestBody Объект типа CreateAddressCodeRequest
     * @returns CreateAddressCodeResponse OK
     * @throws ApiError
     */
    public static createAddressCode(
        requestBody?: CreateAddressCodeRequest,
    ): CancelablePromise<CreateAddressCodeResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dpd/createAddressCode',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Обновление кода адреса
     * Обновление кода адреса
     * @param requestBody Объект типа CreateAddressCodeRequest
     * @returns CreateAddressCodeResponse OK
     * @throws ApiError
     */
    public static updateAddressCode(
        requestBody?: CreateAddressCodeRequest,
    ): CancelablePromise<CreateAddressCodeResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/dpd/updateAddressCode',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
