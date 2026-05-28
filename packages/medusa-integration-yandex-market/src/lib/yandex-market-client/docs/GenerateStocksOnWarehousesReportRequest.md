# GenerateStocksOnWarehousesReportRequest

Данные, необходимые для генерации отчета. Передавайте либо `businessId`, либо `campaignId`/`campaignIds`, но не все сразу. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaignId** | **number** | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | [optional] [default to undefined]
**businessId** | **number** | Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  | [optional] [default to undefined]
**warehouseIds** | **Set&lt;number&gt;** | Фильтр по идентификаторам складов (только модели FBY и LaaS). Чтобы узнать идентификатор, воспользуйтесь запросом [GET v2/warehouses](../../reference/warehouses/getFulfillmentWarehouses.md). | [optional] [default to undefined]
**reportDate** | **string** | Фильтр по дате (для моделей FBY и LaaS). В отчет попадут данные за **предшествующий** дате день.  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [optional] [default to undefined]
**categoryIds** | **Set&lt;number&gt;** | Фильтр по категориям на Маркете (кроме моделей FBY и LaaS). | [optional] [default to undefined]
**hasStocks** | **boolean** | Фильтр по наличию остатков (кроме моделей FBY и LaaS). | [optional] [default to undefined]
**campaignIds** | **Set&lt;number&gt;** | Фильтр по магазинам для отчета по кабинету (кроме моделей FBY и LaaS).  Передавайте вместе с &#x60;businessId&#x60;.  | [optional] [default to undefined]

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
