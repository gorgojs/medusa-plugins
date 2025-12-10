# OrderItemInstanceModificationDTO

Позиция в корзине, требующая маркировки.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор товара в заказе.  Он приходит в ответе на запрос [GET v2/campaigns/{campaignId}/orders/{orderId}](../../reference/orders/getOrder.md) — параметр &#x60;id&#x60; в &#x60;items&#x60;.  | [default to undefined]
**instances** | [**Array&lt;BriefOrderItemInstanceDTO&gt;**](BriefOrderItemInstanceDTO.md) | Список кодов маркировки единиц товара.  | [default to undefined]

## Example

```typescript
import { OrderItemInstanceModificationDTO } from './api';

const instance: OrderItemInstanceModificationDTO = {
    id,
    instances,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
