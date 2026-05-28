# V1ArchiveDeclineReason

Причина отклонения поставки.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Код причины отклонения поставки:  - &#x60;DECLINE_REASON_CODE_UNSPECIFIED&#x60; — не определён;  - &#x60;CANNOT_CREATE_SUPPLY_ON_TPF&#x60; — не удалось создать поставку на стороне 3PF;  - &#x60;DROP_OFF_POINT_CLOSED&#x60; — дроп-офф точка закрыта;  - &#x60;CODE_SUPPLY_LOST&#x60; — поставка потеряна;  - &#x60;COURIER_PICK_UP_REJECTED_BY_SELLER&#x60; — продавец отказался от забора поставки курьером;  - &#x60;BONDED_DOCUMENTS_REJECTED_BY_WAREHOUSE&#x60; — проблемы с бондовыми документами.  | [optional] [default to CodeEnum_DeclineReasonCodeUnspecified]
**message** | **string** | Описание причины отклонения. | [optional] [default to undefined]

## Example

```typescript
import { V1ArchiveDeclineReason } from './api';

const instance: V1ArchiveDeclineReason = {
    code,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
