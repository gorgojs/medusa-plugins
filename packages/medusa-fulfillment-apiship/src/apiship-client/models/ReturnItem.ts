/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ReturnItem = {
    /**
     * Вес единицы товара в граммах
     */
    weight?: number;
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
     * Оценочная стоимость единицы товара в рублях
     */
    assessedCost?: number;
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
};

