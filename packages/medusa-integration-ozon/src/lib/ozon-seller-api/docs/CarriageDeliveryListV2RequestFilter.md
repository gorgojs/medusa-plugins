# CarriageDeliveryListV2RequestFilter

Фильтр для поиска методов доставки и отгрузок.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_method_id** | **number** | Идентификатор метода доставки. | [optional] [default to undefined]
**departure_date** | **string** | Дата отгрузки. По умолчанию — текущая дата. | [optional] [default to undefined]

## Example

```typescript
import { CarriageDeliveryListV2RequestFilter } from './api';

const instance: CarriageDeliveryListV2RequestFilter = {
    delivery_method_id,
    departure_date,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
