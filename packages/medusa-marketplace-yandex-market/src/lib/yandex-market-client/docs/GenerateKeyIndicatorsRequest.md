# GenerateKeyIndicatorsRequest

Данные, необходимые для генерации отчета. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessId** | **number** | Идентификатор кабинета.  Указывается, если нужно составить отчет по всем магазинам в кабинете. В запросе обязательно должен быть либо &#x60;businessId&#x60;, либо &#x60;campaignId&#x60;, но не оба сразу.  | [optional] [default to undefined]
**campaignId** | **number** | Идентификатор кампании.  Указывается, если нужно составить отчет по конкретному магазину. В запросе обязательно должен быть либо &#x60;businessId&#x60;, либо &#x60;campaignId&#x60;, но не оба сразу.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | [optional] [default to undefined]
**detalizationLevel** | [**KeyIndicatorsReportDetalizationLevelType**](KeyIndicatorsReportDetalizationLevelType.md) |  | [default to undefined]

## Example

```typescript
import { GenerateKeyIndicatorsRequest } from './api';

const instance: GenerateKeyIndicatorsRequest = {
    businessId,
    campaignId,
    detalizationLevel,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
