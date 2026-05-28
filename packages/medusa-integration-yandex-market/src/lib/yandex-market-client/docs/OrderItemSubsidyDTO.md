# OrderItemSubsidyDTO

Общее вознаграждение продавцу за все скидки на товар:  * по промокодам, купонам и акциям; * по баллам Плюса.  Включает НДС. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**OrderItemSubsidyType**](OrderItemSubsidyType.md) |  | [default to undefined]
**amount** | **number** | Сумма субсидии. | [default to undefined]

## Example

```typescript
import { OrderItemSubsidyDTO } from './api';

const instance: OrderItemSubsidyDTO = {
    type,
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
