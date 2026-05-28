# V3SupplyOrderListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_id** | **string** | Идентификатор последнего значения на странице.  Чтобы получить следующие значения, укажите полученное значение в следующем запросе в параметре &#x60;last_id&#x60;.  | [optional] [default to undefined]
**order_ids** | **Array&lt;string&gt;** | Идентификаторы заявок на поставку. | [optional] [default to undefined]

## Example

```typescript
import { V3SupplyOrderListResponse } from './api';

const instance: V3SupplyOrderListResponse = {
    last_id,
    order_ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
