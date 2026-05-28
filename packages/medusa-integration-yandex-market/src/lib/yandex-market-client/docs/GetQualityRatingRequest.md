# GetQualityRatingRequest

Запрос информации по индексу качества.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dateFrom** | **string** | Начало периода.  Формат даты: &#x60;ГГГГ‑ММ‑ДД&#x60;.  Не может быть раньше 30 дней от текущей даты.  | [optional] [default to undefined]
**dateTo** | **string** | Конец периода.  Формат даты: &#x60;ГГГГ‑ММ‑ДД&#x60;.  Не может быть позже текущей даты.  | [optional] [default to undefined]
**campaignIds** | **Set&lt;number&gt;** | Список идентификаторов кампаний магазинов.  | [default to undefined]

## Example

```typescript
import { GetQualityRatingRequest } from './api';

const instance: GetQualityRatingRequest = {
    dateFrom,
    dateTo,
    campaignIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
