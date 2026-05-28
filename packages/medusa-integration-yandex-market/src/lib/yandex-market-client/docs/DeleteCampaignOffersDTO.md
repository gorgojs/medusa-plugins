# DeleteCampaignOffersDTO

Список товаров, которые не удалось удалить, потому что они не найдены или хранятся на складе Маркета.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notDeletedOfferIds** | **Set&lt;string&gt;** | Список SKU. | [optional] [default to undefined]

## Example

```typescript
import { DeleteCampaignOffersDTO } from './api';

const instance: DeleteCampaignOffersDTO = {
    notDeletedOfferIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
