# GetDeliveryOptionsRequest

Запрос для получения вариантов доставки.  Используйте `pickupDelivery` для получения вариантов доставки самовывозом и `courierDelivery` для получения вариантов доставки курьером. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;GetDeliveryOptionsItemDTO&gt;**](GetDeliveryOptionsItemDTO.md) | Товары на складах, для которых нужно вернуть варианты доставки.  В рамках одного запроса все значения &#x60;offerId&#x60; должны быть уникальными. Не допускается передача двух объектов с одинаковым &#x60;offerId&#x60;.  | [default to undefined]
**pickupDelivery** | [**PickupDeliveryParametersDTO**](PickupDeliveryParametersDTO.md) |  | [optional] [default to undefined]
**courierDelivery** | [**CourierDeliveryParametersDTO**](CourierDeliveryParametersDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetDeliveryOptionsRequest } from './api';

const instance: GetDeliveryOptionsRequest = {
    items,
    pickupDelivery,
    courierDelivery,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
