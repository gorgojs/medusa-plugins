# ContentV2CardsUploadAddPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**imtID** | **number** | &#x60;imtID&#x60; of an individual product card or group of merged product cards to which the created cards are added  | [optional] [default to undefined]
**cardsToAdd** | [**Array&lt;ContentV2CardsUploadAddPostRequestCardsToAddInner&gt;**](ContentV2CardsUploadAddPostRequestCardsToAddInner.md) | Added product cards | [optional] [default to undefined]

## Example

```typescript
import { ContentV2CardsUploadAddPostRequest } from './api';

const instance: ContentV2CardsUploadAddPostRequest = {
    imtID,
    cardsToAdd,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
