# GetBidsInfoResponseDTO

Список товаров с указанными ставками.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bids** | [**Array&lt;SkuBidItemDTO&gt;**](SkuBidItemDTO.md) | Страница списка товаров. | [default to undefined]
**paging** | [**ForwardScrollingPagerDTO**](ForwardScrollingPagerDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetBidsInfoResponseDTO } from './api';

const instance: GetBidsInfoResponseDTO = {
    bids,
    paging,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
