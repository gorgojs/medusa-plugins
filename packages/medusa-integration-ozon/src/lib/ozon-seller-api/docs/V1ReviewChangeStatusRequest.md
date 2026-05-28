# V1ReviewChangeStatusRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**review_ids** | **Array&lt;string&gt;** | Массив с идентификаторами отзывов от 1 до 100. | [default to undefined]
**status** | **string** | Статус отзыва: - &#x60;PROCESSED&#x60; — обработанный, - &#x60;UNPROCESSED&#x60; — необработанный.  | [default to undefined]

## Example

```typescript
import { V1ReviewChangeStatusRequest } from './api';

const instance: V1ReviewChangeStatusRequest = {
    review_ids,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
