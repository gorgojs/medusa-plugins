# DeliveryMethodListV2RequestFilter

Фильтр для поиска методов доставки.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_method_ids** | **Array&lt;string&gt;** | Идентификаторы методов доставки. | [optional] [default to undefined]
**provider_ids** | **Array&lt;string&gt;** | Идентификаторы служб доставки. | [optional] [default to undefined]
**status** | [**Array&lt;FilterStatusEnum&gt;**](FilterStatusEnum.md) | Статус метода доставки: - &#x60;NEW&#x60; — создан, - &#x60;EDITED&#x60; — редактируется, - &#x60;ACTIVE&#x60; — активный, - &#x60;DISABLED&#x60; — неактивный, - &#x60;WAITING&#x60; — на проверке, - &#x60;BROKEN&#x60; — с ошибкой.  | [optional] [default to undefined]
**warehouse_ids** | **Array&lt;string&gt;** | Идентификаторы складов. Получите с помощью метода [/v2/warehouse/list](#operation/WarehouseListV2). | [optional] [default to undefined]

## Example

```typescript
import { DeliveryMethodListV2RequestFilter } from './api';

const instance: DeliveryMethodListV2RequestFilter = {
    delivery_method_ids,
    provider_ids,
    status,
    warehouse_ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
