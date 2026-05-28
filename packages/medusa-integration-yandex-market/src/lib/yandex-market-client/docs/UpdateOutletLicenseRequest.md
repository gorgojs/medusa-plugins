# UpdateOutletLicenseRequest

Запрос на создание или изменение лицензий для точек продаж.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**licenses** | [**Array&lt;OutletLicenseDTO&gt;**](OutletLicenseDTO.md) | Список лицензий. Обязательный параметр, должен содержать информацию хотя бы об одной лицензии.  | [default to undefined]

## Example

```typescript
import { UpdateOutletLicenseRequest } from './api';

const instance: UpdateOutletLicenseRequest = {
    licenses,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
