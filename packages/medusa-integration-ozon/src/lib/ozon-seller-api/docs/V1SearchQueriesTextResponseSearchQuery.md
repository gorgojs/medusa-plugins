# V1SearchQueriesTextResponseSearchQuery


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add_to_cart** | **number** | Количество покупателей, которые добавили хотя бы 1 товар в корзину. | [optional] [default to undefined]
**avg_price** | **number** | Средняя цена товаров в рублях. | [optional] [default to undefined]
**client_count** | **number** | Количество покупателей, которые искали товар по этому запросу. | [optional] [default to undefined]
**conversion_to_cart** | **number** | Процент покупателей, которые добавили хотя бы 1 товар в корзину. | [optional] [default to undefined]
**items_views** | **number** | Количество просмотров по товарам. | [optional] [default to undefined]
**query** | **string** | Поисковый запрос. | [optional] [default to undefined]
**sellers_count** | **number** | Среднее количество продавцов, чьи товары посмотрели покупатели по этому запросу. | [optional] [default to undefined]

## Example

```typescript
import { V1SearchQueriesTextResponseSearchQuery } from './api';

const instance: V1SearchQueriesTextResponseSearchQuery = {
    add_to_cart,
    avg_price,
    client_count,
    conversion_to_cart,
    items_views,
    query,
    sellers_count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
