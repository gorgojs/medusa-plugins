# LogisticPointAddressDTO

Адрес пункта выдачи.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fullAddress** | **string** | Полный адрес. | [default to undefined]
**gps** | [**GpsDTO**](GpsDTO.md) |  | [default to undefined]
**regionId** | **number** | Идентификатор региона.  Информацию о регионе можно получить c помощью метода [GET v2/regions](../../reference/regions/searchRegionsById.md).  | [default to undefined]
**city** | **string** | Город. | [optional] [default to undefined]
**street** | **string** | Улица. | [optional] [default to undefined]
**house** | **string** | Номер дома. | [optional] [default to undefined]
**building** | **string** | Номер строения. | [optional] [default to undefined]
**block** | **string** | Номер корпуса. | [optional] [default to undefined]
**km** | **number** | Порядковый номер километра, на котором располагается пункт выдачи.  Указывается, если в адресе нет улицы.  | [optional] [default to undefined]
**additional** | **string** | Дополнительная информация. | [optional] [default to undefined]

## Example

```typescript
import { LogisticPointAddressDTO } from './api';

const instance: LogisticPointAddressDTO = {
    fullAddress,
    gps,
    regionId,
    city,
    street,
    house,
    building,
    block,
    km,
    additional,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
