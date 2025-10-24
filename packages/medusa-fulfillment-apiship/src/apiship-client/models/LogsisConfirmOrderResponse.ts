/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LogsisConfirmOrderResponse = {
    /**
     * Статус
     */
    status?: string;
    response?: Array<{
        /**
         * id заказа в службе доставки
         */
        order_id?: string;
        /**
         * inner_id
         */
        inner_id?: string;
        /**
         * Статус подтверждения
         */
        Confirmed?: string;
        /**
         * Ошибки
         */
        Error?: string;
    }>;
};

