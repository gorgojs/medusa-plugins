# CourierDeliveryAddressDTO

Адрес доставки.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fullAddress** | **string** | Полный адрес с точностью до номера дома. | [default to undefined]
**entrance** | **string** | Номер подъезда. | [optional] [default to undefined]
**floor** | **number** | Этаж. | [optional] [default to undefined]
**apartment** | **string** | Номер квартиры или офиса. | [optional] [default to undefined]

## Example

```typescript
import { CourierDeliveryAddressDTO } from './api';

const instance: CourierDeliveryAddressDTO = {
    fullAddress,
    entrance,
    floor,
    apartment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
