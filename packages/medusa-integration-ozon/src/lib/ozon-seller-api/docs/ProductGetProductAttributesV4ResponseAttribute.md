# ProductGetProductAttributesV4ResponseAttribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор характеристики. | [optional] [default to undefined]
**complex_id** | **number** | Идентификатор характеристики, которая поддерживает вложенные свойства. Например, у характеристики «Процессор» есть вложенные характеристики «Производитель» и «L2 Cache». У каждой из вложенных характеристик может быть несколько вариантов значений. | [optional] [default to undefined]
**values** | [**Array&lt;ProductGetProductAttributesV3ResponseDictionaryValue&gt;**](ProductGetProductAttributesV3ResponseDictionaryValue.md) | Массив значений характеристик. | [optional] [default to undefined]

## Example

```typescript
import { ProductGetProductAttributesV4ResponseAttribute } from './api';

const instance: ProductGetProductAttributesV4ResponseAttribute = {
    id,
    complex_id,
    values,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
