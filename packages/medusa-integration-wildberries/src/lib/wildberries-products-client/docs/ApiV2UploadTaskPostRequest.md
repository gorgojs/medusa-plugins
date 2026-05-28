# ApiV2UploadTaskPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Array&lt;Good&gt;**](Good.md) | Products, prices and discounts. Maximum 1,000 products. Both price and discount can not be empty &lt;br&gt;&lt;br&gt; If the new price with discount is at least 3 times less than the previous one, the price will go into [price quarantine](https://seller.wildberries.ru/discount-and-prices/quarantine) and will not change. You will get the error in the response of the upload states methods. &lt;br&gt;&lt;br&gt; You can edit price/discount using API or remove the price out of quarantine in [your account](https://seller.wildberries.ru/discount-and-prices/quarantine)  | [default to undefined]

## Example

```typescript
import { ApiV2UploadTaskPostRequest } from './api';

const instance: ApiV2UploadTaskPostRequest = {
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
