# ConfirmShipmentRequest

Запрос для подтверждения отгрузки.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalShipmentId** | **string** | Идентификатор отгрузки в системе поставщика. | [optional] [default to undefined]
**signatory** | **string** | Логин пользователя в Яндекс ID, от имени которого будет подписываться электронный акт приема-передачи.  Указывается без &#x60;@yandex.ru&#x60;.  Где его найти:  * на странице [Яндекс ID](https://id.yandex.ru); * в [кабинете продавца на Маркете](https://partner.market.yandex.ru/):    * в верхнем правом углу под иконкой пользователя;   * на странице **Настройки** → **Сотрудники и доступы**.  | [optional] [default to undefined]

## Example

```typescript
import { ConfirmShipmentRequest } from './api';

const instance: ConfirmShipmentRequest = {
    externalShipmentId,
    signatory,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
