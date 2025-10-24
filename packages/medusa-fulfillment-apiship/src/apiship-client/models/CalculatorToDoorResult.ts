/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CalculatorToDoorResult = {
    providerKey?: string;
    tariffs?: Array<{
        /**
         * ID тарифа в службе доставки
         */
        tariffProviderId?: string;
        /**
         * ID тарифа в ApiShip
         */
        tariffId?: number;
        /**
         * Название тарифа
         */
        tariffName?: string;
        /**
         * Типы забора (см. /lists/pickupTypes), если не переданы берутся оба типа
         */
        pickupTypes?: Array<number>;
        /**
         * Типы доставки (см. /lists/deliveryTypes), если не переданы берутся оба типа
         */
        deliveryTypes?: Array<number>;
        /**
         * Стоимость тарифа
         */
        deliveryCost?: number;
        /**
         * Стоимость тарифа до применения правил
         */
        deliveryCostOriginal?: number;
        /**
         * Были ли включены сборы СД в общую стоимость (deliveryCost). NULL если невозможно определить
         */
        feesIncluded?: boolean;
        /**
         * Сумма страховых сборов. NULL если невозможно определить
         */
        insuranceFee?: number;
        /**
         * Сумма сборов за наложенный платёж. NULL если невозможно определить
         */
        cashServiceFee?: number;
        /**
         * Максимальное кол-во дней доставки
         * @deprecated
         */
        daysMax?: number;
        /**
         * Минимальное кол-во дней доставки
         * @deprecated
         */
        daysMin?: number;
        /**
         * Максимальное кол-во календарных дней доставки
         */
        calendarDaysMax?: number;
        /**
         * Минимальное кол-во календарных дней доставки
         */
        calendarDaysMin?: number;
        /**
         * Максимальное кол-во рабочих дней доставки
         */
        workDaysMax?: number;
        /**
         * Минимальное кол-во рабочих дней доставки
         */
        workDaysMin?: number;
    }>;
};

