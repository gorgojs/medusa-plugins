# GetSupplyRequestItemsDTO

Информация о товарах в заявке.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;SupplyRequestItemDTO&gt;**](SupplyRequestItemDTO.md) | Список товаров. | [default to undefined]
**paging** | [**ForwardScrollingPagerDTO**](ForwardScrollingPagerDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetSupplyRequestItemsDTO } from './api';

const instance: GetSupplyRequestItemsDTO = {
    items,
    paging,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
