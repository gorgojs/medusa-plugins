# SupplyOrderGetResponseOrder


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date** | **string** | Дата создания заявки на поставку. | [optional] [default to undefined]
**data_filling_deadline** | **string** | Время в секундах, оставшееся на заполнение данных по поставке. Только для заявок с вРЦ. | [optional] [default to undefined]
**drop_off_warehouse** | [**OrderDropOffWarehouse**](OrderDropOffWarehouse.md) |  | [optional] [default to undefined]
**order_id** | **number** | Идентификатор заявки на поставку. | [optional] [default to undefined]
**order_number** | **string** | Номер заявки на поставку. | [optional] [default to undefined]
**order_tags** | [**OrderOrderTags**](OrderOrderTags.md) |  | [optional] [default to undefined]
**state** | [**OrderOrderStateEnum**](OrderOrderStateEnum.md) |  | [optional] [default to undefined]
**state_updated_date** | **string** | Дата обновления статуса заявки на поставку. | [optional] [default to undefined]
**supplies** | [**Array&lt;OrderSupply&gt;**](OrderSupply.md) | Информация о поставках. | [optional] [default to undefined]
**timeslot** | [**SupplyOrderGetResponseTimeslotTZ**](SupplyOrderGetResponseTimeslotTZ.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SupplyOrderGetResponseOrder } from './api';

const instance: SupplyOrderGetResponseOrder = {
    created_date,
    data_filling_deadline,
    drop_off_warehouse,
    order_id,
    order_number,
    order_tags,
    state,
    state_updated_date,
    supplies,
    timeslot,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
