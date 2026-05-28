# DetailsDeliveryDetails

Заказы.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** | Общая сумма. | [optional] [default to undefined]
**amount** | **number** | Сумма, на которую выкуплено товаров с учётом комиссий. | [optional] [default to undefined]
**delivery_services** | [**DetailsServices**](DetailsServices.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DetailsDeliveryDetails } from './api';

const instance: DetailsDeliveryDetails = {
    total,
    amount,
    delivery_services,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
