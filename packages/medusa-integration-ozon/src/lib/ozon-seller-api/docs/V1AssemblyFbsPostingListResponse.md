# V1AssemblyFbsPostingListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | **string** | Указатель для выборки следующих данных. Если параметр пустой, данных больше нет. | [optional] [default to undefined]
**cutoff** | **string** | Время, до которого продавцу нужно собрать заказ. | [optional] [default to undefined]
**postings** | [**Array&lt;V1AssemblyFbsPostingListResponsePosting&gt;**](V1AssemblyFbsPostingListResponsePosting.md) | Список отправлений. | [optional] [default to undefined]

## Example

```typescript
import { V1AssemblyFbsPostingListResponse } from './api';

const instance: V1AssemblyFbsPostingListResponse = {
    cursor,
    cutoff,
    postings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
