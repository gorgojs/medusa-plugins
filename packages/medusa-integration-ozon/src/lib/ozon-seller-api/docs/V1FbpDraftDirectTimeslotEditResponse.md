# V1FbpDraftDirectTimeslotEditResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_reasons** | [**Array&lt;V1FbpDraftDirectTimeslotEditResponseReserveFailureType&gt;**](V1FbpDraftDirectTimeslotEditResponseReserveFailureType.md) | Причина ошибки:   - &#x60;RESERVE_FAILURE_TYPE_UNSPECIFIED&#x60; — не определена;   - &#x60;REQUEST_VALIDATION&#x60; — в запросе указана дата резервирования в прошлом;   - &#x60;INVALID_RESERVE&#x60; — исходный резерв не найден, неактивен или уже содержит заявки, а его пытаются перезаписать;   - &#x60;LOGISTICS_REASON&#x60; — ошибка на стороне логистики;   - &#x60;SCHEDULE_REASON&#x60; — ошибка на стороне расписаний;   - &#x60;NO_CAPACITY&#x60; — нет доступных слотов для резервирования.  | [optional] [default to undefined]
**row_version** | **number** | Идентификатор актуальной версии черновика. | [optional] [default to undefined]

## Example

```typescript
import { V1FbpDraftDirectTimeslotEditResponse } from './api';

const instance: V1FbpDraftDirectTimeslotEditResponse = {
    error_reasons,
    row_version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
