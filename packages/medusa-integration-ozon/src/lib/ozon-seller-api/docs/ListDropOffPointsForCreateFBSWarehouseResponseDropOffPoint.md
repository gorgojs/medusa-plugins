# ListDropOffPointsForCreateFBSWarehouseResponseDropOffPoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | Адрес drop-off пункта. | [optional] [default to undefined]
**coordinates** | [**V1ListDropOffPointsForCreateFBSWarehouseResponseCoordinates**](V1ListDropOffPointsForCreateFBSWarehouseResponseCoordinates.md) |  | [optional] [default to undefined]
**discount_percent** | **number** | Процент скидки за передачу отправления. | [optional] [default to undefined]
**id** | **string** | Идентификатор drop-off пункта. | [optional] [default to undefined]
**last_transit_time_local** | [**TypeTimeOfDay**](TypeTimeOfDay.md) |  | [optional] [default to undefined]
**type** | [**V1ListDropOffPointsForCreateFBSWarehouseResponseDropOffPointTypeEnum**](V1ListDropOffPointsForCreateFBSWarehouseResponseDropOffPointTypeEnum.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ListDropOffPointsForCreateFBSWarehouseResponseDropOffPoint } from './api';

const instance: ListDropOffPointsForCreateFBSWarehouseResponseDropOffPoint = {
    address,
    coordinates,
    discount_percent,
    id,
    last_transit_time_local,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
