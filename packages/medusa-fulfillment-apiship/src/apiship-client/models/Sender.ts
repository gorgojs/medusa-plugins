/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Recipient } from './Recipient';
export type Sender = (Recipient & {
    /**
     * Бренд продавца
     */
    brandName?: string;
    /**
     * Дополнительный телефон
     */
    readonly additionalPhone?: string;
});

