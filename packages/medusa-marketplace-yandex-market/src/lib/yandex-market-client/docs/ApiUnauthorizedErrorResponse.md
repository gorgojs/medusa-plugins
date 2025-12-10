# ApiUnauthorizedErrorResponse

В запросе не указаны авторизационные данные.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**ApiResponseStatusType**](ApiResponseStatusType.md) |  | [default to undefined]
**errors** | [**Array&lt;ApiErrorDTO&gt;**](ApiErrorDTO.md) | Список ошибок. | [optional] [default to undefined]

## Example

```typescript
import { ApiUnauthorizedErrorResponse } from './api';

const instance: ApiUnauthorizedErrorResponse = {
    status,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
