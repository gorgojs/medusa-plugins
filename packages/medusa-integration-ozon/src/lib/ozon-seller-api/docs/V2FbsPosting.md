# V2FbsPosting

Результаты запроса.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**barcodes** | [**FbsPostingBarcodes**](FbsPostingBarcodes.md) |  | [optional] [default to undefined]
**cancel_reason_id** | **number** | Идентификатор причины отмены отправления. | [optional] [default to undefined]
**created_at** | **string** | Дата и время создания отправления. | [optional] [default to undefined]
**in_process_at** | **string** | Дата и время начала обработки отправления. | [optional] [default to undefined]
**order_id** | **number** | Идентификатор заказа, к которому относится отправление. | [optional] [default to undefined]
**order_number** | **string** | Номер заказа, к которому относится отправление. | [optional] [default to undefined]
**posting_number** | **string** | Номер отправления. | [optional] [default to undefined]
**products** | [**Array&lt;V2FbsPostingProduct&gt;**](V2FbsPostingProduct.md) | Список товаров в отправлении. | [optional] [default to undefined]
**shipment_date** | **string** | Дата и время, до которой необходимо собрать отправление. Если отправление не собрать к этой дате — оно автоматически отменится. | [optional] [default to undefined]
**status** | **string** | Статус отправления. | [optional] [default to undefined]

## Example

```typescript
import { V2FbsPosting } from './api';

const instance: V2FbsPosting = {
    barcodes,
    cancel_reason_id,
    created_at,
    in_process_at,
    order_id,
    order_number,
    posting_number,
    products,
    shipment_date,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
