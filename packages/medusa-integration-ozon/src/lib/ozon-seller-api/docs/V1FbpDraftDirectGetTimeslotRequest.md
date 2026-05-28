# V1FbpDraftDirectGetTimeslotRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_id** | **string** | Идентификатор провалидированного списка товаров. | [optional] [default to undefined]
**interval_end** | **string** | Дата окончания нужного периода доступных таймслотов. | [optional] [default to undefined]
**interval_start** | **string** | Дата начала нужного периода доступных таймслотов. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада продавца. | [optional] [default to undefined]

## Example

```typescript
import { V1FbpDraftDirectGetTimeslotRequest } from './api';

const instance: V1FbpDraftDirectGetTimeslotRequest = {
    bundle_id,
    interval_end,
    interval_start,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
