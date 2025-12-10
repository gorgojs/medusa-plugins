# WarehouseDetailsDTO

Информация о складе.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор склада. | [default to undefined]
**name** | **string** | Название склада. | [default to undefined]
**campaignId** | **number** | Идентификатор кампании того магазина, который связан со складом.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | [default to undefined]
**express** | **boolean** | Возможна ли доставка для модели Экспресс. | [default to undefined]
**groupInfo** | [**WarehouseGroupInfoDTO**](WarehouseGroupInfoDTO.md) |  | [optional] [default to undefined]
**address** | [**WarehouseAddressDTO**](WarehouseAddressDTO.md) |  | [optional] [default to undefined]
**status** | [**WarehouseStatusDTO**](WarehouseStatusDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { WarehouseDetailsDTO } from './api';

const instance: WarehouseDetailsDTO = {
    id,
    name,
    campaignId,
    express,
    groupInfo,
    address,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
