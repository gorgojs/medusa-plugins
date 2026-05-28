# V1SupplyOrderDetailsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date** | **string** | Дата создания заявки на поставку. | [optional] [default to undefined]
**data_filling_deadline_utc** | **string** | Время в секундах, оставшееся на заполнение данных по поставке. Только для заявок с вРЦ. | [optional] [default to undefined]
**dropoff_warehouse_id** | **number** | Идентификатор пункта отгрузки. | [optional] [default to undefined]
**order_id** | **number** | Идентификатор заявки на поставку. | [optional] [default to undefined]
**order_number** | **string** | Номер заявки на поставку. | [optional] [default to undefined]
**order_tags** | [**SupplyOrderDetailsResponseOrderTags**](SupplyOrderDetailsResponseOrderTags.md) |  | [optional] [default to undefined]
**state** | [**SupplyOrderDetailsResponseOrderStateEnum**](SupplyOrderDetailsResponseOrderStateEnum.md) |  | [optional] [default to undefined]
**state_updated_date** | **string** | Дата обновления статуса заявки на поставку. | [optional] [default to undefined]
**supplies** | [**Array&lt;SupplyOrderDetailsResponseSupply&gt;**](SupplyOrderDetailsResponseSupply.md) | Информация о поставках. | [optional] [default to undefined]
**timeslot** | [**V1SupplyOrderDetailsResponseTimeslot**](V1SupplyOrderDetailsResponseTimeslot.md) |  | [optional] [default to undefined]
**vehicle** | [**SupplyOrderDetailsResponseVehicle**](SupplyOrderDetailsResponseVehicle.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V1SupplyOrderDetailsResponse } from './api';

const instance: V1SupplyOrderDetailsResponse = {
    created_date,
    data_filling_deadline_utc,
    dropoff_warehouse_id,
    order_id,
    order_number,
    order_tags,
    state,
    state_updated_date,
    supplies,
    timeslot,
    vehicle,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
