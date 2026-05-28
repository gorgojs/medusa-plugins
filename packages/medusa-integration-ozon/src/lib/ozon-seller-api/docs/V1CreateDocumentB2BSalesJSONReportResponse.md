# V1CreateDocumentB2BSalesJSONReportResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_from** | **string** | Дата начала отчётного периода в формате &#x60;YYYY-MM-DD&#x60;. | [optional] [default to undefined]
**date_to** | **string** | Дата окончания отчётного периода в формате &#x60;YYYY-MM-DD&#x60;. | [optional] [default to undefined]
**invoices** | [**Array&lt;CreateDocumentB2BSalesJSONReportResponseLegalSaleInvoice&gt;**](CreateDocumentB2BSalesJSONReportResponseLegalSaleInvoice.md) | Список счетов-фактур. | [optional] [default to undefined]
**seller_info** | [**CreateDocumentB2BSalesJSONReportResponseSellerInfo**](CreateDocumentB2BSalesJSONReportResponseSellerInfo.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V1CreateDocumentB2BSalesJSONReportResponse } from './api';

const instance: V1CreateDocumentB2BSalesJSONReportResponse = {
    date_from,
    date_to,
    invoices,
    seller_info,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
