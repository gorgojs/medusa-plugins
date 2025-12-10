# ParameterValueDTO

Значение характеристики.  Вы можете указывать несколько значений одной характеристики при условии, что:  * Тип характеристики — `ENUM`. * В ответе на запрос [POST v2/category/{categoryId}/parameters](../../reference/content/getCategoryContentParameters.md) у данной характеристики поле `multivalue` имеет значение `true`.  Для этого в `parameterValues` передавайте каждое значение отдельно — несколько объектов с параметрами `parameterId`, `valueId` и `value`. Параметр `parameterId` должен быть одинаковым. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameterId** | **number** | Идентификатор характеристики. | [default to undefined]
**unitId** | **number** | Идентификатор единицы измерения. Если вы не передали параметр &#x60;unitId&#x60;, используется единица измерения по умолчанию. | [optional] [default to undefined]
**valueId** | **number** | Идентификатор значения.  Обязательно указывайте идентификатор, если передаете значение из перечня допустимых значений, полученного от Маркета.  Передавайте вместе с &#x60;value&#x60;.  Только для характеристик типа &#x60;ENUM&#x60;.  | [optional] [default to undefined]
**value** | **string** | Значение.  Для характеристик типа &#x60;ENUM&#x60; передавайте вместе с &#x60;valueId&#x60;.  | [optional] [default to undefined]

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
