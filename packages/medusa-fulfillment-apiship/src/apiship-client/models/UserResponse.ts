/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserResponse = {
    /**
     * ИД
     */
    readonly id?: string;
    /**
     * ИД компании
     */
    readonly companyId?: string;
    login?: string;
    email?: string;
    /**
     * Доступные роли пользователя
     */
    readonly roles?: Array<string>;
    /**
     * Заказ создается как черновик
     */
    useDraft?: boolean;
    /**
     * Дата принятия оферты
     */
    offerAccepted?: string;
    /**
     * Дата создания
     */
    readonly created?: string;
    /**
     * Дата изменения
     */
    readonly updated?: string;
};

