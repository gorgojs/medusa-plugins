# GetBusinessOrdersResponse

Ответ со списком заказов бизнеса.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orders** | [**Array&lt;BusinessOrderDTO&gt;**](BusinessOrderDTO.md) | Список заказов в кабинете. | [default to undefined]
**paging** | [**PackagingForwardScrollingPagerDTO**](PackagingForwardScrollingPagerDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetBusinessOrdersResponse } from './api';

const instance: GetBusinessOrdersResponse = {
    orders,
    paging,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
