# V1ProductUpdateAttributesRequestAttribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complex_id** | **number** | Идентификатор характеристики, которая поддерживает вложенные свойства. У каждой из вложенных характеристик может быть несколько вариантов значений. | [optional] [default to undefined]
**id** | **number** | Идентификатор характеристики. | [optional] [default to undefined]
**values** | [**Array&lt;V1ProductUpdateAttributesRequestValue&gt;**](V1ProductUpdateAttributesRequestValue.md) | Массив вложенных значений характеристики. | [optional] [default to undefined]

## Example

```typescript
import { V1ProductUpdateAttributesRequestAttribute } from './api';

const instance: V1ProductUpdateAttributesRequestAttribute = {
    complex_id,
    id,
    values,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
