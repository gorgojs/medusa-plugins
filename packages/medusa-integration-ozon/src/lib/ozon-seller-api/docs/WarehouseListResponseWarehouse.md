# WarehouseListResponseWarehouse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_entrusted_acceptance** | **boolean** | Признак доверительной приёмки. &#x60;true&#x60;, если доверительная приёмка включена на складе. | [optional] [default to undefined]
**is_rfbs** | **boolean** | Признак работы склада по схеме rFBS: - &#x60;true&#x60; — склад работает по схеме rFBS; - &#x60;false&#x60; — не работает по схеме rFBS.  | [optional] [default to undefined]
**name** | **string** | Название склада. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]
**can_print_act_in_advance** | **boolean** | Возможность печати акта приёма-передачи заранее. &#x60;true&#x60;, если печатать заранее возможно. | [optional] [default to undefined]
**first_mile_type** | [**WarehouseFirstMileType**](WarehouseFirstMileType.md) |  | [optional] [default to undefined]
**has_postings_limit** | **boolean** | Признак наличия лимита минимального количества заказов. &#x60;true&#x60;, если лимит есть. | [optional] [default to undefined]
**is_karantin** | **boolean** | Признак, что склад не работает из-за карантина. | [optional] [default to undefined]
**is_kgt** | **boolean** | Признак, что склад принимает крупногабаритные товары. | [optional] [default to undefined]
**is_economy** | **boolean** | &#x60;true&#x60;, если склад работает с эконом-товарами.  | [optional] [default to undefined]
**is_timetable_editable** | **boolean** | Признак, что можно менять расписание работы складов. | [optional] [default to undefined]
**min_postings_limit** | **number** | Минимальное значение лимита — количество заказов, которые можно привезти в одной поставке. | [optional] [default to undefined]
**postings_limit** | **number** | Значение лимита. &#x60;-1&#x60;, если лимита нет. | [optional] [default to undefined]
**min_working_days** | **number** | Количество рабочих дней склада. | [optional] [default to undefined]
**status** | **string** | Статус склада.  Соответствие статусов склада со статусами с личном кабинете:  | Статус Seller&amp;nbsp;API | Статус в личном кабинете | |---|---| | &#x60;new&#x60; | Активируется | | &#x60;created&#x60; | Активный | | &#x60;disabled&#x60; | В архиве | | &#x60;blocked&#x60; | Заблокирован | | &#x60;disabled_due_to_limit&#x60; | На паузе | | &#x60;error&#x60; | Ошибка |  | [optional] [default to undefined]
**working_days** | **Array&lt;string&gt;** | Рабочие дни склада. | [optional] [default to undefined]

## Example

```typescript
import { WarehouseListResponseWarehouse } from './api';

const instance: WarehouseListResponseWarehouse = {
    has_entrusted_acceptance,
    is_rfbs,
    name,
    warehouse_id,
    can_print_act_in_advance,
    first_mile_type,
    has_postings_limit,
    is_karantin,
    is_kgt,
    is_economy,
    is_timetable_editable,
    min_postings_limit,
    postings_limit,
    min_working_days,
    status,
    working_days,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
