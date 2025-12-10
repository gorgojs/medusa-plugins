# UpdateBusinessPricesDTO

Цены.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **number** | Цена товара. | [default to undefined]
**currencyId** | [**CurrencyType**](CurrencyType.md) |  | [default to undefined]
**discountBase** | **number** | Зачеркнутая цена.  Число должно быть целым. Вы можете указать цену со скидкой от 5 до 99%.  Передавайте этот параметр при каждом обновлении цены, если предоставляете скидку на товар.  | [optional] [default to undefined]
**minimumForBestseller** | **number** | Минимальная цена товара для попадания в акцию «Бестселлеры Маркета». Подробнее об этом способе участия читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/marketing/promos/market/bestsellers#minimum).  При передаче цены ориентируйтесь на значение параметра &#x60;maxPromoPrice&#x60; (максимально возможная цена для участия в акции) в методе [POST v2/businesses/{businessId}/promos/offers](../../reference/promos/getPromoOffers.md).  Товар не попадет в акцию с помощью этого способа, если:  * Не передать этот параметр. Удалится значение, которое вы указали ранее. * В методе [POST v2/businesses/{businessId}/offer-prices](../../reference/prices/getDefaultPrices.md) для этого товара возвращается параметр &#x60;excludedFromBestsellers&#x60; со значением &#x60;true&#x60;.    Но товар по-прежнему сможет попасть в акцию через [автоматическое участие](*auto) или [ручное добавление](*updatePromoOffers).  | [optional] [default to undefined]

## Example

```typescript
import { UpdateBusinessPricesDTO } from './api';

const instance: UpdateBusinessPricesDTO = {
    value,
    currencyId,
    discountBase,
    minimumForBestseller,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
