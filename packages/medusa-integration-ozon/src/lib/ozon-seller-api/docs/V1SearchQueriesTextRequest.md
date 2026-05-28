# V1SearchQueriesTextRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **string** | Количество значений на странице. | [default to undefined]
**offset** | **string** | Количество элементов, которое будет пропущено в ответе. | [default to undefined]
**sort_by** | [**SearchQueriesTextRequestSortBy**](SearchQueriesTextRequestSortBy.md) |  | [optional] [default to undefined]
**sort_dir** | [**SearchQueriesTextRequestSortDir**](SearchQueriesTextRequestSortDir.md) |  | [optional] [default to undefined]
**text** | **string** | Поиск по тексту. | [default to undefined]

## Example

```typescript
import { V1SearchQueriesTextRequest } from './api';

const instance: V1SearchQueriesTextRequest = {
    limit,
    offset,
    sort_by,
    sort_dir,
    text,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
