# LogisticPointScheduleDTO

Расписание работы пункта выдачи.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedule** | [**Array&lt;ScheduleDayDTO&gt;**](ScheduleDayDTO.md) | График работы. | [default to undefined]
**holidays** | **Set&lt;string&gt;** | Расписание праздничных дней. | [optional] [default to undefined]

## Example

```typescript
import { LogisticPointScheduleDTO } from './api';

const instance: LogisticPointScheduleDTO = {
    schedule,
    holidays,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
