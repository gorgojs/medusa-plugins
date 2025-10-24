/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ColumnMap } from './ColumnMap';
import type { ColumnSettings } from './ColumnSettings';
import type { DefaultData } from './DefaultData';
import type { File } from './File';
export type OrdersUploadRequest = {
    /**
     * Код службы доставки
     */
    providerKey: string;
    /**
     * Метод загрузки заказов
     */
    mode?: string;
    /**
     * Флаг возвращения base64 строки исходного файла с ошибками создания, если имеются. (true - в исходный файл будут записаны ошибки создания и в ответе будет возвращена base64 строка данного файла; false - в файл не будут записаны ошибки)
     */
    errorsToFile?: boolean;
    file: File;
    columnSettings: ColumnSettings;
    columnMap: ColumnMap;
    defaultData?: DefaultData;
};

