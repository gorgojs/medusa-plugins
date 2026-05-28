# V1FbpOrderListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_next** | **boolean** | &#x60;true&#x60;, если в ответе вернули не все поставки.  | [optional] [default to undefined]
**items** | [**Array&lt;V1FbpOrderListResponseItem&gt;**](V1FbpOrderListResponseItem.md) | Поставки. | [optional] [default to undefined]
**last_id** | **number** | Идентификатор последней поставки на странице. | [optional] [default to undefined]

## Example

```typescript
import { V1FbpOrderListResponse } from './api';

const instance: V1FbpOrderListResponse = {
    has_next,
    items,
    last_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
