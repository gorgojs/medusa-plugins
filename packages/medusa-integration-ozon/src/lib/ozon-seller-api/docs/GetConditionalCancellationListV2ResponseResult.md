# GetConditionalCancellationListV2ResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approve_comment** | **string** | Комментарий, оставленный при подтверждении или отклонении заявки на отмену. | [optional] [default to undefined]
**approve_date** | **string** | Дата подтверждения или отклонения заявки на отмену. | [optional] [default to undefined]
**auto_approve_date** | **string** | Дата, после которой заявка будет автоматически подтверждена. | [optional] [default to undefined]
**cancellation_id** | **number** | Идентификатор заявки на отмену. | [optional] [default to undefined]
**cancellation_initiator** | [**V2CancellationInitiatorEnum**](V2CancellationInitiatorEnum.md) |  | [optional] [default to undefined]
**cancellation_reason** | [**GetConditionalCancellationListV2ResponseCancellationReason**](GetConditionalCancellationListV2ResponseCancellationReason.md) |  | [optional] [default to undefined]
**cancellation_reason_message** | **string** | Комментарий к заявке на отмену, введённый инициатором отмены вручную. | [optional] [default to undefined]
**cancelled_at** | **string** | Дата создания заявки на отмену. | [optional] [default to undefined]
**order_date** | **string** | Дата создания заказа. | [optional] [default to undefined]
**posting_number** | **string** | Номер отправления. | [optional] [default to undefined]
**source_id** | **number** | Предыдущий идентификатор заявки на отмену.  Используется для поддержания обратной совместимости.  | [optional] [default to undefined]
**state** | [**GetConditionalCancellationListV2ResponseState**](GetConditionalCancellationListV2ResponseState.md) |  | [optional] [default to undefined]
**tpl_integration_type** | **string** | Тип интеграции со службой доставки. | [optional] [default to undefined]

## Example

```typescript
import { GetConditionalCancellationListV2ResponseResult } from './api';

const instance: GetConditionalCancellationListV2ResponseResult = {
    approve_comment,
    approve_date,
    auto_approve_date,
    cancellation_id,
    cancellation_initiator,
    cancellation_reason,
    cancellation_reason_message,
    cancelled_at,
    order_date,
    posting_number,
    source_id,
    state,
    tpl_integration_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
