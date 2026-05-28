# V1WarehouseERFBSAggregatorDeliveryMethodUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**courier_comment** | **string** | Комментарий для курьера. | [optional] [default to undefined]
**courier_phones** | **Array&lt;string&gt;** | Номера телефонов для связи с курьером. | [optional] [default to undefined]
**cut_in** | **number** | Время сборки. | [optional] [default to undefined]
**deliver_to_pvz** | **boolean** | &#x60;true&#x60;, если доставка Ozon Express в пункт выдачи Ozon.  | [optional] [default to undefined]
**delivery_costs** | [**V1WarehouseERFBSAggregatorDeliveryMethodUpdateRequestDeliveryCosts**](V1WarehouseERFBSAggregatorDeliveryMethodUpdateRequestDeliveryCosts.md) |  | [optional] [default to undefined]
**delivery_method_id** | **number** | Идентификатор метода доставки. | [default to undefined]
**name** | **string** | Название метода доставки. | [optional] [default to undefined]
**return_settings** | [**V1WarehouseERFBSAggregatorDeliveryMethodUpdateRequestReturnSettings**](V1WarehouseERFBSAggregatorDeliveryMethodUpdateRequestReturnSettings.md) |  | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [default to undefined]

## Example

```typescript
import { V1WarehouseERFBSAggregatorDeliveryMethodUpdateRequest } from './api';

const instance: V1WarehouseERFBSAggregatorDeliveryMethodUpdateRequest = {
    courier_comment,
    courier_phones,
    cut_in,
    deliver_to_pvz,
    delivery_costs,
    delivery_method_id,
    name,
    return_settings,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
