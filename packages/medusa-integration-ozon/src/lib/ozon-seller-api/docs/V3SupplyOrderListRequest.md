# V3SupplyOrderListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | [**SupplyOrderListRequestFilter**](SupplyOrderListRequestFilter.md) |  | [default to undefined]
**last_id** | **string** | Идентификатор последнего значения на странице. При первом запросе оставьте это поле пустым.  Чтобы получить следующие значения, укажите &#x60;last_id&#x60; из ответа предыдущего запроса.  | [optional] [default to undefined]
**limit** | **number** | Количество значений на странице. | [default to undefined]
**sort_by** | [**SupplyOrderListRequestSortByEnum**](SupplyOrderListRequestSortByEnum.md) |  | [default to undefined]
**sort_dir** | [**SupplyOrderListRequestSortDirEnum**](SupplyOrderListRequestSortDirEnum.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V3SupplyOrderListRequest } from './api';

const instance: V3SupplyOrderListRequest = {
    filter,
    last_id,
    limit,
    sort_by,
    sort_dir,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
