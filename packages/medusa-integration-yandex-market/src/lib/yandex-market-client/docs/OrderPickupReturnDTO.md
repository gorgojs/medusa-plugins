# OrderPickupReturnDTO

Информация о пункте выдачи, в который нужно вернуть товары.  [Как получить список подходящих пунктов выдачи](../../reference/delivery-options/getReturnDeliveryOptions.md) 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logisticPointId** | **number** | Идентификатор пункта выдачи.  Его можно узнать с помощью метода [POST v1/businesses/{businessId}/logistics-points](../../reference/logistic-points/getLogisticPoints.md).  | [default to undefined]

## Example

```typescript
import { OrderPickupReturnDTO } from './api';

const instance: OrderPickupReturnDTO = {
    logisticPointId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
