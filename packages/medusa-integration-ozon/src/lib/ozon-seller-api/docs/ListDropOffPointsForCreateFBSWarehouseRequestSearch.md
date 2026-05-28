# ListDropOffPointsForCreateFBSWarehouseRequestSearch

Параметры поиска.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | Адрес drop-off пункта. | [optional] [default to undefined]
**types** | [**Array&lt;ListDropOffPointsForCreateFBSWarehouseRequestSearchDropOffPointTypeEnum&gt;**](ListDropOffPointsForCreateFBSWarehouseRequestSearchDropOffPointTypeEnum.md) | Тип drop-off пункта: - &#x60;PVZ&#x60; — пункт выдачи заказов; - &#x60;PPZ&#x60; — пункт приёма заказов; - &#x60;SC&#x60; — сортировочный центр.  | [optional] [default to undefined]

## Example

```typescript
import { ListDropOffPointsForCreateFBSWarehouseRequestSearch } from './api';

const instance: ListDropOffPointsForCreateFBSWarehouseRequestSearch = {
    address,
    types,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
