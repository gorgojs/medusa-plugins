# OutletWorkingScheduleDTO

Список режимов работы точки продаж. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workInHoliday** | **boolean** | Признак, работает ли точка продаж в дни государственных праздников.  Возможные значения:  * &#x60;false&#x60; — точка продаж не работает в дни государственных праздников. * &#x60;true&#x60; — точка продаж работает в дни государственных праздников.  | [optional] [default to undefined]
**scheduleItems** | [**Array&lt;OutletWorkingScheduleItemDTO&gt;**](OutletWorkingScheduleItemDTO.md) | Список расписаний работы точки продаж.  | [default to undefined]

## Example

```typescript
import { OutletWorkingScheduleDTO } from './api';

const instance: OutletWorkingScheduleDTO = {
    workInHoliday,
    scheduleItems,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
