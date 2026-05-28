# DeliveryMethodCarriage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_blr_traceable** | **boolean** | &#x60;true&#x60;, если в отгрузке есть товары, для которых нужны дополнительные документы при отправке в Беларусь.  | [optional] [default to undefined]
**available_actions** | **Array&lt;string&gt;** | Доступные действия с отгрузкой. | [optional] [default to undefined]
**carriage_volume** | **number** | Объём отгрузки в литрах. | [optional] [default to undefined]
**id** | **number** | Идентификатор отгрузки. Если &#x60;0&#x60; — отгрузка, которую можно создать. | [optional] [default to undefined]
**pickup_fee** | [**CarriagePickupFee**](CarriagePickupFee.md) |  | [optional] [default to undefined]
**postings_count** | **number** | Количество отправлений в отгрузке. | [optional] [default to undefined]
**quantum_count** | **number** | Количество квантов в отгрузке. | [optional] [default to undefined]
**status** | **string** | Статус отгрузки для запрашиваемых метода и даты. | [optional] [default to undefined]

## Example

```typescript
import { DeliveryMethodCarriage } from './api';

const instance: DeliveryMethodCarriage = {
    all_blr_traceable,
    available_actions,
    carriage_volume,
    id,
    pickup_fee,
    postings_count,
    quantum_count,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
