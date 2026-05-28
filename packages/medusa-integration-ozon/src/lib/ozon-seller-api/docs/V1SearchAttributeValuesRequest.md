# V1SearchAttributeValuesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_id** | **number** | Идентификатор характеристики. Можно получить с помощью метода [/v1/description-category/attribute](#operation/DescriptionCategoryAPI_GetAttributes). | [default to undefined]
**description_category_id** | **number** | Идентификатор категории. Можно получить с помощью метода [/v1/description-category/tree](#operation/DescriptionCategoryAPI_GetTree). | [default to undefined]
**limit** | **number** | Количество значений в ответе: - максимум — 100, - минимум — 1.  | [default to undefined]
**type_id** | **number** | Идентификатор типа товара. Можно получить с помощью метода [/v1/description-category/tree](#operation/DescriptionCategoryAPI_GetTree). | [default to undefined]
**value** | **string** | Значение, по которому система будет искать справочные значения. Минимум — 2 символа. | [default to undefined]

## Example

```typescript
import { V1SearchAttributeValuesRequest } from './api';

const instance: V1SearchAttributeValuesRequest = {
    attribute_id,
    description_category_id,
    limit,
    type_id,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
