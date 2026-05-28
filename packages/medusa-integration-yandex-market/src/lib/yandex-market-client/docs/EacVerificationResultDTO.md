# EacVerificationResultDTO

Результат выполнения запроса.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**verificationResult** | [**EacVerificationStatusType**](EacVerificationStatusType.md) |  | [optional] [default to undefined]
**attemptsLeft** | **number** | Количество оставшихся попыток проверки кода.  Возвращается, если магазин отправил некорректный код.  Когда все попытки будут исчерпаны, код обновится.  | [optional] [default to undefined]

## Example

```typescript
import { EacVerificationResultDTO } from './api';

const instance: EacVerificationResultDTO = {
    verificationResult,
    attemptsLeft,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
