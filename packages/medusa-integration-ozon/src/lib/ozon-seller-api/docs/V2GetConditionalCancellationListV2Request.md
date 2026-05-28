# V2GetConditionalCancellationListV2Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**GetConditionalCancellationListV2RequestFilters**](GetConditionalCancellationListV2RequestFilters.md) |  | [optional] [default to undefined]
**last_id** | **number** | Идентификатор последнего значения на странице. Оставьте это поле пустым при выполнении первого запроса.  Чтобы получить следующие значения, укажите &#x60;last_id&#x60; из ответа предыдущего запроса.  | [optional] [default to undefined]
**limit** | **number** | Количество заявок в ответе. | [default to undefined]
**_with** | [**GetConditionalCancellationListV2RequestWith**](GetConditionalCancellationListV2RequestWith.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V2GetConditionalCancellationListV2Request } from './api';

const instance: V2GetConditionalCancellationListV2Request = {
    filters,
    last_id,
    limit,
    _with,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
