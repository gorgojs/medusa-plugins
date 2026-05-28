# GetProductInfoPricesResponseItemPriceIndexes

Индексы цены товара.  [Подробнее об индексе цен в Базе знаний продавца](https://seller-edu.ozon.ru/seller-rating/metrics/price-index) 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color_index** | **string** | Итоговый индекс цены товара: - &#x60;WITHOUT_INDEX&#x60; — нет индекса,  - &#x60;SUPER&#x60; — супервыгодный, - &#x60;GREEN&#x60; — выгодный, - &#x60;YELLOW&#x60; — умеренный,  - &#x60;RED&#x60; — невыгодный.  | [optional] [default to ColorIndexEnum_WithoutIndex]
**external_index_data** | [**PriceIndexesIndexExternalData**](PriceIndexesIndexExternalData.md) |  | [optional] [default to undefined]
**ozon_index_data** | [**PriceIndexesIndexOzonData**](PriceIndexesIndexOzonData.md) |  | [optional] [default to undefined]
**self_marketplaces_index_data** | [**PriceIndexesIndexSelfData**](PriceIndexesIndexSelfData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetProductInfoPricesResponseItemPriceIndexes } from './api';

const instance: GetProductInfoPricesResponseItemPriceIndexes = {
    color_index,
    external_index_data,
    ozon_index_data,
    self_marketplaces_index_data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
