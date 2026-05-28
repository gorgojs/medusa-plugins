# AnalyticsProductQueriesDetailsResponseQuery


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | Валюта. | [optional] [default to undefined]
**gmv** | **number** | Продажи по запросам. | [optional] [default to undefined]
**order_count** | **number** | Количество заказов по запросу. | [optional] [default to undefined]
**position** | **number** | Средняя позиция товара. Доступно только с подпиской [Premium](https://seller-edu.ozon.ru/seller-rating/about-rating/premium-program) или [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus), иначе поле вернётся пустым. | [optional] [default to undefined]
**query** | **string** | Текст запроса. | [optional] [default to undefined]
**query_index** | **number** | Порядковый номер запроса. | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**unique_search_users** | **number** | Количество покупателей, которые искали ваш товар на Ozon. | [optional] [default to undefined]
**unique_view_users** | **number** | Количество покупателей, которые увидели ваш товар на Ozon. Доступно только с подпиской [Premium](https://seller-edu.ozon.ru/seller-rating/about-rating/premium-program) или [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus), иначе поле вернётся пустым. | [optional] [default to undefined]
**view_conversion** | **number** | Конверсия из просмотра товара. Доступно только с подпиской [Premium](https://seller-edu.ozon.ru/seller-rating/about-rating/premium-program) или [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus), иначе поле вернётся пустым. | [optional] [default to undefined]

## Example

```typescript
import { AnalyticsProductQueriesDetailsResponseQuery } from './api';

const instance: AnalyticsProductQueriesDetailsResponseQuery = {
    currency,
    gmv,
    order_count,
    position,
    query,
    query_index,
    sku,
    unique_search_users,
    unique_view_users,
    view_conversion,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
