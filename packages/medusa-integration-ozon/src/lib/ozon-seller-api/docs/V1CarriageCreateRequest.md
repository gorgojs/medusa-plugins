# V1CarriageCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_blr_traceable** | **boolean** | &#x60;true&#x60;, если нужно создать отгрузку с прослеживаемыми товарами.  | [optional] [default to undefined]
**delivery_method_id** | **number** | Идентификатор метода доставки. | [optional] [default to undefined]
**departure_date** | **string** | Дата отгрузки. По умолчанию — текущая дата. | [optional] [default to undefined]

## Example

```typescript
import { V1CarriageCreateRequest } from './api';

const instance: V1CarriageCreateRequest = {
    all_blr_traceable,
    delivery_method_id,
    departure_date,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
