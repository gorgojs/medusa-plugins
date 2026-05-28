# SellerApiGetSellerProductV1ResponseResult

Результаты запроса.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**products** | [**Array&lt;SellerApiProduct&gt;**](SellerApiProduct.md) | Список товаров. | [optional] [default to undefined]
**total** | **number** | Общее количество товаров, которое доступно для акции. | [optional] [default to undefined]
**last_id** | **number** | Идентификатор последнего значения на странице. Чтобы получить следующие значения, передайте полученное значение в следующем запросе в параметре &#x60;last_id&#x60;. | [optional] [default to undefined]

## Example

```typescript
import { SellerApiGetSellerProductV1ResponseResult } from './api';

const instance: SellerApiGetSellerProductV1ResponseResult = {
    products,
    total,
    last_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
