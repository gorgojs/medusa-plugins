# OrdersStatsDTO

Информация по заказам.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orders** | [**Array&lt;OrdersStatsOrderDTO&gt;**](OrdersStatsOrderDTO.md) | Список заказов. | [default to undefined]
**paging** | [**ForwardScrollingPagerDTO**](ForwardScrollingPagerDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OrdersStatsDTO } from './api';

const instance: OrdersStatsDTO = {
    orders,
    paging,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
