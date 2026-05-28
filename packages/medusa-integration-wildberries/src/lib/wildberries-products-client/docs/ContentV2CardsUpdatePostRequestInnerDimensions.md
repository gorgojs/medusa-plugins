# ContentV2CardsUpdatePostRequestInnerDimensions

Dimensions and weight of the product `with packaging`. <br> Specify in `centimeters` and `kilograms` for any product. <br> The process of synchronizing new data with service may take up to 30 minutes 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**length** | **number** | Length, cm | [optional] [default to undefined]
**width** | **number** | Width, cm | [optional] [default to undefined]
**height** | **number** | Height, cm | [optional] [default to undefined]
**weightBrutto** | **number** | Weight, kg&lt;br&gt;Number of decimal places &lt;&#x3D;3 | [optional] [default to undefined]

## Example

```typescript
import { ContentV2CardsUpdatePostRequestInnerDimensions } from './api';

const instance: ContentV2CardsUpdatePostRequestInnerDimensions = {
    length,
    width,
    height,
    weightBrutto,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
