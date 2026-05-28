# V1WarehouseERFBSNonIntegratedDeliveryMethodUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**courier_cutoff** | **number** | Скорость отгрузки. | [default to undefined]
**cut_in** | **number** | Время сборки. | [default to undefined]
**delivery_method_id** | **number** | Идентификатор метода доставки. | [default to undefined]
**name** | **string** | Название метода доставки. | [default to undefined]
**return_settings** | [**V1WarehouseERFBSNonIntegratedDeliveryMethodUpdateRequestReturnSettings**](V1WarehouseERFBSNonIntegratedDeliveryMethodUpdateRequestReturnSettings.md) |  | [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [default to undefined]

## Example

```typescript
import { V1WarehouseERFBSNonIntegratedDeliveryMethodUpdateRequest } from './api';

const instance: V1WarehouseERFBSNonIntegratedDeliveryMethodUpdateRequest = {
    courier_cutoff,
    cut_in,
    delivery_method_id,
    name,
    return_settings,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
