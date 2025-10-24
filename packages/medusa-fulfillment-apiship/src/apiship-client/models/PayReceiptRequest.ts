/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PayReceiptData } from './PayReceiptData';
import type { PayReceiptItem } from './PayReceiptItem';
export type PayReceiptRequest = {
    payReceipt: PayReceiptData;
    items: Array<PayReceiptItem>;
    shouldPrint?: boolean;
};

