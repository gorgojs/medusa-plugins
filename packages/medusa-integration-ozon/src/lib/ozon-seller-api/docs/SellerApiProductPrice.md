# SellerApiProductPrice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_id** | **number** | Идентификатор товара в системе продавца — &#x60;product_id&#x60;. | [default to undefined]
**action_price** | **number** | Цена товара по акции. | [default to undefined]
**stock** | **number** | Количество единиц товара в акции типа «Скидка на сток». | [optional] [default to undefined]

## Example

```typescript
import { SellerApiProductPrice } from './api';

const instance: SellerApiProductPrice = {
    product_id,
    action_price,
    stock,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
