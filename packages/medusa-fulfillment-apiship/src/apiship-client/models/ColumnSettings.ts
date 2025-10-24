/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ColumnSettings = {
    /**
     * Формат даты в таблице
     */
    dateFormat: string;
    /**
     * Формат ФИО в таблице (true(или 1) - ФИО в разных столбцах; false(или 0) - ФИО в одном столбце)
     */
    nameFormat: boolean;
    /**
     * Тип расположения данных о товарных вложениях (true - располагаются в строке информации о заказе; false - располагаются под информацией о заказе)
     */
    itemsNewRow: boolean;
    /**
     * Формат времени в таблице
     */
    timeFormat: string;
    /**
     * Порядковый номер первой считываемой строки таблицы
     */
    rowStart?: number;
    /**
     * Порядковый номер последней считываемой строки таблицы
     */
    rowEnd?: number;
};

