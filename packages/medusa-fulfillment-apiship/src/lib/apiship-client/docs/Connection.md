# Connection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [readonly] [default to undefined]
**companyId** | **string** | ID - компании (можно не указывать) | [optional] [readonly] [default to undefined]
**providerKey** | **string** | Код службы доставки | [optional] [default to undefined]
**name** | **string** | Название подключения | [optional] [default to undefined]
**inn** | **string** | ИНН вашей организации | [optional] [default to undefined]
**insuranceRate** | **number** | Своя для компании процентная ставка страховки (%) - перекрывает общую для СД | [optional] [default to undefined]
**cashServiceRate** | **number** | Своя для компании процентная ставка кассового обслуживания (%) - перекрывает общую для СД | [optional] [default to undefined]
**connectParams** | **{ [key: string]: string; }** | Данные берутся из метода [/connections/schemas](#/connections/schemas) | [optional] [default to undefined]
**isUseBaseConnect** | **number** | 0 - никогда не использовать базовое подключение ApiShip; 1 - подключение будет использовать базовое подключение ApiShip, т.е. передавать connectParams не нужно; 2 - будет использовано базовое подключение, если в процессе калькуляции по текущим параметрам подключения возникнет ошибка; | [optional] [default to undefined]
**created** | **string** | Дата создания | [optional] [readonly] [default to undefined]
**updated** | **string** | Дата обновления | [optional] [readonly] [default to undefined]

## Example

```typescript
import { Connection } from './api';

const instance: Connection = {
    id,
    companyId,
    providerKey,
    name,
    inn,
    insuranceRate,
    cashServiceRate,
    connectParams,
    isUseBaseConnect,
    created,
    updated,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
