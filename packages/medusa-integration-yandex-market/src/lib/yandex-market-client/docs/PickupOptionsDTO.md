# PickupOptionsDTO

Временной интервал, идентификатор пункта выдачи и способ оплаты.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logisticPointId** | **number** | Идентификатор пункта выдачи.  Его можно узнать с помощью метода [POST v1/businesses/{businessId}/logistics-points](../../reference/logistic-points/getLogisticPoints.md).  | [default to undefined]
**_options** | [**Array&lt;PickupOptionDTO&gt;**](PickupOptionDTO.md) | Варианты доставки в ПВЗ. | [default to undefined]

## Example

```typescript
import { PickupOptionsDTO } from './api';

const instance: PickupOptionsDTO = {
    logisticPointId,
    _options,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
