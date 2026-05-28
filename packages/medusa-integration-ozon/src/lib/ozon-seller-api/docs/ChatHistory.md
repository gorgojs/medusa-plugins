# ChatHistory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_id** | **string** | Идентификатор чата. | [default to undefined]
**direction** | **string** | Направление сортировки сообщений: - &#x60;Forward&#x60; — от старых к новым. - &#x60;Backward&#x60; — от новых к старым.  Значение по умолчанию — &#x60;Backward&#x60;. Количество сообщений можно установить в параметре &#x60;limit&#x60;.  | [optional] [default to undefined]
**from_message_id** | **number** | Идентификатор сообщения, с которого нужно начать вывод истории чата. По умолчанию — последнее видимое сообщение.  Параметр &#x60;from_message_id&#x60; обязательный, если &#x60;direction &#x3D; Forward&#x60;.  | [optional] [default to undefined]
**limit** | **number** | Количество сообщений в ответе. По умолчанию — 50. Максимальное значение — 1000. | [default to undefined]

## Example

```typescript
import { ChatHistory } from './api';

const instance: ChatHistory = {
    chat_id,
    direction,
    from_message_id,
    limit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
