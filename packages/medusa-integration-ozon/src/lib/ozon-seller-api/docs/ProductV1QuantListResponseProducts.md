# ProductV1QuantListResponseProducts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**product_id** | **number** | Идентификатор товара в системе продавца — &#x60;product_id&#x60;. | [optional] [default to undefined]
**quants** | [**Array&lt;ProductV1QuantListResponseProductsQuants&gt;**](ProductV1QuantListResponseProductsQuants.md) | Список квантов товара. | [optional] [default to undefined]

## Example

```typescript
import { ProductV1QuantListResponseProducts } from './api';

const instance: ProductV1QuantListResponseProducts = {
    offer_id,
    product_id,
    quants,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
