# GenerateUnitedNettingReportRequest

Данные, необходимые для генерации отчета: идентификатор кампании, период, за который нужен отчет, а также фильтры. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessId** | **number** | Идентификатор кабинета. | [default to undefined]
**dateTimeFrom** | **string** | Начало периода, включительно. | [optional] [default to undefined]
**dateTimeTo** | **string** | Конец периода, включительно. Максимальный период — 3 месяца. | [optional] [default to undefined]
**dateFrom** | **string** | Начало периода, включительно.  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [optional] [default to undefined]
**dateTo** | **string** | Конец периода, включительно. Максимальный период — 3 месяца.  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [optional] [default to undefined]
**bankOrderId** | **number** | Номер платежного поручения. | [optional] [default to undefined]
**bankOrderDateTime** | **string** | Дата платежного поручения. | [optional] [default to undefined]
**monthOfYear** | [**MonthOfYearDTO**](MonthOfYearDTO.md) |  | [optional] [default to undefined]
**placementPrograms** | [**Set&lt;PlacementType&gt;**](PlacementType.md) | Список моделей, которые нужны в отчете.  | [optional] [default to undefined]
**inns** | **Set&lt;string&gt;** | Список ИНН, которые нужны в отчете. | [optional] [default to undefined]
**campaignIds** | **Set&lt;number&gt;** | Список идентификаторов кампании тех магазинов, которые нужны в отчете.  Их можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не используйте вместо них идентификаторы магазинов, которые указаны в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | [optional] [default to undefined]

## Example

```typescript
import { GenerateUnitedNettingReportRequest } from './api';

const instance: GenerateUnitedNettingReportRequest = {
    businessId,
    dateTimeFrom,
    dateTimeTo,
    dateFrom,
    dateTo,
    bankOrderId,
    bankOrderDateTime,
    monthOfYear,
    placementPrograms,
    inns,
    campaignIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
