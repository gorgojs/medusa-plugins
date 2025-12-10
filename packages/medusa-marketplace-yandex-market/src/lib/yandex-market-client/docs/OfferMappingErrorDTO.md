# OfferMappingErrorDTO

Текст ошибки или предупреждения.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**OfferMappingErrorType**](OfferMappingErrorType.md) |  | [default to undefined]
**parameterId** | **number** | Идентификатор характеристики, с которой связана ошибка или предупреждение. | [optional] [default to undefined]
**message** | **string** | Текст ошибки или предупреждения. | [default to undefined]

## Example

```typescript
import { OfferMappingErrorDTO } from './api';

const instance: OfferMappingErrorDTO = {
    type,
    parameterId,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
