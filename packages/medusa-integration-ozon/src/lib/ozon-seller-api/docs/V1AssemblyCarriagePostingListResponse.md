# V1AssemblyCarriagePostingListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_print_mass_label** | **boolean** | &#x60;true&#x60;, если можно распечатать этикетки массово.  | [optional] [default to undefined]
**cursor** | **string** | Указатель для выборки следующих данных. Если параметр пустой, данных больше нет. | [optional] [default to undefined]
**postings** | [**Array&lt;V1AssemblyCarriagePostingListResponsePosting&gt;**](V1AssemblyCarriagePostingListResponsePosting.md) | Список отправлений. | [optional] [default to undefined]

## Example

```typescript
import { V1AssemblyCarriagePostingListResponse } from './api';

const instance: V1AssemblyCarriagePostingListResponse = {
    can_print_mass_label,
    cursor,
    postings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
