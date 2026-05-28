# V1DraftCrossdockCreateRequestDeliveryInfo

Информация о доставке.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**drop_off_warehouse** | [**V1DraftCrossdockCreateRequestDeliveryInfoDropOffWarehouse**](V1DraftCrossdockCreateRequestDeliveryInfoDropOffWarehouse.md) |  | [optional] [default to undefined]
**seller_warehouse_id** | **number** | Идентификатор склада продавца. Если &#x60;type &#x3D; PICKUP&#x60;, параметр обязательный. &lt;br&gt;&lt;br&gt; Получите значение параметра методом [/v1/warehouse/fbo/seller/list](#operation/WarehouseFboSellerList). | [optional] [default to undefined]
**type** | [**V1DraftCrossdockCreateRequestDeliveryInfoTypeEnum**](V1DraftCrossdockCreateRequestDeliveryInfoTypeEnum.md) |  | [default to undefined]

## Example

```typescript
import { V1DraftCrossdockCreateRequestDeliveryInfo } from './api';

const instance: V1DraftCrossdockCreateRequestDeliveryInfo = {
    drop_off_warehouse,
    seller_warehouse_id,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
