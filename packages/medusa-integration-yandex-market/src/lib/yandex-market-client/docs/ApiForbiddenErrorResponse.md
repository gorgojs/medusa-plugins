# ApiForbiddenErrorResponse

Неверны авторизационные данные, указанные в запросе, или запрещен доступ к запрашиваемому ресурсу.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**ApiResponseStatusType**](ApiResponseStatusType.md) |  | [default to undefined]
**errors** | [**Array&lt;ApiErrorDTO&gt;**](ApiErrorDTO.md) | Список ошибок. | [optional] [default to undefined]

## Example

```typescript
import { ApiForbiddenErrorResponse } from './api';

const instance: ApiForbiddenErrorResponse = {
    status,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
