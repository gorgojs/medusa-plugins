# V1DraftDirectCreateRequestClusterInfo

Информация о кластере.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;V1DraftDirectCreateRequestClusterInfoItem&gt;**](V1DraftDirectCreateRequestClusterInfoItem.md) | Товарный состав заявки на поставку. | [default to undefined]
**macrolocal_cluster_id** | **number** | Идентификатор кластера. Получите значение параметра методом [/v1/cluster/list](#operation/SupplyDraftAPI_DraftClusterList). | [default to undefined]

## Example

```typescript
import { V1DraftDirectCreateRequestClusterInfo } from './api';

const instance: V1DraftDirectCreateRequestClusterInfo = {
    items,
    macrolocal_cluster_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
