# CarriageDeliveryListV2ResponseDeliveryMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carriage_postings_count** | **number** | Количество отправлений во всех отгрузках. | [optional] [default to undefined]
**carriages** | [**Array&lt;DeliveryMethodCarriage&gt;**](DeliveryMethodCarriage.md) | Список отгрузок. | [optional] [default to undefined]
**cut_in** | **string** | Время начала сборки и часовой пояс времени склада. | [optional] [default to undefined]
**cutoff_at** | **string** | Дата и время, до которых нужно собрать отправление. | [optional] [default to undefined]
**delivery_method_id** | **number** | Идентификатор метода доставки. | [optional] [default to undefined]
**delivery_method_name** | **string** | Название метода доставки. | [optional] [default to undefined]
**delivery_method_status** | **string** | Статус метода доставки. | [optional] [default to undefined]
**departure_date** | **string** | Дата отгрузки. | [optional] [default to undefined]
**dropoff_address** | **string** | Адрес точки отгрузки. | [optional] [default to undefined]
**dropoff_change_availability** | **string** | Статус возможности смены точки отгрузки. | [optional] [default to undefined]
**dropoff_point_id** | **number** | Идентификатор точки отгрузки. | [optional] [default to undefined]
**dropoff_point_type** | **string** | Способ отгрузки. | [optional] [default to undefined]
**errors** | [**Array&lt;DeliveryMethodError&gt;**](DeliveryMethodError.md) | Список ошибок, которые возникли при обработке запроса. | [optional] [default to undefined]
**first_mile_changing** | **boolean** | &#x60;true&#x60;, если точка отгрузки изменилась.  | [optional] [default to undefined]
**first_mile_type** | **string** | Тип первой мили. | [optional] [default to undefined]
**has_entrusted_acceptance** | **boolean** | &#x60;true&#x60;, если на складе включена доверительная приёмка.  | [optional] [default to undefined]
**integration_type** | **string** | Тип интеграции со службой доставки. | [optional] [default to undefined]
**is_optional_carriage** | **boolean** | &#x60;true&#x60;, если отгрузка не обязательна.  | [optional] [default to undefined]
**is_presort** | **boolean** | &#x60;true&#x60;, если отгрузка с предсортировкой.  | [optional] [default to undefined]
**is_rfbs** | **boolean** | &#x60;true&#x60;, если склад работает по схеме rFBS.  | [optional] [default to undefined]
**mandatory_packaged_count** | **number** | Количество собранных обязательных отправлений. | [optional] [default to undefined]
**mandatory_postings_count** | **number** | Количество отправлений, которые нужно собрать. | [optional] [default to undefined]
**optional_packaged_count** | **number** | Количество собранных необязательных отправлений. | [optional] [default to undefined]
**recommended_time_local** | **string** | Рекомендуемое местное время отгрузки в пункт приёма заказов. | [optional] [default to undefined]
**recommended_time_utc_offset_in_minutes** | **number** | Смещение часового пояса рекомендуемого времени отгрузки от UTC-0 в минутах. | [optional] [default to undefined]
**timeslot_from** | **string** | Начало таймслота в точке отгрузки. | [optional] [default to undefined]
**timeslot_to** | **string** | Окончание таймслота в точке отгрузки. | [optional] [default to undefined]
**tpl_provider_icon_url** | **string** | Ссылка на иконку службы доставки. | [optional] [default to undefined]
**tpl_provider_name** | **string** | Название службы доставки. | [optional] [default to undefined]
**warehouse_city** | **string** | Город склада. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]
**warehouse_name** | **string** | Название склада. | [optional] [default to undefined]

## Example

```typescript
import { CarriageDeliveryListV2ResponseDeliveryMethod } from './api';

const instance: CarriageDeliveryListV2ResponseDeliveryMethod = {
    carriage_postings_count,
    carriages,
    cut_in,
    cutoff_at,
    delivery_method_id,
    delivery_method_name,
    delivery_method_status,
    departure_date,
    dropoff_address,
    dropoff_change_availability,
    dropoff_point_id,
    dropoff_point_type,
    errors,
    first_mile_changing,
    first_mile_type,
    has_entrusted_acceptance,
    integration_type,
    is_optional_carriage,
    is_presort,
    is_rfbs,
    mandatory_packaged_count,
    mandatory_postings_count,
    optional_packaged_count,
    recommended_time_local,
    recommended_time_utc_offset_in_minutes,
    timeslot_from,
    timeslot_to,
    tpl_provider_icon_url,
    tpl_provider_name,
    warehouse_city,
    warehouse_id,
    warehouse_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
