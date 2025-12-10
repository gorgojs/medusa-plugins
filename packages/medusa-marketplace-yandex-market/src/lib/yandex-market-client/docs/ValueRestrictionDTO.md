# ValueRestrictionDTO

Ограничение на возможные значения, накладываемое другой характеристикой.  Если ограничивающая характеристика принимает определенное значение, список возможных значений ограничиваемой характеристики сокращается.  **Пример**  Характеристика **размер** сама по себе может принимать девять разных значений: `S`, `M`, `L`, `44`, `46`, `48`, `42/164`, `46/176`, `44S`.  Если ограничивающая характеристика **размерная сетка** принимает значение `RU`, список возможных значений размера сокращается до `44`, `46`, `48`. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limitingParameterId** | **number** | Идентификатор ограничивающей характеристики. | [default to undefined]
**limitedValues** | [**Array&lt;OptionValuesLimitedDTO&gt;**](OptionValuesLimitedDTO.md) | Значения ограничивающей характеристики и соответствующие допустимые значения текущей характеристики. | [default to undefined]

## Example

```typescript
import { ValueRestrictionDTO } from './api';

const instance: ValueRestrictionDTO = {
    limitingParameterId,
    limitedValues,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
