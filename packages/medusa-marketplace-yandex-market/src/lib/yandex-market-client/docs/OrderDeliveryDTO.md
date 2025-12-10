# OrderDeliveryDTO

Информация о доставке.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Идентификатор доставки, присвоенный магазином.  Указывается, только если магазин передал данный идентификатор в ответе на запрос методом &#x60;POST cart&#x60;.  | [optional] [default to undefined]
**type** | [**OrderDeliveryType**](OrderDeliveryType.md) |  | [default to undefined]
**serviceName** | **string** | Наименование службы доставки. | [default to undefined]
**price** | **number** | {% note warning \&quot;Стоимость доставки смотрите в параметре &#x60;deliveryTotal&#x60;.\&quot; %}     {% endnote %}  Стоимость доставки в валюте заказа.  | [optional] [default to undefined]
**deliveryPartnerType** | [**OrderDeliveryPartnerType**](OrderDeliveryPartnerType.md) |  | [default to undefined]
**courier** | [**OrderCourierDTO**](OrderCourierDTO.md) |  | [optional] [default to undefined]
**dates** | [**OrderDeliveryDatesDTO**](OrderDeliveryDatesDTO.md) |  | [default to undefined]
**region** | [**RegionDTO**](RegionDTO.md) |  | [optional] [default to undefined]
**address** | [**OrderDeliveryAddressDTO**](OrderDeliveryAddressDTO.md) |  | [optional] [default to undefined]
**vat** | [**OrderVatType**](OrderVatType.md) |  | [optional] [default to undefined]
**deliveryServiceId** | **number** | Идентификатор службы доставки. | [default to undefined]
**liftType** | [**OrderLiftType**](OrderLiftType.md) |  | [optional] [default to undefined]
**liftPrice** | **number** | Стоимость подъема на этаж. | [optional] [default to undefined]
**outletCode** | **string** | Идентификатор пункта самовывоза, присвоенный магазином. | [optional] [default to undefined]
**outletStorageLimitDate** | **string** | Формат даты: &#x60;ДД-ММ-ГГГГ&#x60;.  | [optional] [default to undefined]
**dispatchType** | [**OrderDeliveryDispatchType**](OrderDeliveryDispatchType.md) |  | [optional] [default to undefined]
**tracks** | [**Array&lt;OrderTrackDTO&gt;**](OrderTrackDTO.md) | Информация для отслеживания перемещений посылки. | [optional] [default to undefined]
**shipments** | [**Array&lt;OrderShipmentDTO&gt;**](OrderShipmentDTO.md) | Информация о посылках. | [optional] [default to undefined]
**estimated** | **boolean** | Приблизительная ли дата доставки. | [optional] [default to undefined]
**eacType** | [**OrderDeliveryEacType**](OrderDeliveryEacType.md) |  | [optional] [default to undefined]
**eacCode** | **string** | Код подтверждения ЭАПП (для типа &#x60;MERCHANT_TO_COURIER&#x60;).  | [optional] [default to undefined]

## Example

```typescript
import { OrderDeliveryDTO } from './api';

const instance: OrderDeliveryDTO = {
    id,
    type,
    serviceName,
    price,
    deliveryPartnerType,
    courier,
    dates,
    region,
    address,
    vat,
    deliveryServiceId,
    liftType,
    liftPrice,
    outletCode,
    outletStorageLimitDate,
    dispatchType,
    tracks,
    shipments,
    estimated,
    eacType,
    eacCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
