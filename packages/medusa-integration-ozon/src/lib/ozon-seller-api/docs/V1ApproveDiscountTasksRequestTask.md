# V1ApproveDiscountTasksRequestTask


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор заявки. Можно получить с помощью метода [/v1/actions/discounts-task/list](#operation/promos_task_list). | [default to undefined]
**approved_price** | **number** | Согласованная цена. | [default to undefined]
**seller_comment** | **string** | Комментарий продавца к заявке. | [optional] [default to undefined]
**approved_quantity_min** | **number** | Одобренное минимальное количество товаров. | [default to undefined]
**approved_quantity_max** | **number** | Одобренное максимальное количество товаров. | [default to undefined]

## Example

```typescript
import { V1ApproveDiscountTasksRequestTask } from './api';

const instance: V1ApproveDiscountTasksRequestTask = {
    id,
    approved_price,
    seller_comment,
    approved_quantity_min,
    approved_quantity_max,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
