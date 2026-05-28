# GenerateBarcodesReportRequest

Данные, необходимые для генерации файла. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaignId** | **number** | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | [default to undefined]
**barcodeFormat** | [**BarcodeFormatType**](BarcodeFormatType.md) |  | [default to undefined]
**barcodeOfferInfos** | [**Array&lt;BarcodeOfferInfoDTO&gt;**](BarcodeOfferInfoDTO.md) | Список товаров.  Передайте этот параметр и уникальные &#x60;offerId&#x60;, чтобы вернуть файл со штрихкодами конкретных товаров.  В запросе обязательно должен быть либо &#x60;barcodeOfferInfos&#x60;, либо &#x60;supplyRequestId&#x60;, но не оба сразу.  Если передается информация о товаре, у которого несколько штрихкодов, все штрихкоды будут добавлены в файл, их количество будет задано параметром &#x60;barcodeCount&#x60;.  | [optional] [default to undefined]
**supplyRequestId** | **number** | Идентификатор заявки.  {% note warning \&quot;Используется только в API\&quot; %}  По нему не получится найти заявки в кабинете продавца на Маркете. Для этого используйте &#x60;marketplaceRequestId&#x60; или &#x60;warehouseRequestId&#x60;.  {% endnote %}  | [optional] [default to undefined]

## Example

```typescript
import { GenerateBarcodesReportRequest } from './api';

const instance: GenerateBarcodesReportRequest = {
    campaignId,
    barcodeFormat,
    barcodeOfferInfos,
    supplyRequestId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
