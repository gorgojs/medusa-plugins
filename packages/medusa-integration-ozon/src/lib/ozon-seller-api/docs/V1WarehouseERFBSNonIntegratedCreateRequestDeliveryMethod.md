# V1WarehouseERFBSNonIntegratedCreateRequestDeliveryMethod

Информация о методе доставки «Вы или сторонняя служба».

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**courier_cutoff** | **number** | Скорость отгрузки в доставку. | [default to undefined]
**cut_in** | **number** | Время сборки. | [default to undefined]
**delivery_polygons** | [**Array&lt;DeliveryMethodDeliveryPolygon&gt;**](DeliveryMethodDeliveryPolygon.md) | Полигоны доставки, созданные через [/v1/polygon/create](#operation/PolygonAPI_CreatePolygon), с указанием времени доставки в каждый. | [default to undefined]
**name** | **string** | Название метода доставки. | [default to undefined]
**return_settings** | [**V1WarehouseERFBSNonIntegratedCreateRequestDeliveryMethodReturnSettings**](V1WarehouseERFBSNonIntegratedCreateRequestDeliveryMethodReturnSettings.md) |  | [default to undefined]

## Example

```typescript
import { V1WarehouseERFBSNonIntegratedCreateRequestDeliveryMethod } from './api';

const instance: V1WarehouseERFBSNonIntegratedCreateRequestDeliveryMethod = {
    courier_cutoff,
    cut_in,
    delivery_polygons,
    name,
    return_settings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
