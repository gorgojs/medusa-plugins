# PayReceiptRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payReceipt** | [**PayReceiptData**](PayReceiptData.md) |  | [default to undefined]
**items** | [**Array&lt;PayReceiptItem&gt;**](PayReceiptItem.md) |  | [default to undefined]
**shouldPrint** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { PayReceiptRequest } from './api';

const instance: PayReceiptRequest = {
    payReceipt,
    items,
    shouldPrint,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
