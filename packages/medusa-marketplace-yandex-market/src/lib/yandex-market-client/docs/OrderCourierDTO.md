# OrderCourierDTO

Информация о курьере.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fullName** | **string** | Полное имя курьера. | [optional] [default to undefined]
**phone** | **string** | Номер телефона курьера. | [optional] [default to undefined]
**phoneExtension** | **string** | Добавочный номер телефона. | [optional] [default to undefined]
**vehicleNumber** | **string** | Номер транспортного средства. | [optional] [default to undefined]
**vehicleDescription** | **string** | Описание машины. Например, модель и цвет. | [optional] [default to undefined]

## Example

```typescript
import { OrderCourierDTO } from './api';

const instance: OrderCourierDTO = {
    fullName,
    phone,
    phoneExtension,
    vehicleNumber,
    vehicleDescription,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
