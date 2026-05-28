# V1CreateStockByWarehouseReportRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language** | **string** | Язык ответа:   - &#x60;RU&#x60; — русский,   - &#x60;EN&#x60; — английский.  | [optional] [default to 'DEFAULT']
**warehouseId** | **Array&lt;string&gt;** | Идентификаторы складов. Ограничение значений в запросе. Максимум — 50.  | [default to undefined]

## Example

```typescript
import { V1CreateStockByWarehouseReportRequest } from './api';

const instance: V1CreateStockByWarehouseReportRequest = {
    language,
    warehouseId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
