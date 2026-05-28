# Productv4Filter

Фильтр по товарам.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer_id** | **Array&lt;string&gt;** | Фильтр по параметру &#x60;offer_id&#x60;. Можно передавать список значений. | [optional] [default to undefined]
**product_id** | **Array&lt;string&gt;** | Фильтр по параметру &#x60;product_id&#x60;. Можно передавать до 1000 значений. | [optional] [default to undefined]
**sku** | **Array&lt;string&gt;** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**visibility** | [**Productv2GetProductListRequestFilterFilterVisibility**](Productv2GetProductListRequestFilterFilterVisibility.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Productv4Filter } from './api';

const instance: Productv4Filter = {
    offer_id,
    product_id,
    sku,
    visibility,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
