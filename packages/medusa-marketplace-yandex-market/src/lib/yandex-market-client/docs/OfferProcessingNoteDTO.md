# OfferProcessingNoteDTO

Причины, по которым товар не прошел модерацию.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**OfferProcessingNoteType**](OfferProcessingNoteType.md) |  | [optional] [default to undefined]
**payload** | **string** | Дополнительная информация о причине отклонения товара.  | [optional] [default to undefined]

## Example

```typescript
import { OfferProcessingNoteDTO } from './api';

const instance: OfferProcessingNoteDTO = {
    type,
    payload,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
