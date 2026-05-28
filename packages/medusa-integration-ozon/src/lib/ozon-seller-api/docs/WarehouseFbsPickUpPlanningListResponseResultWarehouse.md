# WarehouseFbsPickUpPlanningListResponseResultWarehouse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_modify_pickup_plan** | **boolean** | &#x60;true&#x60;, если можно изменить возможность планирования вызова курьера.  | [optional] [default to undefined]
**has_postings_to_be_planned** | **boolean** | &#x60;true&#x60;, если есть отправления для отгрузки.  | [optional] [default to undefined]
**is_pickup_planned** | **boolean** | &#x60;true&#x60;, если запланирована отгрузка курьером.  | [optional] [default to undefined]
**last_pickup_plan_date_at** | **string** | Дата и время окончания планирования выезда курьера. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]
**warehouse_name** | **string** | Название склада. | [optional] [default to undefined]

## Example

```typescript
import { WarehouseFbsPickUpPlanningListResponseResultWarehouse } from './api';

const instance: WarehouseFbsPickUpPlanningListResponseResultWarehouse = {
    can_modify_pickup_plan,
    has_postings_to_be_planned,
    is_pickup_planned,
    last_pickup_plan_date_at,
    warehouse_id,
    warehouse_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
