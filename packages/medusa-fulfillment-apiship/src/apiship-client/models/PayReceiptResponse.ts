/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PayReceiptFiscalData } from './PayReceiptFiscalData';
export type PayReceiptResponse = {
    /**
     * Номер чека
     */
    id?: number;
    /**
     * Номер чека в системе ОФД
     */
    providerNumber?: string;
    /**
     * Статус чека 0-новый, 1-был отправлен в ОФД, 2-обрабатывается ОФД, 3-успешно обработан, 4-ошибка
     */
    status?: number;
    /**
     * Текстовое описание текущего статуса (или текст ошибки при соответствующем статусе)
     */
    statusDescription?: string;
    /**
     * Дата создания чека
     */
    created?: string;
    /**
     * Ссылка на изображение чека
     */
    receiptImage?: string;
    fiscalData?: PayReceiptFiscalData;
};

