# GenerateClosureDocumentsRequest

Данные, необходимые для запроса закрывающих документов. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaignId** | **number** | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | [default to undefined]
**monthOfYear** | [**ClosureDocumentsMonthOfYearDTO**](ClosureDocumentsMonthOfYearDTO.md) |  | [default to undefined]
**contractTypes** | [**Set&lt;ClosureDocumentsContractType&gt;**](ClosureDocumentsContractType.md) | Типы договоров, по которым нужны закрывающие документы.  Если их не указать, вернется архив с документами по всем найденным договорам.  | [optional] [default to undefined]

## Example

```typescript
import { GenerateClosureDocumentsRequest } from './api';

const instance: GenerateClosureDocumentsRequest = {
    campaignId,
    monthOfYear,
    contractTypes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
