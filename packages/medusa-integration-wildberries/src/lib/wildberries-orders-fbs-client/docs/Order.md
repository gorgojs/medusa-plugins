# Order


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**OrderAddress**](OrderAddress.md) |  | [optional] [default to undefined]
**scanPrice** | **number** | Acceptance price in kopecks. Displayed after the actual acceptance of the order | [optional] [default to undefined]
**deliveryType** | **string** | Delivery type: - &#x60;fbs&#x60; — Fulfillment By Wildberries (FBS)  | [optional] [default to undefined]
**supplyId** | **string** | Supply ID. Returns if the assembly order is assigned to a supply | [optional] [default to undefined]
**orderUid** | **string** | Transaction ID for assembly orders grouping. Orders in the same buyer\&#39;s cart will have the same &#x60;orderUid&#x60;. | [optional] [default to undefined]
**article** | **string** | Seller\&#39;s article | [optional] [default to undefined]
**colorCode** | **string** | Color code (for tinted products only) | [optional] [default to undefined]
**rid** | **string** | Unique order ID. &lt;br&gt; Note: &#x60;rid&#x60; corresponds to &#x60;srid&#x60; in the responses of the methods:   - [Buyers return applications](./user-communication#tag/Buyers-Returns/paths/~1api~1v1~1claims/get)   - [Orders](./reports#tag/Main-Reports/paths/~1api~1v1~1supplier~1orders/get)   - [Sales](./reports#tag/Main-Reports/paths/~1api~1v1~1supplier~1sales/get)   - [Goods Return Report](./reports#tag/Goods-Return-Report)   - [Realization sales report](./financial-reports-and-accounting#tag/Financial-Reports/paths/~1api~1v5~1supplier~1reportDetailByPeriod/get)  | [optional] [default to undefined]
**createdAt** | **string** | Assembly order creation date (RFC3339) | [optional] [default to undefined]
**offices** | **Array&lt;string&gt;** | List of offices where you should deliver the assembly order | [optional] [default to undefined]
**skus** | **Array&lt;string&gt;** | List of SKUs | [optional] [default to undefined]
**id** | **number** | Assembly order ID | [optional] [default to undefined]
**warehouseId** | **number** | Seller\&#39;s warehouse ID where the assembly order was received | [optional] [default to undefined]
**officeId** | **number** | ID of the WB warehouse associated with the seller\&#39;s warehouse | [optional] [default to undefined]
**nmId** | **number** | WB article | [optional] [default to undefined]
**chrtId** | **number** | Product size ID in WB systems | [optional] [default to undefined]
**price** | **number** | The price in the currency of sale, including all discounts except the amount from the WB Wallet, multiplied by 100. The currency code of the sale is in the &#x60;currencyCode&#x60; field  | [optional] [default to undefined]
**convertedPrice** | **number** | The price in the currency of the seller\&#39;s country including all discounts, except WB Wallet discount, multiplied by 100. Provided for informational purposes only. | [optional] [default to undefined]
**currencyCode** | **number** | Sale currency code | [optional] [default to undefined]
**convertedCurrencyCode** | **number** | Currency code of the supplier country | [optional] [default to undefined]
**cargoType** | **number** | Type of cargo:   - &#x60;1&#x60; — small-sized goods   - &#x60;2&#x60; — over dimensional cargo (ODC)   - &#x60;3&#x60; — dimensional cargo+ (CD+)  | [optional] [default to undefined]
**crossBorderType** | **number** | Assembly order type:   - &#x60;0&#x60; — non-cross-border   - &#x60;1&#x60; — cross-border  | [optional] [default to undefined]
**comment** | **string** | Buyer\&#39;s comment | [optional] [default to undefined]
**isZeroOrder** | **boolean** | Indicator of an order for a product with zero inventory:   - &#x60;false&#x60; — the order is made for a product with a non-zero inventory   - &#x60;true&#x60; — the order is made for a product with zero inventory. Such an order can be canceled without a cancellation fee  | [optional] [default to undefined]
**_options** | [**OrderOptions**](OrderOptions.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Order } from './api';

const instance: Order = {
    address,
    scanPrice,
    deliveryType,
    supplyId,
    orderUid,
    article,
    colorCode,
    rid,
    createdAt,
    offices,
    skus,
    id,
    warehouseId,
    officeId,
    nmId,
    chrtId,
    price,
    convertedPrice,
    currencyCode,
    convertedCurrencyCode,
    cargoType,
    crossBorderType,
    comment,
    isZeroOrder,
    _options,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
