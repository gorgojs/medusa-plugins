# ContentV2GetCardsListPost200ResponseCardsInnerDimensions

Dimensions and weight of packed product in cm and kg

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**length** | **number** | Length, cm | [optional] [default to undefined]
**width** | **number** | Width, cm | [optional] [default to undefined]
**height** | **number** | Height, cm | [optional] [default to undefined]
**weightBrutto** | **number** | Weight, kg&lt;br&gt;Number of decimal places &lt;&#x3D;3 | [optional] [default to undefined]
**isValid** | **boolean** | Potential inaccuracy of product dimensions:  - &#x60;true&#x60; — not detected. &#x60;\&quot;isValid\&quot;: true&#x60; does not guarantee that the dimensions are correct. In some cases (for example, when creating a new product category), &#x60;\&quot;isValid\&quot;: true&#x60; will be returned for any values except zero.  - &#x60;false&#x60; — the specified dimensions significantly differ from the average for the category (subject). it is recommended to double-check whether the product dimensions in the packaging are correctly specified in &#x60;centimeters&#x60;. The functionality of the product card, including the calculation of logistics and storage, will not be limited. Logistics and storage will continue to be calculated based on the current dimensions. Also, &#x60;\&quot;isValid\&quot;: false&#x60; is returned when there are missing values or any dimension is zero.  | [optional] [default to undefined]

## Example

```typescript
import { ContentV2GetCardsListPost200ResponseCardsInnerDimensions } from './api';

const instance: ContentV2GetCardsListPost200ResponseCardsInnerDimensions = {
    length,
    width,
    height,
    weightBrutto,
    isValid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
