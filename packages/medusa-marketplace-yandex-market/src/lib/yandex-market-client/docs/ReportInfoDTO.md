# ReportInfoDTO

Статус генерации и ссылка на готовый отчет или документ.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**ReportStatusType**](ReportStatusType.md) |  | [default to undefined]
**subStatus** | [**ReportSubStatusType**](ReportSubStatusType.md) |  | [optional] [default to undefined]
**generationRequestedAt** | **string** | Дата и время запроса на генерацию. | [default to undefined]
**generationFinishedAt** | **string** | Дата и время завершения генерации. | [optional] [default to undefined]
**file** | **string** | Ссылка на готовый отчет или документ. | [optional] [default to undefined]
**estimatedGenerationTime** | **number** | Ожидаемая продолжительность генерации в миллисекундах. | [optional] [default to undefined]

## Example

```typescript
import { ReportInfoDTO } from './api';

const instance: ReportInfoDTO = {
    status,
    subStatus,
    generationRequestedAt,
    generationFinishedAt,
    file,
    estimatedGenerationTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
