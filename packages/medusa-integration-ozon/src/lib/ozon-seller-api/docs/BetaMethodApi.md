# BetaMethodApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**analyticsAPIAnalyticsStocks**](#analyticsapianalyticsstocks) | **POST** /v1/analytics/stocks | Получить аналитику по остаткам|
|[**analyticsAPIManageStocks**](#analyticsapimanagestocks) | **POST** /v1/analytics/manage/stocks | Управление остатками|
|[**cargoesGet**](#cargoesget) | **POST** /v1/cargoes/get | Получить информацию о грузоместах|
|[**carriageAPICarriageDeliveryListV2**](#carriageapicarriagedeliverylistv2) | **POST** /v2/carriage/delivery/list | Список методов доставки и отгрузок|
|[**getDeliveryMethodReturnSettingsV1**](#getdeliverymethodreturnsettingsv1) | **POST** /v1/delivery-method/return/settings/get | Получить информацию по возвратным настройкам rFBS и rFBS Express|
|[**getFinanceBalanceV1**](#getfinancebalancev1) | **POST** /v1/finance/balance | Получить отчёт о балансе|
|[**getSupplierReturnsSummaryReport**](#getsupplierreturnssummaryreport) | **POST** /v1/removal/from-stock/list | Отчёт по вывозу и утилизации со стока FBO|
|[**getSupplyReturnsSummaryReport**](#getsupplyreturnssummaryreport) | **POST** /v1/removal/from-supply/list | Отчёт по вывозу и утилизации с поставки FBO|
|[**productAPIGetProductInfoStocksByWarehouseFbsV2**](#productapigetproductinfostocksbywarehousefbsv2) | **POST** /v2/product/info/stocks-by-warehouse/fbs | Информация об остатках на складах продавца|
|[**productAPIGetProductPlacementZoneInfo**](#productapigetproductplacementzoneinfo) | **POST** /v1/product/placement-zone/info | Получить зоны размещения товаров по SKU перед поставкой|
|[**productAPIGetProductStairwayDiscountByQuantity**](#productapigetproductstairwaydiscountbyquantity) | **POST** /v1/product/stairway-discount/by-quantity/get | Получить информацию о скидке от количества|
|[**productAPIProductInfoWrongVolume**](#productapiproductinfowrongvolume) | **POST** /v1/product/info/wrong-volume | Список товаров с некорректными ОВХ|
|[**productAPISetProductStairwayDiscountByQuantity**](#productapisetproductstairwaydiscountbyquantity) | **POST** /v1/product/stairway-discount/by-quantity/set | Управлять скидкой от количества|
|[**productPricesDetails**](#productpricesdetails) | **POST** /v1/product/prices/details | Получить подробную информацию о ценах товаров|
|[**ratingAPIGetFBSRatingIndexInfoV1**](#ratingapigetfbsratingindexinfov1) | **POST** /v1/rating/index/fbs/info | Получить индекс ошибок FBS и rFBS|
|[**ratingAPIListFBSRatingIndexPostingsV1**](#ratingapilistfbsratingindexpostingsv1) | **POST** /v1/rating/index/fbs/posting/list | Список отправлений, которые повлияли на индекс ошибок FBS и rFBS|
|[**supplyOrderAPISupplyOrderDetails**](#supplyorderapisupplyorderdetails) | **POST** /v1/supply-order/details | Получить подробную информацию о заявке на поставку|
|[**warehouseAPIDeliveryMethodListV2**](#warehouseapideliverymethodlistv2) | **POST** /v2/delivery-method/list | Список методов доставки склада|

# **analyticsAPIAnalyticsStocks**
> V1AnalyticsStocksResponse analyticsAPIAnalyticsStocks(v1AnalyticsStocksRequest)

Используйте метод, чтобы получить аналитику по остаткам товаров на складах. Метод соответствует разделу [**FBO → Управление остатками**](https://seller.ozon.ru/app/fbo-stocks/stocks-management/) в личном кабинете. Аналитика обновляется раз в день в 07:00 UTC.  Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1341-Novyi-metod-analitiki-po-ostatkam-na-skladakh-Ozon) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    BetaMethodApi,
    Configuration,
    V1AnalyticsStocksRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BetaMethodApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1AnalyticsStocksRequest: V1AnalyticsStocksRequest; //

const { status, data } = await apiInstance.analyticsAPIAnalyticsStocks(
    clientId,
    apiKey,
    v1AnalyticsStocksRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1AnalyticsStocksRequest** | **V1AnalyticsStocksRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1AnalyticsStocksResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Аналитика по остаткам на складах |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analyticsAPIManageStocks**
> V1AnalyticsManageStocksResponse analyticsAPIManageStocks(v1AnalyticsManageStocksRequest)

 <aside class=\"warning\"> 22 января 2026 года метод будет отключён. Переключитесь на <a href=\"#operation/AnalyticsAPI_AnalyticsStocks\">/v1/analytics/stocks</a>. </aside>  Используйте метод, чтобы узнать, сколько товаров осталось на складах FBO.  Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1106-Razdel-upravleniia-ostatkami-analytics-manage-stocks) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    BetaMethodApi,
    Configuration,
    V1AnalyticsManageStocksRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BetaMethodApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1AnalyticsManageStocksRequest: V1AnalyticsManageStocksRequest; //

const { status, data } = await apiInstance.analyticsAPIManageStocks(
    clientId,
    apiKey,
    v1AnalyticsManageStocksRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1AnalyticsManageStocksRequest** | **V1AnalyticsManageStocksRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1AnalyticsManageStocksResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация об остатках |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cargoesGet**
> V1CargoesGetResponse cargoesGet()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1837-Novyi-beta-metod-dlia-polucheniia-gruzomest-v-postavke-FBO/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    BetaMethodApi,
    Configuration,
    V1CargoesGetRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BetaMethodApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1CargoesGetRequest: V1CargoesGetRequest; // (optional)

const { status, data } = await apiInstance.cargoesGet(
    clientId,
    apiKey,
    v1CargoesGetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1CargoesGetRequest** | **V1CargoesGetRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1CargoesGetResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о грузоместах |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **carriageAPICarriageDeliveryListV2**
> V2CarriageDeliveryListV2Response carriageAPICarriageDeliveryListV2(v2CarriageDeliveryListV2Request)

<aside class=\"warning\">   Метод не возвращает информацию по методам доставки, у которых нет отправлений. </aside>  Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1802-Novye-beta-metody-dlia-raboty-s-rasshirennymi-limitami-skladov/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    BetaMethodApi,
    Configuration,
    V2CarriageDeliveryListV2Request
} from './api';

const configuration = new Configuration();
const apiInstance = new BetaMethodApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v2CarriageDeliveryListV2Request: V2CarriageDeliveryListV2Request; //

const { status, data } = await apiInstance.carriageAPICarriageDeliveryListV2(
    clientId,
    apiKey,
    v2CarriageDeliveryListV2Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2CarriageDeliveryListV2Request** | **V2CarriageDeliveryListV2Request**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V2CarriageDeliveryListV2Response**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список методов и отгрузок |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDeliveryMethodReturnSettingsV1**
> V1GetDeliveryMethodReturnSettingsV1Response getDeliveryMethodReturnSettingsV1()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1794-Novyi-beta-metod-dlia-polucheniia-vozvratnykh-nastroek-sklada-rFBS/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    BetaMethodApi,
    Configuration,
    V1GetDeliveryMethodReturnSettingsV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new BetaMethodApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1GetDeliveryMethodReturnSettingsV1Request: V1GetDeliveryMethodReturnSettingsV1Request; // (optional)

const { status, data } = await apiInstance.getDeliveryMethodReturnSettingsV1(
    clientId,
    apiKey,
    v1GetDeliveryMethodReturnSettingsV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetDeliveryMethodReturnSettingsV1Request** | **V1GetDeliveryMethodReturnSettingsV1Request**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1GetDeliveryMethodReturnSettingsV1Response**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация получена |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFinanceBalanceV1**
> V1GetFinanceBalanceV1Response getFinanceBalanceV1(v1GetFinanceBalanceV1Request)

Соответствует разделу **Финансы → Баланс** в личном кабинете.  Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1732-Novyi-metod-polucheniia-dannykh-po-balansu/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    BetaMethodApi,
    Configuration,
    V1GetFinanceBalanceV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new BetaMethodApi(configuration);

let v1GetFinanceBalanceV1Request: V1GetFinanceBalanceV1Request; //

const { status, data } = await apiInstance.getFinanceBalanceV1(
    v1GetFinanceBalanceV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetFinanceBalanceV1Request** | **V1GetFinanceBalanceV1Request**|  | |


### Return type

**V1GetFinanceBalanceV1Response**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Отчёт о балансе |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSupplierReturnsSummaryReport**
> V1GetSupplierReturnsSummaryReportResponse getSupplierReturnsSummaryReport(v1GetSupplierReturnsSummaryReportRequest)

Метод соответствует разделу [**FBO → Вывоз и утилизация**](https://seller.ozon.ru/app/fbo-operations/returns) в личном кабинете.  Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1608-Novye-metody-po-vyvozu-i-utilizatsii) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    BetaMethodApi,
    Configuration,
    V1GetSupplierReturnsSummaryReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BetaMethodApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1GetSupplierReturnsSummaryReportRequest: V1GetSupplierReturnsSummaryReportRequest; //

const { status, data } = await apiInstance.getSupplierReturnsSummaryReport(
    clientId,
    apiKey,
    v1GetSupplierReturnsSummaryReportRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetSupplierReturnsSummaryReportRequest** | **V1GetSupplierReturnsSummaryReportRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1GetSupplierReturnsSummaryReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Отчёт по вывозу и утилизации со стока FBO |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSupplyReturnsSummaryReport**
> V1GetSupplyReturnsSummaryReportResponse getSupplyReturnsSummaryReport(v1GetSupplyReturnsSummaryReportRequest)

Метод соответствует разделу [**FBO → Вывоз и утилизация**](https://seller.ozon.ru/app/fbo-operations/returns) в личном кабинете.  Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1608-Novye-metody-po-vyvozu-i-utilizatsii) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    BetaMethodApi,
    Configuration,
    V1GetSupplyReturnsSummaryReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BetaMethodApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1GetSupplyReturnsSummaryReportRequest: V1GetSupplyReturnsSummaryReportRequest; //

const { status, data } = await apiInstance.getSupplyReturnsSummaryReport(
    clientId,
    apiKey,
    v1GetSupplyReturnsSummaryReportRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetSupplyReturnsSummaryReportRequest** | **V1GetSupplyReturnsSummaryReportRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1GetSupplyReturnsSummaryReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Отчёт по вывозу и утилизации с поставки FBO |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIGetProductInfoStocksByWarehouseFbsV2**
> V2GetProductInfoStocksByWarehouseFbsResponseV2 productAPIGetProductInfoStocksByWarehouseFbsV2(v2GetProductInfoStocksByWarehouseFbsRequestV2)

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1802-Novye-beta-metody-dlia-raboty-s-rasshirennymi-limitami-skladov/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    BetaMethodApi,
    Configuration,
    V2GetProductInfoStocksByWarehouseFbsRequestV2
} from './api';

const configuration = new Configuration();
const apiInstance = new BetaMethodApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v2GetProductInfoStocksByWarehouseFbsRequestV2: V2GetProductInfoStocksByWarehouseFbsRequestV2; //

const { status, data } = await apiInstance.productAPIGetProductInfoStocksByWarehouseFbsV2(
    clientId,
    apiKey,
    v2GetProductInfoStocksByWarehouseFbsRequestV2
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2GetProductInfoStocksByWarehouseFbsRequestV2** | **V2GetProductInfoStocksByWarehouseFbsRequestV2**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V2GetProductInfoStocksByWarehouseFbsResponseV2**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Количество товаров на складах |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIGetProductPlacementZoneInfo**
> V1GetProductPlacementZoneInfoResponse productAPIGetProductPlacementZoneInfo(v1GetProductPlacementZoneInfoRequest)

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1795-Novyi-beta-metod-dlia-polucheniia-zon-razmescheniia-po-tovaram/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    BetaMethodApi,
    Configuration,
    V1GetProductPlacementZoneInfoRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BetaMethodApi(configuration);

let v1GetProductPlacementZoneInfoRequest: V1GetProductPlacementZoneInfoRequest; //

const { status, data } = await apiInstance.productAPIGetProductPlacementZoneInfo(
    v1GetProductPlacementZoneInfoRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetProductPlacementZoneInfoRequest** | **V1GetProductPlacementZoneInfoRequest**|  | |


### Return type

**V1GetProductPlacementZoneInfoResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о зонах размещения |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIGetProductStairwayDiscountByQuantity**
> V1GetProductStairwayDiscountByQuantityResponse productAPIGetProductStairwayDiscountByQuantity(v1GetProductStairwayDiscountByQuantityRequest)

Возвращает информацию о скидке на товар в зависимости от его количества в заказе.  Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1719-Novye-metody-dlia-raboty-so-skidkoi-ot-kolichestva/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    BetaMethodApi,
    Configuration,
    V1GetProductStairwayDiscountByQuantityRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BetaMethodApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1GetProductStairwayDiscountByQuantityRequest: V1GetProductStairwayDiscountByQuantityRequest; //

const { status, data } = await apiInstance.productAPIGetProductStairwayDiscountByQuantity(
    clientId,
    apiKey,
    v1GetProductStairwayDiscountByQuantityRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetProductStairwayDiscountByQuantityRequest** | **V1GetProductStairwayDiscountByQuantityRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1GetProductStairwayDiscountByQuantityResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация получена |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPIProductInfoWrongVolume**
> V1ProductInfoWrongVolumeResponse productAPIProductInfoWrongVolume(v1ProductInfoWrongVolumeRequest)

Возвращает список товаров с некорректными объёмно-весовыми характеристиками (ОВХ). Если вы указали размеры правильно, обратитесь в поддержку Ozon.  Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1260-Informer-nekorrektnykh-OVKh) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    BetaMethodApi,
    Configuration,
    V1ProductInfoWrongVolumeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BetaMethodApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1ProductInfoWrongVolumeRequest: V1ProductInfoWrongVolumeRequest; //

const { status, data } = await apiInstance.productAPIProductInfoWrongVolume(
    clientId,
    apiKey,
    v1ProductInfoWrongVolumeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1ProductInfoWrongVolumeRequest** | **V1ProductInfoWrongVolumeRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1ProductInfoWrongVolumeResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о товарах с некорректными ОВХ |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productAPISetProductStairwayDiscountByQuantity**
> V1SetProductStairwayDiscountByQuantityResponse productAPISetProductStairwayDiscountByQuantity(v1SetProductStairwayDiscountByQuantityRequest)

Устанавливает или удаляет скидку на товар в зависимости от его количества в заказе.  Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1719-Novye-metody-dlia-raboty-so-skidkoi-ot-kolichestva/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    BetaMethodApi,
    Configuration,
    V1SetProductStairwayDiscountByQuantityRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BetaMethodApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1SetProductStairwayDiscountByQuantityRequest: V1SetProductStairwayDiscountByQuantityRequest; //

const { status, data } = await apiInstance.productAPISetProductStairwayDiscountByQuantity(
    clientId,
    apiKey,
    v1SetProductStairwayDiscountByQuantityRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1SetProductStairwayDiscountByQuantityRequest** | **V1SetProductStairwayDiscountByQuantityRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1SetProductStairwayDiscountByQuantityResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Настройки скидки изменены |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productPricesDetails**
> V1ProductPricesDetailsResponse productPricesDetails(v1ProductPricesDetailsRequest)

Доступно для продавцов с подпиской Premium Pro.  Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1834-Novyi-metod-dlia-polucheniia-detalnoi-informatsii-po-tsenam/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    BetaMethodApi,
    Configuration,
    V1ProductPricesDetailsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BetaMethodApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1ProductPricesDetailsRequest: V1ProductPricesDetailsRequest; //

const { status, data } = await apiInstance.productPricesDetails(
    clientId,
    apiKey,
    v1ProductPricesDetailsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1ProductPricesDetailsRequest** | **V1ProductPricesDetailsRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1ProductPricesDetailsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о ценах товаров |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ratingAPIGetFBSRatingIndexInfoV1**
> V1GetFBSRatingIndexInfoV1Response ratingAPIGetFBSRatingIndexInfoV1()

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1758-Novye-metody-dlia-polucheniia-indeksa-oshibok-FBS-i-rFBS/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    BetaMethodApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BetaMethodApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)

const { status, data } = await apiInstance.ratingAPIGetFBSRatingIndexInfoV1(
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

**V1GetFBSRatingIndexInfoV1Response**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Индекс ошибок |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ratingAPIListFBSRatingIndexPostingsV1**
> V1ListFBSRatingIndexPostingsV1Response ratingAPIListFBSRatingIndexPostingsV1(v1ListFBSRatingIndexPostingsV1Request)

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1758-Novye-metody-dlia-polucheniia-indeksa-oshibok-FBS-i-rFBS/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    BetaMethodApi,
    Configuration,
    V1ListFBSRatingIndexPostingsV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new BetaMethodApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1ListFBSRatingIndexPostingsV1Request: V1ListFBSRatingIndexPostingsV1Request; //

const { status, data } = await apiInstance.ratingAPIListFBSRatingIndexPostingsV1(
    clientId,
    apiKey,
    v1ListFBSRatingIndexPostingsV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1ListFBSRatingIndexPostingsV1Request** | **V1ListFBSRatingIndexPostingsV1Request**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1ListFBSRatingIndexPostingsV1Response**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список отправлений |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **supplyOrderAPISupplyOrderDetails**
> V1SupplyOrderDetailsResponse supplyOrderAPISupplyOrderDetails(v1SupplyOrderDetailsRequest)

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1793-Novyi-beta-metod-dlia-polucheniia-podrobnoi-informatsii-po-postavke-FBO/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    BetaMethodApi,
    Configuration,
    V1SupplyOrderDetailsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BetaMethodApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1SupplyOrderDetailsRequest: V1SupplyOrderDetailsRequest; //

const { status, data } = await apiInstance.supplyOrderAPISupplyOrderDetails(
    clientId,
    apiKey,
    v1SupplyOrderDetailsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1SupplyOrderDetailsRequest** | **V1SupplyOrderDetailsRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1SupplyOrderDetailsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Подробная информация о заявке |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **warehouseAPIDeliveryMethodListV2**
> V2DeliveryMethodListV2Response warehouseAPIDeliveryMethodListV2(v2DeliveryMethodListV2Request)

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1802-Novye-beta-metody-dlia-raboty-s-rasshirennymi-limitami-skladov/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    BetaMethodApi,
    Configuration,
    V2DeliveryMethodListV2Request
} from './api';

const configuration = new Configuration();
const apiInstance = new BetaMethodApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v2DeliveryMethodListV2Request: V2DeliveryMethodListV2Request; //

const { status, data } = await apiInstance.warehouseAPIDeliveryMethodListV2(
    clientId,
    apiKey,
    v2DeliveryMethodListV2Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2DeliveryMethodListV2Request** | **V2DeliveryMethodListV2Request**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V2DeliveryMethodListV2Response**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список методов склада |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

