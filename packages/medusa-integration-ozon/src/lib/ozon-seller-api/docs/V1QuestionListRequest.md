# V1QuestionListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | [**V1QuestionListRequestFilter**](V1QuestionListRequestFilter.md) |  | [optional] [default to undefined]
**last_id** | **string** | Идентификатор последнего значения на странице.   Оставьте это поле пустым при выполнении первого запроса. Чтобы получить следующие значения, укажите &#x60;last_id&#x60; из ответа предыдущего запроса.  | [optional] [default to undefined]

## Example

```typescript
import { V1QuestionListRequest } from './api';

const instance: V1QuestionListRequest = {
    filter,
    last_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
