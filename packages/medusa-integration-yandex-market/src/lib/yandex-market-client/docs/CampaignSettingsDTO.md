# CampaignSettingsDTO

Настройки магазина.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**countryRegion** | **number** | Идентификатор региона, в котором находится магазин. | [optional] [default to undefined]
**shopName** | **string** | Наименование магазина на Яндекс Маркете. Если наименование отсутствует, значение параметра выводится — &#x60;null&#x60;.  | [optional] [default to undefined]
**showInContext** | **boolean** | Признак размещения магазина на сайтах партнеров Яндекс Дистрибуции. Возможные значения: * &#x60;false&#x60; — магазин не размещен на сайтах партнеров Яндекс Дистрибуции. * &#x60;true&#x60; — магазин размещен на сайтах партнеров Яндекс Дистрибуции.  | [optional] [default to undefined]
**showInPremium** | **boolean** | Признак показа предложений магазина в блоке над результатами поиска (cпецразмещение). Возможные значения: * &#x60;false&#x60; — предложения не показываются в блоке cпецразмещения. * &#x60;true&#x60; — предложения показываются в блоке cпецразмещения.  | [optional] [default to undefined]
**useOpenStat** | **boolean** | Признак использования внешней интернет-статистики. Возможные значения: * &#x60;false&#x60; — внешняя интернет-статистика не используется. * &#x60;true&#x60; — внешняя интернет-статистика используется.  | [optional] [default to undefined]
**localRegion** | [**CampaignSettingsLocalRegionDTO**](CampaignSettingsLocalRegionDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CampaignSettingsDTO } from './api';

const instance: CampaignSettingsDTO = {
    countryRegion,
    shopName,
    showInContext,
    showInPremium,
    useOpenStat,
    localRegion,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
