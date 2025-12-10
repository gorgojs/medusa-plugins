# OptionValuesLimitedDTO

Значение ограничивающей характеристики и список допустимых значений ограничиваемой характеристики.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limitingOptionValueId** | **number** | Идентификатор значения ограничивающей характеристики. | [default to undefined]
**optionValueIds** | **Set&lt;number&gt;** | Идентификаторы допустимых значений ограничиваемой характеристики.  | [default to undefined]

## Example

```typescript
import { OptionValuesLimitedDTO } from './api';

const instance: OptionValuesLimitedDTO = {
    limitingOptionValueId,
    optionValueIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
