# GetProductInfoListResponseSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **string** | Дата создания товара. | [optional] [default to undefined]
**quant_code** | **string** | Список квантов с товарами. | [optional] [default to undefined]
**shipment_type** | [**SourceShipmentType**](SourceShipmentType.md) |  | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара на Ozon — SKU. | [optional] [default to undefined]
**source** | **string** | Схема продажи: - &#x60;SDS&#x60; — FBO и FBS с одинаковым SKU; - &#x60;FBO&#x60;; - &#x60;FBS&#x60;.  | [optional] [default to undefined]

## Example

```typescript
import { GetProductInfoListResponseSource } from './api';

const instance: GetProductInfoListResponseSource = {
    created_at,
    quant_code,
    shipment_type,
    sku,
    source,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
