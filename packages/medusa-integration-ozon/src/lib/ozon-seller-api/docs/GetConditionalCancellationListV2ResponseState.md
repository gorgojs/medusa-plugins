# GetConditionalCancellationListV2ResponseState

Статус заявки на отмену.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор статуса. | [optional] [default to undefined]
**name** | **string** | Название статуса. | [optional] [default to undefined]
**state** | [**V2CancellationStateEnum**](V2CancellationStateEnum.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetConditionalCancellationListV2ResponseState } from './api';

const instance: GetConditionalCancellationListV2ResponseState = {
    id,
    name,
    state,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
