# V1GetRealizationReportPostingResponseRow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commission_ratio** | **number** | Доля комиссии за продажу по категории. | [optional] [default to undefined]
**delivery_commission** | [**RowItemCommission**](RowItemCommission.md) |  | [optional] [default to undefined]
**item** | [**RowItem**](RowItem.md) |  | [optional] [default to undefined]
**return_commission** | [**RowItemCommissionReturn**](RowItemCommissionReturn.md) |  | [optional] [default to undefined]
**row_number** | **number** | Номер строки в отчёте. | [optional] [default to undefined]
**seller_price_per_instance** | **number** | Цена продавца с учётом скидки. | [optional] [default to undefined]
**order** | [**RowItemOrder**](RowItemOrder.md) |  | [optional] [default to undefined]
**legal_entity_document** | [**RowItemLegalEntityDocument**](RowItemLegalEntityDocument.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V1GetRealizationReportPostingResponseRow } from './api';

const instance: V1GetRealizationReportPostingResponseRow = {
    commission_ratio,
    delivery_commission,
    item,
    return_commission,
    row_number,
    seller_price_per_instance,
    order,
    legal_entity_document,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
