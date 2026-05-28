# V1AnalyticsStocksResponseItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ads** | **number** | Среднесуточное количество проданных единиц товара за последние 28 дней по всем кластерам. | [optional] [default to undefined]
**ads_cluster** | **number** | Среднесуточное количество проданных единиц товара за последние 28 дней в кластере. | [optional] [default to undefined]
**available_stock_count** | **number** | Количество товаров, которые доступны к продаже. Соответствует столбцу «Доступно к продаже». | [optional] [default to undefined]
**cluster_id** | **number** | Идентификатор кластера. Получить подробную информацию о кластере можно через метод [/v1/cluster/list](#operation/SupplyDraftAPI_DraftClusterList). | [optional] [default to undefined]
**cluster_name** | **string** | Название кластера. | [optional] [default to undefined]
**days_without_sales** | **number** | Количество дней без продаж по всем кластерам. | [optional] [default to undefined]
**days_without_sales_cluster** | **number** | Количество дней без продаж в кластере. | [optional] [default to undefined]
**excess_stock_count** | **number** | Количество излишков с поставки, которые доступны к вывозу. | [optional] [default to undefined]
**expiring_stock_count** | **number** | Количество единиц товара с истекающим сроком годности. | [optional] [default to undefined]
**idc** | **number** | Количество дней, на которое хватит остатка товара с учётом среднесуточных продаж за 28 дней по всем кластерам. | [optional] [default to undefined]
**idc_cluster** | **number** | Количество дней, на которое хватит остатка товара с учётом среднесуточных продаж за 28 дней в кластере. | [optional] [default to undefined]
**item_tags** | **Array&lt;string&gt;** | Теги товара:       - &#x60;ITEM_ATTRIBUTE_NONE&#x60; — без тега; - &#x60;ECONOM&#x60; — эконом-товар; - &#x60;NOVEL&#x60; — новинка; - &#x60;DISCOUNT&#x60; — уценённый товар; - &#x60;FBS_RETURN&#x60; — товар из возврата FBS; - &#x60;SUPER&#x60; — Super-товар.  | [optional] [default to undefined]
**name** | **string** | Название товара. | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**other_stock_count** | **number** | Количество единиц товара, проходящих проверку. | [optional] [default to undefined]
**requested_stock_count** | **number** | Количество единиц товара в заявках на поставку. | [optional] [default to undefined]
**return_from_customer_stock_count** | **number** | Количество единиц товара в процессе возврата от покупателей. | [optional] [default to undefined]
**return_to_seller_stock_count** | **number** | Количество единиц товара, готовящихся к вывозу по вашей заявке. | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**stock_defect_stock_count** | **number** | Количество брака, доступное к вывозу со стока. | [optional] [default to undefined]
**transit_defect_stock_count** | **number** | Количество брака, доступное к вывозу с поставки. | [optional] [default to undefined]
**transit_stock_count** | **number** | Количество единиц товара в поставках в пути. | [optional] [default to undefined]
**turnover_grade** | **string** | Статус ликвидности товара по всем кластерам:       - &#x60;UNSPECIFIED&#x60; — значение не определено. - &#x60;TURNOVER_GRADE_NONE&#x60; — нет статуса ликвидности. - &#x60;DEFICIT&#x60; — дефицитный. Остатков товара хватит до 28 дней. - &#x60;POPULAR&#x60; — очень популярный. Остатков товара хватит на 28–56 дней. - &#x60;ACTUAL&#x60; — популярный. Остатков товара хватит на 56–120 дней. - &#x60;SURPLUS&#x60; — избыточный. Товар продаётся медленно, остатков хватит более чем на 120 дней. - &#x60;NO_SALES&#x60; — без продаж. У товара нет продаж последние 28 дней. - &#x60;WAS_NO_SALES&#x60; — был без продаж. У товара не было продаж и остатков последние 28 дней. - &#x60;RESTRICTED_NO_SALES&#x60; — без продаж, ограничен. У товара не было продаж более 120 дней. Такой товар [нельзя добавить в поставку](https://seller-edu.ozon.ru/fbo/rabota-so-stokom/nehodovye-tovary). - &#x60;COLLECTING_DATA&#x60; — сбор данных. Для расчёта ликвидности нового товара собираем данные в течение 60 дней после поставки. - &#x60;WAITING_FOR_SUPPLY&#x60; — ожидаем поставки. На складе нет остатков, доступных к продаже. Сделайте поставку для начала сбора данных. - &#x60;WAS_DEFICIT&#x60; — был дефицитным. Товар был дефицитным последние 56 дней. Сейчас у него нет остатков. - &#x60;WAS_POPULAR&#x60; — был очень популярным. Товар был очень популярным последние 56 дней. Сейчас у него нет остатков. - &#x60;WAS_ACTUAL&#x60; — был популярным. Товар был популярным последние 56 дней. Сейчас у него нет остатков. - &#x60;WAS_SURPLUS&#x60; — был избыточным. Товар был избыточным последние 56 дней. Сейчас у него нет остатков.  | [optional] [default to undefined]
**turnover_grade_cluster** | **string** | Статус ликвидности товара в кластере:       - &#x60;UNSPECIFIED&#x60; — значение не определено. - &#x60;TURNOVER_GRADE_NONE&#x60; — нет статуса ликвидности. - &#x60;DEFICIT&#x60; — дефицитный. Остатков товара хватит до 28 дней. - &#x60;POPULAR&#x60; — очень популярный. Остатков товара хватит на 28–56 дней. - &#x60;ACTUAL&#x60; — популярный. Остатков товара хватит на 56–120 дней. - &#x60;SURPLUS&#x60; — избыточный. Товар продаётся медленно, остатков хватит более чем на 120 дней. - &#x60;NO_SALES&#x60; — без продаж. У товара нет продаж последние 28 дней. - &#x60;WAS_NO_SALES&#x60; — был без продаж. У товара не было продаж и остатков последние 28 дней. - &#x60;RESTRICTED_NO_SALES&#x60; — без продаж, ограничен. У товара не было продаж более 120 дней. Такой товар [нельзя добавить в поставку](https://seller-edu.ozon.ru/fbo/rabota-so-stokom/nehodovye-tovary). - &#x60;COLLECTING_DATA&#x60; — сбор данных. Для расчёта ликвидности нового товара собираем данные в течение 60 дней после поставки. - &#x60;WAITING_FOR_SUPPLY&#x60; — ожидаем поставки. На складе нет остатков, доступных к продаже. Сделайте поставку для начала сбора данных. - &#x60;WAS_DEFICIT&#x60; — был дефицитным. Товар был дефицитным последние 56 дней. Сейчас у него нет остатков. - &#x60;WAS_POPULAR&#x60; — был очень популярным. Товар был очень популярным последние 56 дней. Сейчас у него нет остатков. - &#x60;WAS_ACTUAL&#x60; — был популярным. Товар был популярным последние 56 дней. Сейчас у него нет остатков. - &#x60;WAS_SURPLUS&#x60; — был избыточным. Товар был избыточным последние 56 дней. Сейчас у него нет остатков.  | [optional] [default to undefined]
**valid_stock_count** | **number** | Количество товаров, которые готовятся к продаже. Соответствует столбцу «Готовим к продаже». | [optional] [default to undefined]
**waiting_docs_stock_count** | **number** | Количество маркируемых товаров, которые ожидают ваших действий. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]
**warehouse_name** | **string** | Название склада. | [optional] [default to undefined]

## Example

```typescript
import { V1AnalyticsStocksResponseItem } from './api';

const instance: V1AnalyticsStocksResponseItem = {
    ads,
    ads_cluster,
    available_stock_count,
    cluster_id,
    cluster_name,
    days_without_sales,
    days_without_sales_cluster,
    excess_stock_count,
    expiring_stock_count,
    idc,
    idc_cluster,
    item_tags,
    name,
    offer_id,
    other_stock_count,
    requested_stock_count,
    return_from_customer_stock_count,
    return_to_seller_stock_count,
    sku,
    stock_defect_stock_count,
    transit_defect_stock_count,
    transit_stock_count,
    turnover_grade,
    turnover_grade_cluster,
    valid_stock_count,
    waiting_docs_stock_count,
    warehouse_id,
    warehouse_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
