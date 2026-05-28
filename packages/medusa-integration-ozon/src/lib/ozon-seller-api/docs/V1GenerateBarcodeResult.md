# V1GenerateBarcodeResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Код ошибки. | [optional] [default to undefined]
**error** | **string** | Описание ошибки. | [optional] [default to undefined]
**barcode** | **string** | Штрихкод, при создании которого произошла ошибка. | [optional] [default to undefined]
**product_id** | **number** | Идентификатор товара, для которого не удалось создать штрихкод. | [optional] [default to undefined]

## Example

```typescript
import { V1GenerateBarcodeResult } from './api';

const instance: V1GenerateBarcodeResult = {
    code,
    error,
    barcode,
    product_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
