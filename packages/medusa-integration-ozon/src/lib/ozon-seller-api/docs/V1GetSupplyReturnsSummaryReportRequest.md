# V1GetSupplyReturnsSummaryReportRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_from** | **string** | Дата начала отчётного периода в формате &#x60;YYYY-MM-DD&#x60;. | [default to undefined]
**date_to** | **string** | Дата окончания отчётного периода в формате &#x60;YYYY-MM-DD&#x60;. | [default to undefined]
**last_id** | **string** | Идентификатор последнего значения на странице. Чтобы получить следующие значения, укажите &#x60;last_id&#x60; из ответа предыдущего запроса. | [optional] [default to undefined]
**limit** | **number** | Количество элементов в ответе. | [default to undefined]

## Example

```typescript
import { V1GetSupplyReturnsSummaryReportRequest } from './api';

const instance: V1GetSupplyReturnsSummaryReportRequest = {
    date_from,
    date_to,
    last_id,
    limit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
