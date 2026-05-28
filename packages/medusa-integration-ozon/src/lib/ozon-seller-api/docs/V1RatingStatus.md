# V1RatingStatus

Статус рейтинга.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**danger** | **boolean** | Признак, превышено ли пороговое значение рейтинга для блокировки. | [optional] [default to undefined]
**premium** | **boolean** | Признак, достигнуто ли пороговое значение для участия в Premium-программе. | [optional] [default to undefined]
**warning** | **boolean** | Признак наличия предупреждения о возможном превышении порогового значения для блокировки. | [optional] [default to undefined]

## Example

```typescript
import { V1RatingStatus } from './api';

const instance: V1RatingStatus = {
    danger,
    premium,
    warning,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
