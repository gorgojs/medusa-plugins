# V1RatingHistoryV1Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_from** | **string** | Начало периода. | [default to undefined]
**date_to** | **string** | Конец периода. | [default to undefined]
**ratings** | **Array&lt;string&gt;** | Фильтр по рейтингу.  Рейтинги, по которым нужно получить значение за период:  - &#x60;rating_on_time&#x60; — процент заказов, выполненных вовремя за последние 30 дней. - &#x60;rating_review_avg_score_total&#x60; — средняя оценка всех товаров. - &#x60;rating_ssl&#x60; — оценка работы по FBO. Учитывает &#x60;rating_on_time_supply_delivery&#x60;, &#x60;rating_on_time_supply_cancellation&#x60; и &#x60;rating_order_accuracy&#x60;. - &#x60;rating_on_time_supply_delivery&#x60; — процент поставок, которые вы привезли на склад в выбранный временной интервал за последние 60 дней. - &#x60;rating_order_accuracy&#x60; — процент поставок без излишков, недостач, пересорта и брака за последние 60 дней. - &#x60;rating_on_time_supply_cancellation&#x60; — процент заявок на поставку, которые завершились или были отменены без опоздания за последние 60 дней. - &#x60;rating_reaction_time&#x60; — время в секундах, в течение которого покупатели в среднем ждали ответа на своё первое сообщение в чате за последние 30 дней. - &#x60;rating_average_response_time&#x60; — время в секундах, в течение которого покупатели в среднем ждали вашего ответа за последние 30 дней. - &#x60;rating_replied_dialogs_ratio&#x60; — доля диалогов хотя бы с одним вашим ответом в течение 24 часов за последние 30 дней. - &#x60;rating_general_indicator_fbs_rfbs&#x60; — индекс ошибок FBS и rFBS. - &#x60;rating_price_green&#x60; — выгодный индекс цен. - &#x60;rating_price_yellow&#x60; — умеренный индекс цен. - &#x60;rating_price_red&#x60; — невыгодный индекс цен. - &#x60;rating_price_super&#x60; — супер-выгодный индекс цен.  Если вы хотите получить информацию по начисленным штрафным баллам для рейтингов &#x60;rating_on_time&#x60; и &#x60;rating_review_avg_score_total&#x60;, передайте значения нужных рейтингов в этом параметре и &#x60;with_premium_scores&#x3D;true&#x60;.  | [default to undefined]
**with_premium_scores** | **boolean** | Признак, что в ответе нужно вернуть информацию о штрафных баллах в Premium-программе. | [optional] [default to undefined]

## Example

```typescript
import { V1RatingHistoryV1Request } from './api';

const instance: V1RatingHistoryV1Request = {
    date_from,
    date_to,
    ratings,
    with_premium_scores,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
