# DraftCreateInfoResponseCluster


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_name** | **string** | Название кластера. | [optional] [default to undefined]
**macrolocal_cluster_id** | **number** | Идентификатор кластера. | [optional] [default to undefined]
**warehouses** | [**Array&lt;ClusterWarehouse&gt;**](ClusterWarehouse.md) | Склады размещения. | [optional] [default to undefined]

## Example

```typescript
import { DraftCreateInfoResponseCluster } from './api';

const instance: DraftCreateInfoResponseCluster = {
    cluster_name,
    macrolocal_cluster_id,
    warehouses,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
