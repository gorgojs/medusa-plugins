# CarriageCarriageGetResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**act_type** | **string** | Тип акта приёма-передачи. Актуально для продавцов FBS. | [optional] [default to undefined]
**all_blr_traceable** | **boolean** | &#x60;true&#x60;, если отгрузка с прослеживаемыми товарами.  | [optional] [default to undefined]
**is_waybill_enabled** | **boolean** | &#x60;true&#x60;, если доступна печать транспортной накладной.  | [optional] [default to undefined]
**is_econom** | **boolean** | &#x60;true&#x60;, если отгрузка относится к товарам «Суперэконом».  | [optional] [default to undefined]
**arrival_pass_ids** | **Array&lt;string&gt;** | Список идентификаторов пропусков, оформленных на перевозку. | [optional] [default to undefined]
**available_actions** | **Array&lt;string&gt;** | Доступные действия с перевозкой. | [optional] [default to undefined]
**cancel_availability** | [**CarriageCarriageGetResponseCancelAvailability**](CarriageCarriageGetResponseCancelAvailability.md) |  | [optional] [default to undefined]
**carriage_id** | **number** | Идентификатор перевозки. | [optional] [default to undefined]
**company_id** | **number** | Идентификатор продавца. | [optional] [default to undefined]
**containers_count** | **number** | Количество грузовых мест. | [optional] [default to undefined]
**created_at** | **string** | Дата создания перевозки. | [optional] [default to undefined]
**delivery_method_id** | **number** | Идентификатор метода доставки. | [optional] [default to undefined]
**departure_date** | **string** | Дата выполнения перевозки. | [optional] [default to undefined]
**first_mile_type** | **string** | Тип первой мили. | [optional] [default to undefined]
**has_postings_for_next_carriage** | **boolean** | &#x60;true&#x60;, если есть отправления, которые не попали в перевозку, но нужно отгрузить.  | [optional] [default to undefined]
**integration_type** | **string** | Тип перевозки. | [optional] [default to undefined]
**is_container_label_printed** | **boolean** | &#x60;true&#x60;, если вы уже напечатали этикетки на грузовые места.  | [optional] [default to undefined]
**is_partial** | **boolean** | &#x60;true&#x60;, если перевозка частичная.  | [optional] [default to undefined]
**partial_num** | **number** | Порядковый номер частичной перевозки. | [optional] [default to undefined]
**retry_count** | **number** | Количество повторных попыток создания перевозки. | [optional] [default to undefined]
**status** | **string** | Статус перевозки: - &#x60;received&#x60; — идёт приёмка, - &#x60;closed&#x60; — завершена после приёмки, - &#x60;sended&#x60; — отправлена, - &#x60;cancelled&#x60; — отменена.  | [optional] [default to undefined]
**tpl_provider_id** | **number** | Идентификатор провайдера доставки. | [optional] [default to undefined]
**updated_at** | **string** | Дата последнего обновления информации о перевозке. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]

## Example

```typescript
import { CarriageCarriageGetResponse } from './api';

const instance: CarriageCarriageGetResponse = {
    act_type,
    all_blr_traceable,
    is_waybill_enabled,
    is_econom,
    arrival_pass_ids,
    available_actions,
    cancel_availability,
    carriage_id,
    company_id,
    containers_count,
    created_at,
    delivery_method_id,
    departure_date,
    first_mile_type,
    has_postings_for_next_carriage,
    integration_type,
    is_container_label_printed,
    is_partial,
    partial_num,
    retry_count,
    status,
    tpl_provider_id,
    updated_at,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
