# OrderSubsidyDTO

Общее вознаграждение продавцу за DBS-доставку и все скидки на товар:  * по промокодам, купонам и акциям; * по баллам Плюса; * по доставке (DBS).  Включает НДС. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**OrderSubsidyType**](OrderSubsidyType.md) |  | [default to undefined]
**amount** | **number** | Сумма субсидии. | [default to undefined]

## Example

```typescript
import { OrderSubsidyDTO } from './api';

const instance: OrderSubsidyDTO = {
    type,
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
