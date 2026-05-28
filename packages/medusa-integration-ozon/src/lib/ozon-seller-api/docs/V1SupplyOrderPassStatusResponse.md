# V1SupplyOrderPassStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**Array&lt;V1SetVehicleError&gt;**](V1SetVehicleError.md) | Причина ошибки: - &#x60;UNSPECIFIED&#x60; — статус не указан; - &#x60;INVALID_ORDER_STATE&#x60; — неверный статус заявки; - &#x60;VEHICLE_NOT_REQUIRED&#x60; — указывать данные автомобиля необязательно; - &#x60;ORDER_NOT_BELONG_CONTRACTOR&#x60; — заявка создана другим юридическом лицом, работать с ней не получится; - &#x60;ORDER_NOT_BELONG_COMPANY&#x60; — заявка не принадлежит вашему кабинету, работать с ней не получится.  | [optional] [default to undefined]
**result** | [**V1SupplyOrderPassStatusResponseStatus**](V1SupplyOrderPassStatusResponseStatus.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V1SupplyOrderPassStatusResponse } from './api';

const instance: V1SupplyOrderPassStatusResponse = {
    errors,
    result,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
