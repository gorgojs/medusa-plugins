# ValueItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**barcode** | **string** | Штрихкод товара. Получите методом [/v3/product/info/list](#operation/ProductAPI_GetProductInfoList). | [optional] [default to undefined]
**expires_at** | **string** | Годен до. | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**quant** | **number** | Размер кванта. | [optional] [default to undefined]
**quantity** | **number** | Количество товара. | [optional] [default to undefined]

## Example

```typescript
import { ValueItem } from './api';

const instance: ValueItem = {
    barcode,
    expires_at,
    offer_id,
    quant,
    quantity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
