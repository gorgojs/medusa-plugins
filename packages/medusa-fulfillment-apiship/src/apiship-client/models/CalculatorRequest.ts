/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CalculatorDirection } from './CalculatorDirection';
import type { CalculatorPlace } from './CalculatorPlace';
import type { Sizes } from './Sizes';
export type CalculatorRequest = ({
    to?: CalculatorDirection;
    from?: CalculatorDirection;
    /**
     * Места. Калькуляция многоместных заказов.. В случае когда СД не поддерживает многоместную калькуляцию, вес суммируется, а габариты всех коробок складываются в высоту и берется макс. длина и ширина, то есть коробки ставятся друг на друга пирамидой и передаются в СД для расчета
     */
    places?: Array<CalculatorPlace>;
    /**
     * Автоматически передокладывается в places[0].width
     * @deprecated
     */
    width?: any;
    /**
     * Автоматически передокладывается в places[0].height
     * @deprecated
     */
    height?: any;
    /**
     * Автоматически передокладывается в places[0].length
     * @deprecated
     */
    length?: any;
    /**
     * Автоматически передокладывается в places[0].weight
     * @deprecated
     */
    weight?: any;
    /**
     * Дата приёма груза (не обязательно, по умолчания берется текущая дата)
     */
    pickupDate?: string;
    /**
     * [Типы забора /lists/pickupTypes](#/lists/pickupTypes). Если не переданы, то рассчитываются тарифы по всем типам (Забор груза курьером, Сдача груза на ПВЗ)
     */
    pickupTypes?: Array<number>;
    /**
     * [Типы доставки /lists/deliveryTypes](#/lists/deliveryTypes). Если не переданы, то рассчитываются тарифы по всем типам (Доставка Курьером, Самовывоз из ПВЗ)
     */
    deliveryTypes?: Array<number>;
    /**
     * Массив ключей служб доставки. Если не передавать, то рассчитает тарифы всех подключенных к аккаунту служб доставки
     */
    providerKeys?: Array<string>;
    /**
     * Оценочная стоимость (в рублях)
     */
    assessedCost?: number;
    /**
     * Сумма наложенного платежа
     */
    codCost?: number;
    /**
     * Суммировать ли к итоговой стоимости все сборы СД (страховка и комиссия за НП)
     */
    includeFees?: boolean;
    /**
     * Время ожидания ответа (мс.) от провайдера, результаты по провайдерам, которые не успели в указанное время выдаваться не будут
     */
    timeout?: number;
    /**
     * Пропускает применение правил редактора тарифов. Полезно, если надо проверить корректность применения правил
     */
    skipTariffRules?: boolean;
    /**
     * Дополнительные параметры. Например. можно рассчитать DPD по какому-то определенному подключению (договору), передав dpd.providerConnectId = id из [/connections/getListConnections](#/connections/getListConnections)
     *
     * Передавать как {"<ключ\_службы\_доставки>.<код_параметра>": "<значение>"}
     */
    extraParams?: Record<string, string>;
    /**
     * Промокод. В редакторе тарифов можно указать промокод, по которому можно изменять тарифы, например, скидку на стоимость доставки.
     */
    promoCode?: string;
    /**
     * Пользовательское поле. В это поле можно передать, например, название сайта и по нему строить правила в редакторе сайтов.
     */
    customCode?: string;
    /**
     * Тарифы, для которых необходимо произвести расчёт
     */
    tariffIds?: Array<number>;
    /**
     * Идентификатор ПВЗ от которого вести расчет
     */
    pointInId?: number;
    /**
     * Идентификатор ПВЗ до которого вести расчет
     */
    pointOutId?: number;
} & Sizes & {
    to: CalculatorDirection;
    from: CalculatorDirection;
    /**
     * Места. Калькуляция многоместных заказов.. В случае когда СД не поддерживает многоместную калькуляцию, вес суммируется, а габариты всех коробок складываются в высоту и берется макс. длина и ширина, то есть коробки ставятся друг на друга пирамидой и передаются в СД для расчета
     */
    places: Array<CalculatorPlace>;
    /**
     * Оценочная стоимость (в рублях)
     */
    assessedCost: number;
});

