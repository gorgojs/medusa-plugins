# OrderStatus

Статус заказа

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | Идентификатор статуса заказа | [optional] [default to undefined]
**name** | **string** | Название статуса | [optional] [default to undefined]
**description** | **string** | Описание статуса | [optional] [default to undefined]
**created** | **string** | дата и время установки данного статуса | [optional] [default to undefined]
**providerCode** | **string** | Код статуса в системе службы доставки | [optional] [default to undefined]
**providerName** | **string** | Название статуса в системе службы доставки | [optional] [default to undefined]
**providerDescription** | **string** | Описание статуса в системе службы доставки | [optional] [default to undefined]
**createdProvider** | **string** | Дата создания статуса в системе службы доставки | [optional] [default to undefined]
**errorCode** | **string** | Коды ошибок: 100 - ошибка в ApiShip; 200 - ошибка в СД; 300 - ошибка клиента (некорректные данные). | [optional] [default to undefined]

## Example

```typescript
import { OrderStatus } from './api';

const instance: OrderStatus = {
    key,
    name,
    description,
    created,
    providerCode,
    providerName,
    providerDescription,
    createdProvider,
    errorCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
