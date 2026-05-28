# Productv3GetProductListRequestFilter

Фильтр по товарам.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer_id** | **Array&lt;string&gt;** | Фильтр по параметру &#x60;offer_id&#x60;. Вы можете передавать список значений. | [optional] [default to undefined]
**product_id** | **Array&lt;string&gt;** | Фильтр по параметру &#x60;product_id&#x60;. Вы можете передавать список значений. | [optional] [default to undefined]
**visibility** | [**Productv3GetProductListRequestFilterFilterVisibility**](Productv3GetProductListRequestFilterFilterVisibility.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Productv3GetProductListRequestFilter } from './api';

const instance: Productv3GetProductListRequestFilter = {
    offer_id,
    product_id,
    visibility,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
