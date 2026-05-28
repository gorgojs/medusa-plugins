# OutletAddressDTO

Адрес точки продаж. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**regionId** | **number** | Идентификатор региона.  Идентификатор можно получить c помощью запроса [GET v2/regions](../../reference/regions/searchRegionsByName.md).  {% note alert \&quot;Типы регионов при создании и редактировании точек продаж\&quot; %}  Указывайте только регионы типов &#x60;TOWN&#x60; (город), &#x60;CITY&#x60; (крупный город) и &#x60;REPUBLIC_AREA&#x60; (район субъекта федерации). Тип региона указан в выходных параметрах &#x60;type&#x60; запросов [GET v2/regions](../../reference/regions/searchRegionsByName.md) и [GET v2/regions/{regionId}](../../reference/regions/searchRegionsById.md).  {% endnote %}  | [default to undefined]
**street** | **string** | Улица. | [optional] [default to undefined]
**number** | **string** | Номер дома. | [optional] [default to undefined]
**building** | **string** | Номер строения. | [optional] [default to undefined]
**estate** | **string** | Номер владения. | [optional] [default to undefined]
**block** | **string** | Номер корпуса. | [optional] [default to undefined]
**additional** | **string** | Дополнительная информация. | [optional] [default to undefined]
**km** | **number** | Порядковый номер километра дороги, на котором располагается точка продаж, если отсутствует улица. | [optional] [default to undefined]
**city** | **string** | {% note warning \&quot;В ответах города и населенные пункты возвращаются в параметре &#x60;regionId&#x60;.\&quot; %}     {% endnote %}  | [optional] [default to undefined]

## Example

```typescript
import { OutletAddressDTO } from './api';

const instance: OutletAddressDTO = {
    regionId,
    street,
    number,
    building,
    estate,
    block,
    additional,
    km,
    city,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
