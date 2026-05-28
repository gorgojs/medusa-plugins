# V1ListPostingCodesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dir** | [**DirEnum**](DirEnum.md) |  | [optional] [default to undefined]
**filter** | [**ListPostingCodesRequestFilter**](ListPostingCodesRequestFilter.md) |  | [optional] [default to undefined]
**limit** | **number** | Количество значений в ответе:  - максимум — 1000,  - минимум — 1.  | [optional] [default to undefined]
**offset** | **number** | Количество элементов, которое будет пропущено в ответе. Например, если &#x60;offset &#x3D; 10&#x60;, то ответ начнётся с 11-го найденного элемента. Максимальное значение — 20000. | [optional] [default to undefined]
**_with** | [**ListPostingCodesRequestWithParams**](ListPostingCodesRequestWithParams.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V1ListPostingCodesRequest } from './api';

const instance: V1ListPostingCodesRequest = {
    dir,
    filter,
    limit,
    offset,
    _with,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
