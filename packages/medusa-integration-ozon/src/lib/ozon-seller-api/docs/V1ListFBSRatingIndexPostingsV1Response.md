# V1ListFBSRatingIndexPostingsV1Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | **string** | Указатель для выборки следующих данных. | [optional] [default to undefined]
**errors** | [**Array&lt;ListFBSRatingIndexPostingsV1ResponseError&gt;**](ListFBSRatingIndexPostingsV1ResponseError.md) | Отправления, которые повлияли на индекс. | [optional] [default to undefined]
**has_next** | **boolean** | &#x60;true&#x60;, если в ответе вернулись не все отправления.  | [optional] [default to undefined]

## Example

```typescript
import { V1ListFBSRatingIndexPostingsV1Response } from './api';

const instance: V1ListFBSRatingIndexPostingsV1Response = {
    cursor,
    errors,
    has_next,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
