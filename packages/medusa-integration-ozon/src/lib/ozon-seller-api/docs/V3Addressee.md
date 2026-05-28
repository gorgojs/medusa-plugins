# V3Addressee

Контактные данные получателя.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Имя покупателя. | [optional] [default to undefined]
**phone** | **string** | Подменный контактный телефон получателя.   [Подробнее о подменных номерах в Базе знаний](https://seller-edu.ozon.ru/rfbs/orders-cancellations/replacement-number)  | [optional] [default to undefined]

## Example

```typescript
import { V3Addressee } from './api';

const instance: V3Addressee = {
    name,
    phone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
