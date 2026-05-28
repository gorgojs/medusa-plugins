# ReportAPIApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCompanyMarkedProductsSalesReport**](#createcompanymarkedproductssalesreport) | **POST** /v1/report/marked-products-sales/create | Сгенерировать отчёт по продажам товаров с маркировкой|
|[**createPlacementByProductsReport**](#createplacementbyproductsreport) | **POST** /v1/report/placement/by-products/create | Получить отчёт о стоимости размещения по товарам|
|[**createPlacementBySuppliesReport**](#createplacementbysuppliesreport) | **POST** /v1/report/placement/by-supplies/create | Получить отчёт о стоимости размещения по поставкам|
|[**financeAPIFinanceCashFlowStatementList**](#financeapifinancecashflowstatementlist) | **POST** /v1/finance/cash-flow-statement/list | Финансовый отчёт|
|[**reportAPICreateCompanyPostingsReport**](#reportapicreatecompanypostingsreport) | **POST** /v1/report/postings/create | Отчёт об отправлениях|
|[**reportAPICreateCompanyProductsReport**](#reportapicreatecompanyproductsreport) | **POST** /v1/report/products/create | Отчёт по товарам|
|[**reportAPICreateDiscountedReport**](#reportapicreatediscountedreport) | **POST** /v1/report/discounted/create | Отчёт об уценённых товарах|
|[**reportAPICreateStockByWarehouseReport**](#reportapicreatestockbywarehousereport) | **POST** /v1/report/warehouse/stock | Отчёт об остатках на FBS-складе|
|[**reportAPIReportInfo**](#reportapireportinfo) | **POST** /v1/report/info | Информация об отчёте|
|[**reportAPIReportList**](#reportapireportlist) | **POST** /v1/report/list | Список отчётов|
|[**reportAPIReportReturnsCreate**](#reportapireportreturnscreate) | **POST** /v2/report/returns/create | Отчёт о возвратах|

# **createCompanyMarkedProductsSalesReport**
> CommonCreateReportResponse createCompanyMarkedProductsSalesReport()

В одном отчёте вы можете получить не больше 50 000 кодов маркировки. Чтобы получить остальные данные, уменьшите период формирования отчёта. 

### Example

```typescript
import {
    ReportAPIApi,
    Configuration,
    V1ReportMarkedProductsSalesCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1ReportMarkedProductsSalesCreateRequest: V1ReportMarkedProductsSalesCreateRequest; // (optional)

const { status, data } = await apiInstance.createCompanyMarkedProductsSalesReport(
    clientId,
    apiKey,
    v1ReportMarkedProductsSalesCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1ReportMarkedProductsSalesCreateRequest** | **V1ReportMarkedProductsSalesCreateRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**CommonCreateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Результат запроса |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPlacementByProductsReport**
> V1CreatePlacementByProductsReportResponse createPlacementByProductsReport()

Соответствует разделу **FBO → Стоимость размещения** в личном кабинете.

### Example

```typescript
import {
    ReportAPIApi,
    Configuration,
    V1CreatePlacementByProductsReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1CreatePlacementByProductsReportRequest: V1CreatePlacementByProductsReportRequest; // (optional)

const { status, data } = await apiInstance.createPlacementByProductsReport(
    clientId,
    apiKey,
    v1CreatePlacementByProductsReportRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1CreatePlacementByProductsReportRequest** | **V1CreatePlacementByProductsReportRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1CreatePlacementByProductsReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Отчёт о стоимости размещения |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPlacementBySuppliesReport**
> V1CreatePlacementBySuppliesReportResponse createPlacementBySuppliesReport()

Соответствует разделу **FBO → Стоимость размещения** в личном кабинете.

### Example

```typescript
import {
    ReportAPIApi,
    Configuration,
    V1CreatePlacementBySuppliesReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1CreatePlacementBySuppliesReportRequest: V1CreatePlacementBySuppliesReportRequest; // (optional)

const { status, data } = await apiInstance.createPlacementBySuppliesReport(
    clientId,
    apiKey,
    v1CreatePlacementBySuppliesReportRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1CreatePlacementBySuppliesReportRequest** | **V1CreatePlacementBySuppliesReportRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1CreatePlacementBySuppliesReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Отчёт о стоимости размещения |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **financeAPIFinanceCashFlowStatementList**
> V3FinanceCashFlowStatementListResponse financeAPIFinanceCashFlowStatementList(v3FinanceCashFlowStatementListRequest)

Метод для получения финансового отчёта за периоды с 01 по 15 и с 16 по 31.  Запросить отчёт за отдельные дни не получится.  Соответствует разделу **Финансы → Выплаты** в личном кабинете. 

### Example

```typescript
import {
    ReportAPIApi,
    Configuration,
    V3FinanceCashFlowStatementListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v3FinanceCashFlowStatementListRequest: V3FinanceCashFlowStatementListRequest; //

const { status, data } = await apiInstance.financeAPIFinanceCashFlowStatementList(
    clientId,
    apiKey,
    v3FinanceCashFlowStatementListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v3FinanceCashFlowStatementListRequest** | **V3FinanceCashFlowStatementListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V3FinanceCashFlowStatementListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Финансовый отчёт |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reportAPICreateCompanyPostingsReport**
> ReportCreateReportResponse reportAPICreateCompanyPostingsReport(reportCreateCompanyPostingsReportRequest)

Отчёт об отправлениях с информацией по заказам:   - статусы заказов,   - дата начала обработки,   - номера заказов,   - номера отправлений,   - стоимость отправлений,   - содержимое отправлений. Соответствует разделу **FBO → Заказы со склада Ozon** и **FBS → Заказы с моих складов → CSV** в личном кабинете. 

### Example

```typescript
import {
    ReportAPIApi,
    Configuration,
    ReportCreateCompanyPostingsReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let reportCreateCompanyPostingsReportRequest: ReportCreateCompanyPostingsReportRequest; //

const { status, data } = await apiInstance.reportAPICreateCompanyPostingsReport(
    clientId,
    apiKey,
    reportCreateCompanyPostingsReportRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reportCreateCompanyPostingsReportRequest** | **ReportCreateCompanyPostingsReportRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**ReportCreateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Отчёт об отправлениях |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reportAPICreateCompanyProductsReport**
> ReportCreateReportResponse reportAPICreateCompanyProductsReport(reportCreateCompanyProductsReportRequest)

Метод для получения отчёта с данными о товарах. Например, Ozon ID, количества товаров, цен, статуса. Соответствует разделу/действию **Товары и цены → Список товаров → Скачать → Товары CSV** в личном кабинете.  Пояснения к некоторым полям:   - __Ozon Product ID__ — идентификатор товара в нашей системе. Например, если вы продаёте товар со склада Ozon и со своего склада, Ozon Product ID будет для них одинаковым.   - __FBO Ozon SKU ID__ — идентификатор товара, который продаётся со склада Ozon.   - __FBS Ozon SKU ID__ — идентификатор товара, который продаётся с вашего склада.   - __CrossBorder Ozon SKU__ — идентификатор товара, который продаётся из-за границы.   - __Barcode__ — штрихкод товара, который печатается на маркировке.   - __Статус товара__ — можно ли купить товар на Ozon. Если статус «Готов к продаже», товар купить нельзя.   - __Доступно на складе Ozon, шт__ — сколько штук товара на складе доступно для продажи. Это количество не включает зарезервированные товары.   - __Зарезервировано, шт__ — сколько штук товара со статусом «Зарезервировано». Товар зарезервирован с момента получения заказа на Ozon и до упаковки для передачи покупателю.   - __Текущая цена с учётом скидки, руб.__ — цена, по которой товар продаётся сейчас (на момент загрузки отчёта, с учётом скидки). Если товар участвует в акции, указана цена без её учёта.   - __Базовая цена (цена до скидок), руб.__ — цена без учёта скидки.   - __Цена Premium, руб.__ — цена для покупателей с подпиской Ozon Premium.   - __Рекомендованная цена, руб.__ — минимальная цена на товар на другой торговой площадке.   - __Актуальная ссылка на рекомендованную цену__ — ссылка на товар с рекомендованной ценой на другой торговой площадке. 

### Example

```typescript
import {
    ReportAPIApi,
    Configuration,
    ReportCreateCompanyProductsReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let reportCreateCompanyProductsReportRequest: ReportCreateCompanyProductsReportRequest; //

const { status, data } = await apiInstance.reportAPICreateCompanyProductsReport(
    clientId,
    apiKey,
    reportCreateCompanyProductsReportRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reportCreateCompanyProductsReportRequest** | **ReportCreateCompanyProductsReportRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**ReportCreateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Отчёт по товарам |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reportAPICreateDiscountedReport**
> ReportCreateDiscountedResponse reportAPICreateDiscountedReport(body)

Запускает генерацию отчёта по уценённым товарам на складе Ozon. Ozon может сам уценить товар, например, при повреждении.  В результате запроса будет не сам отчёт, а его уникальный идентификатор.  Чтобы получить отчёт, отправьте идентификатор в запросе метода [/v1/report/info](#operation/ReportAPI_ReportInfo).  С одного аккаунта продавца можно отправить 1 запрос в минуту. Соответствует разделу **Аналитика → Отчёты → Продажи со склада Ozon → Товары, уценённые Ozon** в личном кабинете. 

### Example

```typescript
import {
    ReportAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let body: object; //

const { status, data } = await apiInstance.reportAPICreateDiscountedReport(
    clientId,
    apiKey,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**ReportCreateDiscountedResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Результат запроса |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reportAPICreateStockByWarehouseReport**
> CommonCreateReportResponse reportAPICreateStockByWarehouseReport(v1CreateStockByWarehouseReportRequest)

 Отчёт с информацией о количестве доступных и зарезервированных единиц товара на складе. Соответствует разделу **FBS → Управление логистикой → Управление остатками → Скачать в XLS** в личном кабинете.  В результате запроса будет не сам отчёт, а его уникальный идентификатор.  Чтобы получить отчёт, отправьте идентификатор в запросе метода [/v1/report/info](#operation/ReportAPI_ReportInfo). 

### Example

```typescript
import {
    ReportAPIApi,
    Configuration,
    V1CreateStockByWarehouseReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1CreateStockByWarehouseReportRequest: V1CreateStockByWarehouseReportRequest; //

const { status, data } = await apiInstance.reportAPICreateStockByWarehouseReport(
    clientId,
    apiKey,
    v1CreateStockByWarehouseReportRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1CreateStockByWarehouseReportRequest** | **V1CreateStockByWarehouseReportRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**CommonCreateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Результат запроса |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reportAPIReportInfo**
> ReportReportInfoResponse reportAPIReportInfo(reportReportInfoRequest)

Возвращает информацию о созданном ранее отчёте по его идентификатору.

### Example

```typescript
import {
    ReportAPIApi,
    Configuration,
    ReportReportInfoRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let reportReportInfoRequest: ReportReportInfoRequest; //

const { status, data } = await apiInstance.reportAPIReportInfo(
    clientId,
    apiKey,
    reportReportInfoRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reportReportInfoRequest** | **ReportReportInfoRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**ReportReportInfoResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация об отчёте |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reportAPIReportList**
> ReportReportListResponse reportAPIReportList(reportReportListRequest)

Возвращает список отчётов, которые были сформированы раньше.

### Example

```typescript
import {
    ReportAPIApi,
    Configuration,
    ReportReportListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let reportReportListRequest: ReportReportListRequest; //

const { status, data } = await apiInstance.reportAPIReportList(
    clientId,
    apiKey,
    reportReportListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reportReportListRequest** | **ReportReportListRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**ReportReportListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список отчётов |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reportAPIReportReturnsCreate**
> V2ReportReturnsCreateResponse reportAPIReportReturnsCreate(v2ReportReturnsCreateRequest)

Метод для получения отчёта о возвратах FBO и FBS.

### Example

```typescript
import {
    ReportAPIApi,
    Configuration,
    V2ReportReturnsCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v2ReportReturnsCreateRequest: V2ReportReturnsCreateRequest; //

const { status, data } = await apiInstance.reportAPIReportReturnsCreate(
    clientId,
    apiKey,
    v2ReportReturnsCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2ReportReturnsCreateRequest** | **V2ReportReturnsCreateRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V2ReportReturnsCreateResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Отчёт о возвратах FBO и FBS |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

