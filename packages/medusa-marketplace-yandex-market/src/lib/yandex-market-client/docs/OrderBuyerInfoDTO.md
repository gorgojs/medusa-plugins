# OrderBuyerInfoDTO

Информация о покупателе и его номере телефона.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Идентификатор покупателя. | [optional] [default to undefined]
**lastName** | **string** | Фамилия покупателя. | [optional] [default to undefined]
**firstName** | **string** | Имя покупателя. | [optional] [default to undefined]
**middleName** | **string** | Отчество покупателя. | [optional] [default to undefined]
**type** | [**OrderBuyerType**](OrderBuyerType.md) |  | [default to undefined]
**phone** | **string** | Подменный номер телефона покупателя. Подробнее о таких номерах читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/orders/dbs/call#fake-number).  Формат номера: &#x60;+&lt;код_страны&gt;&lt;код_региона&gt;&lt;номер_телефона&gt;&#x60;.  | [optional] [default to undefined]
**trusted** | **boolean** | Проверенный покупатель.  Если параметр &#x60;trusted&#x60; вернулся со значением &#x60;true&#x60;, Маркет уже проверил покупателя — не звоните ему. Обработайте заказ как обычно и передайте его курьеру или отвезите в ПВЗ.  При необходимости свяжитесь с покупателем в чате. [Как это сделать](../../step-by-step/chats.md)  Подробнее о звонках покупателю читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/orders/dbs/call).  | [optional] [default to undefined]

## Example

```typescript
import { OrderBuyerInfoDTO } from './api';

const instance: OrderBuyerInfoDTO = {
    id,
    lastName,
    firstName,
    middleName,
    type,
    phone,
    trusted,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
