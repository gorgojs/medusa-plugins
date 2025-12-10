# ConnectionSchemaFieldsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Код поля | [optional] [default to undefined]
**name** | **string** | Текстовое название переменной | [optional] [default to undefined]
**description** | **string** | Текстовое описание | [optional] [default to undefined]
**type** | **string** | Тип, который принимает поле | [optional] [default to undefined]
**required** | **boolean** | Обязательно ли поле | [optional] [default to undefined]
**multiple** | **boolean** | Может ли поле принимать несколько значений | [optional] [default to undefined]
**values** | [**Array&lt;ConnectionSchemaFieldsInnerValuesInner&gt;**](ConnectionSchemaFieldsInnerValuesInner.md) | Объект с возможными значениями для поля. Если у поля type&#x3D;array и multiple&#x3D;false, то передавать значение не оборачивая в массив | [optional] [default to undefined]

## Example

```typescript
import { ConnectionSchemaFieldsInner } from './api';

const instance: ConnectionSchemaFieldsInner = {
    code,
    name,
    description,
    type,
    required,
    multiple,
    values,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
