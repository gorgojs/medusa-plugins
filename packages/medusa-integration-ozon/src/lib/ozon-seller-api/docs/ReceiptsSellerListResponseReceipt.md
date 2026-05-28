# ReceiptsSellerListResponseReceipt


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **string** | Дата создания чека. | [optional] [default to undefined]
**operation_type** | [**ReceiptsSellerListResponseReceiptOperationTypeEnum**](ReceiptsSellerListResponseReceiptOperationTypeEnum.md) |  | [optional] [default to undefined]
**order_id** | **number** | Идентификатор заказа. | [optional] [default to undefined]
**parent_receipt_id** | **string** | Идентификатор родительского чека. | [optional] [default to undefined]
**posting_numbers** | **Array&lt;string&gt;** | Номера отправлений. | [optional] [default to undefined]
**receipt_id** | **string** | Идентификатор чека. | [optional] [default to undefined]
**receipt_number** | **string** | Номер чека. | [optional] [default to undefined]
**type** | [**ReceiptsSellerListResponseReceiptTypeEnum**](ReceiptsSellerListResponseReceiptTypeEnum.md) |  | [optional] [default to undefined]
**updated_at** | **string** | Дата обновления. | [optional] [default to undefined]

## Example

```typescript
import { ReceiptsSellerListResponseReceipt } from './api';

const instance: ReceiptsSellerListResponseReceipt = {
    created_at,
    operation_type,
    order_id,
    parent_receipt_id,
    posting_numbers,
    receipt_id,
    receipt_number,
    type,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
