# V1WarehouseERFBSAggregatorCreateRequestDeliveryMethodReturnSettings

Информация о получении возвратов от покупателей.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_days** | **number** | Количество дней, за которое вы свяжетесь с покупателем. Параметр обязательный, если &#x60;return_method &#x3D; COURIER&#x60;. | [optional] [default to undefined]
**post_office_zipcode** | **string** | Индекс отделения Почты России для [«лёгкого возврата»](https://seller-edu.ozon.ru/rfbs/vozvraty/vozvraty#%C2%AB%D0%BB%D1%91%D0%B3%D0%BA%D0%B8%D0%B8-%D0%B2%D0%BE%D0%B7%D0%B2%D1%80%D0%B0%D1%82%C2%BB-%D0%BF%D0%BE%D1%87%D1%82%D0%BE%D0%B8-%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B8). | [optional] [default to undefined]
**return_method** | [**V1WarehouseERFBSAggregatorCreateRequestDeliveryMethodReturnSettingsReturnMethodEnum**](V1WarehouseERFBSAggregatorCreateRequestDeliveryMethodReturnSettingsReturnMethodEnum.md) |  | [default to undefined]
**transport_company_name** | **string** | Название транспортной компании. Параметр обязательный, если &#x60;return_method &#x3D; TRANSPORT_COMPANY&#x60;. | [optional] [default to undefined]

## Example

```typescript
import { V1WarehouseERFBSAggregatorCreateRequestDeliveryMethodReturnSettings } from './api';

const instance: V1WarehouseERFBSAggregatorCreateRequestDeliveryMethodReturnSettings = {
    contact_days,
    post_office_zipcode,
    return_method,
    transport_company_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
