# CalculateTariffsParametersDTO

Параметры для расчета стоимости услуг. Обязательно необходимо указать параметр `campaignId` либо `sellingProgram`. Совместное использование параметров приведет к ошибке.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaignId** | **number** | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | [optional] [default to undefined]
**sellingProgram** | [**SellingProgramType**](SellingProgramType.md) |  | [optional] [default to undefined]
**frequency** | [**PaymentFrequencyType**](PaymentFrequencyType.md) |  | [optional] [default to undefined]
**paymentDelayWeeks** | **number** | Отсрочка выплат при еженедельном графике — сколько недель назад были доставлены заказы, за которые приходит выплата.  Допустимые значения: 0, 1, 2 или 4.  Значения параметра &#x60;paymentDelayWeeks&#x60;, отличные от 0, допускаются только вместе с параметром &#x60;frequency&#x60; равным \&#39;WEEKLY\&#39;. Использование других значений параметра &#x60;frequency&#x60; совместно с &#x60;paymentDelayWeeks&#x60; приведет к ошибке.  | [optional] [default to undefined]
**currency** | [**CurrencyType**](CurrencyType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CalculateTariffsParametersDTO } from './api';

const instance: CalculateTariffsParametersDTO = {
    campaignId,
    sellingProgram,
    frequency,
    paymentDelayWeeks,
    currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
