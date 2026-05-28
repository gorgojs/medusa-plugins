# V1RatingSummaryV1Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups** | [**Array&lt;RatingSummaryV1ResponseGroup&gt;**](RatingSummaryV1ResponseGroup.md) | Список с группами рейтингов. | [optional] [default to undefined]
**localization_index** | [**Array&lt;RatingSummaryV1ResponseLocalIndex&gt;**](RatingSummaryV1ResponseLocalIndex.md) | Данные по индексу локализации. Если за последние 14 дней у вас не было продаж, поля параметра будут пустыми. | [optional] [default to undefined]
**penalty_score_exceeded** | **boolean** | Признак, что баланс штрафных баллов превышен. | [optional] [default to undefined]
**premium** | **boolean** | Признак наличия подписки [Premium](https://seller-edu.ozon.ru/seller-rating/about-rating/premium-program). | [optional] [default to undefined]
**premium_plus** | **boolean** | Признак наличия подписки [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus). | [optional] [default to undefined]

## Example

```typescript
import { V1RatingSummaryV1Response } from './api';

const instance: V1RatingSummaryV1Response = {
    groups,
    localization_index,
    penalty_score_exceeded,
    premium,
    premium_plus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
