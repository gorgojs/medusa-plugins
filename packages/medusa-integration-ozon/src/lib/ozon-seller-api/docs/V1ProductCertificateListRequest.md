# V1ProductCertificateListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул, привязанный к сертификату. Передайте параметр, если нужны сертификаты, к которым привязаны определённые товары. | [optional] [default to undefined]
**status** | **string** | Статус сертификата. Передайте параметр, если нужны сертификаты с определённым статусом. | [optional] [default to undefined]
**type** | **string** | Тип сертификата. Передайте параметр, если нужны сертификаты с определённым типом. | [optional] [default to undefined]
**page** | **number** | Страница, с которой следует выводить список. Минимальное значение — 1. | [default to undefined]
**page_size** | **number** | Количество объектов на странице. Значение — от 1 до 1000. | [default to undefined]

## Example

```typescript
import { V1ProductCertificateListRequest } from './api';

const instance: V1ProductCertificateListRequest = {
    offer_id,
    status,
    type,
    page,
    page_size,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
