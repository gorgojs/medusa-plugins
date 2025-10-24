/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Sizes } from './Sizes';
export type Item = (Sizes & {
    /**
     * Артикул товара
     */
    articul?: string;
    /**
     * Код маркировки (UTF-8)
     */
    markCode?: string;
    /**
     * Наименование товара
     */
    description: string;
    /**
     * Кол-во товара. Если указан markCode, то кол-во не может быть > 1
     */
    quantity: number;
    /**
     * Заполняется только при частичной доставке и показывает сколько единиц товара выкуплено
     */
    quantityDelivered?: number | null;
    /**
     * Оценочная стоимость единицы товара в рублях
     */
    assessedCost?: number | null;
    /**
     * Стоимость единицы товара с учетом НДС в рублях
     */
    cost?: number | null;
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
    costVat?: Item.costVat | null;
    /**
     * Штрихкод на товаре
     */
    barcode?: string;
    /**
     * Наименование компании поставщика / продавца товара
     */
    companyName?: string;
    /**
     * ИНН поставщика / продавца товара
     */
    companyInn?: string;
    /**
     * Телефон поставщика / продавца товара
     */
    companyPhone?: string;
    /**
     * Код ТН ВЭД
     */
    tnved?: string;
    /**
     * Ссылка на страницу товара в интернет-магазине
     */
    url?: string;
});
export namespace Item {
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
    export enum costVat {
        '_-1' = -1,
        '_0' = 0,
        '_10' = 10,
        '_20' = 20,
        '_5' = 5,
        '_7' = 7,
    }
}

