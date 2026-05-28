# DetailsRfbsDetails

Перечисления по схеме rFBS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** | Общая сумма. | [optional] [default to undefined]
**transfer_delivery** | **number** | Перечисления от покупателей. | [optional] [default to undefined]
**transfer_delivery_return** | **number** | Возврат перечислений покупателям. | [optional] [default to undefined]
**compensation_delivery_return** | **number** | Компенсация перечислений за доставку. | [optional] [default to undefined]
**partial_compensation** | **number** | Перечисления частичных компенсаций покупателям. | [optional] [default to undefined]
**partial_compensation_return** | **number** | Возврат частичных компенсаций. | [optional] [default to undefined]

## Example

```typescript
import { DetailsRfbsDetails } from './api';

const instance: DetailsRfbsDetails = {
    total,
    transfer_delivery,
    transfer_delivery_return,
    compensation_delivery_return,
    partial_compensation,
    partial_compensation_return,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
