# DefaultData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sender_phone** | **string** | Контактный телефон по умолчанию | [optional] [default to undefined]
**sender_city** | **string** | Город по умолчанию | [optional] [default to undefined]
**sender_countryCode** | **string** | Код страны в соответствии с ISO 3166-1 alpha-2 по умолчанию | [optional] [default to undefined]
**sender_street** | **string** | Улица по умолчанию | [optional] [default to undefined]
**sender_house** | **string** | Номер дома по умолчанию | [optional] [default to undefined]
**order_pickupType** | **number** | Тип забора груза по умолчанию | [optional] [default to undefined]
**order_deliveryType** | **number** | Тип доставки по умолчанию | [optional] [default to undefined]
**cost_codCost** | **string** | Сумма наложенного платежа будет считаться по указанной колонке или можно указать значение по умолчанию | [optional] [default to undefined]

## Example

```typescript
import { DefaultData } from './api';

const instance: DefaultData = {
    sender_phone,
    sender_city,
    sender_countryCode,
    sender_street,
    sender_house,
    order_pickupType,
    order_deliveryType,
    cost_codCost,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
