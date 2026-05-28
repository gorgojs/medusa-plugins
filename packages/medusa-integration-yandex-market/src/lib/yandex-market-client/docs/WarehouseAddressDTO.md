# WarehouseAddressDTO

Адрес склада.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **string** | Город. | [default to undefined]
**street** | **string** | Улица. | [optional] [default to undefined]
**number** | **string** | Номер дома. | [optional] [default to undefined]
**building** | **string** | Номер строения. | [optional] [default to undefined]
**block** | **string** | Номер корпуса. | [optional] [default to undefined]
**gps** | [**GpsDTO**](GpsDTO.md) |  | [default to undefined]

## Example

```typescript
import { WarehouseAddressDTO } from './api';

const instance: WarehouseAddressDTO = {
    city,
    street,
    number,
    building,
    block,
    gps,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
