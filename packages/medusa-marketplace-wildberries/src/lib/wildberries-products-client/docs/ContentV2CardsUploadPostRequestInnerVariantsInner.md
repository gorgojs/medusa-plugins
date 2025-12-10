# ContentV2CardsUploadPostRequestInnerVariantsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand** | **string** | Brand | [optional] [default to undefined]
**title** | **string** | Product title | [optional] [default to undefined]
**description** | **string** | Product description.&lt;br&gt; The maximum number of characters depends on the product category&lt;br&gt; Standard - 2000, minimum - 1000, maximum - 5000&lt;br&gt; More details about description rules in **Product card filling rules** in [Instructions](https://seller.wildberries.ru/help-center/article/A-113#описание) category of sellers portal  | [optional] [default to undefined]
**vendorCode** | **string** | Seller\&#39;s article | [default to undefined]
**wholesale** | [**ContentV2GetCardsListPost200ResponseCardsInnerWholesale**](ContentV2GetCardsListPost200ResponseCardsInnerWholesale.md) |  | [optional] [default to undefined]
**dimensions** | [**ContentV2CardsUploadPostRequestInnerVariantsInnerDimensions**](ContentV2CardsUploadPostRequestInnerVariantsInnerDimensions.md) |  | [optional] [default to undefined]
**sizes** | [**Array&lt;ContentV2CardsUploadPostRequestInnerVariantsInnerSizesInner&gt;**](ContentV2CardsUploadPostRequestInnerVariantsInnerSizesInner.md) | Product sizes.&lt;br&gt; If the product has sizes but you send empty parameter, it is generated automatically with values: &#x60;techSize&#x60; &#x3D; \&quot;A\&quot;, &#x60;wbSize&#x60; &#x3D; \&quot;1\&quot; and some random barcode  | [optional] [default to undefined]
**characteristics** | [**Array&lt;ContentV2CardsUpdatePostRequestInnerCharacteristicsInner&gt;**](ContentV2CardsUpdatePostRequestInnerCharacteristicsInner.md) | Product characteristics. &lt;br&gt; Use the [Subject characteristics](./work-with-products#tag/Categories-Subjects-and-Characteristics/paths/~1content~1v2~1object~1charcs~1%7BsubjectId%7D/get) method to get characteristics of the product  | [optional] [default to undefined]

## Example

```typescript
import { ContentV2CardsUploadPostRequestInnerVariantsInner } from './api';

const instance: ContentV2CardsUploadPostRequestInnerVariantsInner = {
    brand,
    title,
    description,
    vendorCode,
    wholesale,
    dimensions,
    sizes,
    characteristics,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
