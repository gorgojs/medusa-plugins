# GetOrderStatusHistoryByClientNumber200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderInfo** | [**OrderInfo**](OrderInfo.md) |  | [optional] [default to undefined]
**statuses** | [**Array&lt;OrderStatus&gt;**](OrderStatus.md) | Массив статусов (сортировка created DESC) | [optional] [default to undefined]

## Example

```typescript
import { GetOrderStatusHistoryByClientNumber200Response } from './api';

const instance: GetOrderStatusHistoryByClientNumber200Response = {
    orderInfo,
    statuses,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
