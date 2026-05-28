# V1GetFBSRatingIndexInfoV1Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **string** | Код валюты стоимости обработки ошибок. | [optional] [default to undefined]
**defects** | [**Array&lt;GetFBSRatingIndexInfoV1ResponseIndexDynamics&gt;**](GetFBSRatingIndexInfoV1ResponseIndexDynamics.md) | Индекс ошибок по дням. | [optional] [default to undefined]
**index** | **number** | Значение индекса ошибок за период. | [optional] [default to undefined]
**period_from** | **string** | Дата начала расчётного периода в формате &#x60;YYYY-MM-DD&#x60;. | [optional] [default to undefined]
**period_to** | **string** | Дата окончания расчётного периода в формате &#x60;YYYY-MM-DD&#x60;. | [optional] [default to undefined]
**processing_costs_sum** | **number** | Расходы на обработку ошибок за период. | [optional] [default to undefined]

## Example

```typescript
import { V1GetFBSRatingIndexInfoV1Response } from './api';

const instance: V1GetFBSRatingIndexInfoV1Response = {
    currency_code,
    defects,
    index,
    period_from,
    period_to,
    processing_costs_sum,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
