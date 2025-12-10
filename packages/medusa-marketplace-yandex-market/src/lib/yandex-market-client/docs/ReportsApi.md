# ReportsApi

All URIs are relative to *https://api.partner.market.yandex.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**generateBannersStatisticsReport**](#generatebannersstatisticsreport) | **POST** /v2/reports/banners-statistics/generate | Отчет по охватному продвижению|
|[**generateBarcodesReport**](#generatebarcodesreport) | **POST** /v1/reports/documents/barcodes/generate | Получение файла со штрихкодами|
|[**generateBoostConsolidatedReport**](#generateboostconsolidatedreport) | **POST** /v2/reports/boost-consolidated/generate | Отчет по бусту продаж|
|[**generateClosureDocumentsDetalizationReport**](#generateclosuredocumentsdetalizationreport) | **POST** /v2/reports/closure-documents/detalization/generate | Отчет по схождению с закрывающими документами|
|[**generateClosureDocumentsReport**](#generateclosuredocumentsreport) | **POST** /v2/reports/closure-documents/generate | Закрывающие документы|
|[**generateCompetitorsPositionReport**](#generatecompetitorspositionreport) | **POST** /v2/reports/competitors-position/generate | Отчет «Конкурентная позиция»|
|[**generateGoodsFeedbackReport**](#generategoodsfeedbackreport) | **POST** /v2/reports/goods-feedback/generate | Отчет по отзывам о товарах|
|[**generateGoodsMovementReport**](#generategoodsmovementreport) | **POST** /v2/reports/goods-movement/generate | Отчет по движению товаров|
|[**generateGoodsPricesReport**](#generategoodspricesreport) | **POST** /v2/reports/goods-prices/generate | Отчет «Цены»|
|[**generateGoodsRealizationReport**](#generategoodsrealizationreport) | **POST** /v2/reports/goods-realization/generate | Отчет по реализации|
|[**generateGoodsTurnoverReport**](#generategoodsturnoverreport) | **POST** /v2/reports/goods-turnover/generate | Отчет по оборачиваемости|
|[**generateJewelryFiscalReport**](#generatejewelryfiscalreport) | **POST** /v2/reports/jewelry-fiscal/generate | Отчет по заказам с ювелирными изделиями|
|[**generateKeyIndicatorsReport**](#generatekeyindicatorsreport) | **POST** /v2/reports/key-indicators/generate | Отчет по ключевым показателям|
|[**generateMassOrderLabelsReport**](#generatemassorderlabelsreport) | **POST** /v2/reports/documents/labels/generate | Готовые ярлыки‑наклейки на все коробки в нескольких заказах|
|[**generatePricesReport**](#generatepricesreport) | **POST** /v2/reports/prices/generate | Отчет «Цены на рынке»|
|[**generateSalesGeographyReport**](#generatesalesgeographyreport) | **POST** /v2/reports/sales-geography/generate | Отчет по географии продаж|
|[**generateShelfsStatisticsReport**](#generateshelfsstatisticsreport) | **POST** /v2/reports/shelf-statistics/generate | Отчет по полкам|
|[**generateShipmentListDocumentReport**](#generateshipmentlistdocumentreport) | **POST** /v2/reports/documents/shipment-list/generate | Получение листа сборки|
|[**generateShowsBoostReport**](#generateshowsboostreport) | **POST** /v2/reports/shows-boost/generate | Отчет по бусту показов|
|[**generateShowsSalesReport**](#generateshowssalesreport) | **POST** /v2/reports/shows-sales/generate | Отчет «Аналитика продаж»|
|[**generateStocksOnWarehousesReport**](#generatestocksonwarehousesreport) | **POST** /v2/reports/stocks-on-warehouses/generate | Отчет по остаткам на складах|
|[**generateUnitedMarketplaceServicesReport**](#generateunitedmarketplaceservicesreport) | **POST** /v2/reports/united-marketplace-services/generate | Отчет по стоимости услуг|
|[**generateUnitedNettingReport**](#generateunitednettingreport) | **POST** /v2/reports/united-netting/generate | Отчет по платежам|
|[**generateUnitedOrdersReport**](#generateunitedordersreport) | **POST** /v2/reports/united-orders/generate | Отчет по заказам|
|[**generateUnitedReturnsReport**](#generateunitedreturnsreport) | **POST** /v2/reports/united-returns/generate | Отчет по невыкупам и возвратам|
|[**getReportInfo**](#getreportinfo) | **GET** /v2/reports/info/{reportId} | Получение заданного отчета или документа|

# **generateBannersStatisticsReport**
> GenerateReportResponse generateBannersStatisticsReport(generateBannersStatisticsRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateBannersStatisticsReport.md) %}  Запускает генерацию сводного отчета по охватному продвижению. Что это за отчет: [для баннеров](https://yandex.ru/support/marketplace/ru/marketing/advertising-tools/banner#statistics), [для пуш-уведомлений](https://yandex.ru/support/marketplace/ru/marketing/advertising-tools/push-notifications#statistics).  Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  {% include notitle [:no-translate[reports]](../../_auto/reports/incuts/banners_statistics.md) %}  |**⚙️ Лимит:** 100 запросов в час| |-| 

### Example

```typescript
import {
    ReportsApi,
    Configuration,
    GenerateBannersStatisticsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let generateBannersStatisticsRequest: GenerateBannersStatisticsRequest; //
let format: ReportFormatType; //Формат отчета или документа. (optional) (default to undefined)

const { status, data } = await apiInstance.generateBannersStatisticsReport(
    generateBannersStatisticsRequest,
    format
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateBannersStatisticsRequest** | **GenerateBannersStatisticsRequest**|  | |
| **format** | **ReportFormatType** | Формат отчета или документа. | (optional) defaults to undefined|


### Return type

**GenerateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateBarcodesReport**
> GenerateReportResponse generateBarcodesReport(generateBarcodesReportRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateBarcodesReport.md) %}  Запускает генерацию PDF-файла со штрихкодами переданных товаров или товаров в указанной заявке на поставку.  Файл не получится сгенерировать, если в нем будет более 1 500 штрихкодов.  Узнать статус генерации и получить ссылку на готовый файл можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  |**⚙️ Лимит:** 1 000 запросов в час| |-| 

### Example

```typescript
import {
    ReportsApi,
    Configuration,
    GenerateBarcodesReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let generateBarcodesReportRequest: GenerateBarcodesReportRequest; //

const { status, data } = await apiInstance.generateBarcodesReport(
    generateBarcodesReportRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateBarcodesReportRequest** | **GenerateBarcodesReportRequest**|  | |


### Return type

**GenerateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый файл.  |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateBoostConsolidatedReport**
> GenerateReportResponse generateBoostConsolidatedReport(generateBoostConsolidatedRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateBoostConsolidatedReport.md) %}  Запускает генерацию сводного отчета по бусту продаж за заданный период. [Что такое буст продаж](https://yandex.ru/support/marketplace/ru/marketing/campaigns)  Отчет содержит информацию по всем кампаниям, созданным и через API, и в кабинете.  Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  {% include notitle [:no-translate[reports]](../../_auto/reports/boost/consolidated/business_boost_consolidated.md) %}  |**⚙️ Лимит:** 100 запросов в час| |-| 

### Example

```typescript
import {
    ReportsApi,
    Configuration,
    GenerateBoostConsolidatedRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let generateBoostConsolidatedRequest: GenerateBoostConsolidatedRequest; //
let format: ReportFormatType; //Формат отчета или документа. (optional) (default to undefined)

const { status, data } = await apiInstance.generateBoostConsolidatedReport(
    generateBoostConsolidatedRequest,
    format
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateBoostConsolidatedRequest** | **GenerateBoostConsolidatedRequest**|  | |
| **format** | **ReportFormatType** | Формат отчета или документа. | (optional) defaults to undefined|


### Return type

**GenerateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateClosureDocumentsDetalizationReport**
> GenerateReportResponse generateClosureDocumentsDetalizationReport(generateClosureDocumentsDetalizationRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateClosureDocumentsDetalizationReport.md) %}  Запускает генерацию отчета по схождению с закрывающими документами в зависимости от типа договора.  Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  {% list tabs %}  - Договор на размещение    {% include notitle [:no-translate[reports]](../../_auto/reports/period_closure/period_closure_income.md) %}  - Договор на продвижение    {% include notitle [:no-translate[reports]](../../_auto/reports/period_closure/period_closure_outcome.md) %}  - Договор на маркетинг    {% include notitle [:no-translate[reports]](../../_auto/reports/advertiser_billing_operations/advertiser_billing_operations.md) %}  {% endlist %}  |**⚙️ Лимит:** 100 запросов в час| |-| 

### Example

```typescript
import {
    ReportsApi,
    Configuration,
    GenerateClosureDocumentsDetalizationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let generateClosureDocumentsDetalizationRequest: GenerateClosureDocumentsDetalizationRequest; //
let format: ReportFormatType; //Формат отчета или документа. (optional) (default to undefined)

const { status, data } = await apiInstance.generateClosureDocumentsDetalizationReport(
    generateClosureDocumentsDetalizationRequest,
    format
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateClosureDocumentsDetalizationRequest** | **GenerateClosureDocumentsDetalizationRequest**|  | |
| **format** | **ReportFormatType** | Формат отчета или документа. | (optional) defaults to undefined|


### Return type

**GenerateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateClosureDocumentsReport**
> GenerateReportResponse generateClosureDocumentsReport(generateClosureDocumentsRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateClosureDocumentsReport.md) %}  Возвращает ZIP-архив с закрывающими документами в формате PDF за указанный месяц.  {% cut \"Состав документов в зависимости от типа договора\" %}  * **Договор на размещение**    * [акт об оказанных услугах](*acts-main-act)   * [счет-фактура](*acts-main-invoice)   * [сводный отчет по данным статистики](*acts-main-report)   * [отчет об исполнении поручения и о зачете взаимных требований](*acts-main-agent) (отчет агента)  * **Договор на продвижение** (в России не заключается после 30 сентября 2024 года)    * [акт об оказании услуг](*acts-discounts-act)   * [счет-фактура](*acts-discounts-invoice), если этого требует схема налогообложения  * **Договор на маркетинг**    * [акт об оказанных услугах](*acts-marketing-act)   * [счет-фактура](*acts-main-invoice)   * [счет-фактура на аванс](*acts-marketing-invoice)   * [выписка по лицевому счету](*acts-marketing-account)   * [детализация к акту](*acts-marketing-details)  {% endcut %}  Узнать статус генерации и получить ссылку на архив можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  |**⚙️ Лимит:** 1 000 запросов в час| |-| 

### Example

```typescript
import {
    ReportsApi,
    Configuration,
    GenerateClosureDocumentsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let generateClosureDocumentsRequest: GenerateClosureDocumentsRequest; //

const { status, data } = await apiInstance.generateClosureDocumentsReport(
    generateClosureDocumentsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateClosureDocumentsRequest** | **GenerateClosureDocumentsRequest**|  | |


### Return type

**GenerateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ZIP-архив с закрывающими документами в формате :no-translate[PDF].  |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateCompetitorsPositionReport**
> GenerateReportResponse generateCompetitorsPositionReport(generateCompetitorsPositionReportRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateCompetitorsPositionReport.md) %}  Запускает генерацию отчета «Конкурентная позиция» за заданный период. [Что это за отчет](https://yandex.ru/support2/marketplace/ru/analytics/competitors.html)  Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  {% note info \"Значение -1 в отчете\" %}  Если в CSV-файле в столбце :no-translate[**POSITION**] стоит -1, в этот день не было заказов с товарами в указанной категории.  {% endnote %}  {% include notitle [:no-translate[reports]](../../_auto/reports/masterstat/competitors_position.md) %}  |**⚙️ Лимит:** 10 запросов в час| |-| 

### Example

```typescript
import {
    ReportsApi,
    Configuration,
    GenerateCompetitorsPositionReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let generateCompetitorsPositionReportRequest: GenerateCompetitorsPositionReportRequest; //
let format: ReportFormatType; //Формат отчета или документа. (optional) (default to undefined)

const { status, data } = await apiInstance.generateCompetitorsPositionReport(
    generateCompetitorsPositionReportRequest,
    format
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateCompetitorsPositionReportRequest** | **GenerateCompetitorsPositionReportRequest**|  | |
| **format** | **ReportFormatType** | Формат отчета или документа. | (optional) defaults to undefined|


### Return type

**GenerateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateGoodsFeedbackReport**
> GenerateReportResponse generateGoodsFeedbackReport(generateGoodsFeedbackRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateGoodsFeedbackReport.md) %}  Запускает генерацию отчета по отзывам о товарах. [Что это за отчет](https://yandex.ru/support/marketplace/ru/marketing/plus-reviews#stat)  Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  {% include notitle [:no-translate[reports]](../../_auto/reports/paid_opinion_models/paid_opinion_models.md) %}  |**⚙️ Лимит:** 100 запросов в час| |-| 

### Example

```typescript
import {
    ReportsApi,
    Configuration,
    GenerateGoodsFeedbackRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let generateGoodsFeedbackRequest: GenerateGoodsFeedbackRequest; //
let format: ReportFormatType; //Формат отчета или документа. (optional) (default to undefined)

const { status, data } = await apiInstance.generateGoodsFeedbackReport(
    generateGoodsFeedbackRequest,
    format
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateGoodsFeedbackRequest** | **GenerateGoodsFeedbackRequest**|  | |
| **format** | **ReportFormatType** | Формат отчета или документа. | (optional) defaults to undefined|


### Return type

**GenerateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateGoodsMovementReport**
> GenerateReportResponse generateGoodsMovementReport(generateGoodsMovementReportRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateGoodsMovementReport.md) %}  Запускает генерацию отчета по движению товаров. [Что это за отчет](https://yandex.ru/support/marketplace/analytics/reports-fby-fbs.html#flow)  Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  {% include notitle [:no-translate[reports]](../../_auto/reports/sku/movement/movement_config.md) %}  |**⚙️ Лимит:** 100 запросов в час| |-| 

### Example

```typescript
import {
    ReportsApi,
    Configuration,
    GenerateGoodsMovementReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let generateGoodsMovementReportRequest: GenerateGoodsMovementReportRequest; //
let format: ReportFormatType; //Формат отчета или документа. (optional) (default to undefined)

const { status, data } = await apiInstance.generateGoodsMovementReport(
    generateGoodsMovementReportRequest,
    format
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateGoodsMovementReportRequest** | **GenerateGoodsMovementReportRequest**|  | |
| **format** | **ReportFormatType** | Формат отчета или документа. | (optional) defaults to undefined|


### Return type

**GenerateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateGoodsPricesReport**
> GenerateReportResponse generateGoodsPricesReport(generateGoodsPricesReportRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateGoodsPricesReport.md) %}  Запускает генерацию отчета «Цены».  **Какая информация вернется:**  * если передать `businessId` — по единым ценам кабинета; * если [включены магазинные цены](*onlyDefaultPrice-false) и указать `campaignId` — по ценам в соответствующем магазине.  Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  {% list tabs %}  - Цены во всех магазинах кабинета    {% include notitle [:no-translate[reports]](../../_auto/reports/prices/mass_assortment_business_price_v2.md) %}  - Магазинные цены    {% include notitle [:no-translate[reports]](../../_auto/reports/prices/mass_assortment_price_v2.md) %}  {% endlist %}  |**⚙️ Лимит:** 100 запросов в час| |-| 

### Example

```typescript
import {
    ReportsApi,
    Configuration,
    GenerateGoodsPricesReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let generateGoodsPricesReportRequest: GenerateGoodsPricesReportRequest; //
let format: ReportFormatType; //Формат отчета или документа. (optional) (default to undefined)

const { status, data } = await apiInstance.generateGoodsPricesReport(
    generateGoodsPricesReportRequest,
    format
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateGoodsPricesReportRequest** | **GenerateGoodsPricesReportRequest**|  | |
| **format** | **ReportFormatType** | Формат отчета или документа. | (optional) defaults to undefined|


### Return type

**GenerateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateGoodsRealizationReport**
> GenerateReportResponse generateGoodsRealizationReport(generateGoodsRealizationReportRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateGoodsRealizationReport.md) %}  Запускает генерацию отчета по реализации за заданный период. [Что это за отчет](https://yandex.ru/support/marketplace/ru/accounting/transactions#sales-report)  Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  {% list tabs %}  - FBY, FBS, Экспресс    {% include notitle [:no-translate[reports]](../../_auto/reports/united/statistics/generator/united_statistics_v2.md) %}  - DBS    {% include notitle [:no-translate[reports]](../../_auto/reports/united/statistics/generator/united_statistics_v2_dbs.md) %}  {% endlist %}  |**⚙️ Лимит:** 100 запросов в час| |-| 

### Example

```typescript
import {
    ReportsApi,
    Configuration,
    GenerateGoodsRealizationReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let generateGoodsRealizationReportRequest: GenerateGoodsRealizationReportRequest; //
let format: ReportFormatType; //Формат отчета или документа. (optional) (default to undefined)

const { status, data } = await apiInstance.generateGoodsRealizationReport(
    generateGoodsRealizationReportRequest,
    format
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateGoodsRealizationReportRequest** | **GenerateGoodsRealizationReportRequest**|  | |
| **format** | **ReportFormatType** | Формат отчета или документа. | (optional) defaults to undefined|


### Return type

**GenerateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateGoodsTurnoverReport**
> GenerateReportResponse generateGoodsTurnoverReport(generateGoodsTurnoverRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateGoodsTurnoverReport.md) %}  Запускает генерацию отчета по оборачиваемости за заданную дату.  [Что это за отчет](https://yandex.ru/support/marketplace/ru/storage/logistics#turnover)  Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  {% include notitle [:no-translate[reports]](../../_auto/reports/turnover/turnover.md) %}  |**⚙️ Лимит:** 100 запросов в час| |-| 

### Example

```typescript
import {
    ReportsApi,
    Configuration,
    GenerateGoodsTurnoverRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let generateGoodsTurnoverRequest: GenerateGoodsTurnoverRequest; //
let format: ReportFormatType; //Формат отчета или документа. (optional) (default to undefined)

const { status, data } = await apiInstance.generateGoodsTurnoverReport(
    generateGoodsTurnoverRequest,
    format
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateGoodsTurnoverRequest** | **GenerateGoodsTurnoverRequest**|  | |
| **format** | **ReportFormatType** | Формат отчета или документа. | (optional) defaults to undefined|


### Return type

**GenerateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateJewelryFiscalReport**
> GenerateReportResponse generateJewelryFiscalReport(generateJewelryFiscalReportRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateJewelryFiscalReport.md) %}  Запускает генерацию отчета по заказам с ювелирными изделиями.  Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  {% include notitle [:no-translate[reports]](../../_auto/reports/identifiers/jewelry/orders_jewelry_fiscal.md) %}  |**⚙️ Лимит:** 100 запросов в час| |-| 

### Example

```typescript
import {
    ReportsApi,
    Configuration,
    GenerateJewelryFiscalReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let generateJewelryFiscalReportRequest: GenerateJewelryFiscalReportRequest; //
let format: ReportFormatType; //Формат отчета или документа. (optional) (default to undefined)

const { status, data } = await apiInstance.generateJewelryFiscalReport(
    generateJewelryFiscalReportRequest,
    format
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateJewelryFiscalReportRequest** | **GenerateJewelryFiscalReportRequest**|  | |
| **format** | **ReportFormatType** | Формат отчета или документа. | (optional) defaults to undefined|


### Return type

**GenerateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateKeyIndicatorsReport**
> GenerateReportResponse generateKeyIndicatorsReport(generateKeyIndicatorsRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateKeyIndicatorsReport.md) %}  Запускает генерацию отчета по ключевым показателям. [Что это за отчет](https://yandex.ru/support/marketplace/ru/analytics/key-metrics)  Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  {% include notitle [:no-translate[reports]](../../_auto/reports/key_indicators/key_indicators.md) %}  |**⚙️ Лимит:** 100 запросов в час| |-| 

### Example

```typescript
import {
    ReportsApi,
    Configuration,
    GenerateKeyIndicatorsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let generateKeyIndicatorsRequest: GenerateKeyIndicatorsRequest; //
let format: ReportFormatType; //Формат отчета или документа. (optional) (default to undefined)

const { status, data } = await apiInstance.generateKeyIndicatorsReport(
    generateKeyIndicatorsRequest,
    format
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateKeyIndicatorsRequest** | **GenerateKeyIndicatorsRequest**|  | |
| **format** | **ReportFormatType** | Формат отчета или документа. | (optional) defaults to undefined|


### Return type

**GenerateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateMassOrderLabelsReport**
> GenerateReportResponse generateMassOrderLabelsReport(generateMassOrderLabelsRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateMassOrderLabelsReport.md) %}  Запускает генерацию PDF-файла с ярлыками для переданных заказов. Подробно о том, зачем они нужны и как выглядят, рассказано [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/orders/fbs/packaging/marking.html).  Чтобы на ярлыке отображался внешний идентификатор заказа, передайте его в методе [POST v2/campaigns/{campaignId}/orders/{orderId}/external-id](../../reference/orders/updateExternalOrderId.md).  Узнать статус генерации и получить ссылку на готовый файл можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  |**⚙️ Лимит:** 1 000 запросов в час| |-| 

### Example

```typescript
import {
    ReportsApi,
    Configuration,
    GenerateMassOrderLabelsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let generateMassOrderLabelsRequest: GenerateMassOrderLabelsRequest; //
let format: PageFormatType; //Настройка размещения ярлыков на странице. Если параметра нет, возвращается PDF с ярлыками формата :no-translate[A7]. (optional) (default to undefined)

const { status, data } = await apiInstance.generateMassOrderLabelsReport(
    generateMassOrderLabelsRequest,
    format
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateMassOrderLabelsRequest** | **GenerateMassOrderLabelsRequest**|  | |
| **format** | **PageFormatType** | Настройка размещения ярлыков на странице. Если параметра нет, возвращается PDF с ярлыками формата :no-translate[A7]. | (optional) defaults to undefined|


### Return type

**GenerateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый файл.  Если при генерации не удалось найти часть заказов, в ответе на запрос получения готового файла вернется подстатус &#x60;RESOURCE_NOT_FOUND&#x60;.  |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generatePricesReport**
> GenerateReportResponse generatePricesReport(generatePricesReportRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generatePricesReport.md) %}  {% note warning \"Какой метод использовать вместо устаревшего\" %}  [POST v2/reports/goods-prices/generate](../../reference/reports/generateGoodsPricesReport.md)  {% endnote %}  Запускает генерацию отчета «Цены на рынке».  В отчете возвращается информация только по 50 000 товаров. Если у вас их больше, используйте фильтры.  {% note warning \"Данные в этом отчете постоянно обновляются\" %}  Поэтому информация в нем и в кабинете продавца на Маркете на странице **Цены** может отличаться.  {% endnote %}  Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  {% include notitle [:no-translate[reports]](../../_auto/reports/prices/business_prices_v2.md) %}  |**⚙️ Лимит:** 100 запросов в час| |-| 

### Example

```typescript
import {
    ReportsApi,
    Configuration,
    GeneratePricesReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let generatePricesReportRequest: GeneratePricesReportRequest; //
let format: ReportFormatType; //Формат отчета или документа. (optional) (default to undefined)

const { status, data } = await apiInstance.generatePricesReport(
    generatePricesReportRequest,
    format
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generatePricesReportRequest** | **GeneratePricesReportRequest**|  | |
| **format** | **ReportFormatType** | Формат отчета или документа. | (optional) defaults to undefined|


### Return type

**GenerateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateSalesGeographyReport**
> GenerateReportResponse generateSalesGeographyReport(generateSalesGeographyRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateSalesGeographyReport.md) %}  Запускает генерацию отчета по географии продаж. [Что это за отчет](https://yandex.ru/support/marketplace/ru/analytics/sales-geography)  Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  {% include notitle [:no-translate[reports]](../../_auto/reports/locality/locality_offers_report_v2.md) %}  |**⚙️ Лимит:** 100 запросов в час| |-| 

### Example

```typescript
import {
    ReportsApi,
    Configuration,
    GenerateSalesGeographyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let generateSalesGeographyRequest: GenerateSalesGeographyRequest; //
let format: ReportFormatType; //Формат отчета или документа. (optional) (default to undefined)

const { status, data } = await apiInstance.generateSalesGeographyReport(
    generateSalesGeographyRequest,
    format
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateSalesGeographyRequest** | **GenerateSalesGeographyRequest**|  | |
| **format** | **ReportFormatType** | Формат отчета или документа. | (optional) defaults to undefined|


### Return type

**GenerateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateShelfsStatisticsReport**
> GenerateReportResponse generateShelfsStatisticsReport(generateShelfsStatisticsRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateShelfsStatisticsReport.md) %}  Запускает генерацию сводного отчета по полкам — рекламным блокам с баннером или видео и набором товаров. Подробнее о них читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/marketing/shelf).  Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  {% include notitle [:no-translate[reports]](../../_auto/reports/incuts/shelfs_statistics.md) %}  |**⚙️ Лимит:** 100 запросов в час| |-| 

### Example

```typescript
import {
    ReportsApi,
    Configuration,
    GenerateShelfsStatisticsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let generateShelfsStatisticsRequest: GenerateShelfsStatisticsRequest; //
let format: ReportFormatType; //Формат отчета или документа. (optional) (default to undefined)

const { status, data } = await apiInstance.generateShelfsStatisticsReport(
    generateShelfsStatisticsRequest,
    format
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateShelfsStatisticsRequest** | **GenerateShelfsStatisticsRequest**|  | |
| **format** | **ReportFormatType** | Формат отчета или документа. | (optional) defaults to undefined|


### Return type

**GenerateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateShipmentListDocumentReport**
> GenerateReportResponse generateShipmentListDocumentReport(generateShipmentListDocumentReportRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateShipmentListDocumentReport.md) %}  Запускает генерацию **листа сборки** для отгрузки.  Чтобы на в листе сборки отображался внешний идентификатор заказа, передайте его в методе [POST v2/campaigns/{campaignId}/orders/{orderId}/external-id](../../reference/orders/updateExternalOrderId.md).  Узнать статус генерации и получить ссылку на готовый документ можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  |**⚙️ Лимит:** 100 запросов в час| |-| 

### Example

```typescript
import {
    ReportsApi,
    Configuration,
    GenerateShipmentListDocumentReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let generateShipmentListDocumentReportRequest: GenerateShipmentListDocumentReportRequest; //

const { status, data } = await apiInstance.generateShipmentListDocumentReport(
    generateShipmentListDocumentReportRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateShipmentListDocumentReportRequest** | **GenerateShipmentListDocumentReportRequest**|  | |


### Return type

**GenerateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый документ. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateShowsBoostReport**
> GenerateReportResponse generateShowsBoostReport(generateShowsBoostRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateShowsBoostReport.md) %}  Запускает генерацию сводного отчета по бусту показов за заданный период. [Что такое буст показов](https://yandex.ru/support/marketplace/ru/marketing/boost-shows)  Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  {% include notitle [:no-translate[reports]](../../_auto/reports/cpm_boost/business_cpm_boost_consolidated.md) %}  |**⚙️ Лимит:** 100 запросов в час| |-| 

### Example

```typescript
import {
    ReportsApi,
    Configuration,
    GenerateShowsBoostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let generateShowsBoostRequest: GenerateShowsBoostRequest; //
let format: ReportFormatType; //Формат отчета или документа. (optional) (default to undefined)

const { status, data } = await apiInstance.generateShowsBoostReport(
    generateShowsBoostRequest,
    format
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateShowsBoostRequest** | **GenerateShowsBoostRequest**|  | |
| **format** | **ReportFormatType** | Формат отчета или документа. | (optional) defaults to undefined|


### Return type

**GenerateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateShowsSalesReport**
> GenerateReportResponse generateShowsSalesReport(generateShowsSalesReportRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateShowsSalesReport.md) %}  Запускает генерацию отчета «Аналитика продаж» за заданный период. [Что это за отчет](https://yandex.ru/support/marketplace/analytics/shows-sales.html)  Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  {% include notitle [:no-translate[reports]](../../_auto/reports/masterstat/sales_funnel_by_created_at.md) %}  |**⚙️ Лимит:** 10 запросов в час| |-| 

### Example

```typescript
import {
    ReportsApi,
    Configuration,
    GenerateShowsSalesReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let generateShowsSalesReportRequest: GenerateShowsSalesReportRequest; //
let format: ReportFormatType; //Формат отчета или документа. (optional) (default to undefined)

const { status, data } = await apiInstance.generateShowsSalesReport(
    generateShowsSalesReportRequest,
    format
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateShowsSalesReportRequest** | **GenerateShowsSalesReportRequest**|  | |
| **format** | **ReportFormatType** | Формат отчета или документа. | (optional) defaults to undefined|


### Return type

**GenerateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateStocksOnWarehousesReport**
> GenerateReportResponse generateStocksOnWarehousesReport(generateStocksOnWarehousesReportRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateStocksOnWarehousesReport.md) %}  Запускает генерацию отчета по остаткам на складах. [Что это за отчет](https://yandex.ru/support/marketplace/ru/storage/logistics#remains-history)  **Какая информация вернется:**  * Для модели FBY, если указать `campaignId`, — об остатках на складах Маркета. * Для остальных моделей, если указать `campaignId`, — об остатках на соответствующем складе магазина. * Для остальных моделей, если указать `businessId`, — об остатках на всех складах магазинов в кабинете, кроме FBY. Используйте фильтр `campaignIds`, чтобы указать определенные магазины.  ⚠️ Не передавайте одновременно `campaignId` и `businessId`.  Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  {% list tabs %}  - Склад Маркета    {% include notitle [:no-translate[reports]](../../_auto/reports/stocks/stocks_on_warehouses.md) %}  - Склад магазина    {% include notitle [:no-translate[reports]](../../_auto/reports/offers/mass/mass_shared_stocks_business_csv_config.md) %}  - Все склады магазинов в кабинете, кроме FBY    {% include notitle [:no-translate[reports]](../../_auto/reports/offers/stocks_business_config.md) %}  {% endlist %}  |**⚙️ Лимит:** 100 запросов в час| |-| 

### Example

```typescript
import {
    ReportsApi,
    Configuration,
    GenerateStocksOnWarehousesReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let generateStocksOnWarehousesReportRequest: GenerateStocksOnWarehousesReportRequest; //
let format: ReportFormatType; //Формат отчета или документа. (optional) (default to undefined)

const { status, data } = await apiInstance.generateStocksOnWarehousesReport(
    generateStocksOnWarehousesReportRequest,
    format
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateStocksOnWarehousesReportRequest** | **GenerateStocksOnWarehousesReportRequest**|  | |
| **format** | **ReportFormatType** | Формат отчета или документа. | (optional) defaults to undefined|


### Return type

**GenerateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateUnitedMarketplaceServicesReport**
> GenerateReportResponse generateUnitedMarketplaceServicesReport(generateUnitedMarketplaceServicesReportRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateUnitedMarketplaceServicesReport.md) %}  Запускает генерацию отчета по стоимости услуг за заданный период. [Что это за отчет](https://yandex.ru/support/marketplace/ru/accounting/transactions#reports)  Тип отчета зависит от того, какие поля заполнены в запросе:  |**Тип отчета**               |**Какие поля нужны**             | |-----------------------------|---------------------------------| |По дате начисления услуги    |`dateFrom` и `dateTo`            | |По дате формирования акта    |`year` и `month`                 |  Заказать отчеты обоих типов одним запросом нельзя.  Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  {% include notitle [:no-translate[reports]](../../_auto/reports/united/services/generator/united_marketplace_services.md) %}  |**⚙️ Лимит:** 100 запросов в час| |-| 

### Example

```typescript
import {
    ReportsApi,
    Configuration,
    GenerateUnitedMarketplaceServicesReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let generateUnitedMarketplaceServicesReportRequest: GenerateUnitedMarketplaceServicesReportRequest; //
let format: ReportFormatType; //Формат отчета или документа. (optional) (default to undefined)
let language: ReportLanguageType; //Язык отчета или документа. (optional) (default to undefined)

const { status, data } = await apiInstance.generateUnitedMarketplaceServicesReport(
    generateUnitedMarketplaceServicesReportRequest,
    format,
    language
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateUnitedMarketplaceServicesReportRequest** | **GenerateUnitedMarketplaceServicesReportRequest**|  | |
| **format** | **ReportFormatType** | Формат отчета или документа. | (optional) defaults to undefined|
| **language** | **ReportLanguageType** | Язык отчета или документа. | (optional) defaults to undefined|


### Return type

**GenerateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateUnitedNettingReport**
> GenerateReportResponse generateUnitedNettingReport(generateUnitedNettingReportRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateUnitedNettingReport.md) %}  Запускает генерацию отчета по платежам за заданный период. [Что это за отчет](https://yandex.ru/support/marketplace/ru/accounting/transactions#all-pay)  Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  Тип отчета зависит от того, какие поля заполнены в запросе:  #| || **Тип отчета** | **Какие поля нужны** | **Комментарий** || || О платежах за период | `dateFrom` и `dateTo` |   В отчет попадают все платежи, которые были выплачены и начислены в выбранный период.    Пример: если перевод выполнен 31 августа и зачислен 1 сентября, он попадет в отчет за оба месяца. || || О платежном поручении | `bankOrderId` и `bankOrderDateTime` |—|| || [О баллах Маркета](*баллы_маркета) | `monthOfYear` |—|| |#  Заказать отчеты нескольких типов одним запросом нельзя.  {% include notitle [:no-translate[reports]](../../_auto/reports/united/netting/generator/united_netting.md) %}  |**⚙️ Лимит:** 100 запросов в час| |-| 

### Example

```typescript
import {
    ReportsApi,
    Configuration,
    GenerateUnitedNettingReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let generateUnitedNettingReportRequest: GenerateUnitedNettingReportRequest; //
let format: ReportFormatType; //Формат отчета или документа. (optional) (default to undefined)
let language: ReportLanguageType; //Язык отчета или документа. (optional) (default to undefined)

const { status, data } = await apiInstance.generateUnitedNettingReport(
    generateUnitedNettingReportRequest,
    format,
    language
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateUnitedNettingReportRequest** | **GenerateUnitedNettingReportRequest**|  | |
| **format** | **ReportFormatType** | Формат отчета или документа. | (optional) defaults to undefined|
| **language** | **ReportLanguageType** | Язык отчета или документа. | (optional) defaults to undefined|


### Return type

**GenerateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateUnitedOrdersReport**
> GenerateReportResponse generateUnitedOrdersReport(generateUnitedOrdersRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateUnitedOrdersReport.md) %}  Запускает генерацию отчета по заказам за заданный период. [Что это за отчет](https://yandex.ru/support/marketplace/ru/accounting/transactions#get-report)  Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  {% include notitle [:no-translate[reports]](../../_auto/reports/united/orders/generator/united_orders.md) %}  |**⚙️ Лимит:** 100 запросов в час| |-| 

### Example

```typescript
import {
    ReportsApi,
    Configuration,
    GenerateUnitedOrdersRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let generateUnitedOrdersRequest: GenerateUnitedOrdersRequest; //
let format: ReportFormatType; //Формат отчета или документа. (optional) (default to undefined)
let language: ReportLanguageType; //Язык отчета или документа. (optional) (default to undefined)

const { status, data } = await apiInstance.generateUnitedOrdersReport(
    generateUnitedOrdersRequest,
    format,
    language
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateUnitedOrdersRequest** | **GenerateUnitedOrdersRequest**|  | |
| **format** | **ReportFormatType** | Формат отчета или документа. | (optional) defaults to undefined|
| **language** | **ReportLanguageType** | Язык отчета или документа. | (optional) defaults to undefined|


### Return type

**GenerateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateUnitedReturnsReport**
> GenerateReportResponse generateUnitedReturnsReport(generateUnitedReturnsRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateUnitedReturnsReport.md) %}  Запускает генерацию сводного отчета по невыкупам и возвратам за заданный период. [Что это за отчет](https://yandex.ru/support/marketplace/ru/orders/returns/logistic#rejected-orders)  Отчет содержит информацию о невыкупах и возвратах за указанный период, а также о тех, которые готовы к выдаче.  Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  {% include notitle [:no-translate[reports]](../../_auto/reports/united/returns/generator/united_returns.md) %}  |**⚙️ Лимит:** 100 запросов в час| |-| 

### Example

```typescript
import {
    ReportsApi,
    Configuration,
    GenerateUnitedReturnsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let generateUnitedReturnsRequest: GenerateUnitedReturnsRequest; //
let format: ReportFormatType; //Формат отчета или документа. (optional) (default to undefined)

const { status, data } = await apiInstance.generateUnitedReturnsReport(
    generateUnitedReturnsRequest,
    format
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateUnitedReturnsRequest** | **GenerateUnitedReturnsRequest**|  | |
| **format** | **ReportFormatType** | Формат отчета или документа. | (optional) defaults to undefined|


### Return type

**GenerateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | В ответ приходит идентификатор, который позволяет узнавать статус генерации и скачать готовый отчет. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getReportInfo**
> GetReportInfoResponse getReportInfo()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getReportInfo.md) %}  Возвращает статус генерации заданного отчета или документа и, если он готов, ссылку для скачивания.  Чтобы воспользоваться этим запросом, вначале нужно запустить генерацию отчета или документа. [Инструкция](../../step-by-step/reports.md)  |**⚙️ Лимит:** 100 запросов в минуту| |-| 

### Example

```typescript
import {
    ReportsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let reportId: string; //Идентификатор отчета или документа, который вы получили после запуска генерации.  (default to undefined)

const { status, data } = await apiInstance.getReportInfo(
    reportId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reportId** | [**string**] | Идентификатор отчета или документа, который вы получили после запуска генерации.  | defaults to undefined|


### Return type

**GetReportInfoResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Статус генерации отчета или документа и ссылка, если она уже есть.  {% note tip \&quot;Статус генерации &#x60;FAILED&#x60; или &#x60;NO_DATA&#x60;\&quot; %}  Проверьте корректность запроса на генерацию. Например, верно ли указан идентификатор кампании, период или номер платежного поручения.  {% endnote %}     |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

