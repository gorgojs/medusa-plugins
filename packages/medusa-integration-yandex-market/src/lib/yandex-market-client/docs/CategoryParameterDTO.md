# CategoryParameterDTO

Характеристика товара.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор характеристики. | [default to undefined]
**name** | **string** | Название характеристики. | [optional] [default to undefined]
**type** | [**ParameterType**](ParameterType.md) |  | [default to undefined]
**unit** | [**CategoryParameterUnitDTO**](CategoryParameterUnitDTO.md) |  | [optional] [default to undefined]
**description** | **string** | Описание характеристики. | [optional] [default to undefined]
**recommendationTypes** | [**Set&lt;OfferCardRecommendationType&gt;**](OfferCardRecommendationType.md) | Перечень возможных рекомендаций по заполнению карточки, к которым относится данная характеристика. | [optional] [default to undefined]
**required** | **boolean** | Обязательность характеристики. | [default to undefined]
**filtering** | **boolean** | Используется ли характеристика в фильтре. | [default to undefined]
**distinctive** | **boolean** | Является ли характеристика особенностью варианта. | [default to undefined]
**multivalue** | **boolean** | Можно ли передать сразу несколько значений. | [default to undefined]
**allowCustomValues** | **boolean** | Можно ли передавать собственное значение, которого нет в списке вариантов Маркета. Только для характеристик типа &#x60;ENUM&#x60;. | [default to undefined]
**values** | [**Array&lt;ParameterValueOptionDTO&gt;**](ParameterValueOptionDTO.md) | Список допустимых значений параметра. Только для характеристик типа &#x60;ENUM&#x60;. | [optional] [default to undefined]
**constraints** | [**ParameterValueConstraintsDTO**](ParameterValueConstraintsDTO.md) |  | [optional] [default to undefined]
**valueRestrictions** | [**Array&lt;ValueRestrictionDTO&gt;**](ValueRestrictionDTO.md) | Ограничения на значения, накладываемые другими характеристиками. Только для характеристик типа &#x60;ENUM&#x60;. | [optional] [default to undefined]

## Example

```typescript
import { CategoryParameterDTO } from './api';

const instance: CategoryParameterDTO = {
    id,
    name,
    type,
    unit,
    description,
    recommendationTypes,
    required,
    filtering,
    distinctive,
    multivalue,
    allowCustomValues,
    values,
    constraints,
    valueRestrictions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
