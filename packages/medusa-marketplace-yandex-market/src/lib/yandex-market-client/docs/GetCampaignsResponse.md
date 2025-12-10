# GetCampaignsResponse

Результаты поиска магазинов.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaigns** | [**Array&lt;CampaignDTO&gt;**](CampaignDTO.md) | Список с информацией по каждому магазину. | [default to undefined]
**pager** | [**FlippingPagerDTO**](FlippingPagerDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetCampaignsResponse } from './api';

const instance: GetCampaignsResponse = {
    campaigns,
    pager,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
