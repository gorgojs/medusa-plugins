/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ExtendedOrderData = {
    check?: {
        /**
         * Ссылка на чек
         */
        url?: string;
        /**
         * Номер фискального накопителя
         */
        fiscalNumber?: string;
        /**
         * Порядковый номер фискального документа
         */
        fiscalDocumentNumber?: string;
        /**
         * Фискальный признак документа
         */
        fiscalAttribute?: string;
        /**
         * 1 - приход; 2- возврат
         */
        type?: number;
        /**
         * Сумма по чеку (в рублях)
         */
        amount?: number;
        /**
         * Дата и время формирования чека
         */
        createdProvider?: string;
        /**
         * Дата и время получения информации о чеке
         */
        created?: string;
    } | null;
    /**
     * Фактический вес отправления (граммы)
     */
    factOrderWeight?: number;
    /**
     * Фактический объём отправления (см3)
     */
    factVolumeCm3?: number;
    /**
     * Фактический вес отправления (граммы)
     */
    factPlacesWeight?: Array<{
        /**
         * Номер грузоместа в ApiShip
         */
        placeId?: number;
        /**
         * Вес грузоместа (граммы)
         */
        weight?: number;
    }>;
    /**
     * Плановая стоимость доставки (рубли)
     */
    planDeliveryCost?: number;
    /**
     * Фактическая стоимость доставки (рубли)
     */
    factDeliveryCost?: number;
    /**
     * Фактическая стоимость возврата (рубли)
     */
    factReturnDeliveryCost?: number;
    /**
     * Фактический наложенный платеж (рубли)
     */
    factCodCost?: number;
    /**
     * Дата перечисления наложенного платежа
     */
    factCodDate?: string | null;
    /**
     * Тип оплаты:
     * - 'cash' - наличными;
     * - 'card' - картой;
     * - 'common' - наличными и кредитной карточкой;
     *
     */
    usedPaymentMethod?: ExtendedOrderData.usedPaymentMethod | null;
    orderServicesDetails?: Array<{
        /**
         * Код услуги
         */
        serviceKey?: string;
        /**
         * Название услуги
         */
        serviceName?: string;
        /**
         * Код услуги в СД
         */
        serviceProviderCode?: string;
        /**
         * Название услуги в СД
         */
        serviceProviderName?: string;
        /**
         * Стоимость услуги (рубли)
         */
        serviceProviderCost?: string;
    }>;
    returnReason?: {
        /**
         * Код причины возврата
         */
        returnReasonKey?: string;
        /**
         * Описание причины возврата
         */
        returnReasonName?: string;
    } | null;
};
export namespace ExtendedOrderData {
    /**
     * Тип оплаты:
     * - 'cash' - наличными;
     * - 'card' - картой;
     * - 'common' - наличными и кредитной карточкой;
     *
     */
    export enum usedPaymentMethod {
        CASH = 'cash',
        COMMON = 'common',
        CARD = 'card',
    }
}

