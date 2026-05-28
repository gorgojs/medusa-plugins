# WarehouseListV2ResponseWarehouse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_info** | [**WarehouseAddressInfo**](WarehouseAddressInfo.md) |  | [optional] [default to undefined]
**carriage_label_type** | [**WarehouseCarriageLabelTypeEnum**](WarehouseCarriageLabelTypeEnum.md) |  | [optional] [default to undefined]
**courier_comment** | **string** | Комментарий для курьера. | [optional] [default to undefined]
**courier_phones** | **Array&lt;string&gt;** | Номера телефонов для связи с курьером. | [optional] [default to undefined]
**created_at** | **string** | Дата и время создания склада. | [optional] [default to undefined]
**cut_in_time** | **number** | Время на отгрузку в минутах. | [optional] [default to undefined]
**first_mile** | [**WarehouseFirstMile**](WarehouseFirstMile.md) |  | [optional] [default to undefined]
**has_entrusted_acceptance** | **boolean** | Признак подключения доверительной приемки. | [optional] [default to undefined]
**has_postings_limit** | **boolean** | Признак наличия лимита минимального количества заказов. &#x60;true&#x60;, если лимит есть. | [optional] [default to undefined]
**is_auto_assembly** | **boolean** | Признак включённой автосборки. | [optional] [default to undefined]
**is_comfort** | **boolean** | Признак доставки comfort. Время доставки до покупателя от 60 минут. | [optional] [default to undefined]
**is_express** | **boolean** | Признак доставки express. Время доставки до покупателя не больше 60 минут. | [optional] [default to undefined]
**is_kgt** | **boolean** | Признак, что склад принимает крупногабаритные товары. | [optional] [default to undefined]
**is_rfbs** | **boolean** | Признак работы склада по схеме rFBS. | [optional] [default to undefined]
**is_waybill_enabled** | **boolean** | Признак включённой печати транспортной накладной. | [optional] [default to undefined]
**min_postings_limit** | **number** | Минимальное количество заказов, которое можно привезти в одной поставке. | [optional] [default to undefined]
**name** | **string** | Название склада. | [optional] [default to undefined]
**phone** | **string** | Номер телефона склада. | [optional] [default to undefined]
**postings_limit** | **number** | Лимит заказов. &#x60;-1&#x60;, если лимита нет. | [optional] [default to undefined]
**sla_cut_in** | **number** | Минимальное время на сборку заказа в минутах. | [optional] [default to undefined]
**status** | **string** | Статус склада. | [optional] [default to undefined]
**timetable** | [**WarehouseTimetable**](WarehouseTimetable.md) |  | [optional] [default to undefined]
**updated_at** | **string** | Дата и время последнего обновления данных склада. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]
**warehouse_type** | **string** | Тип склада. | [optional] [default to undefined]
**with_item_list** | **boolean** | Признак включённой печати листа подбора. | [optional] [default to undefined]
**working_days** | [**Array&lt;WarehouseWorkingDaysEnum&gt;**](WarehouseWorkingDaysEnum.md) | Рабочие дни склада: - &#x60;UNSPECIFIED&#x60; — значение не определено; - &#x60;MONDAY&#x60; — понедельник; - &#x60;TUESDAY&#x60; — вторник; - &#x60;WEDNESDAY&#x60; — среда; - &#x60;THURSDAY&#x60; — четверг; - &#x60;FRIDAY&#x60; — пятница; - &#x60;SATURDAY&#x60; — суббота; - &#x60;SUNDAY&#x60; — воскресенье.  | [optional] [default to undefined]

## Example

```typescript
import { WarehouseListV2ResponseWarehouse } from './api';

const instance: WarehouseListV2ResponseWarehouse = {
    address_info,
    carriage_label_type,
    courier_comment,
    courier_phones,
    created_at,
    cut_in_time,
    first_mile,
    has_entrusted_acceptance,
    has_postings_limit,
    is_auto_assembly,
    is_comfort,
    is_express,
    is_kgt,
    is_rfbs,
    is_waybill_enabled,
    min_postings_limit,
    name,
    phone,
    postings_limit,
    sla_cut_in,
    status,
    timetable,
    updated_at,
    warehouse_id,
    warehouse_type,
    with_item_list,
    working_days,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
