# PricesStocksAPIApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**productAPIActionTimerStatus**](#productapiactiontimerstatus) | **POST** /v1/product/action/timer/status | Получить статус установленного таймера|
|[**productAPIActionTimerUpdate**](#productapiactiontimerupdate) | **POST** /v1/product/action/timer/update | Обновление таймера актуальности минимальной цены|
|[**productAPIGetProductInfoDiscounted**](#productapigetproductinfodiscounted) | **POST** /v1/product/info/discounted | Узнать информацию об уценке и основном товаре по SKU уценённого товара|
|[**productAPIGetProductInfoPrices**](#productapigetproductinfoprices) | **POST** /v5/product/info/prices | Получить информацию о цене товара|
|[**productAPIGetProductInfoStocks**](#productapigetproductinfostocks) | **POST** /v4/product/info/stocks | Информация о количестве товаров|
|[**productAPIImportProductsPrices**](#productapiimportproductsprices) | **POST** /v1/product/import/prices | Обновить цену|
|[**productAPIProductStocksByWarehouseFbs**](#productapiproductstocksbywarehousefbs) | **POST** /v1/product/info/stocks-by-warehouse/fbs | Информация об остатках на складах продавца (FBS и rFBS)|
|[**productAPIProductUpdateDiscount**](#productapiproductupdatediscount) | **POST** /v1/product/update/discount | Установить скидку на уценённый товар|
|[**productAPIProductsStocksV2**](#productapiproductsstocksv2) | **POST** /v2/products/stocks | Обновить количество товаров на складах|
|[**productInfoWarehouseStocks**](#productinfowarehousestocks) | **POST** /v1/product/info/warehouse/stocks | Получить информацию по остаткам на складе FBS и rFBS|

# **productAPIActionTimerStatus**
> V1ProductActionTimerStatusResponse productAPIActionTimerStatus(v1ProductActionTimerStatusRequest)


### Example

```typescript
import {
    PricesStocksAPIApi,
    Configuration,
    V1ProductActionTimerStatusRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PricesStocksAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1ProductActionTimerStatusRequest: V1ProductActionTimerStatusRequest; //

const { status, data } = await apiInstance.productAPIActionTimerStatus(
    clientId,
    apiKey,
    v1ProductActionTimerStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1ProductActionTimerStatusRequest** | **V1ProductActionTimerStatusRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1ProductActionTimerStatusResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Статусы |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIActionTimerUpdate**
> productAPIActionTimerUpdate(v1ProductActionTimerUpdateRequest)


### Example

```typescript
import {
    PricesStocksAPIApi,
    Configuration,
    V1ProductActionTimerUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PricesStocksAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1ProductActionTimerUpdateRequest: V1ProductActionTimerUpdateRequest; //

const { status, data } = await apiInstance.productAPIActionTimerUpdate(
    clientId,
    apiKey,
    v1ProductActionTimerUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1ProductActionTimerUpdateRequest** | **V1ProductActionTimerUpdateRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Обновлено |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIGetProductInfoDiscounted**
> V1GetProductInfoDiscountedResponse productAPIGetProductInfoDiscounted(v1GetProductInfoDiscountedRequest)

Метод для получения информации о состоянии и дефектах уценённого товара по его SKU. Работает только с уценёнными товарами по схеме FBO. Также метод возвращает SKU основного товара.

### Example

```typescript
import {
    PricesStocksAPIApi,
    Configuration,
    V1GetProductInfoDiscountedRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PricesStocksAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1GetProductInfoDiscountedRequest: V1GetProductInfoDiscountedRequest; //

const { status, data } = await apiInstance.productAPIGetProductInfoDiscounted(
    clientId,
    apiKey,
    v1GetProductInfoDiscountedRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetProductInfoDiscountedRequest** | **V1GetProductInfoDiscountedRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1GetProductInfoDiscountedResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация об уценке и основном товаре |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIGetProductInfoPrices**
> Productv5GetProductInfoPricesV5Response productAPIGetProductInfoPrices(productv5GetProductInfoPricesV5Request)


### Example

```typescript
import {
    PricesStocksAPIApi,
    Configuration,
    Productv5GetProductInfoPricesV5Request
} from './api';

const configuration = new Configuration();
const apiInstance = new PricesStocksAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let productv5GetProductInfoPricesV5Request: Productv5GetProductInfoPricesV5Request; //

const { status, data } = await apiInstance.productAPIGetProductInfoPrices(
    clientId,
    apiKey,
    productv5GetProductInfoPricesV5Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productv5GetProductInfoPricesV5Request** | **Productv5GetProductInfoPricesV5Request**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**Productv5GetProductInfoPricesV5Response**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о цене товара |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIGetProductInfoStocks**
> V4GetProductInfoStocksResponse productAPIGetProductInfoStocks(v4GetProductInfoStocksRequest)

Возвращает информацию о ĸоличестве товаров по схемам FBS и rFBS:   - сĸольĸо единиц есть в наличии,   - сĸольĸо зарезервировано поĸупателями.  Чтобы получить информацию об остатках по схеме FBO, используйте метод [/v1/analytics/stocks](#operation/AnalyticsAPI_AnalyticsStocks). 

### Example

```typescript
import {
    PricesStocksAPIApi,
    Configuration,
    V4GetProductInfoStocksRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PricesStocksAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v4GetProductInfoStocksRequest: V4GetProductInfoStocksRequest; //

const { status, data } = await apiInstance.productAPIGetProductInfoStocks(
    clientId,
    apiKey,
    v4GetProductInfoStocksRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v4GetProductInfoStocksRequest** | **V4GetProductInfoStocksRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V4GetProductInfoStocksResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Количество товара |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIImportProductsPrices**
> ProductImportProductsPricesResponse productAPIImportProductsPrices()

Позволяет изменить цену одного или нескольких товаров. Цену каждого товара можно обновлять не больше 10 раз в час. Чтобы сбросить `old_price`, поставьте `0` у этого параметра.   Если у товара установлена минимальная цена и включено автоприменение в акции, отключите его и обновите  минимальную цену. Иначе вернётся ошибка `action_price_enabled_min_price_missing`.  Если запрос содержит оба параметра — `offer_id` и `product_id`, изменения применятся к товару с `offer_id`. Для избежания неоднозначности используйте только один из параметров. 

### Example

```typescript
import {
    PricesStocksAPIApi,
    Configuration,
    ProductImportProductsPricesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PricesStocksAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let productImportProductsPricesRequest: ProductImportProductsPricesRequest; // (optional)

const { status, data } = await apiInstance.productAPIImportProductsPrices(
    clientId,
    apiKey,
    productImportProductsPricesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productImportProductsPricesRequest** | **ProductImportProductsPricesRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**ProductImportProductsPricesResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Цена обновлена |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIProductStocksByWarehouseFbs**
> Productsv1GetProductInfoStocksByWarehouseFbsResponse productAPIProductStocksByWarehouseFbs(productsv1GetProductInfoStocksByWarehouseFbsRequest)

<aside class=\"warning\">   Метод устаревает и будет отключён в будущем. Переключитесь на <a href=\"#operation/ProductAPI_GetProductInfoStocksByWarehouseFbsV2\">/v2/product/info/stocks-by-warehouse/fbs</a>. </aside>  Передайте в запросе `offer_id` или `sku`. Если укажете оба, будет использован только `sku`. 

### Example

```typescript
import {
    PricesStocksAPIApi,
    Configuration,
    Productsv1GetProductInfoStocksByWarehouseFbsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PricesStocksAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let productsv1GetProductInfoStocksByWarehouseFbsRequest: Productsv1GetProductInfoStocksByWarehouseFbsRequest; //

const { status, data } = await apiInstance.productAPIProductStocksByWarehouseFbs(
    clientId,
    apiKey,
    productsv1GetProductInfoStocksByWarehouseFbsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productsv1GetProductInfoStocksByWarehouseFbsRequest** | **Productsv1GetProductInfoStocksByWarehouseFbsRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**Productsv1GetProductInfoStocksByWarehouseFbsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Количество товаров на складах FBS и rFBS |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIProductUpdateDiscount**
> V1ProductUpdateDiscountResponse productAPIProductUpdateDiscount(v1ProductUpdateDiscountRequest)

Метод для установки размера скидки на уценённые товары, продающиеся по схеме FBS.

### Example

```typescript
import {
    PricesStocksAPIApi,
    Configuration,
    V1ProductUpdateDiscountRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PricesStocksAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1ProductUpdateDiscountRequest: V1ProductUpdateDiscountRequest; //

const { status, data } = await apiInstance.productAPIProductUpdateDiscount(
    clientId,
    apiKey,
    v1ProductUpdateDiscountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1ProductUpdateDiscountRequest** | **V1ProductUpdateDiscountRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1ProductUpdateDiscountResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Успешно |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIProductsStocksV2**
> Productv2ProductsStocksResponse productAPIProductsStocksV2(productv2ProductsStocksRequest)

Позволяет изменить информацию о количестве товара в наличии.  <aside class=\"warning\"> Переданный остаток — количество товара в наличии без учёта зарезервированных товаров. Перед обновлением остатков проверьте количество зарезервированных товаров с помощью метода <a href=\"#operation/ProductAPI_ProductStocksByWarehouseFbs\">/v1/product/info/stocks-by-warehouse/fbs</a>. </aside>  За один запрос можно изменить наличие для 100 пар товар-склад. С одного аккаунта продавца можно отправить до 80 запросов в минуту.  <aside class=\"warning\">Обновлять остатки у одной пары товар-склад можно только 1 раз в 30 секунд, иначе в параметре <code>result.errors</code> в ответе будет ошибка <code>TOO_MANY_REQUESTS</code>.</aside>  Вы можете задать наличие товара только после того, как его статус сменится на `price_sent`.  Остатки крупногабаритных товаров можно обновлять только на предназначенных для них складах.  Если запрос содержит оба параметра — `offer_id` и `product_id`, изменения применятся к товару с `offer_id`. Для избежания неоднозначности используйте только один из параметров.  <aside class=\"warning\"> 26 июня 2025 параметры <tt>stocks.quant_size</tt> в запросе метода и <tt>result.quant_size</tt> в ответе метода будут отключены. </aside> 

### Example

```typescript
import {
    PricesStocksAPIApi,
    Configuration,
    Productv2ProductsStocksRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PricesStocksAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let productv2ProductsStocksRequest: Productv2ProductsStocksRequest; //

const { status, data } = await apiInstance.productAPIProductsStocksV2(
    clientId,
    apiKey,
    productv2ProductsStocksRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productv2ProductsStocksRequest** | **Productv2ProductsStocksRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**Productv2ProductsStocksResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Количество товаров обновлено |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productInfoWarehouseStocks**
> V1ProductInfoWarehouseStocksResponse productInfoWarehouseStocks()


### Example

```typescript
import {
    PricesStocksAPIApi,
    Configuration,
    V1ProductInfoWarehouseStocksRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PricesStocksAPIApi(configuration);

let v1ProductInfoWarehouseStocksRequest: V1ProductInfoWarehouseStocksRequest; // (optional)

const { status, data } = await apiInstance.productInfoWarehouseStocks(
    v1ProductInfoWarehouseStocksRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1ProductInfoWarehouseStocksRequest** | **V1ProductInfoWarehouseStocksRequest**|  | |


### Return type

**V1ProductInfoWarehouseStocksResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Количество товара на складе FBS и rFBS |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

