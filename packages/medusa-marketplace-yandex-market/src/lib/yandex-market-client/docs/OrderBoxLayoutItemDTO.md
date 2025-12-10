# OrderBoxLayoutItemDTO

Информация о товаре в коробке.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор товара в заказе.  Он приходит в ответе на запрос [GET v2/campaigns/{campaignId}/orders/{orderId}](../../reference/orders/getOrder.md) — параметр &#x60;id&#x60; в &#x60;items&#x60;.  | [default to undefined]
**fullCount** | **number** | Количество единиц товара в коробке.  Используйте это поле, если в коробке поедут целые товары, не разделенные на части. Не используйте это поле одновременно с &#x60;partialCount&#x60;.  | [optional] [default to undefined]
**partialCount** | [**OrderBoxLayoutPartialCountDTO**](OrderBoxLayoutPartialCountDTO.md) |  | [optional] [default to undefined]
**instances** | [**Array&lt;BriefOrderItemInstanceDTO&gt;**](BriefOrderItemInstanceDTO.md) | Переданные вами коды маркировки. | [optional] [default to undefined]

## Example

```typescript
import { OrderBoxLayoutItemDTO } from './api';

const instance: OrderBoxLayoutItemDTO = {
    id,
    fullCount,
    partialCount,
    instances,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
