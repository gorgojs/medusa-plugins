# StatusHistoryByInterval

Информация об истории статусов заказов с описанием заказа

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderInfo** | [**OrderInfo**](OrderInfo.md) |  | [optional] [default to undefined]
**statuses** | [**Array&lt;OrderStatus&gt;**](OrderStatus.md) | Массив истории статусов | [optional] [default to undefined]

## Example

```typescript
import { StatusHistoryByInterval } from './api';

const instance: StatusHistoryByInterval = {
    orderInfo,
    statuses,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
