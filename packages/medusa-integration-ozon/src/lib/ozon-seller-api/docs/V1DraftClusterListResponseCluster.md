# V1DraftClusterListResponseCluster


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор кластера. | [optional] [default to undefined]
**logistic_clusters** | [**Array&lt;DraftClusterListResponseLogisticCluster&gt;**](DraftClusterListResponseLogisticCluster.md) | Информация о складах кластера. | [optional] [default to undefined]
**macrolocal_cluster_id** | **number** | Идентификатор кластера. | [optional] [default to undefined]
**name** | **string** | Название кластера. | [optional] [default to undefined]
**type** | **string** | Тип кластера: - &#x60;CLUSTER_TYPE_OZON&#x60; — кластер в России, - &#x60;CLUSTER_TYPE_CIS&#x60; — кластер в СНГ.  | [optional] [default to undefined]

## Example

```typescript
import { V1DraftClusterListResponseCluster } from './api';

const instance: V1DraftClusterListResponseCluster = {
    id,
    logistic_clusters,
    macrolocal_cluster_id,
    name,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
