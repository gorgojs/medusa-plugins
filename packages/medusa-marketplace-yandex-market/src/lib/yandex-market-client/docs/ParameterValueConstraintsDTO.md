# ParameterValueConstraintsDTO

Ограничения на значения характеристик.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minValue** | **number** | Минимальное число. | [optional] [default to undefined]
**maxValue** | **number** | Максимальное число. | [optional] [default to undefined]
**maxLength** | **number** | Максимальная длина текста. | [optional] [default to undefined]

## Example

```typescript
import { ParameterValueConstraintsDTO } from './api';

const instance: ParameterValueConstraintsDTO = {
    minValue,
    maxValue,
    maxLength,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
