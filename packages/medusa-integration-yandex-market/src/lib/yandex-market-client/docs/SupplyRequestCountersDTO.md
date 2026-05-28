# SupplyRequestCountersDTO

Количество товаров, коробок и палет в заявке.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**planCount** | **number** | Количество товаров в заявке на поставку. | [optional] [default to undefined]
**factCount** | **number** | Количество товаров, которые приняты на складе. | [optional] [default to undefined]
**undefinedCount** | **number** | Количество непринятых товаров. | [optional] [default to undefined]
**surplusCount** | **number** | Количество лишних товаров. | [optional] [default to undefined]
**shortageCount** | **number** | Количество товаров с недостатками. | [optional] [default to undefined]
**defectCount** | **number** | Количество товаров с браком. | [optional] [default to undefined]
**acceptableCount** | **number** | Количество товаров, которые можно привезти дополнительно. | [optional] [default to undefined]
**unacceptableCount** | **number** | Количество товаров, которые нельзя привезти дополнительно. | [optional] [default to undefined]
**actualPalletsCount** | **number** | Количество палет, которые приняты на складе. | [optional] [default to undefined]
**actualBoxCount** | **number** | Количество коробок, которые приняты на складе. | [optional] [default to undefined]

## Example

```typescript
import { SupplyRequestCountersDTO } from './api';

const instance: SupplyRequestCountersDTO = {
    planCount,
    factCount,
    undefinedCount,
    surplusCount,
    shortageCount,
    defectCount,
    acceptableCount,
    unacceptableCount,
    actualPalletsCount,
    actualBoxCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
