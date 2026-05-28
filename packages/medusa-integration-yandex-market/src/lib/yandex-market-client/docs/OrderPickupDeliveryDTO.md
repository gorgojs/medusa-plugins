# OrderPickupDeliveryDTO

Информация о доставке в пункт выдачи.  Не передавайте вместе с `courierDelivery`. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logisticPointId** | **number** | Идентификатор пункта выдачи.  Его можно узнать с помощью метода [POST v1/businesses/{businessId}/logistics-points](../../reference/logistic-points/getLogisticPoints.md).  | [default to undefined]

## Example

```typescript
import { OrderPickupDeliveryDTO } from './api';

const instance: OrderPickupDeliveryDTO = {
    logisticPointId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
