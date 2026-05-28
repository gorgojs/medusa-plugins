# V1GetAttributesResponseAttribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_dependent** | **boolean** | Признак, что значения словарного атрибута зависят от категории: - &#x60;true&#x60; — у атрибута разные значения для каждой категории. - &#x60;false&#x60; — у атрибута одинаковые значения для всех категорий.  | [optional] [default to undefined]
**description** | **string** | Описание характеристики. | [optional] [default to undefined]
**dictionary_id** | **number** | Идентификатор справочника. | [optional] [default to undefined]
**group_id** | **number** | Идентификатор группы характеристик. | [optional] [default to undefined]
**group_name** | **string** | Название группы характеристик. | [optional] [default to undefined]
**id** | **number** | Идентификатор характеристики. | [optional] [default to undefined]
**is_aspect** | **boolean** | Признак аспектного атрибута. Аспектный атрибут — характеристика, по которой отличаются товары одной модели.   Например, у одежды и обуви одной модели могут быть разные расцветки и размеры. То есть цвет и размер — это аспектные атрибуты.  Значения поля:   - &#x60;true&#x60; — атрибут аспектный и его нельзя изменить после поставки товара на склад или продажи со своего склада.   - &#x60;false&#x60; — атрибут не аспектный, можно изменить в любое время.  | [optional] [default to undefined]
**is_collection** | **boolean** | - &#x60;true&#x60;, если характеристика — набор значений. - &#x60;false&#x60;, если характеристика — одно значение.  | [optional] [default to undefined]
**is_required** | **boolean** | Признак обязательной характеристики:   - &#x60;true&#x60; — обязательная характеристика,   - &#x60;false&#x60; — характеристику можно не указывать.  | [optional] [default to undefined]
**name** | **string** | Название. | [optional] [default to undefined]
**type** | **string** | Тип характеристики. | [optional] [default to undefined]
**attribute_complex_id** | **number** | Идентификатор комплексного атрибута. | [optional] [default to undefined]
**max_value_count** | **number** | Максимальное количество значений для атрибута. | [optional] [default to undefined]
**complex_is_collection** | **boolean** | Признак, что комплексная характеристика — набор значений: - &#x60;true&#x60;, если комплексная характеристика — набор значений, - &#x60;false&#x60;, если комплексная характеристика — одно значение.  | [optional] [default to undefined]

## Example

```typescript
import { V1GetAttributesResponseAttribute } from './api';

const instance: V1GetAttributesResponseAttribute = {
    category_dependent,
    description,
    dictionary_id,
    group_id,
    group_name,
    id,
    is_aspect,
    is_collection,
    is_required,
    name,
    type,
    attribute_complex_id,
    max_value_count,
    complex_is_collection,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
