# DetailsReturnDetails

Возвраты и отмены.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** | Общая сумма. | [optional] [default to undefined]
**amount** | **number** | Сумма, на которую получено возвратов с учётом комиссий. | [optional] [default to undefined]
**return_services** | [**DetailsReturns**](DetailsReturns.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DetailsReturnDetails } from './api';

const instance: DetailsReturnDetails = {
    total,
    amount,
    return_services,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
