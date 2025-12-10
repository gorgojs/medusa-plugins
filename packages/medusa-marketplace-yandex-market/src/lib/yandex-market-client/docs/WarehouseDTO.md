# WarehouseDTO

Информация о складе.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор склада. | [default to undefined]
**name** | **string** | Название склада. | [default to undefined]
**campaignId** | **number** | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | [default to undefined]
**express** | **boolean** | Возможна ли доставка по модели Экспресс. | [default to undefined]
**address** | [**WarehouseAddressDTO**](WarehouseAddressDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { WarehouseDTO } from './api';

const instance: WarehouseDTO = {
    id,
    name,
    campaignId,
    express,
    address,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
