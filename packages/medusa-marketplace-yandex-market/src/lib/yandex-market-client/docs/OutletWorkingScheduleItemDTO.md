# OutletWorkingScheduleItemDTO

Расписание работы точки продаж.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startDay** | [**DayOfWeekType**](DayOfWeekType.md) |  | [default to undefined]
**endDay** | [**DayOfWeekType**](DayOfWeekType.md) |  | [default to undefined]
**startTime** | **string** | Точка продаж работает c указанного часа.  Формат: &#x60;ЧЧ:ММ&#x60;.  | [default to undefined]
**endTime** | **string** | Точка продаж работает до указанного часа.  Формат: &#x60;ЧЧ:ММ&#x60;.  | [default to undefined]

## Example

```typescript
import { OutletWorkingScheduleItemDTO } from './api';

const instance: OutletWorkingScheduleItemDTO = {
    startDay,
    endDay,
    startTime,
    endTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
