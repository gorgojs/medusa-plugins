# V2ReturnsRfbsFilter

Фильтр.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**posting_number** | **string** | Номер отправления. | [optional] [default to undefined]
**group_state** | **Array&lt;string&gt;** | Фильтр по статусам заявок: - &#x60;All&#x60; — все заявки. - &#x60;New&#x60; — новые. - &#x60;Delivering&#x60; — в пути. - &#x60;Checkout&#x60; — на проверке. - &#x60;Arbitration&#x60; — спорные. - &#x60;Approved&#x60; — согласованные. - &#x60;Rejected&#x60; — отклонённые.  | [optional] [default to undefined]
**created_at** | [**CreatedAt**](CreatedAt.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V2ReturnsRfbsFilter } from './api';

const instance: V2ReturnsRfbsFilter = {
    offer_id,
    posting_number,
    group_state,
    created_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
