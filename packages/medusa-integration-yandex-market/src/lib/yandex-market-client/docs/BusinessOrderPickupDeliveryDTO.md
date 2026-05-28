# BusinessOrderPickupDeliveryDTO

Информация о доставке в пункт выдачи.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**BusinessOrderDeliveryAddressDTO**](BusinessOrderDeliveryAddressDTO.md) |  | [optional] [default to undefined]
**region** | [**RegionDTO**](RegionDTO.md) |  | [optional] [default to undefined]
**logisticPointId** | **number** | Идентификатор пункта выдачи.  Его можно узнать с помощью метода [POST v1/businesses/{businessId}/logistics-points](../../reference/logistic-points/getLogisticPoints.md).  | [optional] [default to undefined]
**outletCode** | **string** | Идентификатор пункта самовывоза, присвоенный магазином. | [optional] [default to undefined]
**outletStorageLimitDate** | **string** | Дата, до которой заказ будет храниться в пункте выдачи. Возвращается, когда заказ переходит в статус &#x60;PICKUP&#x60;.  Один раз дату можно поменять с помощью метода [PUT v2/campaigns/{campaignId}/orders/{orderId}/delivery/storage-limit](../../reference/orders/updateOrderStorageLimit.md).  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [optional] [default to undefined]

## Example

```typescript
import { BusinessOrderPickupDeliveryDTO } from './api';

const instance: BusinessOrderPickupDeliveryDTO = {
    address,
    region,
    logisticPointId,
    outletCode,
    outletStorageLimitDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
