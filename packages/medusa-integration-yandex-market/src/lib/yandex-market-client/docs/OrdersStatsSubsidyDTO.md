# OrdersStatsSubsidyDTO

Информация о начислении баллов, которые используются для уменьшения стоимости размещения, и их списании в случае невыкупа или возврата.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operationType** | [**OrdersStatsSubsidyOperationType**](OrdersStatsSubsidyOperationType.md) |  | [default to undefined]
**type** | [**OrdersStatsSubsidyType**](OrdersStatsSubsidyType.md) |  | [default to undefined]
**amount** | **number** | Количество баллов, которые используются для уменьшения стоимости размещения, с точностью до двух знаков после запятой.  | [default to undefined]

## Example

```typescript
import { OrdersStatsSubsidyDTO } from './api';

const instance: OrdersStatsSubsidyDTO = {
    operationType,
    type,
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
