# V3Customer

Данные о покупателе.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**V3Address**](V3Address.md) |  | [optional] [default to undefined]
**customer_id** | **number** | Идентификатор покупателя. | [optional] [default to undefined]
**name** | **string** | Имя покупателя. | [optional] [default to undefined]
**phone** | **string** | Подменный контактный телефон покупателя.   [Подробнее о подменных номерах в Базе знаний](https://seller-edu.ozon.ru/rfbs/orders-cancellations/replacement-number)  | [optional] [default to undefined]

## Example

```typescript
import { V3Customer } from './api';

const instance: V3Customer = {
    address,
    customer_id,
    name,
    phone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
