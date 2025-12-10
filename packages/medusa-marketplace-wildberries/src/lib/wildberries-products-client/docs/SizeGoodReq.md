# SizeGoodReq


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nmID** | **number** | WB article | [default to undefined]
**sizeID** | **number** | Size ID. You can get the ID with the [Get products with prices](./work-with-products#tag/Prices-and-Discounts/paths/~1api~1v2~1list~1goods~1filter/get) and [Get products with prices by articles](./work-with-products#tag/Prices-and-Discounts/paths/~1api~1v2~1list~1goods~1filter/post) methods, the &#x60;sizeID&#x60; field. In the Content methods this is &#x60;chrtID&#x60; field | [default to undefined]
**price** | **number** | Price. You can get the currency with the [Get products with prices](./work-with-products#tag/Prices-and-Discounts/paths/~1api~1v2~1list~1goods~1filter/get) and [Get products with prices by articles](./work-with-products#tag/Prices-and-Discounts/paths/~1api~1v2~1list~1goods~1filter/post) methods, the &#x60;currencyIsoCode4217&#x60; field | [default to undefined]

## Example

```typescript
import { SizeGoodReq } from './api';

const instance: SizeGoodReq = {
    nmID,
    sizeID,
    price,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
