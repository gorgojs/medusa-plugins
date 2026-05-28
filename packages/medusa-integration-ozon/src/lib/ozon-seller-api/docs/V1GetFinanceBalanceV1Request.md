# V1GetFinanceBalanceV1Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_from** | **string** | Дата начала отчётного периода в формате &#x60;YYYY-MM-DD&#x60;. | [default to undefined]
**date_to** | **string** | Дата окончания отчётного периода в формате &#x60;YYYY-MM-DD&#x60;. Максимальный период между &#x60;date_from&#x60; и &#x60;date_to&#x60; — 30 дней. | [default to undefined]

## Example

```typescript
import { V1GetFinanceBalanceV1Request } from './api';

const instance: V1GetFinanceBalanceV1Request = {
    date_from,
    date_to,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
