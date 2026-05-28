# ArrivalPassListRequestFilter

Фильтры.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arrival_pass_ids** | **Array&lt;string&gt;** | Фильтр по идентификатору пропуска. | [optional] [default to undefined]
**arrival_reason** | **string** | Фильтр по цели въезда: - &#x60;FBS_DELIVERY&#x60; — отгрузка. - &#x60;FBS_RETURN&#x60; — вывоз возвратов.  Если параметр не указан, учитываются обе цели.  Указанная причина должна быть в списке причин в пропусках.  | [optional] [default to undefined]
**dropoff_point_ids** | **Array&lt;string&gt;** | Фильтр по точке отгрузки. | [optional] [default to undefined]
**only_active_passes** | **boolean** | &#x60;true&#x60;, чтобы получить только активные заявки на пропуск.  | [optional] [default to undefined]
**warehouse_ids** | **Array&lt;string&gt;** | Фильтр по складу продавца. Можно получить с помощью метода [/v1/warehouse/list](#operation/WarehouseAPI_WarehouseList). | [optional] [default to undefined]

## Example

```typescript
import { ArrivalPassListRequestFilter } from './api';

const instance: ArrivalPassListRequestFilter = {
    arrival_pass_ids,
    arrival_reason,
    dropoff_point_ids,
    only_active_passes,
    warehouse_ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
