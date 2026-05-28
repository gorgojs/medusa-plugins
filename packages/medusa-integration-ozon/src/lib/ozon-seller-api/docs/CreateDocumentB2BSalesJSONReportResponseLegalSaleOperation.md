# CreateDocumentB2BSalesJSONReportResponseLegalSaleOperation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Сумма реализации или возврата. | [optional] [default to undefined]
**cost_without_vat** | **number** | Стоимость товара без НДС. | [optional] [default to undefined]
**date** | **string** | Дата операции в формате &#x60;YYYY-MM-DD&#x60;. | [optional] [default to undefined]
**gtd_number** | **string** | Номер ГТД. | [optional] [default to undefined]
**origin_country** | **string** | Страна происхождения товара. | [optional] [default to undefined]
**posting_number** | **string** | Номер отправления. | [optional] [default to undefined]
**price** | **number** | Цена реализации или возврата в рублях. | [optional] [default to undefined]
**quantity** | **number** | Количество товаров. | [optional] [default to undefined]
**rnpt_number** | **string** | РНПТ. | [optional] [default to undefined]
**type** | [**CreateDocumentB2BSalesJSONReportResponseLegalSaleOperationType**](CreateDocumentB2BSalesJSONReportResponseLegalSaleOperationType.md) |  | [optional] [default to undefined]
**vat_amount** | **number** | Сумма НДС, которая взимается с покупателя. | [optional] [default to undefined]
**vat_rate** | **number** | Ставка НДС. | [optional] [default to undefined]

## Example

```typescript
import { CreateDocumentB2BSalesJSONReportResponseLegalSaleOperation } from './api';

const instance: CreateDocumentB2BSalesJSONReportResponseLegalSaleOperation = {
    amount,
    cost_without_vat,
    date,
    gtd_number,
    origin_country,
    posting_number,
    price,
    quantity,
    rnpt_number,
    type,
    vat_amount,
    vat_rate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
