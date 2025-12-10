# ShipmentDTO

Информация об отгрузке.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор отгрузки. | [default to undefined]
**planIntervalFrom** | **string** | Начало планового интервала отгрузки.  Формат даты: ISO 8601 со смещением относительно UTC.  | [default to undefined]
**planIntervalTo** | **string** | Конец планового интервала отгрузки.  Формат даты: ISO 8601 со смещением относительно UTC.  | [default to undefined]
**shipmentType** | [**ShipmentType**](ShipmentType.md) |  | [optional] [default to undefined]
**warehouse** | [**PartnerShipmentWarehouseDTO**](PartnerShipmentWarehouseDTO.md) |  | [optional] [default to undefined]
**warehouseTo** | [**PartnerShipmentWarehouseDTO**](PartnerShipmentWarehouseDTO.md) |  | [optional] [default to undefined]
**externalId** | **string** | Идентификатор отгрузки в вашей системе. Если вы еще не передавали идентификатор, вернется идентификатор из параметра &#x60;id&#x60;. | [optional] [default to undefined]
**deliveryService** | [**DeliveryServiceDTO**](DeliveryServiceDTO.md) |  | [optional] [default to undefined]
**palletsCount** | [**PalletsCountDTO**](PalletsCountDTO.md) |  | [optional] [default to undefined]
**orderIds** | **Set&lt;number&gt;** | Идентификаторы заказов в отгрузке. | [default to undefined]
**draftCount** | **number** | Количество заказов, которое Маркет запланировал к отгрузке. | [default to undefined]
**plannedCount** | **number** | Количество заказов, которое Маркет подтвердил к отгрузке. | [default to undefined]
**factCount** | **number** | Количество заказов, принятых в сортировочном центре или пункте приема. | [default to undefined]
**signature** | [**SignatureDTO**](SignatureDTO.md) |  | [default to undefined]
**currentStatus** | [**ShipmentStatusChangeDTO**](ShipmentStatusChangeDTO.md) |  | [optional] [default to undefined]
**availableActions** | [**Set&lt;ShipmentActionType&gt;**](ShipmentActionType.md) | Доступные действия над отгрузкой. | [default to undefined]

## Example

```typescript
import { ShipmentDTO } from './api';

const instance: ShipmentDTO = {
    id,
    planIntervalFrom,
    planIntervalTo,
    shipmentType,
    warehouse,
    warehouseTo,
    externalId,
    deliveryService,
    palletsCount,
    orderIds,
    draftCount,
    plannedCount,
    factCount,
    signature,
    currentStatus,
    availableActions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
