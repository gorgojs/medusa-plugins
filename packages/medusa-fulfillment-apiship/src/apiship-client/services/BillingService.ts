/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BillingService {
    /**
     * Баланс и остаток калькуляций
     * @returns any OK
     * @throws ApiError
     */
    public static getBillingBalance(): CancelablePromise<{
        calculations?: number;
        freeCalculations?: number;
        money?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/billing/balance',
        });
    }
}
