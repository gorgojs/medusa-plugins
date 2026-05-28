# ReturnAvailableDecisionDTO

Доступное решение по возврату.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**decisionType** | [**ReturnDecisionType**](ReturnDecisionType.md) |  | [default to undefined]
**decisionReasonTypes** | [**Set&lt;ReturnRequestDecisionReasonType&gt;**](ReturnRequestDecisionReasonType.md) | Возможные причины отказа (только для решения DECLINE_REFUND). | [optional] [default to undefined]

## Example

```typescript
import { ReturnAvailableDecisionDTO } from './api';

const instance: ReturnAvailableDecisionDTO = {
    decisionType,
    decisionReasonTypes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
