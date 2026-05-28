# GoodsList

Product sizes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nmID** | **number** | WB article | [optional] [default to undefined]
**vendorCode** | **string** | Seller\&#39;s article | [optional] [default to undefined]
**sizes** | [**Array&lt;GoodsListSizesInner&gt;**](GoodsListSizesInner.md) | Size | [optional] [default to undefined]
**currencyIsoCode4217** | **string** | Currency, according to ISO 4217 | [optional] [default to undefined]
**discount** | **number** | Discount, % | [optional] [default to undefined]
**clubDiscount** | **number** | WB Club discount, % | [optional] [default to undefined]
**editableSizePrice** | **boolean** | Setting of size prices (depends on product category):   - &#x60;true&#x60; — available   - &#x60;false&#x60; — unavailable  | [optional] [default to undefined]
**isBadTurnover** | **boolean** | Flag of non-liquid product:   - &#x60;true&#x60; — non-liquid product with a low inventory index   - The field is absent — it\&#39;s a liquid product  | [optional] [default to undefined]

## Example

```typescript
import { GoodsList } from './api';

const instance: GoodsList = {
    nmID,
    vendorCode,
    sizes,
    currencyIsoCode4217,
    discount,
    clubDiscount,
    editableSizePrice,
    isBadTurnover,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
