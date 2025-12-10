# ContentV2TagNomenclatureLinkPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nmID** | **number** | WB article | [optional] [default to undefined]
**tagsIDs** | **Array&lt;number&gt;** | An array of numeric tag IDs.&lt;br&gt; When removing a tag from a product card, the tag itself is not removed.&lt;br&gt; To add tags to existing ones in the product card, you need to specify in the request the new tags and the tags that are already exist in the product card.  | [optional] [default to undefined]

## Example

```typescript
import { ContentV2TagNomenclatureLinkPostRequest } from './api';

const instance: ContentV2TagNomenclatureLinkPostRequest = {
    nmID,
    tagsIDs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
