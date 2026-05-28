# GetCarriageAvailableListResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carriage_id** | **number** | Идентификатор перевозки (также номер задания на формирование документов). | [optional] [default to undefined]
**carriage_postings_count** | **number** | Количество отправлений в перевозке. | [optional] [default to undefined]
**carriage_status** | **string** | Статус перевозки для запрашиваемого метода доставки и даты отгрузки. | [optional] [default to undefined]
**cutoff_at** | **string** | Дата и время, до которых нужно собрать отправление. | [optional] [default to undefined]
**delivery_method_id** | **number** | Идентификатор метода доставки. | [optional] [default to undefined]
**delivery_method_name** | **string** | Название метода доставки. | [optional] [default to undefined]
**errors** | [**Array&lt;ResultError&gt;**](ResultError.md) | Список ошибок. | [optional] [default to undefined]
**first_mile_type** | **string** | Тип первой мили. | [optional] [default to undefined]
**has_entrusted_acceptance** | **boolean** | Признак доверительной приёмки. &#x60;true&#x60;, если доверительная приёмка включена на складе. | [optional] [default to undefined]
**mandatory_postings_count** | **number** | Количество отправлений, которые нужно собрать. | [optional] [default to undefined]
**mandatory_packaged_count** | **number** | Количество собранных отправлений. | [optional] [default to undefined]
**recommended_time_local** | **string** | Рекомендуемое местное время отгрузки на пункт приёма заказов. | [optional] [default to undefined]
**recommended_time_utc_offset_in_minutes** | **number** | Смещение часового пояса рекомендуемого времени отгрузки от UTC-0 в минутах. | [optional] [default to undefined]
**tpl_provider_icon_url** | **string** | Ссылка на иконку службы доставки. | [optional] [default to undefined]
**tpl_provider_name** | **string** | Название службы доставки. | [optional] [default to undefined]
**warehouse_city** | **string** | Город склада. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]
**warehouse_name** | **string** | Название склада. | [optional] [default to undefined]
**warehouse_timezone** | **string** | Часовой пояс, в котором находится склад. | [optional] [default to undefined]

## Example

```typescript
import { GetCarriageAvailableListResponseResult } from './api';

const instance: GetCarriageAvailableListResponseResult = {
    carriage_id,
    carriage_postings_count,
    carriage_status,
    cutoff_at,
    delivery_method_id,
    delivery_method_name,
    errors,
    first_mile_type,
    has_entrusted_acceptance,
    mandatory_postings_count,
    mandatory_packaged_count,
    recommended_time_local,
    recommended_time_utc_offset_in_minutes,
    tpl_provider_icon_url,
    tpl_provider_name,
    warehouse_city,
    warehouse_id,
    warehouse_name,
    warehouse_timezone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
