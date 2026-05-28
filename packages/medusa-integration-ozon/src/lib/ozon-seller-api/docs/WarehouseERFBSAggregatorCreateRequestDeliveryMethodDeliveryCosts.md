# WarehouseERFBSAggregatorCreateRequestDeliveryMethodDeliveryCosts

Расходы на доставку, которые вы готовы оплатить.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_amount** | **number** | Максимальная сумма расходов в копейках. | [default to undefined]
**min_amount** | **number** | Минимальная сумма расходов в копейках. | [default to undefined]
**percent** | **number** | Процент от стоимости заказа с точностью до 2 знаков после запятой. | [default to undefined]

## Example

```typescript
import { WarehouseERFBSAggregatorCreateRequestDeliveryMethodDeliveryCosts } from './api';

const instance: WarehouseERFBSAggregatorCreateRequestDeliveryMethodDeliveryCosts = {
    max_amount,
    min_amount,
    percent,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
