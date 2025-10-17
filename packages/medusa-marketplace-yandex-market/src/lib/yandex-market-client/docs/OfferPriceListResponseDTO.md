# OfferPriceListResponseDTO

Список цен на товары.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offers** | [**Array&lt;OfferPriceResponseDTO&gt;**](OfferPriceResponseDTO.md) | Страница списка. | [default to undefined]
**paging** | [**ForwardScrollingPagerDTO**](ForwardScrollingPagerDTO.md) |  | [optional] [default to undefined]
**total** | **number** | Количество всех цен магазина, измененных через API. | [optional] [default to undefined]

## Example

```typescript
import { OfferPriceListResponseDTO } from './api';

const instance: OfferPriceListResponseDTO = {
    offers,
    paging,
    total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
