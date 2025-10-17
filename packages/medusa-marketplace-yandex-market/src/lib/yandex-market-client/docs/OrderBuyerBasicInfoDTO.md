# OrderBuyerBasicInfoDTO

Информация о покупателе с базовыми полями.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Идентификатор покупателя. | [optional] [default to undefined]
**lastName** | **string** | Фамилия покупателя. | [optional] [default to undefined]
**firstName** | **string** | Имя покупателя. | [optional] [default to undefined]
**middleName** | **string** | Отчество покупателя. | [optional] [default to undefined]
**type** | [**OrderBuyerType**](OrderBuyerType.md) |  | [default to undefined]

## Example

```typescript
import { OrderBuyerBasicInfoDTO } from './api';

const instance: OrderBuyerBasicInfoDTO = {
    id,
    lastName,
    firstName,
    middleName,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
