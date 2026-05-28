# AnalyticsAnalyticsGetDataRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_from** | **string** | Дата, с которой будут данные в отчёте.  Если у вас нет Premium-подписки, укажите дату в пределах последних трёх месяцев.  | [default to undefined]
**date_to** | **string** | Дата, по которую будут данные в отчёте. | [default to undefined]
**dimension** | **Array&lt;string&gt;** | Группировка данных в отчёте.  Способы группировки, доступные всем продавцам:   - &#x60;unknownDimension&#x60; — неизвестное измерение,   - &#x60;sku&#x60; — идентификатор товара,   - &#x60;spu&#x60; — идентификатор товара — объединённая карточка,   - &#x60;day&#x60; — день,   - &#x60;week&#x60; — неделя,   - &#x60;month&#x60; — месяц.  Способы группировки, доступные только продавцам с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus):   - &#x60;year&#x60; — год,   - &#x60;category1&#x60; — категория первого уровня,   - &#x60;category2&#x60; — категория второго уровня,   - &#x60;category3&#x60; — категория третьего уровня,   - &#x60;category4&#x60; — категория четвертого уровня,   - &#x60;brand&#x60; — бренд,   - &#x60;modelID&#x60; — модель.  | [default to undefined]
**filters** | [**Array&lt;AnalyticsFilter&gt;**](AnalyticsFilter.md) | Фильтры. | [optional] [default to undefined]
**limit** | **number** | Количество значений в ответе:   - максимум — 1000,   - минимум — 1.  | [default to undefined]
**metrics** | **Array&lt;string&gt;** | Укажите до 14 метрик. Если их будет больше, вы получите ошибку с кодом &#x60;InvalidArgument&#x60;.  Список метриĸ, по ĸоторым будет сформирован отчёт.  Метрики, доступные всем продавцам:   - &#x60;revenue&#x60; — заказано на сумму,   - &#x60;ordered_units&#x60; — заказано товаров.  Метрики, доступные только продавцам с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus):   - &#x60;unknown_metric&#x60; — неизвестная метрика.   - &#x60;hits_view_search&#x60; — показы в поиске и в категории.   - &#x60;hits_view_pdp&#x60; — показы на карточке товара.   - &#x60;hits_view&#x60; — всего показов.   - &#x60;hits_tocart_search&#x60; — в корзину из поиска или категории.   - &#x60;hits_tocart_pdp&#x60; — в корзину из карточки товара.   - &#x60;hits_tocart&#x60; — всего добавлено в корзину.   - &#x60;session_view_search&#x60; — сессии с показом в поиске или в каталоге. Считаются уникальные посетители с просмотром в поиске или каталоге.   - &#x60;session_view_pdp&#x60; — сессии с показом на карточке товара. Считаются уникальные посетители, которые просмотрели карточку товара.   - &#x60;session_view&#x60; — всего сессий. Считаются уникальные посетители.   - &#x60;conv_tocart_search&#x60; — конверсия в корзину из поиска или категории.   - &#x60;conv_tocart_pdp&#x60; — конверсия в корзину из карточки товара.   - &#x60;conv_tocart&#x60; — общая конверсия в корзину.   - &#x60;returns&#x60; — возвращено товаров.   - &#x60;cancellations&#x60; — отменено товаров.   - &#x60;delivered_units&#x60; — доставлено товаров.   - &#x60;position_category&#x60; — позиция в поиске и категории.  | [default to undefined]
**offset** | **number** | Количество элементов, которое будет пропущено в ответе. Например, если &#x60;offset &#x3D; 10&#x60;, то ответ начнётся с 11-го найденного элемента. | [optional] [default to undefined]
**sort** | [**Array&lt;AnalyticsSorting&gt;**](AnalyticsSorting.md) | Настройки сортировки отчёта. | [optional] [default to undefined]

## Example

```typescript
import { AnalyticsAnalyticsGetDataRequest } from './api';

const instance: AnalyticsAnalyticsGetDataRequest = {
    date_from,
    date_to,
    dimension,
    filters,
    limit,
    metrics,
    offset,
    sort,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
