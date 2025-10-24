/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Cost } from './Cost';
import type { ExtraParam } from './ExtraParam';
import type { Item } from './Item';
import type { OrderData } from './OrderData';
import type { Place } from './Place';
import type { Recipient } from './Recipient';
import type { ReturnAddress } from './ReturnAddress';
import type { Sender } from './Sender';
export type OrderRequest = {
    order: OrderData;
    cost: Cost;
    sender: Sender;
    recipient: Recipient;
    returnAddress?: ReturnAddress;
    /**
     * @deprecated
     */
    items?: Array<Item>;
    places?: Array<Place>;
    extraParams?: Array<ExtraParam>;
};

