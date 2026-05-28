# Productv3GetProductListResponseItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived** | **boolean** | Товар в архиве. | [optional] [default to undefined]
**has_fbo_stocks** | **boolean** | Есть остатки на складах FBO. | [optional] [default to undefined]
**has_fbs_stocks** | **boolean** | Есть остатки на складах FBS. | [optional] [default to undefined]
**is_discounted** | **boolean** | Уценённый товар. | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**product_id** | **number** | Идентификатор товара в системе продавца — &#x60;product_id&#x60;. | [optional] [default to undefined]
**quants** | [**Array&lt;Productv3GetProductListResponseItemQuant&gt;**](Productv3GetProductListResponseItemQuant.md) | Список квантов. | [optional] [default to undefined]

## Example

```typescript
import { Productv3GetProductListResponseItem } from './api';

const instance: Productv3GetProductListResponseItem = {
    archived,
    has_fbo_stocks,
    has_fbs_stocks,
    is_discounted,
    offer_id,
    product_id,
    quants,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
