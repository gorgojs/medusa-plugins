# V2GetProductInfoStocksByWarehouseFbsRequestV2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | **string** | Указатель для выборки следующих данных. | [optional] [default to undefined]
**limit** | **number** | Количество значений в ответе. | [optional] [default to undefined]
**offer_id** | **Array&lt;string&gt;** | Идентификаторы товаров в системе продавца — артикул. | [optional] [default to undefined]
**sku** | **Array&lt;string&gt;** | Идентификаторы товаров в системе Ozon — SKU. | [optional] [default to undefined]

## Example

```typescript
import { V2GetProductInfoStocksByWarehouseFbsRequestV2 } from './api';

const instance: V2GetProductInfoStocksByWarehouseFbsRequestV2 = {
    cursor,
    limit,
    offer_id,
    sku,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
