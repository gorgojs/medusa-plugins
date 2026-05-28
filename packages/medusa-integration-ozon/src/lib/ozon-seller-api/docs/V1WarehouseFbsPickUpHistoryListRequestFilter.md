# V1WarehouseFbsPickUpHistoryListRequestFilter

Фильтр.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**planned_date** | **string** | Дата отгрузки. | [optional] [default to undefined]
**warehouse_id** | **Array&lt;string&gt;** | Идентификаторы складов. | [optional] [default to undefined]
**was_planned** | **boolean** | &#x60;true&#x60;, если отгрузка запланирована.  | [optional] [default to undefined]

## Example

```typescript
import { V1WarehouseFbsPickUpHistoryListRequestFilter } from './api';

const instance: V1WarehouseFbsPickUpHistoryListRequestFilter = {
    planned_date,
    warehouse_id,
    was_planned,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
