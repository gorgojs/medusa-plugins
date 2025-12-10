# Params


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [default to undefined]
**companyId** | **number** | ID компании | [optional] [default to undefined]
**providerKey** | **string** | Ключ (alias) провайдера (службы доставки) | [optional] [default to undefined]
**connectParams** | **object** | Параметры подключения. Для разных служб - разные ключи в объекте | [optional] [default to undefined]
**insuranceRate** | **number** | Своя для компании процентная ставка страховки (%) | [optional] [default to undefined]
**cashServiceRate** | **number** | Своя для компании процентная ставка кассового обслуживания (%) | [optional] [default to undefined]
**created** | **number** | Дата создания | [optional] [default to undefined]
**updated** | **number** | Дата обновления | [optional] [default to undefined]
**company** | **object** | Информация о связанной с настройками компании | [optional] [default to undefined]

## Example

```typescript
import { Params } from './api';

const instance: Params = {
    id,
    companyId,
    providerKey,
    connectParams,
    insuranceRate,
    cashServiceRate,
    created,
    updated,
    company,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
