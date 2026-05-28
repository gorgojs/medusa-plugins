# ReturnsRfbsListResponseReturns

Данные о заявках.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_name** | **string** | Имя покупателя. | [optional] [default to undefined]
**created_at** | **string** | Дата создания заявки. | [optional] [default to undefined]
**order_number** | **string** | Номер заказа. | [optional] [default to undefined]
**posting_number** | **string** | Номер отправления. | [optional] [default to undefined]
**product** | [**V2Product**](V2Product.md) |  | [optional] [default to undefined]
**return_id** | **number** | Идентификатор заявки на возврат. | [optional] [default to undefined]
**return_number** | **string** | Номер заявки на возврат. | [optional] [default to undefined]
**state** | [**V2ReturnsRfbsListV2ResponseState**](V2ReturnsRfbsListV2ResponseState.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ReturnsRfbsListResponseReturns } from './api';

const instance: ReturnsRfbsListResponseReturns = {
    client_name,
    created_at,
    order_number,
    posting_number,
    product,
    return_id,
    return_number,
    state,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
