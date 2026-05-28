# ReportInfoDTO

Статус генерации и ссылка на готовый отчет или документ.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**ReportStatusType**](ReportStatusType.md) |  | [default to undefined]
**subStatus** | [**ReportSubStatusType**](ReportSubStatusType.md) |  | [optional] [default to undefined]
**generationRequestedAt** | **string** | Дата и время запроса на генерацию. | [default to undefined]
**generationFinishedAt** | **string** | Дата и время завершения генерации. | [optional] [default to undefined]
**file** | **string** | Ссылка на готовый отчет или документ.  {% note warning \&quot;Срок действия ссылки\&quot; %}  Ссылка актуальна **60 минут** с момента получения ответа. При каждом запросе &#x60;GET /v2/reports/info/{reportId}&#x60; генерируется новая ссылка, срок действия которой ограничен.  **Рекомендация для интеграций:** сразу после получения ссылки скачайте отчет и сохраните его у себя. Не сохраняйте ссылку для последующего использования — она станет недействительной через после истечения срока действия.  {% endnote %}  | [optional] [default to undefined]
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
