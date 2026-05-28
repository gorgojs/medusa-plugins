# V1DraftCrossdockCreateRequestClusterInfo

Информация о кластере.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;V1DraftCrossdockCreateRequestClusterInfoItem&gt;**](V1DraftCrossdockCreateRequestClusterInfoItem.md) | Товарный состав заявки на поставку. | [default to undefined]
**macrolocal_cluster_id** | **number** | Идентификатор кластера. Получите значение параметра методом [/v1/cluster/list](#operation/SupplyDraftAPI_DraftClusterList). | [default to undefined]

## Example

```typescript
import { V1DraftCrossdockCreateRequestClusterInfo } from './api';

const instance: V1DraftCrossdockCreateRequestClusterInfo = {
    items,
    macrolocal_cluster_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
