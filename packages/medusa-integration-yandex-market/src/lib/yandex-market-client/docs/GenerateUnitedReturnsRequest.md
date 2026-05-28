# GenerateUnitedReturnsRequest

Данные, необходимые для генерации отчета. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessId** | **number** | Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  | [default to undefined]
**dateFrom** | **string** | Начало периода, включительно.  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [default to undefined]
**dateTo** | **string** | Конец периода, включительно.  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [default to undefined]
**campaignIds** | **Set&lt;number&gt;** | Список идентификаторов кампании тех магазинов, которые нужны в отчете.  | [optional] [default to undefined]
**returnType** | [**ModelReturnType**](ModelReturnType.md) |  | [optional] [default to undefined]
**returnStatusTypes** | [**Set&lt;ReturnShipmentStatusType&gt;**](ReturnShipmentStatusType.md) | Статусы передачи возвратов, которые нужны в отчете.  Если их не указать, вернется информация по всем возвратам.  | [optional] [default to undefined]

## Example

```typescript
import { GenerateUnitedReturnsRequest } from './api';

const instance: GenerateUnitedReturnsRequest = {
    businessId,
    dateFrom,
    dateTo,
    campaignIds,
    returnType,
    returnStatusTypes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
