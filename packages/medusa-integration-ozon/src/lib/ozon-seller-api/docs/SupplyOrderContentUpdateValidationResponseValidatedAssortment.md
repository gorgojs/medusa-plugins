# SupplyOrderContentUpdateValidationResponseValidatedAssortment

Информация о товарном составе.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved_items** | [**Array&lt;SupplyOrderContentUpdateValidationResponseApprovedItems&gt;**](SupplyOrderContentUpdateValidationResponseApprovedItems.md) | Принятые товары. | [optional] [default to undefined]
**rejected_items** | [**Array&lt;SupplyOrderContentUpdateValidationResponseRejectedItems&gt;**](SupplyOrderContentUpdateValidationResponseRejectedItems.md) | Не принятые товары. | [optional] [default to undefined]
**total_approved_item_count** | **number** | Количество принятого товара. | [optional] [default to undefined]
**total_approved_quantity** | **number** | Количество единиц принятого товара. | [optional] [default to undefined]
**total_approved_volume_in_litres** | **number** | Количество принятого товара в литрах. | [optional] [default to undefined]
**total_rejected_item_count** | **number** | Количество не принятого товара. | [optional] [default to undefined]
**total_restricted_item_count** | **number** | Количество товара с ограничениями. | [optional] [default to undefined]

## Example

```typescript
import { SupplyOrderContentUpdateValidationResponseValidatedAssortment } from './api';

const instance: SupplyOrderContentUpdateValidationResponseValidatedAssortment = {
    approved_items,
    rejected_items,
    total_approved_item_count,
    total_approved_quantity,
    total_approved_volume_in_litres,
    total_rejected_item_count,
    total_restricted_item_count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
