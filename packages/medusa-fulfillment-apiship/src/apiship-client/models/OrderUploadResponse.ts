/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderUploadItem } from './OrderUploadItem';
export type OrderUploadResponse = {
    /**
     * Массив данных о созданных заказах
     */
    resultItems: Array<OrderUploadItem>;
    /**
     * Файл в base64 с описанием ошибок создания заказа
     */
    base64?: string;
};

