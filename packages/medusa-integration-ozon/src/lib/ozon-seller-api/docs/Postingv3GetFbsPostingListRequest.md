# Postingv3GetFbsPostingListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dir** | **string** | Направление сортировки:   - &#x60;asc&#x60; — по возрастанию,   - &#x60;desc&#x60; — по убыванию.  | [optional] [default to undefined]
**filter** | [**Postingv3GetFbsPostingListRequestFilter**](Postingv3GetFbsPostingListRequestFilter.md) |  | [default to undefined]
**limit** | **number** | Количество значений в ответе:   - максимум — 1000,   - минимум — 1.  | [default to undefined]
**offset** | **number** | Количество элементов, которое будет пропущено в ответе. Например, если &#x60;offset &#x3D; 10&#x60;, то ответ начнётся с 11-го найденного элемента. | [default to undefined]
**_with** | [**Postingv3FbsPostingWithParams**](Postingv3FbsPostingWithParams.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Postingv3GetFbsPostingListRequest } from './api';

const instance: Postingv3GetFbsPostingListRequest = {
    dir,
    filter,
    limit,
    offset,
    _with,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
