# V2FboPosting

Результат запроса.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_data** | [**Array&lt;V2AdditionalDataItem&gt;**](V2AdditionalDataItem.md) |  | [optional] [default to undefined]
**analytics_data** | [**FboPostingFboPostingAnalyticsData**](FboPostingFboPostingAnalyticsData.md) |  | [optional] [default to undefined]
**cancel_reason_id** | **number** | Идентификатор причины отмены отправления. | [optional] [default to undefined]
**created_at** | **string** | Дата и время создания отправления. | [optional] [default to undefined]
**financial_data** | [**V2PostingFinancialDataFBO**](V2PostingFinancialDataFBO.md) |  | [optional] [default to undefined]
**in_process_at** | **string** | Дата и время начала обработки отправления. | [optional] [default to undefined]
**legal_info** | [**V2FboSinglePostingLegalInfo**](V2FboSinglePostingLegalInfo.md) |  | [optional] [default to undefined]
**order_id** | **number** | Идентификатор заказа, к которому относится отправление. | [optional] [default to undefined]
**order_number** | **string** | Номер заказа, к которому относится отправление. | [optional] [default to undefined]
**posting_number** | **string** | Номер отправления. | [optional] [default to undefined]
**products** | [**Array&lt;V2PostingProduct&gt;**](V2PostingProduct.md) | Список товаров в отправлении. | [optional] [default to undefined]
**status** | **string** | Статус отправления:   - &#x60;awaiting_packaging&#x60; — ожидает упаковки,   - &#x60;awaiting_deliver&#x60; — ожидает отгрузки,   - &#x60;delivering&#x60; — доставляется,   - &#x60;delivered&#x60; — доставлено,   - &#x60;cancelled&#x60; — отменено.  | [optional] [default to undefined]
**substatus** | **string** | Подстатус отправления: - &#x60;posting_split_pending&#x60;, &#x60;posting_created&#x60; — создано; - &#x60;posting_packing&#x60; — на упаковке; - &#x60;posting_transferring_to_delivery&#x60; — передаётся в доставку; - &#x60;posting_on_way_to_city&#x60; — на пути в город доставки; - &#x60;posting_returned_to_warehouse&#x60; — возвращено на склад; - &#x60;posting_transferred_to_courier_service&#x60; — передаётся в службу доставки; - &#x60;posting_in_courier_service&#x60; — курьер в пути; - &#x60;posting_on_way_to_pickup_point&#x60; — в пути в пункт выдачи; - &#x60;posting_in_pickup_point&#x60; — в пункте выдачи; - &#x60;posting_delivered&#x60; — доставлено курьером; - &#x60;posting_received&#x60; — получено в пункте выдачи; - &#x60;posting_canceled&#x60; — отменено.  | [optional] [default to undefined]

## Example

```typescript
import { V2FboPosting } from './api';

const instance: V2FboPosting = {
    additional_data,
    analytics_data,
    cancel_reason_id,
    created_at,
    financial_data,
    in_process_at,
    legal_info,
    order_id,
    order_number,
    posting_number,
    products,
    status,
    substatus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
