# V1FbpOrderDropOffTimetableResponseCalendarCalendarItem

Информация о дне.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**break_hours** | [**V1FbpOrderDropOffTimetableResponseCalendarCalendarItemTimeslotWithTimeBreak**](V1FbpOrderDropOffTimetableResponseCalendarCalendarItemTimeslotWithTimeBreak.md) |  | [optional] [default to undefined]
**is_holiday** | **boolean** | &#x60;true&#x60;, если выходной день.  | [optional] [default to undefined]
**opening_hours** | [**V1FbpOrderDropOffTimetableResponseCalendarCalendarItemTimeslotWithTime**](V1FbpOrderDropOffTimetableResponseCalendarCalendarItemTimeslotWithTime.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V1FbpOrderDropOffTimetableResponseCalendarCalendarItem } from './api';

const instance: V1FbpOrderDropOffTimetableResponseCalendarCalendarItem = {
    break_hours,
    is_holiday,
    opening_hours,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
