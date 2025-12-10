# CampaignDTO

Информация о магазине.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **string** | Название магазина. | [optional] [default to undefined]
**id** | **number** | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | [optional] [default to undefined]
**clientId** | **number** | Идентификатор плательщика в Яндекс Балансе. | [optional] [default to undefined]
**business** | [**BusinessDTO**](BusinessDTO.md) |  | [optional] [default to undefined]
**placementType** | [**PlacementType**](PlacementType.md) |  | [optional] [default to undefined]
**apiAvailability** | [**ApiAvailabilityStatusType**](ApiAvailabilityStatusType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CampaignDTO } from './api';

const instance: CampaignDTO = {
    domain,
    id,
    clientId,
    business,
    placementType,
    apiAvailability,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
