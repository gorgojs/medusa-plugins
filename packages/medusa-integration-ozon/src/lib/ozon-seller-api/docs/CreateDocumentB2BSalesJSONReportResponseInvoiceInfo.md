# CreateDocumentB2BSalesJSONReportResponseInvoiceInfo

Информация о счёте-фактуре.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | Дата счёта-фактуры продавца в формате &#x60;YYYY-MM-DD&#x60;. | [optional] [default to undefined]
**number** | **string** | Номер счёта-фактуры продавца. | [optional] [default to undefined]
**status** | **string** | Статус УКД или УПД. | [optional] [default to undefined]
**type** | [**CreateDocumentB2BSalesJSONReportResponseInvoiceInfoType**](CreateDocumentB2BSalesJSONReportResponseInvoiceInfoType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CreateDocumentB2BSalesJSONReportResponseInvoiceInfo } from './api';

const instance: CreateDocumentB2BSalesJSONReportResponseInvoiceInfo = {
    date,
    number,
    status,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
