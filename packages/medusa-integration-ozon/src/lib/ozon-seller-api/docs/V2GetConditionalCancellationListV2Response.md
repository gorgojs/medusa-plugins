# V2GetConditionalCancellationListV2Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counter** | **number** | Cчётчик заявок в статусе &#x60;ON_APPROVAL&#x60;. | [optional] [default to undefined]
**last_id** | **number** | Идентификатор последнего значения на странице.  Чтобы получить следующие значения, передайте полученное значение в следующем запросе в параметре &#x60;last_id&#x60;.  | [optional] [default to undefined]
**result** | [**Array&lt;GetConditionalCancellationListV2ResponseResult&gt;**](GetConditionalCancellationListV2ResponseResult.md) | Информация о заявках на отмену. | [optional] [default to undefined]

## Example

```typescript
import { V2GetConditionalCancellationListV2Response } from './api';

const instance: V2GetConditionalCancellationListV2Response = {
    counter,
    last_id,
    result,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
