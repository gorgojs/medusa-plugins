# GenerateShelfsStatisticsRequest

Данные, необходимые для генерации отчета. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessId** | **number** | Идентификатор кабинета. | [default to undefined]
**dateFrom** | **string** | Начало периода, включительно. | [default to undefined]
**dateTo** | **string** | Конец периода, включительно. | [default to undefined]
**attributionType** | [**StatisticsAttributionType**](StatisticsAttributionType.md) |  | [default to undefined]

## Example

```typescript
import { GenerateShelfsStatisticsRequest } from './api';

const instance: GenerateShelfsStatisticsRequest = {
    businessId,
    dateFrom,
    dateTo,
    attributionType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
