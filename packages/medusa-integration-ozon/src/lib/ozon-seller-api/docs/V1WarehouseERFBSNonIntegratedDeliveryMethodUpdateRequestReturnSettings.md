# V1WarehouseERFBSNonIntegratedDeliveryMethodUpdateRequestReturnSettings

Настройки возвратов от покупателей.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_days** | **number** | Количество дней, за которое вы свяжетесь с покупателем. Параметр обязательный, если &#x60;return_method &#x3D; COURIER&#x60;. | [optional] [default to undefined]
**post_office_zipcode** | **string** | Индекс отделения Почты России. | [optional] [default to undefined]
**return_method** | [**V1WarehouseERFBSNonIntegratedDeliveryMethodUpdateRequestReturnSettingsReturnMethodEnum**](V1WarehouseERFBSNonIntegratedDeliveryMethodUpdateRequestReturnSettingsReturnMethodEnum.md) |  | [default to undefined]
**transport_company_name** | **string** | Название транспортной компании. Параметр обязательный, если &#x60;return_method &#x3D; TRANSPORT_COMPANY&#x60;. | [optional] [default to undefined]

## Example

```typescript
import { V1WarehouseERFBSNonIntegratedDeliveryMethodUpdateRequestReturnSettings } from './api';

const instance: V1WarehouseERFBSNonIntegratedDeliveryMethodUpdateRequestReturnSettings = {
    contact_days,
    post_office_zipcode,
    return_method,
    transport_company_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
