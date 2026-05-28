# SellerInfoResponseCompany

Компания.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **string** | Страна. | [optional] [default to undefined]
**currency** | **string** | Валюта. | [optional] [default to undefined]
**inn** | **string** | ИНН. | [optional] [default to undefined]
**legal_name** | **string** | Название юридического лица. | [optional] [default to undefined]
**name** | **string** | Название компании на Ozon. | [optional] [default to undefined]
**ogrn** | **string** | ОГРН. | [optional] [default to undefined]
**ownership_form** | **string** | Форма собственности. | [optional] [default to undefined]
**tax_system** | [**CompanyTaxSystemEnum**](CompanyTaxSystemEnum.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SellerInfoResponseCompany } from './api';

const instance: SellerInfoResponseCompany = {
    country,
    currency,
    inn,
    legal_name,
    name,
    ogrn,
    ownership_form,
    tax_system,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
