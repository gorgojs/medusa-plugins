# ErrorData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Код. | [optional] [default to undefined]
**field** | **string** | Причина. | [optional] [default to undefined]
**message** | **string** | Текстовое описание. | [optional] [default to undefined]
**step** | **number** | Уровень скидки. | [optional] [default to undefined]
**value** | **string** | Значение поля с ошибкой. | [optional] [default to undefined]

## Example

```typescript
import { ErrorData } from './api';

const instance: ErrorData = {
    code,
    field,
    message,
    step,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
