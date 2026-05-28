# AnalyticsAPIApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**analyticsAPIAnalyticsGetStockOnWarehousesV2**](#analyticsapianalyticsgetstockonwarehousesv2) | **POST** /v2/analytics/stock_on_warehouses | Отчёт по остаткам и товарам|
|[**analyticsAPIAverageDeliveryTime**](#analyticsapiaveragedeliverytime) | **POST** /v1/analytics/average-delivery-time | Получить аналитику по среднему времени доставки|
|[**analyticsAPIAverageDeliveryTimeDetails**](#analyticsapiaveragedeliverytimedetails) | **POST** /v1/analytics/average-delivery-time/details | Получить детальную аналитику по среднему времени доставки|
|[**analyticsAPIStocksTurnover**](#analyticsapistocksturnover) | **POST** /v1/analytics/turnover/stocks | Оборачиваемость товара|
|[**averageDeliveryTimeSummary**](#averagedeliverytimesummary) | **POST** /v1/analytics/average-delivery-time/summary | Получить общую аналитику по среднему времени доставки|

# **analyticsAPIAnalyticsGetStockOnWarehousesV2**
> AnalyticsStockOnWarehouseResponse analyticsAPIAnalyticsGetStockOnWarehousesV2(analyticsStockOnWarehouseRequest)

 <aside class=\"warning\"> В будущем метод будет отключён. Переключитесь на <a href=\"#operation/AnalyticsAPI_AnalyticsStocks\">/v1/analytics/stocks</a>. </aside>  Метод для получения отчёта по остаткам и товарам в перемещении по складам Ozon.  <aside class=\"warning\"> Отличается от отчёта в разделе <b>Аналитика → Отчёты → Отчёт по остаткам и товарам в пути на склады Ozon</b> в личном кабинете. </aside> 

### Example

```typescript
import {
    AnalyticsAPIApi,
    Configuration,
    AnalyticsStockOnWarehouseRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AnalyticsAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let analyticsStockOnWarehouseRequest: AnalyticsStockOnWarehouseRequest; //

const { status, data } = await apiInstance.analyticsAPIAnalyticsGetStockOnWarehousesV2(
    clientId,
    apiKey,
    analyticsStockOnWarehouseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **analyticsStockOnWarehouseRequest** | **AnalyticsStockOnWarehouseRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**AnalyticsStockOnWarehouseResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Отчёт по остаткам и товарам |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analyticsAPIAverageDeliveryTime**
> V1AverageDeliveryTimeResponse analyticsAPIAverageDeliveryTime(v1AverageDeliveryTimeRequest)

Метод позволяет получить аналитику по среднему времени доставки товара до покупателя. Соответствует разделу **Аналитика → География продаж → Среднее время доставки** в личном кабинете. Детальную аналитику по каждому кластеру можно получить с помощью метода [/v1/analytics/average-delivery-time/details](#operation/AnalyticsAPI_AverageDeliveryTimeDetails).  [Подробнее о среднем времени доставки в Базе знаний продавца](https://seller-edu.ozon.ru/analytics-and-metrics/graphs/srednee-vremya-dostavki) 

### Example

```typescript
import {
    AnalyticsAPIApi,
    Configuration,
    V1AverageDeliveryTimeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AnalyticsAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1AverageDeliveryTimeRequest: V1AverageDeliveryTimeRequest; //

const { status, data } = await apiInstance.analyticsAPIAverageDeliveryTime(
    clientId,
    apiKey,
    v1AverageDeliveryTimeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1AverageDeliveryTimeRequest** | **V1AverageDeliveryTimeRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1AverageDeliveryTimeResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Аналитика по среднему времени доставки |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analyticsAPIAverageDeliveryTimeDetails**
> V1AverageDeliveryTimeDetailsResponse analyticsAPIAverageDeliveryTimeDetails(v1AverageDeliveryTimeDetailsRequest)

Метод является аналогом вкладки **Аналитика → География продаж → Среднее время доставки** в личном кабинете продавца. [Подробнее о среднем времени доставки в Базе знаний продавца](https://seller-edu.ozon.ru/analytics-and-metrics/graphs/srednee-vremya-dostavki).  Чтобы получить общую аналитику по кластерам, используйте метод <a href=\"#operation/AnalyticsAPI_AverageDeliveryTime\">/v1/analytics/average-delivery-time</a>. 

### Example

```typescript
import {
    AnalyticsAPIApi,
    Configuration,
    V1AverageDeliveryTimeDetailsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AnalyticsAPIApi(configuration);

let v1AverageDeliveryTimeDetailsRequest: V1AverageDeliveryTimeDetailsRequest; //

const { status, data } = await apiInstance.analyticsAPIAverageDeliveryTimeDetails(
    v1AverageDeliveryTimeDetailsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1AverageDeliveryTimeDetailsRequest** | **V1AverageDeliveryTimeDetailsRequest**|  | |


### Return type

**V1AverageDeliveryTimeDetailsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Детальная аналитика |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analyticsAPIStocksTurnover**
> V1AnalyticsTurnoverStocksResponse analyticsAPIStocksTurnover(v1AnalyticsTurnoverStocksRequest)

Используйте метод, чтобы узнать оборачиваемость товара и количество дней, на которое хватит текущего остатка.  Метод соответствует разделу [**FBO -> Управление остатками**](https://seller.ozon.ru/app/supply/stocks-management) в личном кабинете. Вы можете делать не больше 1 запроса в минуту по одному кабинету `Client-Id`.      Если вы запрашиваете список товаров по `sku`, параметры `limit` и `offset` необязательны. 

### Example

```typescript
import {
    AnalyticsAPIApi,
    Configuration,
    V1AnalyticsTurnoverStocksRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AnalyticsAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1AnalyticsTurnoverStocksRequest: V1AnalyticsTurnoverStocksRequest; //

const { status, data } = await apiInstance.analyticsAPIStocksTurnover(
    clientId,
    apiKey,
    v1AnalyticsTurnoverStocksRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1AnalyticsTurnoverStocksRequest** | **V1AnalyticsTurnoverStocksRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1AnalyticsTurnoverStocksResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация об оборачиваемости |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **averageDeliveryTimeSummary**
> V1AverageDeliveryTimeSummaryResponse averageDeliveryTimeSummary()

Метод позволяет получить общую аналитику по среднему времени доставки товара до покупателя. Соответствует разделу **Аналитика → География продаж → Среднее время доставки** в личном кабинете.   Детальную аналитику по каждому кластеру можно получить с помощью метода [/v1/analytics/average-delivery-time/details](#operation/AnalyticsAPI_AverageDeliveryTimeDetails).  Чтобы получить аналитику по среднему времени доставки, используйте метод [/v1/analytics/average-delivery-time](#operation/AnalyticsAPI_AverageDeliveryTime).  [Подробнее о среднем времени доставки в Базе знаний продавца](https://seller-edu.ozon.ru/analytics-and-metrics/graphs/srednee-vremya-dostavki) 

### Example

```typescript
import {
    AnalyticsAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AnalyticsAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)

const { status, data } = await apiInstance.averageDeliveryTimeSummary(
    clientId,
    apiKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1AverageDeliveryTimeSummaryResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Общая аналитика |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

