# V1DraftGetWarehouseFboListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter_by_supply_type** | [**Array&lt;V1CreateType&gt;**](V1CreateType.md) | Тип поставки: - &#x60;CREATE_TYPE_CROSSDOCK&#x60; — кросс-докинг, - &#x60;CREATE_TYPE_DIRECT&#x60; — прямая.  | [default to undefined]
**search** | **string** | Поиск по названию склада — &#x60;name&#x60; или идентификатору склада — &#x60;warehouse_id&#x60;. Для поиска пунктов выдачи заказов укажите полное название. | [default to undefined]

## Example

```typescript
import { V1DraftGetWarehouseFboListRequest } from './api';

const instance: V1DraftGetWarehouseFboListRequest = {
    filter_by_supply_type,
    search,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
