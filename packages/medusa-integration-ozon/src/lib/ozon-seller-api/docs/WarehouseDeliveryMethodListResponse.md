# WarehouseDeliveryMethodListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_next** | **boolean** | Признак, что в запросе вернулась только часть методов доставки: - &#x60;true&#x60; — сделайте повторный запрос с новым параметром &#x60;offset&#x60; для получения остальных методов; - &#x60;false&#x60; — ответ содержит все методы доставки по запросу.  | [optional] [default to undefined]
**result** | [**Array&lt;DeliveryMethodListResponseDeliveryMethod&gt;**](DeliveryMethodListResponseDeliveryMethod.md) | Результат запроса. | [optional] [default to undefined]

## Example

```typescript
import { WarehouseDeliveryMethodListResponse } from './api';

const instance: WarehouseDeliveryMethodListResponse = {
    has_next,
    result,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
