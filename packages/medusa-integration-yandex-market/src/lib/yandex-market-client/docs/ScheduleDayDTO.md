# ScheduleDayDTO

День и время работы.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day** | [**DayOfWeekType**](DayOfWeekType.md) |  | [default to undefined]
**startTime** | **string** | Время начала рабочего дня.  Формат: &#x60;ЧЧ:ММ&#x60;.  | [default to undefined]
**endTime** | **string** | Время конца рабочего дня.  Формат: &#x60;ЧЧ:ММ&#x60;.  | [default to undefined]

## Example

```typescript
import { ScheduleDayDTO } from './api';

const instance: ScheduleDayDTO = {
    day,
    startTime,
    endTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
