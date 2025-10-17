# ContentV2CardsUpdatePostRequestInnerSizesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chrtID** | **number** | WB article of this size&lt;br&gt; Required for existing sizes&lt;br&gt; If you add new size, do not send this ID  | [optional] [default to undefined]
**techSize** | **string** | Size (for example, XL, S, 45) | [optional] [default to undefined]
**wbSize** | **string** | Russian size | [optional] [default to undefined]
**skus** | **Array&lt;string&gt;** | Barcodes | [optional] [default to undefined]

## Example

```typescript
import { ContentV2CardsUpdatePostRequestInnerSizesInner } from './api';

const instance: ContentV2CardsUpdatePostRequestInnerSizesInner = {
    chrtID,
    techSize,
    wbSize,
    skus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
