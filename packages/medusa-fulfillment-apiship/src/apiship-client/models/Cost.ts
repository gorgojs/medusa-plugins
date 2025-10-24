/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeliveryCostThreshold } from './DeliveryCostThreshold';
export type Cost = {
    /**
     * Оценочная стоимость / сумма страховки (в рублях). Совпадает с суммой оценочной стоимости по всем товарам(places[].items[].assessedCost)
     */
    assessedCost: number;
    /**
     * Стоимость доставки с учетом НДС (в рублях)
     */
    deliveryCost?: number | null;
    /**
     * Процентная ставка НДС:
     * - '-1' - Без НДС;
     * - '0' - НДС 0%;
     * - '10' - НДС 10%;
     * - '20' - НДС 20%;
     * - '5' - НДС 5%;
     * - '7' - НДС 7%;
     *
     */
    deliveryCostVat?: Cost.deliveryCostVat | null;
    /**
     * Сумма наложенного платежа с учетом НДС (в рублях). Совпадает с суммой наложенного платежа по всем товарам(places[].items[].cost) + стоимостью доставки(cost.deliveryCost)
     */
    codCost: number;
    /**
     * Флаг для указания стороны, которая платит за услуги доставки (0-отправитель, 1-получатель)
     */
    isDeliveryPayedByRecipient?: boolean | null;
    /**
     * Способ оплаты заказа: - 1 - Наличные; - 2 - Карта; - 3 - Смешанная оплата(наличные и карта) - 4 - Безналичная оплата (по счету)
     */
    paymentMethod?: Cost.paymentMethod | null;
    /**
     * Пороги стоимости доставки, используются для динамической стоимости доставки в случае частичного выкупа (Поддержка есть только у СДЭК, Logsis, Lpost)
     */
    deliveryCostThresholds?: Array<DeliveryCostThreshold>;
};
export namespace Cost {
    /**
     * Процентная ставка НДС:
     * - '-1' - Без НДС;
     * - '0' - НДС 0%;
     * - '10' - НДС 10%;
     * - '20' - НДС 20%;
     * - '5' - НДС 5%;
     * - '7' - НДС 7%;
     *
     */
    export enum deliveryCostVat {
        '_-1' = -1,
        '_0' = 0,
        '_10' = 10,
        '_20' = 20,
        '_5' = 5,
        '_7' = 7,
    }
    /**
     * Способ оплаты заказа: - 1 - Наличные; - 2 - Карта; - 3 - Смешанная оплата(наличные и карта) - 4 - Безналичная оплата (по счету)
     */
    export enum paymentMethod {
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }
}

