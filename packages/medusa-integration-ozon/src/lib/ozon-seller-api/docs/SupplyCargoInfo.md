# SupplyCargoInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_id** | **string** | Идентификатор товарного состава. | [optional] [default to undefined]
**cargo_id** | **number** | Идентификатор грузоместа. | [optional] [default to undefined]
**content_type** | [**CargoInfoContentTypeEnum**](CargoInfoContentTypeEnum.md) |  | [optional] [default to undefined]
**placement_zone_type** | [**CargoInfoPlacementZoneTypeEnum**](CargoInfoPlacementZoneTypeEnum.md) |  | [optional] [default to undefined]
**tracking_info** | [**CargoInfoTrackingInfo**](CargoInfoTrackingInfo.md) |  | [optional] [default to undefined]
**type** | [**SupplyCargoInfoTypeEnum**](SupplyCargoInfoTypeEnum.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SupplyCargoInfo } from './api';

const instance: SupplyCargoInfo = {
    bundle_id,
    cargo_id,
    content_type,
    placement_zone_type,
    tracking_info,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
