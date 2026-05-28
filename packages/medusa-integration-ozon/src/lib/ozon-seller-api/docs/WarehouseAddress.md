# WarehouseAddress

Информация об адресе склада продавца.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | Адрес. | [optional] [default to undefined]
**city** | **string** | Город. | [optional] [default to undefined]
**coordinates** | [**WarehouseAddressCoordinates**](WarehouseAddressCoordinates.md) |  | [optional] [default to undefined]
**country_code** | **string** | Код страны в формате ISO 2. | [optional] [default to undefined]
**macrolocal_cluster_id** | **number** | Идентификатор кластера. | [optional] [default to undefined]
**region** | **string** | Регион. | [optional] [default to undefined]
**timezone** | **string** | Часовой пояс. | [optional] [default to undefined]

## Example

```typescript
import { WarehouseAddress } from './api';

const instance: WarehouseAddress = {
    address,
    city,
    coordinates,
    country_code,
    macrolocal_cluster_id,
    region,
    timezone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
