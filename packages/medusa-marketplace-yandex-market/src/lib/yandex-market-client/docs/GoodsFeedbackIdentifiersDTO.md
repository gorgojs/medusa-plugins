# GoodsFeedbackIdentifiersDTO

Идентификаторы, которые связаны с отзывом.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **number** | Идентификатор заказа на Маркете. | [optional] [default to undefined]
**modelId** | **number** | Идентификатор модели товара. | [optional] [default to undefined]
**offerId** | **string** | Ваш SKU — идентификатор товара в вашей системе.  Правила использования SKU:  * У каждого товара SKU должен быть свой.  * Уже заданный SKU нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.  SKU товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).  [Что такое SKU и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)  | [optional] [default to undefined]

## Example

```typescript
import { GoodsFeedbackIdentifiersDTO } from './api';

const instance: GoodsFeedbackIdentifiersDTO = {
    orderId,
    modelId,
    offerId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
