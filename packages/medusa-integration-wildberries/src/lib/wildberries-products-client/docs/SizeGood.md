# SizeGood

Size information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nmID** | **number** | WB article | [optional] [default to undefined]
**sizeID** | **number** | Size ID. You can get this ID with the [Get products](./work-with-products#tag/Prices-and-Discounts/paths/~1api~1v2~1list~1goods~1filter/get) method, the &#x60;sizeID&#x60; field. In the Content methods this is the &#x60;chrtID&#x60; field | [optional] [default to undefined]
**vendorCode** | **string** | Seller\&#39;s article | [optional] [default to undefined]
**price** | **number** | Price | [optional] [default to undefined]
**currencyIsoCode4217** | **string** | Currency, according to ISO 4217 | [optional] [default to undefined]
**discountedPrice** | **number** | Price with discount | [optional] [default to undefined]
**clubDiscountedPrice** | **number** | Price with discount including WB Club discount | [optional] [default to undefined]
**discount** | **number** | Discount, % | [optional] [default to undefined]
**clubDiscount** | **number** | WB Club discount, % | [optional] [default to undefined]
**techSizeName** | **string** | Size | [optional] [default to undefined]
**editableSizePrice** | **boolean** | Setting of size prices (depends on product category):   - &#x60;true&#x60; — available   - &#x60;false&#x60; — unavailable  | [optional] [default to undefined]
**isBadTurnover** | **boolean** | Flag of non-liquid product:   - &#x60;true&#x60; — non-liquid product with a low inventory index   - The field is absent — it\&#39;s a liquid product  | [optional] [default to undefined]

## Example

```typescript
import { SizeGood } from './api';

const instance: SizeGood = {
    nmID,
    sizeID,
    vendorCode,
    price,
    currencyIsoCode4217,
    discountedPrice,
    clubDiscountedPrice,
    discount,
    clubDiscount,
    techSizeName,
    editableSizePrice,
    isBadTurnover,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
