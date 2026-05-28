# RejectedItemsRestrictions

Ограничения.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reasons_restrictions** | [**Array&lt;RestrictionsReasonEnum&gt;**](RestrictionsReasonEnum.md) | Причины ограничения:   - &#x60;UNKNOWN&#x60; — неизвестный тип;   - &#x60;SKU_HAS_NO_SALES&#x60; — товар не продавался;   - &#x60;SKU_HAS_QUANTITY_LIMIT&#x60; — лимит по количеству товара.  | [optional] [default to undefined]
**sku_has_no_sales_in_days** | **number** | Количество дней, которое товар не продавался. | [optional] [default to undefined]
**sku_quantity_limit** | **number** | Лимит по количеству товара. | [optional] [default to undefined]

## Example

```typescript
import { RejectedItemsRestrictions } from './api';

const instance: RejectedItemsRestrictions = {
    reasons_restrictions,
    sku_has_no_sales_in_days,
    sku_quantity_limit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
