# V1SupplyOrderCancelStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_reasons** | [**Array&lt;SupplyOrderCancelStatusResponseCancelOrderError&gt;**](SupplyOrderCancelStatusResponseCancelOrderError.md) | Причина, по которой не удалось отменить заявку на поставку:   - &#x60;INVALID_ORDER_STATE&#x60; — неверный статус заявки на поставку.   - &#x60;ORDER_IS_VIRTUAL&#x60; — заявка виртуальная.    - &#x60;ORDER_DOES_NOT_BELONG_TO_CONTRACTOR&#x60; —  заявка на поставку не принадлежит вашему юридическому лицу.   - &#x60;ORDER_DOES_NOT_BELONG_TO_COMPANY&#x60; — заявка на поставку не принадлежит продавцу.    - &#x60;OTHER_ASYNCHRONOUS_OPERATION_IN_PROGRESS&#x60; — заявка на поставку в процессе отмены.  | [optional] [default to undefined]
**result** | [**SupplyOrderCancelStatusResponseResult**](SupplyOrderCancelStatusResponseResult.md) |  | [optional] [default to undefined]
**status** | [**V1SupplyOrderCancelStatusResponseStatus**](V1SupplyOrderCancelStatusResponseStatus.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V1SupplyOrderCancelStatusResponse } from './api';

const instance: V1SupplyOrderCancelStatusResponse = {
    error_reasons,
    result,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
