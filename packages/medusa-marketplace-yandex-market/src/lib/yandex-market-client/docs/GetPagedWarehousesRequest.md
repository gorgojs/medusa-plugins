# GetPagedWarehousesRequest

Запрос на получение складов кабинета.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**components** | [**Set&lt;WarehouseComponentType&gt;**](WarehouseComponentType.md) | Свойства складов, которые необходимо вернуть. Если какое-то значение параметра не задано, этой информации в ответе не будет.  Передавайте параметр, только если нужна информация, которую он возвращает.  Можно передать сразу несколько значений.  | [optional] [default to undefined]
**campaignIds** | **Set&lt;number&gt;** | Список идентификаторов кампании тех магазинов, склады которых необходимо вернуть.  Их можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не используйте вместо них идентификаторы магазинов, которые указаны в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | [optional] [default to undefined]

## Example

```typescript
import { GetPagedWarehousesRequest } from './api';

const instance: GetPagedWarehousesRequest = {
    components,
    campaignIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
