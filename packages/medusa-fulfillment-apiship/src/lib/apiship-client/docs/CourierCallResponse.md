# CourierCallResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Номер заявки | [optional] [default to undefined]
**providerNumber** | **string** | Номер заявки в системе СД | [optional] [default to undefined]
**additionalProviderNumber** | **string** | Дополнительный номер заявки в системе СД | [optional] [default to undefined]
**created** | **string** | Дата создания заявки | [optional] [default to undefined]
**error** | **string** | Описан≠ие ошибки в случае невозможности вызова курьера | [optional] [default to undefined]

## Example

```typescript
import { CourierCallResponse } from './api';

const instance: CourierCallResponse = {
    id,
    providerNumber,
    additionalProviderNumber,
    created,
    error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
