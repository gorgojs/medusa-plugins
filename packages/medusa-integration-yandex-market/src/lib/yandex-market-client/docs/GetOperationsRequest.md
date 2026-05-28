# GetOperationsRequest

Запрос на получение статусов операций.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operationType** | [**OperationType**](OperationType.md) |  | [default to undefined]
**operationIds** | **Set&lt;string&gt;** | Список идентификаторов операций.  | [default to undefined]

## Example

```typescript
import { GetOperationsRequest } from './api';

const instance: GetOperationsRequest = {
    operationType,
    operationIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
