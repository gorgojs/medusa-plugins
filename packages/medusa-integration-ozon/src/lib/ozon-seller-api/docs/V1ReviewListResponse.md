# V1ReviewListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_next** | **boolean** | &#x60;true&#x60;, если в ответе вернули не все отзывы.  | [optional] [default to undefined]
**last_id** | **string** | Идентификатор последнего отзыва на странице. | [optional] [default to undefined]
**reviews** | [**Array&lt;ReviewListResponseReview&gt;**](ReviewListResponseReview.md) | Информация об отзыве. | [optional] [default to undefined]

## Example

```typescript
import { V1ReviewListResponse } from './api';

const instance: V1ReviewListResponse = {
    has_next,
    last_id,
    reviews,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
