# GenerateGoodsMovementReportRequest

Данные, необходимые для генерации отчета.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaignId** | **number** | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | [default to undefined]
**dateFrom** | **string** | Начало периода, включительно.  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [default to undefined]
**dateTo** | **string** | Конец периода, включительно.  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [default to undefined]
**shopSku** | **string** | Ваш SKU — идентификатор товара в вашей системе.  Правила использования SKU:  * У каждого товара SKU должен быть свой.  * Уже заданный SKU нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.  SKU товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).  {% note warning %}  Пробельные символы в начале и конце значения автоматически удаляются. Например, &#x60;\&quot;  SKU123  \&quot;&#x60; и &#x60;\&quot;SKU123\&quot;&#x60; будут обработаны как одинаковые значения.  {% endnote %}  [Что такое SKU и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)  | [optional] [default to undefined]

## Example

```typescript
import { GenerateGoodsMovementReportRequest } from './api';

const instance: GenerateGoodsMovementReportRequest = {
    campaignId,
    dateFrom,
    dateTo,
    shopSku,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
