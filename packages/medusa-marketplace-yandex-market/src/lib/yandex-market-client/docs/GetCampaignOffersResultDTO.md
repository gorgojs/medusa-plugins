# GetCampaignOffersResultDTO

Список товаров в заданном магазине.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paging** | [**ScrollingPagerDTO**](ScrollingPagerDTO.md) |  | [optional] [default to undefined]
**offers** | [**Array&lt;GetCampaignOfferDTO&gt;**](GetCampaignOfferDTO.md) | Страница списка товаров. | [default to undefined]

## Example

```typescript
import { GetCampaignOffersResultDTO } from './api';

const instance: GetCampaignOffersResultDTO = {
    paging,
    offers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
