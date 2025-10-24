/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExtraParam } from './ExtraParam';
import type { OrderReturnData } from './OrderReturnData';
import type { Place } from './Place';
import type { Recipient } from './Recipient';
import type { ReturnCost } from './ReturnCost';
import type { ReturnItem } from './ReturnItem';
import type { Sender } from './Sender';
export type OrderReturnRequest = {
    /**
     * Идентификатор прямого заказа (orderId из методов создания заказа)
     */
    directOrderId?: number;
    order: OrderReturnData;
    cost: ReturnCost;
    sender: Sender;
    recipient: Recipient;
    /**
     * @deprecated
     */
    items?: Array<ReturnItem>;
    places?: Array<Place>;
    extraParams?: Array<ExtraParam>;
};

