# ContentV2CardsUploadPostRequestInnerVariantsInnerSizesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**techSize** | **string** | Product size (for example, L or 45) | [optional] [default to undefined]
**wbSize** | **string** | Russian size | [optional] [default to undefined]
**price** | **number** | Price, ₽ | [optional] [default to undefined]
**skus** | **Array&lt;string&gt;** | Array of SKUs for the size. &lt;br&gt; If not specified, SKU is generated automatically. &lt;br&gt; Allows linking multiple SKUs to one size, for example, for different batches of the product  | [optional] [default to undefined]

## Example

```typescript
import { ContentV2CardsUploadPostRequestInnerVariantsInnerSizesInner } from './api';

const instance: ContentV2CardsUploadPostRequestInnerVariantsInnerSizesInner = {
    techSize,
    wbSize,
    price,
    skus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
