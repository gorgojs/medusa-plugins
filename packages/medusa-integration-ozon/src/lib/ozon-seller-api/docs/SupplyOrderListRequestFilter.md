# SupplyOrderListRequestFilter

Фильтр.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dropoff_warehouse_ids** | **Array&lt;string&gt;** | Идентификаторы пунктов отгрузки. | [optional] [default to undefined]
**order_number_search** | **string** | Номер заявки на поставку. | [optional] [default to undefined]
**states** | [**Array&lt;SupplyOrderListRequestFilterStateEnum&gt;**](SupplyOrderListRequestFilterStateEnum.md) | Статус поставки:  - &#x60;DATA_FILLING&#x60; — заполнение данных;  - &#x60;READY_TO_SUPPLY&#x60; — готова к отгрузке;  - &#x60;ACCEPTED_AT_SUPPLY_WAREHOUSE&#x60; — принята на точке отгрузки;  - &#x60;IN_TRANSIT&#x60; — в пути;  - &#x60;ACCEPTANCE_AT_STORAGE_WAREHOUSE&#x60; — приёмка на складе;  - &#x60;REPORTS_CONFIRMATION_AWAITING&#x60; — согласование актов;  - &#x60;REPORT_REJECTED&#x60; — спор;  - &#x60;COMPLETED&#x60; — завершена;  - &#x60;REJECTED_AT_SUPPLY_WAREHOUSE&#x60; — отказано в приёмке;  - &#x60;CANCELLED&#x60; — отменена;  - &#x60;OVERDUE&#x60; — просрочена.  | [default to undefined]
**timeslot_from_range** | [**FilterTimeslotFromRange**](FilterTimeslotFromRange.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SupplyOrderListRequestFilter } from './api';

const instance: SupplyOrderListRequestFilter = {
    dropoff_warehouse_ids,
    order_number_search,
    states,
    timeslot_from_range,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
