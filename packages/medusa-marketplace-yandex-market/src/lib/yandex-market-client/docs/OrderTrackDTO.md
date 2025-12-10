# OrderTrackDTO

Информация о трек-номере посылки (DBS).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trackCode** | **string** | Трек‑номер посылки. | [optional] [default to undefined]
**deliveryServiceId** | **number** | Идентификатор службы доставки. Информацию о службе доставки можно получить с помощью запроса [GET delivery/services](../../reference/orders/getDeliveryServices.md). | [default to undefined]

## Example

```typescript
import { OrderTrackDTO } from './api';

const instance: OrderTrackDTO = {
    trackCode,
    deliveryServiceId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
