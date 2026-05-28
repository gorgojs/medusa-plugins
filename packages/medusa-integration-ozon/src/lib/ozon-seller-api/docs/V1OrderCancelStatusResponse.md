# V1OrderCancelStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_number** | **string** | Номер заказа. | [optional] [default to undefined]
**posting_number** | **Array&lt;string&gt;** | Список отправлений в заказе. | [optional] [default to undefined]
**state** | **string** | Статус отмены заказа. | [optional] [default to undefined]

## Example

```typescript
import { V1OrderCancelStatusResponse } from './api';

const instance: V1OrderCancelStatusResponse = {
    order_number,
    posting_number,
    state,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
