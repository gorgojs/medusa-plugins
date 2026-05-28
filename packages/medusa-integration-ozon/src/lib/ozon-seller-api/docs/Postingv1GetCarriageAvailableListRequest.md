# Postingv1GetCarriageAvailableListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_method_id** | **number** | Фильтр по методу доставки. Можно получить с помощью метода [/v1/delivery-method/list](#operation/WarehouseAPI_DeliveryMethodList). | [default to undefined]
**departure_date** | **string** | Дата отгрузки. По умолчанию — текущая дата. | [optional] [default to undefined]

## Example

```typescript
import { Postingv1GetCarriageAvailableListRequest } from './api';

const instance: Postingv1GetCarriageAvailableListRequest = {
    delivery_method_id,
    departure_date,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
