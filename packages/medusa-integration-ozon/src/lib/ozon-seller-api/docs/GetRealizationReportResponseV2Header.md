# GetRealizationReportResponseV2Header

Титульный лист отчёта.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contract_date** | **string** | Дата заключения договора. | [optional] [default to undefined]
**contract_number** | **string** | Номер договора. | [optional] [default to undefined]
**currency_sys_name** | **string** | Валюта. | [optional] [default to undefined]
**doc_date** | **string** | Дата формирования документа. | [optional] [default to undefined]
**number** | **string** | Номер отчёта о реализации. | [optional] [default to undefined]
**payer_inn** | **string** | ИНН плательщика. | [optional] [default to undefined]
**payer_kpp** | **string** | КПП плательщика. | [optional] [default to undefined]
**payer_name** | **string** | Название плательщика. | [optional] [default to undefined]
**receiver_inn** | **string** | ИНН получателя. | [optional] [default to undefined]
**receiver_kpp** | **string** | КПП получателя. | [optional] [default to undefined]
**receiver_name** | **string** | Название получателя. | [optional] [default to undefined]
**start_date** | **string** | Начало периода. | [optional] [default to undefined]
**stop_date** | **string** | Конец периода. | [optional] [default to undefined]

## Example

```typescript
import { GetRealizationReportResponseV2Header } from './api';

const instance: GetRealizationReportResponseV2Header = {
    contract_date,
    contract_number,
    currency_sys_name,
    doc_date,
    number,
    payer_inn,
    payer_kpp,
    payer_name,
    receiver_inn,
    receiver_kpp,
    receiver_name,
    start_date,
    stop_date,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
