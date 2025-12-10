# ModelDTO

Модель товара.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор модели товара. | [optional] [default to undefined]
**name** | **string** | Название модели товара. | [optional] [default to undefined]
**prices** | [**ModelPriceDTO**](ModelPriceDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ModelDTO } from './api';

const instance: ModelDTO = {
    id,
    name,
    prices,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
