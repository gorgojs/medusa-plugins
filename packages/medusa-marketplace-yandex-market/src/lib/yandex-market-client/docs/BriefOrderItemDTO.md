# BriefOrderItemDTO

Информация о маркированном товаре.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор товара в заказе.  Позволяет идентифицировать товар в рамках данного заказа.  | [optional] [default to undefined]
**vat** | [**OrderVatType**](OrderVatType.md) |  | [optional] [default to undefined]
**count** | **number** | Количество единиц товара. | [optional] [default to undefined]
**price** | **number** | Цена товара. Указана в той валюте, которая была задана в каталоге. Разделитель целой и дробной части — точка.  | [optional] [default to undefined]
**offerName** | **string** | Название товара. | [optional] [default to undefined]
**offerId** | **string** | Ваш SKU — идентификатор товара в вашей системе.  Правила использования SKU:  * У каждого товара SKU должен быть свой.  * Уже заданный SKU нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.  SKU товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).  [Что такое SKU и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)  | [optional] [default to undefined]
**instances** | [**Array&lt;OrderItemInstanceDTO&gt;**](OrderItemInstanceDTO.md) | Переданные вами коды маркировки. | [optional] [default to undefined]

## Example

```typescript
import { BriefOrderItemDTO } from './api';

const instance: BriefOrderItemDTO = {
    id,
    vat,
    count,
    price,
    offerName,
    offerId,
    instances,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
