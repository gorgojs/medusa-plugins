# CampaignSettingsLocalRegionDTO

Информация о своем регионе магазина.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор региона. | [optional] [default to undefined]
**name** | **string** | Название региона. | [optional] [default to undefined]
**type** | [**RegionType**](RegionType.md) |  | [optional] [default to undefined]
**deliveryOptionsSource** | [**CampaignSettingsScheduleSourceType**](CampaignSettingsScheduleSourceType.md) |  | [optional] [default to undefined]
**delivery** | [**CampaignSettingsDeliveryDTO**](CampaignSettingsDeliveryDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CampaignSettingsLocalRegionDTO } from './api';

const instance: CampaignSettingsLocalRegionDTO = {
    id,
    name,
    type,
    deliveryOptionsSource,
    delivery,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
