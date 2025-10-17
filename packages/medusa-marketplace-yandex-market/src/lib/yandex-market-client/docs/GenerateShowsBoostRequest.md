# GenerateShowsBoostRequest

Данные, необходимые для генерации отчета. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessId** | **number** | Идентификатор кабинета. | [default to undefined]
**dateFrom** | **string** | Начало периода, включительно.  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [default to undefined]
**dateTo** | **string** | Конец периода, включительно.  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [default to undefined]
**attributionType** | [**StatisticsAttributionType**](StatisticsAttributionType.md) |  | [default to undefined]

## Example

```typescript
import { GenerateShowsBoostRequest } from './api';

const instance: GenerateShowsBoostRequest = {
    businessId,
    dateFrom,
    dateTo,
    attributionType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
