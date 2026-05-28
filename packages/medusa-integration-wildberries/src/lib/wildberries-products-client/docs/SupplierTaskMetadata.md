# SupplierTaskMetadata

Response data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uploadID** | **number** | Upload ID | [optional] [default to undefined]
**status** | **number** | Upload status:   * &#x60;3&#x60; — processed, no errors in products, prices and discounts were updated   * &#x60;4&#x60; — canceled   * &#x60;5&#x60; — processed, but some product have errors. For other products prices and discounts were updated. You can get errors with the [Processed upload details](./work-with-products#tag/Prices-and-Discounts/paths/~1api~1v2~1history~1goods~1task/get) method   * &#x60;6&#x60; — processed, but all product have errors. You can get them with the [Processed upload details](./work-with-products#tag/Prices-and-Discounts/paths/~1api~1v2~1history~1goods~1task/get) method  | [optional] [default to undefined]
**uploadDate** | **string** | Date and time of the upload creation | [optional] [default to undefined]
**activationDate** | **string** | Date and time when the upload processing was started | [optional] [default to undefined]
**overAllGoodsNumber** | **number** | Total number of products | [optional] [default to undefined]
**successGoodsNumber** | **number** | Number products without errors | [optional] [default to undefined]

## Example

```typescript
import { SupplierTaskMetadata } from './api';

const instance: SupplierTaskMetadata = {
    uploadID,
    status,
    uploadDate,
    activationDate,
    overAllGoodsNumber,
    successGoodsNumber,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
