# V1ItemError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Код ошибки. | [optional] [default to undefined]
**message** | **string** | Техническое описание ошибки. | [optional] [default to undefined]
**state** | **string** | Состояние товара, в котором произошла ошибка. | [optional] [default to undefined]
**level** | **string** | Уровень ошибки. | [optional] [default to undefined]
**description** | **string** | Описание ошибки. | [optional] [default to undefined]
**field** | **string** | Поле, в котором произошла ошибка. | [optional] [default to undefined]
**attribute_id** | **number** | Атрибут, в котором произошла ошибка. | [optional] [default to undefined]
**attribute_name** | **string** | Название атрибута, в котором произошла ошибка. | [optional] [default to undefined]

## Example

```typescript
import { V1ItemError } from './api';

const instance: V1ItemError = {
    code,
    message,
    state,
    level,
    description,
    field,
    attribute_id,
    attribute_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
