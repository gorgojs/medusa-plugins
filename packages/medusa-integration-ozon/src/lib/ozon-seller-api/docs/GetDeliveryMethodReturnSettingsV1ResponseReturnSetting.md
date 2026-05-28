# GetDeliveryMethodReturnSettingsV1ResponseReturnSetting

Информация о возвратных настройках.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**courier_details** | [**ReturnSettingCourierDetails**](ReturnSettingCourierDetails.md) |  | [optional] [default to undefined]
**post_office_zipcode** | **string** | Индекс отделения Почты России для [«лёгкого возврата»](https://seller-edu.ozon.ru/rfbs/vozvraty/vozvraty#«лёгкии-возврат»-почтои-россии). | [optional] [default to undefined]
**transport_company_details** | [**ReturnSettingTransportCompanyDetails**](ReturnSettingTransportCompanyDetails.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetDeliveryMethodReturnSettingsV1ResponseReturnSetting } from './api';

const instance: GetDeliveryMethodReturnSettingsV1ResponseReturnSetting = {
    courier_details,
    post_office_zipcode,
    transport_company_details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
