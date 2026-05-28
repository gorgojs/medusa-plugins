# V2ChatHistoryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_next** | **boolean** | Признак, что в ответе вернули не все сообщения. | [optional] [default to undefined]
**messages** | [**Array&lt;V2ChatMessage&gt;**](V2ChatMessage.md) | Массив сообщений, отсортированный в соответствии с параметром &#x60;direction&#x60; из тела запроса. | [optional] [default to undefined]

## Example

```typescript
import { V2ChatHistoryResponse } from './api';

const instance: V2ChatHistoryResponse = {
    has_next,
    messages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
