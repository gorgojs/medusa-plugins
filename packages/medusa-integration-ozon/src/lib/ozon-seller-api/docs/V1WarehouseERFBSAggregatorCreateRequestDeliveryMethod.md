# V1WarehouseERFBSAggregatorCreateRequestDeliveryMethod

Информация о методе доставки «Партнёры Ozon».

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**courier_comment** | **string** | Комментарий для курьера. | [optional] [default to undefined]
**courier_phones** | **Array&lt;string&gt;** | Номера телефонов для связи с курьером. | [default to undefined]
**cut_in** | **number** | Время сборки. | [default to undefined]
**deliver_to_pvz** | **boolean** | &#x60;true&#x60;, если доставка Ozon Express в пункт выдачи Ozon.  | [default to undefined]
**delivery_costs** | [**WarehouseERFBSAggregatorCreateRequestDeliveryMethodDeliveryCosts**](WarehouseERFBSAggregatorCreateRequestDeliveryMethodDeliveryCosts.md) |  | [default to undefined]
**name** | **string** | Название метода доставки. | [default to undefined]
**return_settings** | [**V1WarehouseERFBSAggregatorCreateRequestDeliveryMethodReturnSettings**](V1WarehouseERFBSAggregatorCreateRequestDeliveryMethodReturnSettings.md) |  | [default to undefined]

## Example

```typescript
import { V1WarehouseERFBSAggregatorCreateRequestDeliveryMethod } from './api';

const instance: V1WarehouseERFBSAggregatorCreateRequestDeliveryMethod = {
    courier_comment,
    courier_phones,
    cut_in,
    deliver_to_pvz,
    delivery_costs,
    name,
    return_settings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
