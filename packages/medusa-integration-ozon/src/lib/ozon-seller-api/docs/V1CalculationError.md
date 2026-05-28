# V1CalculationError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **string** | Возможные ошибки: - &#x60;vdc_is_not_supported&#x60; — не поддерживается тип поставки вРЦ; - &#x60;drop_off_point_warehouse_is_required&#x60; — не передано значение &#x60;drop_off_point_warehouse_id&#x60;; - &#x60;empty_items_list&#x60; — передан пустой список &#x60;items&#x60;; - &#x60;items_count_more_than_max&#x60; — превышено количество &#x60;sku&#x60;; - &#x60;invalid_shipment_type&#x60; — неверный тип черновика; - &#x60;unknown_cluster_ids&#x60; — кластер с таким &#x60;id&#x60; не существует; - &#x60;items_validation&#x60; — ошибки валидации товарного состава; - &#x60;drop_off_point_does_not_exist&#x60; — точка отгрузки с таким &#x60;id&#x60; не существует; - &#x60;drop_off_point_has_no_timeslots&#x60; — нет доступных таймслотов на точке отгрузки; - &#x60;total_volume_in_litres_invalid&#x60; — объём поставляемых товаров слишком большой для этой точки; - &#x60;xdock_in_delivery_point_disabled_for_seller&#x60; — поставка кросс-докингом через пункт выдачи заказов недоступна для продавца.  | [optional] [default to undefined]
**items_validation** | [**Array&lt;V1ItemsValidation&gt;**](V1ItemsValidation.md) | Ошибки валидации. | [optional] [default to undefined]
**unknown_cluster_ids** | **Array&lt;string&gt;** | Неизвестные идентификаторы кластеров. | [optional] [default to undefined]

## Example

```typescript
import { V1CalculationError } from './api';

const instance: V1CalculationError = {
    error_message,
    items_validation,
    unknown_cluster_ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
