# DraftGetWarehouseFboListResponseSearch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | Адрес склада. | [optional] [default to undefined]
**coordinates** | [**DraftGetWarehouseFboListResponseCoordinate**](DraftGetWarehouseFboListResponseCoordinate.md) |  | [optional] [default to undefined]
**name** | **string** | Название склада. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада, пункта выдачи заказов или сортировочного центра. | [optional] [default to undefined]
**warehouse_type** | [**DraftGetWarehouseFboListResponseWarehouseType**](DraftGetWarehouseFboListResponseWarehouseType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DraftGetWarehouseFboListResponseSearch } from './api';

const instance: DraftGetWarehouseFboListResponseSearch = {
    address,
    coordinates,
    name,
    warehouse_id,
    warehouse_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
