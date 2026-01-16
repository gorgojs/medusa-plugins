# GetOrderStatusHistory200Response

Список

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderInfo** | [**OrderInfo**](OrderInfo.md) |  | [optional] [default to undefined]
**rows** | [**Array&lt;OrderStatus&gt;**](OrderStatus.md) | Массив статусов (сортировка created DESC) | [optional] [default to undefined]
**meta** | [**PaginationMeta**](PaginationMeta.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetOrderStatusHistory200Response } from './api';

const instance: GetOrderStatusHistory200Response = {
    orderInfo,
    rows,
    meta,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
