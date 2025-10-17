# GenerateCompetitorsPositionReportRequest

Данные, необходимые для генерации отчета.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessId** | **number** | Идентификатор кабинета. | [default to undefined]
**categoryId** | **number** | Идентификатор категории. | [default to undefined]
**dateFrom** | **string** | Начало периода, включительно.  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [default to undefined]
**dateTo** | **string** | Конец периода, включительно.  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [default to undefined]

## Example

```typescript
import { GenerateCompetitorsPositionReportRequest } from './api';

const instance: GenerateCompetitorsPositionReportRequest = {
    businessId,
    categoryId,
    dateFrom,
    dateTo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
