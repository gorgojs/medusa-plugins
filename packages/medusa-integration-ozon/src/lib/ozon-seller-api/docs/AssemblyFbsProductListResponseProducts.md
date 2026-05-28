# AssemblyFbsProductListResponseProducts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**picture_url** | **string** | Ссылка на изображение товара. | [optional] [default to undefined]
**postings** | [**Array&lt;ProductsPostings&gt;**](ProductsPostings.md) | Список отправлений. | [optional] [default to undefined]
**product_name** | **string** | Название товара. | [optional] [default to undefined]
**quantity** | **number** | Количество товара. | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]

## Example

```typescript
import { AssemblyFbsProductListResponseProducts } from './api';

const instance: AssemblyFbsProductListResponseProducts = {
    offer_id,
    picture_url,
    postings,
    product_name,
    quantity,
    sku,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
