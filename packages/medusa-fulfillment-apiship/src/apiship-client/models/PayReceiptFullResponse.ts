/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PayReceiptData } from './PayReceiptData';
import type { PayReceiptItem } from './PayReceiptItem';
import type { PayReceiptResponse } from './PayReceiptResponse';
export type PayReceiptFullResponse = (PayReceiptResponse & {
    payReceipt?: PayReceiptData;
    items?: Array<PayReceiptItem>;
});

