# V1DraftCreateInfoResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clusters** | [**Array&lt;Draftv1Cluster&gt;**](Draftv1Cluster.md) | Кластеры. | [optional] [default to undefined]
**draft_id** | **number** | Идентификатор черновика заявки на поставку. | [optional] [default to undefined]
**errors** | [**Array&lt;V1CalculationError&gt;**](V1CalculationError.md) | Ошибки. | [optional] [default to undefined]
**status** | [**V1CalculationStatus**](V1CalculationStatus.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V1DraftCreateInfoResponse } from './api';

const instance: V1DraftCreateInfoResponse = {
    clusters,
    draft_id,
    errors,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
