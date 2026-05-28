# V1AnalyticsStocksRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_ids** | **Array&lt;string&gt;** | Фильтр по идентификаторам кластеров. Получить идентификаторы можно через метод [/v1/cluster/list](#operation/SupplyDraftAPI_DraftClusterList). | [optional] [default to undefined]
**item_tags** | **Array&lt;string&gt;** | Фильтр по тегам товара:       - &#x60;ITEM_ATTRIBUTE_NONE&#x60; — без тега; - &#x60;ECONOM&#x60; — эконом-товар; - &#x60;NOVEL&#x60; — новинка; - &#x60;DISCOUNT&#x60; — уценённый товар; - &#x60;FBS_RETURN&#x60; — товар из возврата FBS; - &#x60;SUPER&#x60; — Super-товар.  | [optional] [default to undefined]
**skus** | **Array&lt;string&gt;** | Фильтр по идентификаторам товаров в системе Ozon — SKU. | [default to undefined]
**turnover_grades** | **Array&lt;string&gt;** | Фильтр по статусу ликвидности товаров:       - &#x60;TURNOVER_GRADE_NONE&#x60; — нет статуса ликвидности.       - &#x60;DEFICIT&#x60; — дефицитный. Остатков товара хватит до 28 дней. - &#x60;POPULAR&#x60; — очень популярный. Остатков товара хватит на 28–56 дней. - &#x60;ACTUAL&#x60; — популярный. Остатков товара хватит на 56–120 дней. - &#x60;SURPLUS&#x60; — избыточный. Товар продаётся медленно, остатков хватит более чем на 120 дней. - &#x60;NO_SALES&#x60; — без продаж. У товара нет продаж последние 28 дней. - &#x60;WAS_NO_SALES&#x60; — был без продаж. У товара не было продаж и остатков последние 28 дней. - &#x60;RESTRICTED_NO_SALES&#x60; — без продаж, ограничен. У товара не было продаж более 120 дней. Такой товар [нельзя добавить в поставку](https://seller-edu.ozon.ru/fbo/rabota-so-stokom/nehodovye-tovary). - &#x60;COLLECTING_DATA&#x60; — сбор данных. Для расчёта ликвидности нового товара собираем данные в течение 60 дней после поставки. - &#x60;WAITING_FOR_SUPPLY&#x60; — ожидаем поставки. На складе нет остатков, доступных к продаже. Сделайте поставку для начала сбора данных. - &#x60;WAS_DEFICIT&#x60; — был дефицитным. Товар был дефицитным последние 56 дней. Сейчас у него нет остатков. - &#x60;WAS_POPULAR&#x60; — был очень популярным. Товар был очень популярным последние 56 дней. Сейчас у него нет остатков. - &#x60;WAS_ACTUAL&#x60; — был популярным. Товар был популярным последние 56 дней. Сейчас у него нет остатков. - &#x60;WAS_SURPLUS&#x60; — был избыточным. Товар был избыточным последние 56 дней. Сейчас у него нет остатков.  | [optional] [default to undefined]
**warehouse_ids** | **Array&lt;string&gt;** | Фильтр по идентификаторам складов. Получить идентификаторы можно через метод [/v1/warehouse/list](#operation/WarehouseAPI_WarehouseList). | [optional] [default to undefined]

## Example

```typescript
import { V1AnalyticsStocksRequest } from './api';

const instance: V1AnalyticsStocksRequest = {
    cluster_ids,
    item_tags,
    skus,
    turnover_grades,
    warehouse_ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
