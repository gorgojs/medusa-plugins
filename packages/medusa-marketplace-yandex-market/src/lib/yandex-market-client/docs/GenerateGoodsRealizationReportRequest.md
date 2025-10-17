# GenerateGoodsRealizationReportRequest

Данные, необходимые для генерации отчета: идентификатор кампании и период, за который нужен отчет. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaignId** | **number** | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | [default to undefined]
**year** | **number** | Год. | [default to undefined]
**month** | **number** | Номер месяца. | [default to undefined]

## Example

```typescript
import { GenerateGoodsRealizationReportRequest } from './api';

const instance: GenerateGoodsRealizationReportRequest = {
    campaignId,
    year,
    month,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
