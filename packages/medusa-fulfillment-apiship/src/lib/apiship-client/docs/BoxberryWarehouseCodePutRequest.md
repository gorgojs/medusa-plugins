# BoxberryWarehouseCodePutRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Наименование склада | [default to undefined]
**zip** | **string** | Почтовый индекс | [optional] [default to undefined]
**address** | **string** | Адрес склада | [optional] [default to undefined]
**contactPerson** | **string** | Контактное лицо | [optional] [default to undefined]
**contactPhone** | **string** | Контактный телефон | [optional] [default to undefined]
**receptionPointCode** | **string** | Код пункта приема Боксберри | [default to undefined]
**providerConnectId** | **string** | ID подключения к СД | [optional] [default to undefined]

## Example

```typescript
import { BoxberryWarehouseCodePutRequest } from './api';

const instance: BoxberryWarehouseCodePutRequest = {
    name,
    zip,
    address,
    contactPerson,
    contactPhone,
    receptionPointCode,
    providerConnectId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
