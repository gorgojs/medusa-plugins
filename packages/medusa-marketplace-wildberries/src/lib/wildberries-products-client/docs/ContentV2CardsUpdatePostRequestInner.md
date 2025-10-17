# ContentV2CardsUpdatePostRequestInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nmID** | **number** | WB article | [default to undefined]
**vendorCode** | **string** | Seller\&#39;s article | [default to undefined]
**brand** | **string** | Brand | [optional] [default to undefined]
**title** | **string** | Product title | [optional] [default to undefined]
**description** | **string** | Product description&lt;br&gt; The maximum number of characters depends on the product category&lt;br&gt; Standard - 2000, minimum - 1000, maximum - 5000&lt;br&gt; More details about description rules in **Product card filling rules** in [Instructions](https://seller.wildberries.ru/help-center/article/A-113#описание) category of sellers portal  | [optional] [default to undefined]
**dimensions** | [**ContentV2CardsUpdatePostRequestInnerDimensions**](ContentV2CardsUpdatePostRequestInnerDimensions.md) |  | [optional] [default to undefined]
**characteristics** | [**Array&lt;ContentV2CardsUpdatePostRequestInnerCharacteristicsInner&gt;**](ContentV2CardsUpdatePostRequestInnerCharacteristicsInner.md) | Product characteristics &lt;br&gt; Use the [Subject characteristics](./work-with-products#tag/Categories-Subjects-and-Characteristics/paths/~1content~1v2~1object~1charcs~1%7BsubjectId%7D/get) method to get characteristics of the product  | [optional] [default to undefined]
**sizes** | [**Array&lt;ContentV2CardsUpdatePostRequestInnerSizesInner&gt;**](ContentV2CardsUpdatePostRequestInnerSizesInner.md) | Product sizes&lt;br&gt; If product has no sizes, send only barcodes  | [default to undefined]

## Example

```typescript
import { ContentV2CardsUpdatePostRequestInner } from './api';

const instance: ContentV2CardsUpdatePostRequestInner = {
    nmID,
    vendorCode,
    brand,
    title,
    description,
    dimensions,
    characteristics,
    sizes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
