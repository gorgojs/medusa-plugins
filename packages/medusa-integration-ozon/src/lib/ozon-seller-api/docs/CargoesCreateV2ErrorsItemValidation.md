# CargoesCreateV2ErrorsItemValidation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cargo_key** | **string** | Ключ грузоместа. | [optional] [default to undefined]
**item** | **string** | Штрихкод или артикул товара. | [optional] [default to undefined]
**quant** | **number** | Размер кванта. | [optional] [default to undefined]
**type** | [**ItemValidationErrorType**](ItemValidationErrorType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CargoesCreateV2ErrorsItemValidation } from './api';

const instance: CargoesCreateV2ErrorsItemValidation = {
    cargo_key,
    item,
    quant,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
