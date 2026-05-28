# V4GetProductInfoStocksRequestFilter

Фильтр по товарам.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer_id** | **Array&lt;string&gt;** | Фильтр по параметру &#x60;offer_id&#x60;. Можно передавать список значений. | [optional] [default to undefined]
**product_id** | **Array&lt;string&gt;** | Фильтр по параметру &#x60;product_id&#x60;. Можно передавать список значений. | [optional] [default to undefined]
**visibility** | [**V4Visibility**](V4Visibility.md) |  | [optional] [default to undefined]
**with_quant** | [**FilterWithQuant**](FilterWithQuant.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V4GetProductInfoStocksRequestFilter } from './api';

const instance: V4GetProductInfoStocksRequestFilter = {
    offer_id,
    product_id,
    visibility,
    with_quant,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
