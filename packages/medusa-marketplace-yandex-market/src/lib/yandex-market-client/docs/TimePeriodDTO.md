# TimePeriodDTO

Временной отрезок с комментарием. Требования к содержанию комментария зависят от контекста использования параметра и указаны в описании поля, которое его содержит.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timePeriod** | **number** | Продолжительность в указанных единицах. | [default to undefined]
**timeUnit** | [**TimeUnitType**](TimeUnitType.md) |  | [default to undefined]
**comment** | **string** | Комментарий. | [optional] [default to undefined]

## Example

```typescript
import { TimePeriodDTO } from './api';

const instance: TimePeriodDTO = {
    timePeriod,
    timeUnit,
    comment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
