# WarehouseFbsPickUpHistoryListResponseHistoryEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**planned_date** | **string** | Дата отгрузки в формате &#x60;YYYY-MM-DD&#x60;. | [optional] [default to undefined]
**status** | **string** | Статус отгрузки: - &#x60;courier_called&#x60; — продавец вызвал курьера самостоятельно; - &#x60;courier_cancelled&#x60; — продавец отменил курьера; - &#x60;courier_assigned&#x60; — Ozon назначил курьера автоматически; - &#x60;courier_not_assigned&#x60; — курьер не назначен.  | [optional] [default to undefined]
**updated_at** | **string** | Дата и время обновления отгрузки. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]
**warehouse_name** | **string** | Название склада. | [optional] [default to undefined]
**was_planned** | **boolean** | &#x60;true&#x60;, если отгрузка запланирована.  | [optional] [default to undefined]

## Example

```typescript
import { WarehouseFbsPickUpHistoryListResponseHistoryEntity } from './api';

const instance: WarehouseFbsPickUpHistoryListResponseHistoryEntity = {
    planned_date,
    status,
    updated_at,
    warehouse_id,
    warehouse_name,
    was_planned,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
