# GetOrdersResponse

Модель для ответа API списка информации по заказам.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pager** | [**FlippingPagerDTO**](FlippingPagerDTO.md) |  | [optional] [default to undefined]
**orders** | [**Array&lt;OrderDTO&gt;**](OrderDTO.md) | Модель заказа.  | [default to undefined]
**paging** | [**ForwardScrollingPagerDTO**](ForwardScrollingPagerDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetOrdersResponse } from './api';

const instance: GetOrdersResponse = {
    pager,
    orders,
    paging,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
