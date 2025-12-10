# ContentV2GetCardsListPost200ResponseCardsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nmID** | **number** | WB article | [optional] [default to undefined]
**imtID** | **number** | Merged product card ID.&lt;br&gt; The same for all WB article of a merged product card.&lt;br&gt; The product card has it, even if one is not merged with any other card  | [optional] [default to undefined]
**nmUUID** | **string** | Internal system ID of the product card | [optional] [default to undefined]
**subjectID** | **number** | Subject ID | [optional] [default to undefined]
**subjectName** | **string** | Subject name | [optional] [default to undefined]
**vendorCode** | **string** | Seller\&#39;s article | [optional] [default to undefined]
**brand** | **string** | Brand | [optional] [default to undefined]
**title** | **string** | Product title | [optional] [default to undefined]
**description** | **string** | Product description | [optional] [default to undefined]
**needKiz** | **boolean** | Is a [labeling code](https://chestnyznak.ru/en) required for the product &lt;br&gt; * &#x60;false&#x60; — labeling code is not required &lt;br&gt; * &#x60;true&#x60; — labeling code is required  | [optional] [default to undefined]
**photos** | [**Array&lt;ContentV2GetCardsListPost200ResponseCardsInnerPhotosInner&gt;**](ContentV2GetCardsListPost200ResponseCardsInnerPhotosInner.md) | Photo array | [optional] [default to undefined]
**video** | **string** | Video URL | [optional] [default to undefined]
**wholesale** | [**ContentV2GetCardsListPost200ResponseCardsInnerWholesale**](ContentV2GetCardsListPost200ResponseCardsInnerWholesale.md) |  | [optional] [default to undefined]
**dimensions** | [**ContentV2GetCardsListPost200ResponseCardsInnerDimensions**](ContentV2GetCardsListPost200ResponseCardsInnerDimensions.md) |  | [optional] [default to undefined]
**characteristics** | [**Array&lt;ContentV2GetCardsListPost200ResponseCardsInnerCharacteristicsInner&gt;**](ContentV2GetCardsListPost200ResponseCardsInnerCharacteristicsInner.md) | Characteristics | [optional] [default to undefined]
**sizes** | [**Array&lt;ContentV2GetCardsListPost200ResponseCardsInnerSizesInner&gt;**](ContentV2GetCardsListPost200ResponseCardsInnerSizesInner.md) | Product sizes | [optional] [default to undefined]
**tags** | [**Array&lt;ContentV2GetCardsListPost200ResponseCardsInnerTagsInner&gt;**](ContentV2GetCardsListPost200ResponseCardsInnerTagsInner.md) | Tags | [optional] [default to undefined]
**createdAt** | **string** | Creation date and time | [optional] [default to undefined]
**updatedAt** | **string** | Update date and time | [optional] [default to undefined]

## Example

```typescript
import { ContentV2GetCardsListPost200ResponseCardsInner } from './api';

const instance: ContentV2GetCardsListPost200ResponseCardsInner = {
    nmID,
    imtID,
    nmUUID,
    subjectID,
    subjectName,
    vendorCode,
    brand,
    title,
    description,
    needKiz,
    photos,
    video,
    wholesale,
    dimensions,
    characteristics,
    sizes,
    tags,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
