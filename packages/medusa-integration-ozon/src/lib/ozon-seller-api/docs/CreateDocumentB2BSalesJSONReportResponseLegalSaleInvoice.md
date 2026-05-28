# CreateDocumentB2BSalesJSONReportResponseLegalSaleInvoice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buyer_info** | [**CreateDocumentB2BSalesJSONReportResponseBuyer**](CreateDocumentB2BSalesJSONReportResponseBuyer.md) |  | [optional] [default to undefined]
**currency** | **string** | Валюта. | [optional] [default to undefined]
**currency_code** | **number** | Код валюты. | [optional] [default to undefined]
**info** | [**CreateDocumentB2BSalesJSONReportResponseInvoiceInfo**](CreateDocumentB2BSalesJSONReportResponseInvoiceInfo.md) |  | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**operations** | [**Array&lt;CreateDocumentB2BSalesJSONReportResponseLegalSaleOperation&gt;**](CreateDocumentB2BSalesJSONReportResponseLegalSaleOperation.md) | Список операций. | [optional] [default to undefined]
**product_name** | **string** | Название товара. | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**unit_code** | **number** | Код условного обозначения. | [optional] [default to undefined]
**unit_name** | **string** | Условное обозначение. | [optional] [default to undefined]

## Example

```typescript
import { CreateDocumentB2BSalesJSONReportResponseLegalSaleInvoice } from './api';

const instance: CreateDocumentB2BSalesJSONReportResponseLegalSaleInvoice = {
    buyer_info,
    currency,
    currency_code,
    info,
    offer_id,
    operations,
    product_name,
    sku,
    unit_code,
    unit_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
