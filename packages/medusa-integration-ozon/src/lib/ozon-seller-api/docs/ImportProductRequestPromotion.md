# ImportProductRequestPromotion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **string** | Атрибут для действий с акцией: - &#x60;ENABLE&#x60; — включить, - &#x60;DISABLE&#x60; — выключить, - &#x60;UNKNOWN&#x60; — ничего не менять, передаётся по умолчанию.  | [optional] [default to OperationEnum_Unknown]
**type** | **string** | Тип акции: - &#x60;REVIEWS_PROMO&#x60; — акция «Баллы за отзывы».  | [optional] [default to TypeEnum_ReviewsPromo]

## Example

```typescript
import { ImportProductRequestPromotion } from './api';

const instance: ImportProductRequestPromotion = {
    operation,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
