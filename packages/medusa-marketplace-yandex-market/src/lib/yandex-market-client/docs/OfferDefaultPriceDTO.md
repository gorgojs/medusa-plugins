# OfferDefaultPriceDTO

Цена с указанием валюты, скидки и времени последнего обновления, а также минимальная цена для попадания в акцию «Бестселлеры Маркета».

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minimumForBestseller** | **number** | Минимальная цена товара для попадания в акцию «Бестселлеры Маркета». Подробнее об этом способе участия читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/marketing/promos/market/bestsellers#minimum).  Передается в методе [POST v2/businesses/{businessId}/offer-prices/updates](../../reference/business-assortment/updateBusinessPrices.md).  | [optional] [default to undefined]
**excludedFromBestsellers** | **boolean** | Признак того, что товар не попадает в акцию «Бестселлеры Маркета». Подробнее об акции читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/marketing/promos/market/bestsellers).  Если значение &#x60;true&#x60;, в методе [POST v2/businesses/{businessId}/offer-prices/updates](../../reference/business-assortment/updateBusinessPrices.md) параметр &#x60;minimumForBestseller&#x60; игнорируется.  | [optional] [default to undefined]
**value** | **number** | Цена товара. | [optional] [default to undefined]
**currencyId** | [**CurrencyType**](CurrencyType.md) |  | [optional] [default to undefined]
**discountBase** | **number** | Зачеркнутая цена.  Число должно быть целым. Вы можете указать цену со скидкой от 5 до 99%.  Передавайте этот параметр при каждом обновлении цены, если предоставляете скидку на товар.  | [optional] [default to undefined]
**updatedAt** | **string** | Время последнего обновления. | [optional] [default to undefined]

## Example

```typescript
import { OfferDefaultPriceDTO } from './api';

const instance: OfferDefaultPriceDTO = {
    minimumForBestseller,
    excludedFromBestsellers,
    value,
    currencyId,
    discountBase,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
