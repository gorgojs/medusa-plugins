# OfferProcessingStateDTO

Информация о статусе публикации товара на Маркете.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**OfferProcessingStatusType**](OfferProcessingStatusType.md) |  | [optional] [default to undefined]
**notes** | [**Array&lt;OfferProcessingNoteDTO&gt;**](OfferProcessingNoteDTO.md) | Причины, по которым товар не прошел модерацию. | [optional] [default to undefined]

## Example

```typescript
import { OfferProcessingStateDTO } from './api';

const instance: OfferProcessingStateDTO = {
    status,
    notes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
