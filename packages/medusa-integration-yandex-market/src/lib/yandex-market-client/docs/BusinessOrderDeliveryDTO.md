# BusinessOrderDeliveryDTO

Информация о доставке заказа.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**OrderDeliveryType**](OrderDeliveryType.md) |  | [default to undefined]
**serviceName** | **string** | Название службы доставки. | [default to undefined]
**deliveryServiceId** | **number** | Идентификатор службы доставки. | [default to undefined]
**warehouseId** | **string** | Идентификатор склада в системе магазина, на который сформирован заказ. | [optional] [default to undefined]
**deliveryPartnerType** | [**OrderDeliveryPartnerType**](OrderDeliveryPartnerType.md) |  | [default to undefined]
**dispatchType** | [**OrderDeliveryDispatchType**](OrderDeliveryDispatchType.md) |  | [optional] [default to undefined]
**dates** | [**BusinessOrderDeliveryDatesDTO**](BusinessOrderDeliveryDatesDTO.md) |  | [default to undefined]
**shipment** | [**BusinessOrderShipmentDTO**](BusinessOrderShipmentDTO.md) |  | [optional] [default to undefined]
**courier** | [**BusinessOrderCourierDeliveryDTO**](BusinessOrderCourierDeliveryDTO.md) |  | [optional] [default to undefined]
**pickup** | [**BusinessOrderPickupDeliveryDTO**](BusinessOrderPickupDeliveryDTO.md) |  | [optional] [default to undefined]
**transfer** | [**BusinessOrderTransferDTO**](BusinessOrderTransferDTO.md) |  | [optional] [default to undefined]
**boxesLayout** | [**Array&lt;BusinessOrderBoxLayoutDTO&gt;**](BusinessOrderBoxLayoutDTO.md) | Раскладка товаров по коробкам. | [optional] [default to undefined]
**tracks** | [**Array&lt;OrderTrackDTO&gt;**](OrderTrackDTO.md) | Информация для отслеживания посылки. | [optional] [default to undefined]
**estimated** | **boolean** | Приблизительная ли дата доставки. | [optional] [default to undefined]

## Example

```typescript
import { BusinessOrderDeliveryDTO } from './api';

const instance: BusinessOrderDeliveryDTO = {
    type,
    serviceName,
    deliveryServiceId,
    warehouseId,
    deliveryPartnerType,
    dispatchType,
    dates,
    shipment,
    courier,
    pickup,
    transfer,
    boxesLayout,
    tracks,
    estimated,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
