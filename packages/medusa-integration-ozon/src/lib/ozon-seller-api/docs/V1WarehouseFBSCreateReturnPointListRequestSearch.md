# V1WarehouseFBSCreateReturnPointListRequestSearch

Параметры поиска.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | Адрес пункта возврата. | [optional] [default to undefined]
**types** | [**Array&lt;V1WarehouseFBSCreateReturnPointListRequestSearchReturnPointTypeEnum&gt;**](V1WarehouseFBSCreateReturnPointListRequestSearchReturnPointTypeEnum.md) | Тип пункта возврата:  - &#x60;PVZ&#x60; — пункт выдачи заказов;  - &#x60;PPZ&#x60; — пункт приёма заказов.  | [optional] [default to undefined]

## Example

```typescript
import { V1WarehouseFBSCreateReturnPointListRequestSearch } from './api';

const instance: V1WarehouseFBSCreateReturnPointListRequestSearch = {
    address,
    types,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
