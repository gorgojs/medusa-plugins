# V1SellerOzonLogisticsInfoResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_schemas** | [**Array&lt;SellerOzonLogisticsInfoResponseAvailableSchemasEnum&gt;**](SellerOzonLogisticsInfoResponseAvailableSchemasEnum.md) | Тип доступной схемы: - &#x60;UNKNOWN&#x60; — не определён, - &#x60;FBO&#x60;, - &#x60;FBS&#x60;.  | [optional] [default to undefined]
**ozon_logistics_enabled** | **boolean** | &#x60;true&#x60;, если Ozon Логистика подключена.  | [optional] [default to undefined]

## Example

```typescript
import { V1SellerOzonLogisticsInfoResponse } from './api';

const instance: V1SellerOzonLogisticsInfoResponse = {
    available_schemas,
    ozon_logistics_enabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
