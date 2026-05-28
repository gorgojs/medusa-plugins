# DeliveryDetailsDropOffPointDetails

Детали drop-off пункта.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор drop-off пункта. | [optional] [default to undefined]
**province_uuid** | **string** | Уникальный идентификатор провинции. | [optional] [default to undefined]
**timeslot** | [**V1fbpTimeslot**](V1fbpTimeslot.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DeliveryDetailsDropOffPointDetails } from './api';

const instance: DeliveryDetailsDropOffPointDetails = {
    id,
    province_uuid,
    timeslot,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
