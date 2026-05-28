# CustomerDTO

Данные получателя заказа или отправителя возврата.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstName** | **string** | Имя. | [default to undefined]
**lastName** | **string** | Фамилия. | [default to undefined]
**middleName** | **string** | Отчество. | [optional] [default to undefined]
**phone** | **string** | Номер телефона.  Формат: &#x60;+&lt;код_страны&gt;&lt;код_региона&gt;&lt;номер_телефона&gt;&#x60;.  | [default to undefined]

## Example

```typescript
import { CustomerDTO } from './api';

const instance: CustomerDTO = {
    firstName,
    lastName,
    middleName,
    phone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
