/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Item } from './Item';
import type { Sizes } from './Sizes';
export type Place = (Sizes & {
    /**
     * Номер места в информационной системе клиента
     */
    placeNumber?: string;
    /**
     * ШК места
     */
    barcode?: string;
    items: Array<Item>;
});

