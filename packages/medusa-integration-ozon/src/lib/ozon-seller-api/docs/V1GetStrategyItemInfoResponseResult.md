# V1GetStrategyItemInfoResponseResult

Результат работы метода.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**strategy_id** | **string** | Идентификатор стратегии. | [optional] [default to undefined]
**is_enabled** | **boolean** | &#x60;true&#x60;, если товар участвует в стратегии ценообразования.  | [optional] [default to undefined]
**strategy_product_price** | **number** | Цена по стратегии. | [optional] [default to undefined]
**price_downloaded_at** | **string** | Дата установки цены по стратегии. | [optional] [default to undefined]
**strategy_competitor_id** | **number** | Идентификатор конкурента. | [optional] [default to undefined]
**strategy_competitor_product_url** | **string** | Ссылка на товар конкурента. | [optional] [default to undefined]

## Example

```typescript
import { V1GetStrategyItemInfoResponseResult } from './api';

const instance: V1GetStrategyItemInfoResponseResult = {
    strategy_id,
    is_enabled,
    strategy_product_price,
    price_downloaded_at,
    strategy_competitor_id,
    strategy_competitor_product_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
