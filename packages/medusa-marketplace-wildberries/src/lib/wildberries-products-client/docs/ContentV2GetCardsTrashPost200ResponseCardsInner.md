# ContentV2GetCardsTrashPost200ResponseCardsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nmID** | **number** | WB article | [optional] [default to undefined]
**vendorCode** | **string** | Seller\&#39;s article | [optional] [default to undefined]
**subjectID** | **number** | Subject ID | [optional] [default to undefined]
**subjectName** | **string** | Subject name | [optional] [default to undefined]
**photos** | [**Array&lt;ContentV2GetCardsListPost200ResponseCardsInnerPhotosInner&gt;**](ContentV2GetCardsListPost200ResponseCardsInnerPhotosInner.md) | Photo array | [optional] [default to undefined]
**video** | **string** | Video URL | [optional] [default to undefined]
**wholesale** | [**ContentV2GetCardsListPost200ResponseCardsInnerWholesale**](ContentV2GetCardsListPost200ResponseCardsInnerWholesale.md) |  | [optional] [default to undefined]
**sizes** | [**Array&lt;ContentV2GetCardsTrashPost200ResponseCardsInnerSizesInner&gt;**](ContentV2GetCardsTrashPost200ResponseCardsInnerSizesInner.md) | Product sizes | [optional] [default to undefined]
**dimensions** | [**ContentV2GetCardsListPost200ResponseCardsInnerDimensions**](ContentV2GetCardsListPost200ResponseCardsInnerDimensions.md) |  | [optional] [default to undefined]
**characteristics** | [**Array&lt;ContentV2GetCardsListPost200ResponseCardsInnerCharacteristicsInner&gt;**](ContentV2GetCardsListPost200ResponseCardsInnerCharacteristicsInner.md) | Characteristics | [optional] [default to undefined]
**createdAt** | **string** | Characteristics | [optional] [default to undefined]
**trashedAt** | **string** | Date and time the card was transferred to trash | [optional] [default to undefined]

## Example

```typescript
import { ContentV2GetCardsTrashPost200ResponseCardsInner } from './api';

const instance: ContentV2GetCardsTrashPost200ResponseCardsInner = {
    nmID,
    vendorCode,
    subjectID,
    subjectName,
    photos,
    video,
    wholesale,
    sizes,
    dimensions,
    characteristics,
    createdAt,
    trashedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
