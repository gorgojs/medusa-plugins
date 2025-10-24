/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from './Address';
export type ReturnAddress = (Address & {
    /**
     * Название компании
     */
    companyName?: string;
    /**
     * ФИО контактного лица
     */
    contactName: string;
    /**
     * Контактный телефон
     */
    phone: string;
    /**
     * Контактный email адрес
     */
    email?: string;
    /**
     * Комментарий
     */
    comment?: string;
});

