# V3Address

Информация об адресе доставки.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_tail** | **string** | Адрес в текстовом формате. | [optional] [default to undefined]
**city** | **string** | Город доставки. | [optional] [default to undefined]
**comment** | **string** | Комментарий к заказу. | [optional] [default to undefined]
**country** | **string** | Страна доставки. | [optional] [default to undefined]
**district** | **string** | Район доставки. | [optional] [default to undefined]
**latitude** | **number** | Широта. | [optional] [default to undefined]
**longitude** | **number** | Долгота. | [optional] [default to undefined]
**provider_pvz_code** | **string** | Код пункта выдачи заказов 3PL провайдера. | [optional] [default to undefined]
**pvz_code** | **number** | Код пункта выдачи заказов. | [optional] [default to undefined]
**region** | **string** | Регион доставки. | [optional] [default to undefined]
**zip_code** | **string** | Почтовый индекс получателя. | [optional] [default to undefined]

## Example

```typescript
import { V3Address } from './api';

const instance: V3Address = {
    address_tail,
    city,
    comment,
    country,
    district,
    latitude,
    longitude,
    provider_pvz_code,
    pvz_code,
    region,
    zip_code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
