# V1FbpOrderListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **number** | Количество поставок в ответе. | [optional] [default to undefined]
**last_id** | **number** | Идентификатор последней поставки на странице. Для первого запроса оставьте это поле пустым.  Чтобы получить следующие значения, укажите &#x60;id&#x60; последней поставки из ответа предыдущего запроса.  | [optional] [default to undefined]

## Example

```typescript
import { V1FbpOrderListRequest } from './api';

const instance: V1FbpOrderListRequest = {
    count,
    last_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
