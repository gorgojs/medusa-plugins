# GetHiddenOffersResultDTO

Список скрытых вами товаров. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paging** | [**ScrollingPagerDTO**](ScrollingPagerDTO.md) |  | [optional] [default to undefined]
**hiddenOffers** | [**Array&lt;HiddenOfferDTO&gt;**](HiddenOfferDTO.md) | Список скрытых товаров. | [default to undefined]

## Example

```typescript
import { GetHiddenOffersResultDTO } from './api';

const instance: GetHiddenOffersResultDTO = {
    paging,
    hiddenOffers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
