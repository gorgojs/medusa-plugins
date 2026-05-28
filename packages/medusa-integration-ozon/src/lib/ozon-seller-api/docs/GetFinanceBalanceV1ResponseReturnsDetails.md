# GetFinanceBalanceV1ResponseReturnsDetails

Детализация суммы возвратов.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partner_programs** | [**V1GetFinanceBalanceV1ResponsePartnerMoney**](V1GetFinanceBalanceV1ResponsePartnerMoney.md) |  | [optional] [default to undefined]
**points_for_discounts** | **string** | Баллы за скидки. | [optional] [default to undefined]
**revenue** | [**V1GetFinanceBalanceV1ResponseRevenueMoney**](V1GetFinanceBalanceV1ResponseRevenueMoney.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetFinanceBalanceV1ResponseReturnsDetails } from './api';

const instance: GetFinanceBalanceV1ResponseReturnsDetails = {
    partner_programs,
    points_for_discounts,
    revenue,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
