# CargoesCreateErrorsItemValidation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**barcode** | **string** | Штрихкод товара. Получите методом [/v3/product/info/list](#operation/ProductAPI_GetProductInfoList). | [optional] [default to undefined]
**cargo_key** | **string** | Ключ грузоместа. | [optional] [default to undefined]
**quant** | **number** | Размер кванта. | [optional] [default to undefined]
**type** | [**ItemValidationErrorType**](ItemValidationErrorType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CargoesCreateErrorsItemValidation } from './api';

const instance: CargoesCreateErrorsItemValidation = {
    barcode,
    cargo_key,
    quant,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
