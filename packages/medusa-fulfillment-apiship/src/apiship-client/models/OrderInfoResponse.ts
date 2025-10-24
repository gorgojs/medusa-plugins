/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExtendedOrderData } from './ExtendedOrderData';
import type { ExtraParam } from './ExtraParam';
import type { Item } from './Item';
import type { OrderInfoCost } from './OrderInfoCost';
import type { OrderInfoData } from './OrderInfoData';
import type { Place } from './Place';
import type { Recipient } from './Recipient';
import type { ReturnAddress } from './ReturnAddress';
import type { Sender } from './Sender';
export type OrderInfoResponse = {
    order?: OrderInfoData;
    cost?: OrderInfoCost;
    sender?: Sender;
    recipient?: Recipient;
    returnAddress?: ReturnAddress;
    items?: Array<Item>;
    places?: Array<Place>;
    extraParams?: Array<ExtraParam>;
    extendedInfo?: ExtendedOrderData;
};

