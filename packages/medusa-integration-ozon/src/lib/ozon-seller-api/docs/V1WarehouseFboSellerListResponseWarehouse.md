# V1WarehouseFboSellerListResponseWarehouse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**WarehouseAddress**](WarehouseAddress.md) |  | [optional] [default to undefined]
**contacts** | [**WarehouseContacts**](WarehouseContacts.md) |  | [optional] [default to undefined]
**courier_comment** | **string** | Комментарий для курьера. | [optional] [default to undefined]
**is_active** | **boolean** | &#x60;true&#x60;, если склад активный.  | [optional] [default to undefined]
**is_pickup** | **boolean** | &#x60;true&#x60;, если доступна отгрузка курьером.  | [optional] [default to undefined]
**seller_warehouse_id** | **number** | Идентификатор склада продавца. | [optional] [default to undefined]
**seller_warehouse_name** | **string** | Название склада продавца. | [optional] [default to undefined]
**working_days** | [**Array&lt;WarehouseWorkingDay&gt;**](WarehouseWorkingDay.md) | Рабочие дни склада продавца. | [optional] [default to undefined]

## Example

```typescript
import { V1WarehouseFboSellerListResponseWarehouse } from './api';

const instance: V1WarehouseFboSellerListResponseWarehouse = {
    address,
    contacts,
    courier_comment,
    is_active,
    is_pickup,
    seller_warehouse_id,
    seller_warehouse_name,
    working_days,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
