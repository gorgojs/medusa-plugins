# OrderCreateRequestRecipient

Информация о получателе.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipient_first_name** | **string** | Имя. | [default to undefined]
**recipient_last_name** | **string** | Фамилия. | [default to undefined]
**recipient_middle_name** | **string** | Отчество. | [optional] [default to undefined]
**recipient_phone** | **string** | Номер телефона. | [default to undefined]

## Example

```typescript
import { OrderCreateRequestRecipient } from './api';

const instance: OrderCreateRequestRecipient = {
    recipient_first_name,
    recipient_last_name,
    recipient_middle_name,
    recipient_phone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
