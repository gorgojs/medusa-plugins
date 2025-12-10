# GenerateUnitedOrdersRequest

Данные, необходимые для генерации отчета. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessId** | **number** | Идентификатор кабинета. | [default to undefined]
**dateFrom** | **string** | Начало периода, включительно.  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [default to undefined]
**dateTo** | **string** | Конец периода, включительно. Максимальный период — 1 год.  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [default to undefined]
**campaignIds** | **Set&lt;number&gt;** | Список идентификаторов кампании тех магазинов, которые нужны в отчете.  Их можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не используйте вместо них идентификаторы магазинов, которые указаны в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | [optional] [default to undefined]
**promoId** | **string** | Идентификатор акции, товары из которой нужны в отчете. | [optional] [default to undefined]

## Example

```typescript
import { GenerateUnitedOrdersRequest } from './api';

const instance: GenerateUnitedOrdersRequest = {
    businessId,
    dateFrom,
    dateTo,
    campaignIds,
    promoId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
