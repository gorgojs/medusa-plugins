/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DeliveryInterval = {
    /**
     * Дата интервала. Значение будет null, если интервал статический(не изменяется)
     */
    date?: string | null;
    /**
     * Время "от"
     */
    from?: string;
    /**
     * Время "до"
     */
    to?: string;
};

