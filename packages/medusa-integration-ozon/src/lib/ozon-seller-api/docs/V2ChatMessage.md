# V2ChatMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **string** | Дата создания сообщения. | [optional] [default to undefined]
**data** | **Array&lt;string&gt;** | Массив с содержимым сообщения в формате Markdown. | [optional] [default to undefined]
**is_read** | **boolean** | Признак, что сообщение прочитано. | [optional] [default to undefined]
**messageId** | **number** | Идентификатор сообщения. | [optional] [default to undefined]
**user** | [**V2User**](V2User.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V2ChatMessage } from './api';

const instance: V2ChatMessage = {
    created_at,
    data,
    is_read,
    messageId,
    user,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
