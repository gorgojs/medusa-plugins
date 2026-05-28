# OrderNew


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**OrderNewAddress**](OrderNewAddress.md) |  | [optional] [default to undefined]
**ddate** | **string** | Planned delivery date. &lt;br&gt; The field is displayed for assembly orders with over dimensional products &#x60;ODC&#x60;, &#x60;cargoType: 2&#x60;  | [optional] [default to undefined]
**sellerDate** | **string** | Recommended delivery date for &#x60;ODC&#x60; products to sorting center or warehouse. &lt;br&gt; The field is displayed for assembly orders with over dimensional products &#x60;ODC&#x60;, &#x60;cargoType: 2&#x60;  | [optional] [default to undefined]
**salePrice** | **number** | Seller\&#39;s price in the currency of sale, including seller\&#39;s discount, except the WB Club discount, multiplied by 100  | [optional] [default to undefined]
**requiredMeta** | **Array&lt;string&gt;** | List of metadata that needs to be added to the assembly order to tranfer a supply with this assembly order to the  delivery  | [optional] [default to undefined]
**optionalMeta** | **Array&lt;string&gt;** | List of metadata that can to be added to the assembly order.  &lt;br&gt; A supply with the assembly order without this metadata can be transferred to the delivery, but metadata may be required, for example, when a customer returns a product  | [optional] [default to undefined]
**deliveryType** | **string** | Delivery type: - &#x60;fbs&#x60; — Fulfillment By Wildberries (FBS)  | [optional] [default to undefined]
**comment** | **string** | Buyer\&#39;s comment | [optional] [default to undefined]
**scanPrice** | **number** | Acceptance price in kopecks. Displayed after the actual acceptance of the order. For this method will &#x60;null&#x60; always be returned | [optional] [default to undefined]
**orderUid** | **string** | Transaction ID for assembly orders grouping. Orders in the same buyer\&#39;s cart will have the same &#x60;orderUid&#x60;. | [optional] [default to undefined]
**article** | **string** | Supplier\&#39;s article | [optional] [default to undefined]
**colorCode** | **string** | Color code (for tinted products only) | [optional] [default to undefined]
**rid** | **string** | Unique order ID. &lt;br&gt; Note: &#x60;rid&#x60; corresponds to &#x60;srid&#x60; in the responses of the methods:   - [Buyers return applications](./user-communication#tag/Buyers-Returns/paths/~1api~1v1~1claims/get)   - [Orders](./reports#tag/Main-Reports/paths/~1api~1v1~1supplier~1orders/get)   - [Sales](./reports#tag/Main-Reports/paths/~1api~1v1~1supplier~1sales/get)   - [Goods Return Report](./reports#tag/Goods-Return-Report)   - [Realization sales report](./financial-reports-and-accounting#tag/Financial-Reports/paths/~1api~1v5~1supplier~1reportDetailByPeriod/get)  | [optional] [default to undefined]
**createdAt** | **string** | Assembly order creation date (RFC3339) | [optional] [default to undefined]
**offices** | **Array&lt;string&gt;** | List of offices where you should deliver the order | [optional] [default to undefined]
**skus** | **Array&lt;string&gt;** | List of SKUs | [optional] [default to undefined]
**id** | **number** | Assembly order ID | [optional] [default to undefined]
**warehouseId** | **number** | Supplier\&#39;s warehouse ID where the assembly order was received | [optional] [default to undefined]
**officeId** | **number** | ID of the WB warehouse associated with the seller\&#39;s warehouse | [optional] [default to undefined]
**nmId** | **number** | WB article | [optional] [default to undefined]
**chrtId** | **number** | Product size ID in WB systems | [optional] [default to undefined]
**price** | **number** | The price in the currency of sale, including all discounts except the amount from the WB Wallet, multiplied by 100. The currency code of the sale is in the &#x60;currencyCode&#x60; field  | [optional] [default to undefined]
**finalPrice** | **number** | The sum charged to the buyer in the currency of sale including all discounts, multiplied by 100. You can find a currency code in the &#x60;currencyCode&#x60; field. Provided for informational purposes only | [optional] [default to undefined]
**convertedPrice** | **number** | The price in the currency of the seller\&#39;s country including all discounts, except WB Wallet discount, multiplied by 100. Provided for informational purposes only. | [optional] [default to undefined]
**convertedFinalPrice** | **number** | The sum charged to the buyer in the currency of the seller\&#39;s country including all discounts, multiplied by 100. Provided for informational purposes only | [optional] [default to undefined]
**currencyCode** | **number** | Sale currency code | [optional] [default to undefined]
**convertedCurrencyCode** | **number** | Currency code of the supplier country | [optional] [default to undefined]
**cargoType** | **number** | Type of cargo:   - &#x60;1&#x60; — small-sized goods   - &#x60;2&#x60; — over dimensional cargo (ODC)   - &#x60;3&#x60; — dimensional cargo+ (CD+)  | [optional] [default to undefined]
**crossBorderType** | **number** | Assembly order type:   - &#x60;0&#x60; — non-cross-border   - &#x60;1&#x60; — cross-border  | [optional] [default to undefined]
**isZeroOrder** | **boolean** | Indicator of an order for a product with zero inventory:   - &#x60;false&#x60; — the order is made for a product with a non-zero inventory   - &#x60;true&#x60; — the order is made for a product with zero inventory. Such an order can be canceled without a cancellation fee  | [optional] [default to undefined]
**_options** | [**OrderOptions**](OrderOptions.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OrderNew } from './api';

const instance: OrderNew = {
    address,
    ddate,
    sellerDate,
    salePrice,
    requiredMeta,
    optionalMeta,
    deliveryType,
    comment,
    scanPrice,
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
    finalPrice,
    convertedPrice,
    convertedFinalPrice,
    currencyCode,
    convertedCurrencyCode,
    cargoType,
    crossBorderType,
    isZeroOrder,
    _options,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
