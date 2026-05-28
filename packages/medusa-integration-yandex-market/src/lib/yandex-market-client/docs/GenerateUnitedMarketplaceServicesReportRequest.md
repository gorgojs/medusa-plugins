# GenerateUnitedMarketplaceServicesReportRequest

Данные, необходимые для генерации отчета: идентификатор кампании, период, за который нужен отчет, а также фильтры. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessId** | **number** | Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  | [default to undefined]
**dateTimeFrom** | **string** | Начало периода, включительно. | [optional] [default to undefined]
**dateTimeTo** | **string** | Конец периода, включительно. Максимальный период — 3 месяца. | [optional] [default to undefined]
**dateFrom** | **string** | Начало периода, включительно.  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [optional] [default to undefined]
**dateTo** | **string** | Конец периода, включительно. Максимальный период — 3 месяца.  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [optional] [default to undefined]
**yearFrom** | **number** | Год. | [optional] [default to undefined]
**monthFrom** | **number** | Номер месяца. | [optional] [default to undefined]
**yearTo** | **number** | Год. | [optional] [default to undefined]
**monthTo** | **number** | Номер месяца. | [optional] [default to undefined]
**placementPrograms** | [**Set&lt;PlacementType&gt;**](PlacementType.md) | Список моделей, которые нужны в отчете.  | [optional] [default to undefined]
**inns** | **Set&lt;string&gt;** | Список ИНН, которые нужны в отчете. | [optional] [default to undefined]
**campaignIds** | **Set&lt;number&gt;** | Список идентификаторов кампании тех магазинов, которые нужны в отчете.  | [optional] [default to undefined]

## Example

```typescript
import { GenerateUnitedMarketplaceServicesReportRequest } from './api';

const instance: GenerateUnitedMarketplaceServicesReportRequest = {
    businessId,
    dateTimeFrom,
    dateTimeTo,
    dateFrom,
    dateTo,
    yearFrom,
    monthFrom,
    yearTo,
    monthTo,
    placementPrograms,
    inns,
    campaignIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
