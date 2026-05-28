# WarehouseDetailsDTO

Информация о складе.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор склада. | [default to undefined]
**name** | **string** | Название склада. | [default to undefined]
**campaignId** | **number** | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | [default to undefined]
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
