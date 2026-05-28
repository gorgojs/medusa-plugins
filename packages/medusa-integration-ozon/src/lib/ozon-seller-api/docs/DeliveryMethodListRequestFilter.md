# DeliveryMethodListRequestFilter

Фильтр для поиска методов доставки.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider_id** | **number** | Идентификатор службы доставки. | [optional] [default to undefined]
**status** | **string** | Статус метода доставки:   - &#x60;NEW&#x60; — создан,   - &#x60;EDITED&#x60; — редактируется,   - &#x60;ACTIVE&#x60; — активный,   - &#x60;DISABLED&#x60; — неактивный.  | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. Можно получить с помощью метода [/v1/warehouse/list ](#operation/WarehouseAPI_WarehouseList). | [optional] [default to undefined]

## Example

```typescript
import { DeliveryMethodListRequestFilter } from './api';

const instance: DeliveryMethodListRequestFilter = {
    provider_id,
    status,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
