# ParcelBoxLabelDTO

Информация о ярлыке для коробки.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** |  | [default to undefined]
**supplierName** | **string** | Юридическое название магазина. | [default to undefined]
**deliveryServiceName** | **string** | Юридическое название службы доставки. | [default to undefined]
**orderId** | **number** | Идентификатор заказа в системе Маркета. | [default to undefined]
**orderNum** | **string** | Идентификатор заказа в информационной системе магазина.  Совпадает с &#x60;orderId&#x60;, если Маркету неизвестен номер заказа в системе магазина.  | [default to undefined]
**recipientName** | **string** | Фамилия и инициалы получателя заказа. | [default to undefined]
**boxId** | **number** | Идентификатор коробки. | [default to undefined]
**fulfilmentId** | **string** | Идентификатор коробки в информационной системе магазина.  Возвращается в формате: &#x60;номер заказа на Маркете-номер коробки&#x60;. Например, &#x60;7206821‑1&#x60;, &#x60;7206821‑2&#x60; и т. д.  | [default to undefined]
**place** | **string** | Номер коробки в заказе. Возвращается в формате: &#x60;номер места/общее количество мест&#x60;.  | [default to undefined]
**weight** | **string** | Общая масса всех товаров в заказе.  Возвращается в формате &#x60;weight кг&#x60;.  | [default to undefined]
**deliveryServiceId** | **string** | Идентификатор службы доставки. Информацию о службе доставки можно получить с помощью запроса [GET delivery/services](../../reference/orders/getDeliveryServices.md). | [default to undefined]
**deliveryAddress** | **string** | Адрес получателя. | [optional] [default to undefined]
**shipmentDate** | **string** | Дата отгрузки в формате &#x60;dd.MM.yyyy&#x60;. | [optional] [default to undefined]

## Example

```typescript
import { ParcelBoxLabelDTO } from './api';

const instance: ParcelBoxLabelDTO = {
    url,
    supplierName,
    deliveryServiceName,
    orderId,
    orderNum,
    recipientName,
    boxId,
    fulfilmentId,
    place,
    weight,
    deliveryServiceId,
    deliveryAddress,
    shipmentDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
