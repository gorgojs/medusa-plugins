# OrderItemsModificationResultDTO

Краткие сведения о промаркированных товарах. Параметр возвращается, если ответ `OK`. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;BriefOrderItemDTO&gt;**](BriefOrderItemDTO.md) | Список позиций в заказе, подлежащих маркировке. | [default to undefined]

## Example

```typescript
import { OrderItemsModificationResultDTO } from './api';

const instance: OrderItemsModificationResultDTO = {
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
