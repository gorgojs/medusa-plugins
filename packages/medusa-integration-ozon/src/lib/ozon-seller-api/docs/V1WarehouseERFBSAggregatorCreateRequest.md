# V1WarehouseERFBSAggregatorCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_coordinates** | [**V1WarehouseERFBSAggregatorCreateRequestAddressCoordinates**](V1WarehouseERFBSAggregatorCreateRequestAddressCoordinates.md) |  | [default to undefined]
**delivery_method** | [**V1WarehouseERFBSAggregatorCreateRequestDeliveryMethod**](V1WarehouseERFBSAggregatorCreateRequestDeliveryMethod.md) |  | [default to undefined]
**min_order_value** | **number** | Минимальная стоимость заказа. | [optional] [default to undefined]
**name** | **string** | Название склада. | [default to undefined]
**phone** | **string** | Номер телефона склада. | [default to undefined]
**timetable_warehouse** | [**V1WarehouseERFBSAggregatorCreateRequestTimetableWarehouse**](V1WarehouseERFBSAggregatorCreateRequestTimetableWarehouse.md) |  | [default to undefined]

## Example

```typescript
import { V1WarehouseERFBSAggregatorCreateRequest } from './api';

const instance: V1WarehouseERFBSAggregatorCreateRequest = {
    address_coordinates,
    delivery_method,
    min_order_value,
    name,
    phone,
    timetable_warehouse,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
