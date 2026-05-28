# GoodBufferHistory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nmID** | **number** | WB article | [optional] [default to undefined]
**vendorCode** | **string** | Seller\&#39;s article | [optional] [default to undefined]
**sizeID** | **number** | Size ID. In the Content methods this is the &#x60;chrtID&#x60; field | [optional] [default to undefined]
**techSizeName** | **string** | Size | [optional] [default to undefined]
**price** | **number** | Price | [optional] [default to undefined]
**currencyIsoCode4217** | **string** | Currency, according to ISO 4217 | [optional] [default to undefined]
**discount** | **number** | Discount, % | [optional] [default to undefined]
**clubDiscount** | **number** | WB Club discount, % | [optional] [default to undefined]
**status** | **number** | Product status: &#x60;1&#x60; — processing  | [optional] [default to undefined]
**errorText** | **string** | Error text | [optional] [default to undefined]

## Example

```typescript
import { GoodBufferHistory } from './api';

const instance: GoodBufferHistory = {
    nmID,
    vendorCode,
    sizeID,
    techSizeName,
    price,
    currencyIsoCode4217,
    discount,
    clubDiscount,
    status,
    errorText,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
