# V1AddBarcodeResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Код ошибки. | [optional] [default to undefined]
**error** | **string** | Описание ошибки. | [optional] [default to undefined]
**barcode** | **string** | Штрихкод, который не удалось привязать. | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара, к которому не удалось привязать штрихкод. | [optional] [default to undefined]

## Example

```typescript
import { V1AddBarcodeResult } from './api';

const instance: V1AddBarcodeResult = {
    code,
    error,
    barcode,
    sku,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
