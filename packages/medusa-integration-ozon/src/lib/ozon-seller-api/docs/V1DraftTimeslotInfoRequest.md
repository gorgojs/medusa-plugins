# V1DraftTimeslotInfoRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_from** | **string** | Дата начала нужного периода доступных таймслотов. | [default to undefined]
**date_to** | **string** | Дата окончания нужного периода доступных таймслотов.  Максимальный период — 28 дней с текущей даты.  | [default to undefined]
**draft_id** | **number** | Идентификатор черновика заявки на поставку. Получите методом [/v1/draft/create/info](#operation/SupplyDraftAPI_DraftCreateInfo). | [default to undefined]
**warehouse_ids** | **Array&lt;string&gt;** | Идентификаторы складов размещения. | [default to undefined]

## Example

```typescript
import { V1DraftTimeslotInfoRequest } from './api';

const instance: V1DraftTimeslotInfoRequest = {
    date_from,
    date_to,
    draft_id,
    warehouse_ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
