# ApiV2UploadTaskSizePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Array&lt;SizeGoodReq&gt;**](SizeGoodReq.md) | Sizes and prices. Maximum 1,000 sizes &lt;br&gt;&lt;br&gt; For products with [size-based pricing](./work-with-products#tag/Prices-and-Discounts/paths/~1api~1v2~1upload~1task~1size/post), [quarantine](https://seller.wildberries.ru/discount-and-prices/quarantine) does not apply.  | [default to undefined]

## Example

```typescript
import { ApiV2UploadTaskSizePostRequest } from './api';

const instance: ApiV2UploadTaskSizePostRequest = {
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
