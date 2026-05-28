# FbpWarehouseListResponseWarehouse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_detailing** | [**FbpWarehouseListResponseAddressDetailing**](FbpWarehouseListResponseAddressDetailing.md) |  | [optional] [default to undefined]
**id** | **number** | Идентификатор склада. | [optional] [default to undefined]
**is_bonded** | **boolean** | &#x60;true&#x60;, если склад бондовый.  | [optional] [default to undefined]
**name** | **string** | Название склада. | [optional] [default to undefined]
**partner_name** | **string** | Название партнёра. | [optional] [default to undefined]
**supply_types** | **Array&lt;number&gt;** | Тип поставки. | [optional] [default to undefined]
**timezone_name** | **string** | Часовой пояс склада. | [optional] [default to undefined]

## Example

```typescript
import { FbpWarehouseListResponseWarehouse } from './api';

const instance: FbpWarehouseListResponseWarehouse = {
    address_detailing,
    id,
    is_bonded,
    name,
    partner_name,
    supply_types,
    timezone_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
