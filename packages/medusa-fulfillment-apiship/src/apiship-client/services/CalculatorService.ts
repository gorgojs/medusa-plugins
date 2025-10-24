/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CalculatorIntervalsRequest } from '../models/CalculatorIntervalsRequest';
import type { CalculatorIntervalsResponse } from '../models/CalculatorIntervalsResponse';
import type { CalculatorRequest } from '../models/CalculatorRequest';
import type { CalculatorToDoorResult } from '../models/CalculatorToDoorResult';
import type { CalculatorToPointResult } from '../models/CalculatorToPointResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CalculatorService {
    /**
     * Расчёт стоимости доставки
     * Рассчитывает стоимость доставки
     * @param requestBody Объект типа CalculatorRequest
     * @returns any OK
     * @throws ApiError
     */
    public static getCalculator(
        requestBody?: CalculatorRequest,
    ): CancelablePromise<{
        deliveryToDoor?: Array<CalculatorToDoorResult>;
        deliveryToPoint?: Array<CalculatorToPointResult>;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/calculator',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Интервалы доставки
     * Запрашивает у СД доступные интервалы
     * @param requestBody Объект типа CalculatorRequest
     * @returns CalculatorIntervalsResponse OK
     * @throws ApiError
     */
    public static postCalculatorIntervals(
        requestBody?: CalculatorIntervalsRequest,
    ): CancelablePromise<CalculatorIntervalsResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/calculator/intervals',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
