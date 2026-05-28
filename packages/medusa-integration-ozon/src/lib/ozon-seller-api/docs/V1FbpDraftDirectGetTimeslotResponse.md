# V1FbpDraftDirectGetTimeslotResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reasons** | [**Array&lt;V1FbpDraftDirectGetTimeslotResponseEmptyTimeslotsReason&gt;**](V1FbpDraftDirectGetTimeslotResponseEmptyTimeslotsReason.md) | Причины отсутствия таймслотов: - &#x60;EMPTY_TIMESLOTS_REASON_UNSPECIFIED&#x60; — не определено; - &#x60;LOGISTICS_UNKNOWN&#x60; — неизвестная ошибка на стороне логистики; - &#x60;NO_ROUTE&#x60; — нет маршрута; - &#x60;NO_ROUTE_SCHEDULES&#x60; — нет расписания на маршруте; - &#x60;NO_LOGISTICS_CAPACITY&#x60; — недостаточно доступных слотов на маршруте; - &#x60;SCHEDULE_UNKNOWN&#x60; — неизвестная ошибка на стороне расписаний; - &#x60;NOT_ENOUGH_CAPACITY&#x60; — недостаточно доступных слотов на складе; - &#x60;NOT_ENOUGH_TRUCKS&#x60; — недостаточно машиномест; - &#x60;LIMITS_NOT_AVAILABLE&#x60; — не настроены лимиты на складе; - &#x60;CROSS_DOCK_RESERVE_MISSING&#x60; — не забронирован кросс-докинговый резерв на складе; - &#x60;SCHEDULE_RESERVE_MISSING&#x60; — отсутствует необходимый резерв по расписанию.  | [optional] [default to undefined]
**timeslots** | [**Array&lt;V1FbpDraftDirectGetTimeslotResponseTimeslot&gt;**](V1FbpDraftDirectGetTimeslotResponseTimeslot.md) | Список доступных таймслотов. | [optional] [default to undefined]
**warehouse_timezone_name** | **string** | Часовой пояс склада продавца. | [optional] [default to undefined]

## Example

```typescript
import { V1FbpDraftDirectGetTimeslotResponse } from './api';

const instance: V1FbpDraftDirectGetTimeslotResponse = {
    reasons,
    timeslots,
    warehouse_timezone_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
