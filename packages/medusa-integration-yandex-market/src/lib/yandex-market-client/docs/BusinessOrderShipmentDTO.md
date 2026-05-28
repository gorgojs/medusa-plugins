# BusinessOrderShipmentDTO

Информация об отгрузке заказа.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор отгрузки. | [optional] [default to undefined]
**shipmentDate** | **string** | Дата отгрузки.  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [default to undefined]
**shipmentTime** | **string** | Время отгрузки. | [optional] [default to undefined]

## Example

```typescript
import { BusinessOrderShipmentDTO } from './api';

const instance: BusinessOrderShipmentDTO = {
    id,
    shipmentDate,
    shipmentTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
