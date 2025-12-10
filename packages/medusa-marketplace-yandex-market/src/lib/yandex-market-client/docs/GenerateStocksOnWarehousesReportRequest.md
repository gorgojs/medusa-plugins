# GenerateStocksOnWarehousesReportRequest

Данные, необходимые для генерации отчета. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaignId** | **number** | {% note warning \&quot;Для моделей DBS, FBS и Экспресс параметр скоро станет недоступен\&quot; %}  Для получения информации об остатках на складе магазина передайте &#x60;businessId&#x60; и идентификатор нужного магазина в &#x60;campaignIds&#x60;.  {% endnote %}  Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  Не передавайте вместе с &#x60;businessId&#x60;.  | [optional] [default to undefined]
**businessId** | **number** | **Только для моделей DBS, FBS и Экспресс**  Идентификатор кабинета, по магазинам которого нужно сформировать отчет (кроме FBY-магазинов).  Не передавайте вместе с &#x60;campaignId&#x60;.  | [optional] [default to undefined]
**warehouseIds** | **Set&lt;number&gt;** | Фильтр по идентификаторам складов (только модель FBY). Чтобы узнать идентификатор, воспользуйтесь запросом [GET v2/warehouses](../../reference/warehouses/getFulfillmentWarehouses.md). | [optional] [default to undefined]
**reportDate** | **string** | Фильтр по дате (для модели FBY). В отчет попадут данные за **предшествующий** дате день.  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [optional] [default to undefined]
**categoryIds** | **Set&lt;number&gt;** | Фильтр по категориям на Маркете (кроме модели FBY). | [optional] [default to undefined]
**hasStocks** | **boolean** | Фильтр по наличию остатков (кроме модели FBY). | [optional] [default to undefined]
**campaignIds** | **Set&lt;number&gt;** | Фильтр по магазинам для отчета по кабинету (кроме модели FBY).  Передавайте вместе с &#x60;businessId&#x60;.  | [optional] [default to undefined]

## Example

```typescript
import { GenerateStocksOnWarehousesReportRequest } from './api';

const instance: GenerateStocksOnWarehousesReportRequest = {
    campaignId,
    businessId,
    warehouseIds,
    reportDate,
    categoryIds,
    hasStocks,
    campaignIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
