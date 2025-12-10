# SupplyRequestItemCountersDTO

Количество товаров в заявке.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**planCount** | **number** | Количество товаров в заявке на поставку. | [optional] [default to undefined]
**factCount** | **number** | Количество товаров, которые приняты на складе. | [optional] [default to undefined]
**surplusCount** | **number** | Количество лишних товаров. | [optional] [default to undefined]
**shortageCount** | **number** | Количество товаров с недостатками. | [optional] [default to undefined]
**defectCount** | **number** | Количество товаров с браком. | [optional] [default to undefined]

## Example

```typescript
import { SupplyRequestItemCountersDTO } from './api';

const instance: SupplyRequestItemCountersDTO = {
    planCount,
    factCount,
    surplusCount,
    shortageCount,
    defectCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
