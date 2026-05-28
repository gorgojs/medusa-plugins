# V1AssemblyFbsPostingListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | **string** | Указатель для выборки следующих данных. | [optional] [default to undefined]
**filter** | [**V1AssemblyFbsPostingListRequestFilter**](V1AssemblyFbsPostingListRequestFilter.md) |  | [default to undefined]
**limit** | **number** | Количество значений на странице. | [default to undefined]
**sort_dir** | [**V1AssemblyFbsPostingListRequestSortDirEnum**](V1AssemblyFbsPostingListRequestSortDirEnum.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V1AssemblyFbsPostingListRequest } from './api';

const instance: V1AssemblyFbsPostingListRequest = {
    cursor,
    filter,
    limit,
    sort_dir,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
