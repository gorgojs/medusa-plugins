# V1DraftCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_ids** | **Array&lt;string&gt;** | Идентификаторы кластеров для поставки. Получите методом [/v1/cluster/list](#operation/SupplyDraftAPI_DraftClusterList). | [optional] [default to undefined]
**drop_off_point_warehouse_id** | **number** | Идентификатор точки отгрузки — пункта выдачи заказов или сортировочного центра. Можно получить с помощью метода [/v1/warehouse/fbo/list](#operation/SupplyDraftAPI_DraftGetWarehouseFboList). Только для типа поставки &#x60;type &#x3D; CREATE_TYPE_CROSSDOCK&#x60;.  | [optional] [default to undefined]
**items** | [**Array&lt;DraftCreateRequestItem&gt;**](DraftCreateRequestItem.md) | Товары. | [default to undefined]
**type** | [**V1CreateType**](V1CreateType.md) |  | [default to undefined]

## Example

```typescript
import { V1DraftCreateRequest } from './api';

const instance: V1DraftCreateRequest = {
    cluster_ids,
    drop_off_point_warehouse_id,
    items,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
