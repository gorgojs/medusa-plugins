# V1CargoesCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cargoes** | [**Array&lt;V1CargoesCreateRequestCargo&gt;**](V1CargoesCreateRequestCargo.md) | Информация о грузоместах. Вы можете передать не больше 40 палет или 30 коробок. | [default to undefined]
**delete_current_version** | **boolean** | &#x60;true&#x60;, если нужно удалить предыдущие грузоместа.  | [optional] [default to undefined]
**supply_id** | **number** | Идентификатор поставки. Можно получить с помощью метода [/v3/supply-order/get](#operation/SupplyOrderGet). Нужное значение — в параметре ответа &#x60;orders.supplies.supply_id&#x60;. | [default to undefined]

## Example

```typescript
import { V1CargoesCreateRequest } from './api';

const instance: V1CargoesCreateRequest = {
    cargoes,
    delete_current_version,
    supply_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
