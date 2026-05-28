# V1GetAttributesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description_category_id** | **number** | Идентификатор категории. Можно получить с помощью метода [/v1/description-category/tree](#operation/DescriptionCategoryAPI_GetTree). | [default to undefined]
**language** | [**LanguageLanguage**](LanguageLanguage.md) |  | [optional] [default to undefined]
**type_id** | **number** | Идентификатор типа товара. Можно получить с помощью метода [/v1/description-category/tree](#operation/DescriptionCategoryAPI_GetTree). | [default to undefined]

## Example

```typescript
import { V1GetAttributesRequest } from './api';

const instance: V1GetAttributesRequest = {
    description_category_id,
    language,
    type_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
