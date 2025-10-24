/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PayReceiptItem = {
    /**
     * Стоимость единицы товара с учетом НДС в рублях
     */
    price: number;
    /**
     * Кол-во товара
     */
    quantity: number;
    /**
     * Наименование товара
     */
    title: string;
    /**
     * Код процентной ставки НДС
     */
    vatRate?: number;
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
};

