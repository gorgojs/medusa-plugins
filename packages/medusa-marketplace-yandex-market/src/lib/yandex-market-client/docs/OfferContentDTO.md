# OfferContentDTO

Товар с указанными характеристиками.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offerId** | **string** | Ваш SKU — идентификатор товара в вашей системе.  Правила использования SKU:  * У каждого товара SKU должен быть свой.  * Уже заданный SKU нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.  SKU товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).  [Что такое SKU и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)  | [default to undefined]
**categoryId** | **number** | Идентификатор категории на Маркете.  При изменении категории убедитесь, что характеристики товара и их значения в параметре &#x60;parameterValues&#x60; вы передаете для новой категории.  Список категорий Маркета можно получить с помощью запроса  [POST v2/categories/tree](../../reference/categories/getCategoriesTree.md).  | [default to undefined]
**parameterValues** | [**Array&lt;ParameterValueDTO&gt;**](ParameterValueDTO.md) | Список характеристик с их значениями.  При **изменении** характеристик передавайте только те, значение которых нужно обновить. Если в &#x60;categoryId&#x60; вы меняете категорию, значения общих характеристик для старой и новой категории сохранятся, передавать их не нужно.  Чтобы **удалить** значение заданной характеристики, передайте ее &#x60;parameterId&#x60; с пустым &#x60;value&#x60;.  | [default to undefined]

## Example

```typescript
import { OfferContentDTO } from './api';

const instance: OfferContentDTO = {
    offerId,
    categoryId,
    parameterValues,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
