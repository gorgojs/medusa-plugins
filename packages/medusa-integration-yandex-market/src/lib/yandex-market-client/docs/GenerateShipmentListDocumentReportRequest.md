# GenerateShipmentListDocumentReportRequest

Данные, необходимые для генерации документа. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaignId** | **number** | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | [default to undefined]
**shipmentId** | **number** | Идентификатор отгрузки.  В запросе обязательно передавайте &#x60;shipmentId&#x60; или &#x60;orderIds&#x60;.  | [optional] [default to undefined]
**orderIds** | **Set&lt;number&gt;** | Фильтр по идентификаторам заказа в отгрузке.  В запросе обязательно передавайте &#x60;shipmentId&#x60; или &#x60;orderIds&#x60;.  | [optional] [default to undefined]

## Example

```typescript
import { GenerateShipmentListDocumentReportRequest } from './api';

const instance: GenerateShipmentListDocumentReportRequest = {
    campaignId,
    shipmentId,
    orderIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
