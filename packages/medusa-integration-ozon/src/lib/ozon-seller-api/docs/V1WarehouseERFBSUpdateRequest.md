# V1WarehouseERFBSUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_order_value** | **number** | Минимальная стоимость заказа. | [optional] [default to undefined]
**name** | **string** | Название склада. | [optional] [default to undefined]
**phone** | **string** | Номер телефона склада. | [optional] [default to undefined]
**timetable_warehouse** | [**V1WarehouseERFBSUpdateRequestTimetableWarehouse**](V1WarehouseERFBSUpdateRequestTimetableWarehouse.md) |  | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [default to undefined]

## Example

```typescript
import { V1WarehouseERFBSUpdateRequest } from './api';

const instance: V1WarehouseERFBSUpdateRequest = {
    min_order_value,
    name,
    phone,
    timetable_warehouse,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
