# ApiNotFoundErrorResponse

Запрашиваемый ресурс не найден.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**ApiResponseStatusType**](ApiResponseStatusType.md) |  | [default to undefined]
**errors** | [**Array&lt;ApiErrorDTO&gt;**](ApiErrorDTO.md) | Список ошибок. | [optional] [default to undefined]

## Example

```typescript
import { ApiNotFoundErrorResponse } from './api';

const instance: ApiNotFoundErrorResponse = {
    status,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
