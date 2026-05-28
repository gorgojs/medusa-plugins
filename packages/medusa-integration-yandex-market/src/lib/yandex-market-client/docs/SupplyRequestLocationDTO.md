# SupplyRequestLocationDTO

Информации о складе или ПВЗ в заявке.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestedDate** | **string** | Дата и время поставки на склад или в ПВЗ. | [optional] [default to undefined]
**serviceId** | **number** | Идентификатор склада или логистического партнера ПВЗ. | [default to undefined]
**name** | **string** | Название склада или ПВЗ. | [default to undefined]
**address** | [**SupplyRequestLocationAddressDTO**](SupplyRequestLocationAddressDTO.md) |  | [default to undefined]
**type** | [**SupplyRequestLocationType**](SupplyRequestLocationType.md) |  | [default to undefined]

## Example

```typescript
import { SupplyRequestLocationDTO } from './api';

const instance: SupplyRequestLocationDTO = {
    requestedDate,
    serviceId,
    name,
    address,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
