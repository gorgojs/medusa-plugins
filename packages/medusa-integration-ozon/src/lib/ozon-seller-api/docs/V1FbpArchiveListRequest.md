# V1FbpArchiveListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **string** | Количество элементов в ответе. | [default to undefined]
**last_id** | **string** | Идентификатор последнего значения на странице. Оставьте это поле пустым при выполнении первого запроса.  Чтобы получить следующие значения, укажите &#x60;last_id&#x60; из ответа предыдущего запроса.  | [optional] [default to undefined]

## Example

```typescript
import { V1FbpArchiveListRequest } from './api';

const instance: V1FbpArchiveListRequest = {
    count,
    last_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
