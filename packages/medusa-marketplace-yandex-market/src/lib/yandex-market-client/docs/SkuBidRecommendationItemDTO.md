# SkuBidRecommendationItemDTO

Список товаров с рекомендованными ставками.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | **string** | Ваш SKU — идентификатор товара в вашей системе.  Правила использования SKU:  * У каждого товара SKU должен быть свой.  * Уже заданный SKU нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.  SKU товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).  [Что такое SKU и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)  | [default to undefined]
**bid** | **number** | Значение ставки. | [default to undefined]
**bidRecommendations** | [**Array&lt;BidRecommendationItemDTO&gt;**](BidRecommendationItemDTO.md) | Список рекомендованных ставок с соответствующими долями показов и доступными дополнительными инструментами продвижения.  Чем больше ставка, тем большую долю показов она помогает получить и тем больше дополнительных инструментов продвижения доступно.  | [optional] [default to undefined]
**priceRecommendations** | [**Array&lt;PriceRecommendationItemDTO&gt;**](PriceRecommendationItemDTO.md) | Рекомендованные цены. | [optional] [default to undefined]

## Example

```typescript
import { SkuBidRecommendationItemDTO } from './api';

const instance: SkuBidRecommendationItemDTO = {
    sku,
    bid,
    bidRecommendations,
    priceRecommendations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
