# V1AssemblyFbsProductListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | [**V1AssemblyFbsProductListRequestFilter**](V1AssemblyFbsProductListRequestFilter.md) |  | [default to undefined]
**limit** | **number** | Количество значений на странице. | [default to undefined]
**offset** | **number** | Количество элементов, которое будет пропущено в ответе. Например, если &#x60;offset &#x3D; 10&#x60;, ответ начнётся с 11 найденного элемента. | [optional] [default to undefined]
**sort_dir** | [**V1AssemblyFbsProductListRequestSortDirEnum**](V1AssemblyFbsProductListRequestSortDirEnum.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V1AssemblyFbsProductListRequest } from './api';

const instance: V1AssemblyFbsProductListRequest = {
    filter,
    limit,
    offset,
    sort_dir,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
