# UpdateOrderItemRequest

Запрос на обновление состава заказа.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;OrderItemModificationDTO&gt;**](OrderItemModificationDTO.md) | Список товаров в заказе.  Если магазин не передал информацию о товаре во входных данных, он будет удален из заказа.  Обязательный параметр.  | [default to undefined]
**reason** | [**OrderItemsModificationRequestReasonType**](OrderItemsModificationRequestReasonType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateOrderItemRequest } from './api';

const instance: UpdateOrderItemRequest = {
    items,
    reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
