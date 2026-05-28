# LogisticPointDTO

Информация о пункте выдачи.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logisticPointId** | **number** | Идентификатор пункта выдачи.  Его можно узнать с помощью метода [POST v1/businesses/{businessId}/logistics-points](../../reference/logistic-points/getLogisticPoints.md).  | [default to undefined]
**brand** | [**LogisticPointBrandType**](LogisticPointBrandType.md) |  | [default to undefined]
**address** | [**LogisticPointAddressDTO**](LogisticPointAddressDTO.md) |  | [default to undefined]
**workingSchedule** | [**LogisticPointScheduleDTO**](LogisticPointScheduleDTO.md) |  | [default to undefined]
**deliveryRestrictions** | [**LogisticPointDeliveryRestrictionDTO**](LogisticPointDeliveryRestrictionDTO.md) |  | [default to undefined]
**features** | [**Set&lt;LogisticPointFeatureType&gt;**](LogisticPointFeatureType.md) | Свойства пункта выдачи. | [optional] [default to undefined]
**storagePeriod** | **number** | Срок хранения заказа в пункте выдачи.  Указывается в днях.  | [default to undefined]

## Example

```typescript
import { LogisticPointDTO } from './api';

const instance: LogisticPointDTO = {
    logisticPointId,
    brand,
    address,
    workingSchedule,
    deliveryRestrictions,
    features,
    storagePeriod,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
