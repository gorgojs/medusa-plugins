# QuarantineGoods


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nmID** | **number** | WB article | [optional] [default to undefined]
**sizeID** | **number** | Not used | [optional] [default to undefined]
**techSizeName** | **string** | Not used | [optional] [default to undefined]
**currencyIsoCode4217** | **string** | Currency, according to ISO 4217 | [optional] [default to undefined]
**newPrice** | **number** | New seller\&#39;s price before discount | [optional] [default to undefined]
**oldPrice** | **number** | Current seller\&#39;s price before discount | [optional] [default to undefined]
**newDiscount** | **number** | New seller\&#39;s discount, % | [optional] [default to undefined]
**oldDiscount** | **number** | Current seller\&#39;s discount, % | [optional] [default to undefined]
**priceDiff** | **number** | Difference: &#x60;newPrice&#x60; * (1 - &#x60;newDiscount&#x60; / 100) - &#x60;oldPrice&#x60; * (1 - &#x60;oldDiscount&#x60; / 100) | [optional] [default to undefined]

## Example

```typescript
import { QuarantineGoods } from './api';

const instance: QuarantineGoods = {
    nmID,
    sizeID,
    techSizeName,
    currencyIsoCode4217,
    newPrice,
    oldPrice,
    newDiscount,
    oldDiscount,
    priceDiff,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
