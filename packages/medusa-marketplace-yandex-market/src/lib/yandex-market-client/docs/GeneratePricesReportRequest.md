# GeneratePricesReportRequest

Данные, необходимые для генерации отчета.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessId** | **number** | Идентификатор кабинета.  В большинстве случаев обязателен. Не указывается, если задан &#x60;campaignId&#x60;.  | [optional] [default to undefined]
**campaignId** | **number** | Идентификатор кампании.  Передавайте, только если в кабинете есть магазины с уникальными ценами и вы хотите получить отчет для них. В этом случае передавать &#x60;businessId&#x60; не нужно.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | [optional] [default to undefined]
**categoryIds** | **Set&lt;number&gt;** | Фильтр по категориям на Маркете. | [optional] [default to undefined]
**creationDateFrom** | **string** | Фильтр по времени добавления первой информации о товаре — начало периода.  Формат даты: &#x60;ДД-ММ-ГГГГ&#x60;.  | [optional] [default to undefined]
**creationDateTo** | **string** | Фильтр по времени добавления первой информации о товаре — окончание периода.  Формат даты: &#x60;ДД-ММ-ГГГГ&#x60;.  | [optional] [default to undefined]

## Example

```typescript
import { GeneratePricesReportRequest } from './api';

const instance: GeneratePricesReportRequest = {
    businessId,
    campaignId,
    categoryIds,
    creationDateFrom,
    creationDateTo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
