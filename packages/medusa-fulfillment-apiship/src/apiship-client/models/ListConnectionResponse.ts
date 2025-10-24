/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Connection } from './Connection';
import type { PaginationMeta } from './PaginationMeta';
export type ListConnectionResponse = {
    /**
     * Массив объектов подключений
     */
    rows?: Array<Connection>;
    meta?: PaginationMeta;
};

