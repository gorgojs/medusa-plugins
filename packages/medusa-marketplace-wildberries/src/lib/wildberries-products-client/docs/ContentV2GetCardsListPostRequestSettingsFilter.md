# ContentV2GetCardsListPostRequestSettingsFilter

Filters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**withPhoto** | **number** | Photo:   * &#x60;0&#x60; — only cards without photos   * &#x60;1&#x60; — only cards with photos   * &#x60;-1&#x60; — all cards  | [optional] [default to 0]
**textSearch** | **string** | Seller\&#39;s article, Wildberries article or barcode search | [optional] [default to undefined]
**tagIDs** | **Array&lt;number&gt;** | Tags ID search | [optional] [default to undefined]
**allowedCategoriesOnly** | **boolean** | Category: true — permitted, false — forbidden  | [optional] [default to undefined]
**objectIDs** | **Array&lt;number&gt;** | Subject ID search | [optional] [default to undefined]
**brands** | **Array&lt;string&gt;** | Brand search | [optional] [default to undefined]
**imtID** | **number** | Merged product card ID search | [optional] [default to undefined]

## Example

```typescript
import { ContentV2GetCardsListPostRequestSettingsFilter } from './api';

const instance: ContentV2GetCardsListPostRequestSettingsFilter = {
    withPhoto,
    textSearch,
    tagIDs,
    allowedCategoriesOnly,
    objectIDs,
    brands,
    imtID,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
