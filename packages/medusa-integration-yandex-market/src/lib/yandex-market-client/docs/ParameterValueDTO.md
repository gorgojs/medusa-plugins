# ParameterValueDTO

Значение характеристики. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameterId** | **number** | Идентификатор характеристики. | [default to undefined]
**unitId** | **number** | Идентификатор единицы измерения. Если вы не передали параметр &#x60;unitId&#x60;, используется единица измерения по умолчанию. | [optional] [default to undefined]
**valueId** | **number** | Идентификатор значения.  - Обязательно указывайте идентификатор, если передаете значение из перечня допустимых значений, полученного от Маркета. - Не указывайте для собственных значений. - Только для характеристик типа &#x60;ENUM&#x60;.  | [optional] [default to undefined]
**value** | **string** | Значение.  Для характеристик типа &#x60;ENUM&#x60; передавайте: - вместе с &#x60;valueId&#x60;, если значение берете из справочника; - без &#x60;valueId&#x60;, если значение собственное.  | [optional] [default to undefined]

## Example

```typescript
import { ParameterValueDTO } from './api';

const instance: ParameterValueDTO = {
    parameterId,
    unitId,
    valueId,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
