# V1GetAttributeValuesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_id** | **number** | Идентификатор характеристики. Можно получить с помощью метода [/v1/description-category/attribute](#operation/DescriptionCategoryAPI_GetAttributes). | [default to undefined]
**description_category_id** | **number** | Идентификатор категории. Можно получить с помощью метода [/v1/description-category/tree](#operation/DescriptionCategoryAPI_GetTree). | [default to undefined]
**language** | [**LanguageLanguage**](LanguageLanguage.md) |  | [optional] [default to undefined]
**last_value_id** | **number** | Идентификатор справочника, с которого нужно начать ответ. Если &#x60;last_value_id&#x60; — 10, то в ответе будут справочники, начиная с одиннадцатого. | [optional] [default to undefined]
**limit** | **number** | Количество значений в ответе: - максимум — 2000, - минимум — 1.  | [default to undefined]
**type_id** | **number** | Идентификатор типа товара. Можно получить с помощью метода [/v1/description-category/tree](#operation/DescriptionCategoryAPI_GetTree). | [default to undefined]

## Example

```typescript
import { V1GetAttributeValuesRequest } from './api';

const instance: V1GetAttributeValuesRequest = {
    attribute_id,
    description_category_id,
    language,
    last_value_id,
    limit,
    type_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
