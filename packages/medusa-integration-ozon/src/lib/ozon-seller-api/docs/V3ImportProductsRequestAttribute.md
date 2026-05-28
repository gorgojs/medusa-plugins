# V3ImportProductsRequestAttribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complex_id** | **number** | Идентификатор характеристики, которая поддерживает вложенные свойства. Например, у характеристики «Процессор» есть вложенные характеристики «Производитель», «L2 Cache» и другие. У каждой из вложенных характеристик может быть несколько вариантов значений. | [optional] [default to undefined]
**id** | **number** | Идентификатор характеристики. | [optional] [default to undefined]
**values** | [**Array&lt;V3ImportProductsRequestDictionaryValue&gt;**](V3ImportProductsRequestDictionaryValue.md) | Массив вложенных значений характеристики. | [optional] [default to undefined]

## Example

```typescript
import { V3ImportProductsRequestAttribute } from './api';

const instance: V3ImportProductsRequestAttribute = {
    complex_id,
    id,
    values,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
