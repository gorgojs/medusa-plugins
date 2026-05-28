# ApiV3OrdersStatusHistoryPost200ResponseOrdersInnerStatusesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | Date of the status assignment | [optional] [default to undefined]
**code** | **string** | Assembly order status code:   - &#x60;dispatched_to_delivery_service&#x60; — The order is handed over to delivery service in the seller country   - &#x60;on_way_to_delivery_service&#x60; — The order is on the way to delivery service\&#39;s warehouse in the seller country   - &#x60;accepted_by_carrier&#x60; — Product accepted by the carrier   - &#x60;assembling&#x60; — Sent for assembly   - &#x60;assembled&#x60; — Assembled at the warehouse   - &#x60;sorted&#x60; — Sorted   - &#x60;replaced_at_warehouse&#x60; — Replaced at the warehouse   - &#x60;prepared_for_shipment&#x60; — Prepared for shipment   - &#x60;in_search&#x60; — In search   - &#x60;arrived_at_dct&#x60; — Arrived at the distribution center-transit   - &#x60;arrived_at_sct&#x60; — Arrived at the sorting center-transit   - &#x60;arrived_at_dc&#x60; — Arrived at the distribution center   - &#x60;arrived_at_sc&#x60; — Arrived at the sorting center   - &#x60;prepared_for_shipment_at_sc&#x60; — Prepared for shipment at the sorting center   - &#x60;shipped_at_sc&#x60; — Shipped by the sorting center   - &#x60;shipped_at_dct&#x60; — Shipped by the distribution center — transit   - &#x60;shipped_at_dc&#x60; — Shipped by the distribution center   - &#x60;delivered_at_sc&#x60; — Delivered to the SC/DC   - &#x60;on_way_to_sc&#x60; — En route to the sorting center   - &#x60;on_way_to_dc&#x60; — En route to the distribution center   - &#x60;on_way_to_pp&#x60; — En route to the pickup point   - &#x60;arrived_at_pp&#x60; — Arrived at the pickup point   - &#x60;accepted_at_pp&#x60; — Received at the pickup point   - &#x60;ready_for_pick_up&#x60; — Ready for pickup   - &#x60;arrived_at_pp&#x60; — Arrived at the pickup point   - &#x60;received_by_client&#x60; — Received by the client   - &#x60;delivered_at_parcel_locker&#x60; — Delivered to the parcel locker   - &#x60;canceled_by_client&#x60; — Buyer canceled the order upon receipt   - &#x60;cancel_after_expiration&#x60; — Canceled due to storage time limit   - &#x60;at_courier&#x60; — Transferred to the courier   - &#x60;moved_to_return_box&#x60; — Moved to the return box   - &#x60;accepted_for_return&#x60; — Accepted for return at the pickup point   - &#x60;created&#x60; — Created   - &#x60;canceled_by_seller&#x60; — Canceled by the seller   - &#x60;dispatched_by_seller&#x60; — Shipped according to seller\&#39;s data   - &#x60;delivered&#x60; — Order issued   - &#x60;on_way&#x60; — En route   - &#x60;arrived_at_wb_wh&#x60; — Arrived at the WB warehouse   - &#x60;dispatched_from_wh&#x60; — Sent from the warehouse   - &#x60;customs_clearance&#x60; — Customs clearance   - &#x60;customs_clearance_completed&#x60; — Released by customs   - &#x60;departed_from_origin_country&#x60; — Sent from the seller\&#39;s country   - &#x60;arrived_in_destination_country&#x60; — Arrival in the destination country   - &#x60;on_way_to_wb_sc&#x60; — Sent to the WB SC   - &#x60;accepted_at_wb_sc&#x60; — Accepted by the WB SC   - &#x60;canceled&#x60; — Canceled   - &#x60;failed_to_reach_client&#x60; — Could not reach the client  | [optional] [default to undefined]

## Example

```typescript
import { ApiV3OrdersStatusHistoryPost200ResponseOrdersInnerStatusesInner } from './api';

const instance: ApiV3OrdersStatusHistoryPost200ResponseOrdersInnerStatusesInner = {
    date,
    code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
