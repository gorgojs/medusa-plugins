/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Recipient } from './Recipient';
import type { Sender } from './Sender';
export type CreateAddressCodeRequest = {
    /**
     * Код создаваемого адреса
     */
    code: string;
    recipient?: Recipient;
    sender?: Sender;
};

