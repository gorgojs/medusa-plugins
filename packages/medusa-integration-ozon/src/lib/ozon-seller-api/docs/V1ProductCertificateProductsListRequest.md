# V1ProductCertificateProductsListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_id** | **number** | Идентификатор сертификата. | [default to undefined]
**product_status_code** | **string** | Статус проверки товара при привязке к сертификату. | [optional] [default to undefined]
**page** | **number** | Номер страницы, с которой выводить список. Минимальное значение — 1. | [default to undefined]
**page_size** | **number** | Количество объектов на странице. Значение — от 1 до 1000. | [default to undefined]

## Example

```typescript
import { V1ProductCertificateProductsListRequest } from './api';

const instance: V1ProductCertificateProductsListRequest = {
    certificate_id,
    product_status_code,
    page,
    page_size,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
