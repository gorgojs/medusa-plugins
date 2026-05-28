# V1GetProductInfoDiscountedResponseItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment_reason_damaged** | **string** | Комментарий к причине повреждения. | [optional] [default to undefined]
**condition** | **string** | Состояние товара — новый или Б/У. | [optional] [default to undefined]
**condition_estimation** | **string** | Состояние товара по шкале от 1 до 7: - 1 — удовлетворительное, - 2 — хорошее, - 3 — очень хорошее, - 4 — отличное, - 5–7 — как новый.  | [optional] [default to undefined]
**defects** | **string** | Дефекты товара. | [optional] [default to undefined]
**discounted_sku** | **number** | SKU уценённого товара. | [optional] [default to undefined]
**mechanical_damage** | **string** | Описание механического повреждения. | [optional] [default to undefined]
**package_damage** | **string** | Описание повреждения упаковки. | [optional] [default to undefined]
**packaging_violation** | **string** | Признак нарушения целостности упаковки. | [optional] [default to undefined]
**reason_damaged** | **string** | Причина повреждения. | [optional] [default to undefined]
**repair** | **string** | Признак, что товар отремонтирован. | [optional] [default to undefined]
**shortage** | **string** | Признак, что товар некомплектный. | [optional] [default to undefined]
**sku** | **number** | SKU основного товара. | [optional] [default to undefined]
**warranty_type** | **string** | Наличие у товара действующей гарантии. | [optional] [default to undefined]

## Example

```typescript
import { V1GetProductInfoDiscountedResponseItem } from './api';

const instance: V1GetProductInfoDiscountedResponseItem = {
    comment_reason_damaged,
    condition,
    condition_estimation,
    defects,
    discounted_sku,
    mechanical_damage,
    package_damage,
    packaging_violation,
    reason_damaged,
    repair,
    shortage,
    sku,
    warranty_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
