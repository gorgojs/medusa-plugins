# GetChatHistoryRequest

Историю какого чата нужно получить — и начиная с какого сообщения. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messageIdFrom** | **number** | Идентификатор сообщения, начиная с которого нужно получить все последующие сообщения. | [optional] [default to undefined]

## Example

```typescript
import { GetChatHistoryRequest } from './api';

const instance: GetChatHistoryRequest = {
    messageIdFrom,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
