# V1DraftMultiClusterCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clusters_info** | [**Array&lt;V1DraftMultiClusterCreateRequestClusterInfo&gt;**](V1DraftMultiClusterCreateRequestClusterInfo.md) | Информация о кластере. | [default to undefined]
**deletion_sku_mode** | [**V1DraftMultiClusterCreateRequestDeleteSkuModeEnum**](V1DraftMultiClusterCreateRequestDeleteSkuModeEnum.md) |  | [optional] [default to undefined]
**delivery_info** | [**V1DraftMultiClusterCreateRequestDeliveryInfo**](V1DraftMultiClusterCreateRequestDeliveryInfo.md) |  | [default to undefined]

## Example

```typescript
import { V1DraftMultiClusterCreateRequest } from './api';

const instance: V1DraftMultiClusterCreateRequest = {
    clusters_info,
    deletion_sku_mode,
    delivery_info,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
