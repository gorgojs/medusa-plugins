/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CalculatorDirection } from './CalculatorDirection';
export type CalculatorIntervalsRequest = ({
    to?: CalculatorDirection;
    from?: CalculatorDirection;
    /**
     * Сумма наложенного платежа
     */
    codCost?: number;
    /**
     * Дата приёма груза
     */
    pickupDate?: string;
    /**
     * Дата доставки груза
     */
    deliveryDate?: string;
    /**
     * [Типы забора /lists/pickupTypes](#/lists/pickupTypes). Если не переданы, то рассчитываются тарифы по всем типам (Забор груза курьером, Сдача груза на ПВЗ)
     */
    pickupTypes?: Array<number>;
    /**
     * Массив ключей служб доставки. Если не передавать, то рассчитает тарифы всех подключенных к аккаунту служб доставки
     */
    providerKeys?: Array<string>;
    /**
     * Дополнительные параметры. Например. можно рассчитать DPD по какому-то определенному подключению (договору), передав dpd.providerConnectId = id из [/connections/getListConnections](#/connections/getListConnections)
     *
     * Передавать как {"<ключ\_службы\_доставки>.<код_параметра>": "<значение>"}
     */
    extraParams?: Record<string, string>;
    /**
     * Тарифы, для которых необходимо произвести расчёт
     */
    tariffIds?: Array<number>;
} & {
    to: CalculatorDirection;
    from: CalculatorDirection;
});

