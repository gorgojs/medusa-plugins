# ChatMessagesResultDTO

Информация о сообщениях.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **number** | Идентификатор заказа. | [optional] [default to undefined]
**context** | [**ChatFullContextDTO**](ChatFullContextDTO.md) |  | [default to undefined]
**messages** | [**Array&lt;ChatMessageDTO&gt;**](ChatMessageDTO.md) | Информация о сообщениях. | [default to undefined]
**paging** | [**ForwardScrollingPagerDTO**](ForwardScrollingPagerDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ChatMessagesResultDTO } from './api';

const instance: ChatMessagesResultDTO = {
    orderId,
    context,
    messages,
    paging,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
