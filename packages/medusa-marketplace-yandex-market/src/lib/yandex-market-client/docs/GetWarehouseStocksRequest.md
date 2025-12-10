# GetWarehouseStocksRequest

Фильтры для запроса остатков. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stocksWarehouseId** | **number** | Идентификатор склада.  Если параметр указан, возвращаются только товары на переданном складе.  **Для модели FBY:** получить список складов Маркета можно с помощью метода [GET v2/warehouses](../../reference/warehouses/getFulfillmentWarehouses.md).  | [optional] [default to undefined]
**hasStocks** | **boolean** | **Только для модели FBY**  Фильтр по наличию товаров. Используйте только вместе со &#x60;stocksWarehouseId&#x60;.  Передайте &#x60;false&#x60;, чтобы получить информацию о товарах, которых нет в наличие. При значении &#x60;true&#x60; возвращаются данные о товарах, которые есть на указанном складе.  | [optional] [default to undefined]
**withTurnover** | **boolean** | **Только для модели FBY**  Возвращать ли информацию по оборачиваемости.  Значение по умолчанию: &#x60;false&#x60;. Если информация нужна, передайте значение &#x60;true&#x60;.  | [optional] [default to false]
**archived** | **boolean** | Фильтр по нахождению в архиве.  Передайте &#x60;true&#x60;, чтобы получить информацию об остатках товаров, которые находятся в архиве. Если фильтр не заполнен или передано &#x60;false&#x60;, в ответе возвращается информация о товарах, которые не находятся в архиве.  | [optional] [default to undefined]
**offerIds** | **Set&lt;string&gt;** | Фильтр по вашим SKU товаров.  Возвращается информация об остатках всех переданных SKU, включая товары в архиве.  {% note warning \&quot;Такой список возвращается только целиком\&quot; %}  Если вы запрашиваете информацию по конкретным SKU, не заполняйте:  * &#x60;page_token&#x60; * &#x60;limit&#x60; * &#x60;archived&#x60; * &#x60;stocksOnWarehouse&#x60;  {% endnote %}     | [optional] [default to undefined]

## Example

```typescript
import { GetWarehouseStocksRequest } from './api';

const instance: GetWarehouseStocksRequest = {
    stocksWarehouseId,
    hasStocks,
    withTurnover,
    archived,
    offerIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
