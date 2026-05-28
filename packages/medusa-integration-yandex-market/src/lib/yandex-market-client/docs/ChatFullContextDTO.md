# ChatFullContextDTO

Информация о заказе или возврате, по которому начат чат.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**ChatContextType**](ChatContextType.md) |  | [default to undefined]
**customer** | [**ChatCustomerDTO**](ChatCustomerDTO.md) |  | [optional] [default to undefined]
**campaignId** | **number** | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | [optional] [default to undefined]
**orderId** | **number** | Идентификатор заказа.  Возвращается для заказов и возвратов.  | [optional] [default to undefined]
**returnId** | **number** | Идентификатор возврата.  Возвращается только для возвратов.  | [optional] [default to undefined]

## Example

```typescript
import { ChatFullContextDTO } from './api';

const instance: ChatFullContextDTO = {
    type,
    customer,
    campaignId,
    orderId,
    returnId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
