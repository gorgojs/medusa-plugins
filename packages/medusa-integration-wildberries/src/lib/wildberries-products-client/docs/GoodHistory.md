# GoodHistory


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
**status** | **number** | Product status:   * &#x60;2&#x60; — no errors, price and/or discount were updated   * &#x60;3&#x60; — product has errors, data were not updated  | [optional] [default to undefined]
**errorText** | **string** | Error text. For example:   - &#x60;You can\&#39;t change the item price. Item was added to the Sale due to high inventory&#x60; — the error means that the product is put on sale based on its [inventory index](https://seller.wildberries.ru/instructions/ru/ru/material/A-1159).   - &#x60;The new price is several times lower than the current price. Item has been moved to Price Quarantine&#x60; — the error means that new price with discount is at least 3 times less than the previous one. You can edit price or discount using API or remove the price out of quarantine in the [personal account](https://seller.wildberries.ru/discount-and-prices/quarantine). &lt;/div&gt;  | [optional] [default to undefined]

## Example

```typescript
import { GoodHistory } from './api';

const instance: GoodHistory = {
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
