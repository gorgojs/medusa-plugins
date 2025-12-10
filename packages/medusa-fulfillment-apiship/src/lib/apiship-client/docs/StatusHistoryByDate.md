# StatusHistoryByDate

Информация об истории статусов заказов с описанием заказа

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderInfo** | [**OrderInfo**](OrderInfo.md) |  | [optional] [default to undefined]
**statuses** | [**Array&lt;OrderStatus&gt;**](OrderStatus.md) | Массив истории статусов | [optional] [default to undefined]

## Example

```typescript
import { StatusHistoryByDate } from './api';

const instance: StatusHistoryByDate = {
    orderInfo,
    statuses,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
