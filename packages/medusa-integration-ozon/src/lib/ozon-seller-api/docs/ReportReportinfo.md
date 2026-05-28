# ReportReportinfo

Информация об отчёте.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Уникальный идентификатор отчёта. | [optional] [default to undefined]
**created_at** | **string** | Дата создания отчёта. | [optional] [default to undefined]
**error** | **string** | Код ошибки при генерации отчёта. | [optional] [default to undefined]
**expires_at** | **string** | Дата и время, до которых отчёт доступен по ссылке.   Поле вернётся пустым, если отчёт сформирован до 14 октября 2025.  | [optional] [default to undefined]
**file** | **string** | Ссылка на XLSX-файл.  Для отчёта с типом &#x60;SELLER_RETURNS&#x60; ссылка доступна 5 минут после выполнения запроса.  | [optional] [default to undefined]
**params** | **{ [key: string]: string; }** | Массив с фильтрами, указанными при создании отчёта продавцом. | [optional] [default to undefined]
**report_type** | **string** | Тип отчёта:   - &#x60;SELLER_PRODUCTS&#x60; — отчёт по товарам;   - &#x60;SELLER_TRANSACTIONS&#x60; — отчёт по транзакциям;   - &#x60;SELLER_PRODUCT_PRICES&#x60; — отчёт по ценам товаров;   - &#x60;SELLER_STOCK&#x60; — отчёт об остатках товаров;   - &#x60;SELLER_RETURNS&#x60; — отчёт о возвратах;   - &#x60;SELLER_POSTINGS&#x60; — отчёт об отправлениях;   - &#x60;SELLER_FINANCE&#x60; — отчёт о финансах;   - &#x60;SELLER_PRODUCT_DISCOUNTED&#x60; — отчёт об уценённых товарах;   - &#x60;SELLER_PLACEMENT_BY_PRODUCTS&#x60; — отчёт о стоимости размещения по товарам;   - &#x60;SELLER_PLACEMENT_BY_SUPPLIES&#x60; — отчёт о стоимости размещения по поставкам;   - &#x60;DOCUMENT_B2B_SALES&#x60; — отчёт о продажах юридическим лицам;   - &#x60;MUTUAL_SETTLEMENT&#x60; — отчёт о взаиморасчётах;   - &#x60;SELLER_RETURNS_V2&#x60; — отчёт о возвратах FBO и FBS;   - &#x60;COMPENSATION&#x60; — отчёт о компенсациях;   - &#x60;DECOMPENSATION&#x60; — отчёт о декомпенсациях.  | [optional] [default to undefined]
**status** | **string** | Статус генерации отчёта:   - &#x60;waiting&#x60; — в очереди на обработку,   - &#x60;processing&#x60; — обрабатывается,   - &#x60;success&#x60; — отчёт успешно создан,   - &#x60;failed&#x60; — ошибка при создании отчёта.  | [optional] [default to undefined]

## Example

```typescript
import { ReportReportinfo } from './api';

const instance: ReportReportinfo = {
    code,
    created_at,
    error,
    expires_at,
    file,
    params,
    report_type,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
