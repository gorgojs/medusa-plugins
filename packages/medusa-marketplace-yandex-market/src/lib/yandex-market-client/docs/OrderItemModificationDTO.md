# OrderItemModificationDTO

Список товаров в заказе.  Если магазин не передал информацию о товаре во входных данных, он будет удален из заказа.  Обязательный параметр. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор товара в рамках заказа.  Получить идентификатор можно с помощью ресурсов [GET v2/campaigns/{campaignId}/orders](../../reference/orders/getOrders.md) или [GET v2/campaigns/{campaignId}/orders/{orderId}](../../reference/orders/getOrder.md).  Обязательный параметр.  | [default to undefined]
**count** | **number** | Новое количество товара. | [default to undefined]
**instances** | [**Array&lt;BriefOrderItemInstanceDTO&gt;**](BriefOrderItemInstanceDTO.md) | Информация о маркировке единиц товара.  Передавайте в запросе все единицы товара, который подлежит маркировке.  Обязательный параметр, если в заказе от бизнеса есть товары, подлежащие маркировке в системе [:no-translate[«Честный ЗНАК»]](https://честныйзнак.рф/) или [:no-translate[«ASL BELGISI»]](https://aslbelgisi.uz) (для продавцов :no-translate[Market Yandex Go]).  | [optional] [default to undefined]

## Example

```typescript
import { OrderItemModificationDTO } from './api';

const instance: OrderItemModificationDTO = {
    id,
    count,
    instances,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
