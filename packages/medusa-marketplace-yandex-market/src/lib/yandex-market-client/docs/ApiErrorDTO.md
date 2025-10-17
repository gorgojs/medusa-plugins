# ApiErrorDTO

Общий формат ошибки.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Код ошибки. | [default to undefined]
**message** | **string** | Описание ошибки. | [optional] [default to undefined]

## Example

```typescript
import { ApiErrorDTO } from './api';

const instance: ApiErrorDTO = {
    code,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
