# OrdersShipmentInfoDTO

Годные/негодные ярлыки по заказам в отгрузке.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderIdsWithLabels** | **Set&lt;number&gt;** | Идентификаторы заказов в отгрузке, для которых можно распечатать ярлыки. | [default to undefined]
**orderIdsWithoutLabels** | **Set&lt;number&gt;** | Идентификаторы заказов в отгрузке, для которых нельзя распечатать ярлыки. | [default to undefined]

## Example

```typescript
import { OrdersShipmentInfoDTO } from './api';

const instance: OrdersShipmentInfoDTO = {
    orderIdsWithLabels,
    orderIdsWithoutLabels,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
