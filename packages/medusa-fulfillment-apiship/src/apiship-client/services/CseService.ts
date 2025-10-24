/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SaveOwnerOfTheGoods } from '../models/SaveOwnerOfTheGoods';
import type { SuccessResponse } from '../models/SuccessResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CseService {
    /**
     * Передача данных контрагента - владельца товара
     * Функция сохраняет нового контрагента в справочнике «Контрагенты» и создаёт «Расчетный счет» для этого контрагента в системе «Карго».
     * @param requestBody Объект типа SaveOwnerOfTheGoods
     * @returns SuccessResponse OK
     * @throws ApiError
     */
    public static postCseSaveOwnerOfTheGoods(
        requestBody?: SaveOwnerOfTheGoods,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/cse/saveOwnerOfTheGoods',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
