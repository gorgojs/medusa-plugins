# ReportReportListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | **number** | Номер страницы. | [default to undefined]
**page_size** | **number** | Количество значений на странице:   - по умолчанию — 100,   - маĸсимальное значение — 1000.  | [default to undefined]
**report_type** | **string** | Тип отчёта:   - &#x60;ALL&#x60; — все отчёты;   - &#x60;SELLER_PRODUCTS&#x60; — отчёт по товарам;   - &#x60;SELLER_TRANSACTIONS&#x60; — отчёт по транзакциям;   - &#x60;SELLER_PRODUCT_PRICES&#x60; — отчёт по ценам товаров;   - &#x60;SELLER_STOCK&#x60; — отчёт об остатках товаров;   - &#x60;SELLER_RETURNS&#x60; — отчёт о возвратах;   - &#x60;SELLER_POSTINGS&#x60; — отчёт об отправлениях;   - &#x60;SELLER_FINANCE&#x60; — отчёт о финансах;   - &#x60;SELLER_PRODUCT_DISCOUNTED&#x60; — отчёт об уценённых товарах;   - &#x60;SELLER_PLACEMENT_BY_PRODUCTS&#x60; — отчёт о стоимости размещения по товарам;   - &#x60;SELLER_PLACEMENT_BY_SUPPLIES&#x60; — отчёт о стоимости размещения по поставкам;   - &#x60;DOCUMENT_B2B_SALES&#x60; — отчёт о продажах юридическим лицам;   - &#x60;MUTUAL_SETTLEMENT&#x60; — отчёт о взаиморасчётах;   - &#x60;SELLER_RETURNS_V2&#x60; — отчёт о возвратах FBO и FBS;   - &#x60;COMPENSATION&#x60; — отчёт о компенсациях;   - &#x60;DECOMPENSATION&#x60; — отчёт о декомпенсациях.  | [optional] [default to 'ALL']

## Example

```typescript
import { ReportReportListRequest } from './api';

const instance: ReportReportListRequest = {
    page,
    page_size,
    report_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
