# GenerateReportDTO

Идентификатор, который понадобится для отслеживания статуса генерации и получения готового отчета или документа.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reportId** | **string** | Идентификатор, который понадобится для отслеживания статуса генерации и получения готового отчета или документа. | [default to undefined]
**estimatedGenerationTime** | **number** | Ожидаемая продолжительность генерации в миллисекундах. | [default to undefined]

## Example

```typescript
import { GenerateReportDTO } from './api';

const instance: GenerateReportDTO = {
    reportId,
    estimatedGenerationTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
