# LaasApi

All URIs are relative to *https://api.partner.market.yandex.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteCampaignOffers**](#deletecampaignoffers) | **POST** /v2/campaigns/{campaignId}/offers/delete | Удаление товаров из ассортимента магазина|
|[**deleteOffers**](#deleteoffers) | **POST** /v2/businesses/{businessId}/offer-mappings/delete | Удаление товаров из каталога|
|[**generateBarcodesReport**](#generatebarcodesreport) | **POST** /v1/reports/documents/barcodes/generate | Получение файла со штрихкодами|
|[**generateClosureDocumentsDetalizationReport**](#generateclosuredocumentsdetalizationreport) | **POST** /v2/reports/closure-documents/detalization/generate | Отчет по схождению с закрывающими документами|
|[**generateClosureDocumentsReport**](#generateclosuredocumentsreport) | **POST** /v2/reports/closure-documents/generate | Закрывающие документы|
|[**generateGoodsMovementReport**](#generategoodsmovementreport) | **POST** /v2/reports/goods-movement/generate | Отчет по движению товаров|
|[**generateOfferBarcodes**](#generateofferbarcodes) | **POST** /v1/businesses/{businessId}/offer-mappings/barcodes/generate | Генерация штрихкодов|
|[**generateStocksOnWarehousesReport**](#generatestocksonwarehousesreport) | **POST** /v2/reports/stocks-on-warehouses/generate | Отчет по остаткам на складах|
|[**generateUnitedMarketplaceServicesReport**](#generateunitedmarketplaceservicesreport) | **POST** /v2/reports/united-marketplace-services/generate | Отчет по стоимости услуг|
|[**generateUnitedReturnsReport**](#generateunitedreturnsreport) | **POST** /v2/reports/united-returns/generate | Отчет по невыкупам и возвратам|
|[**getAuthTokenInfo**](#getauthtokeninfo) | **POST** /v2/auth/token | Получение информации о токене авторизации|
|[**getBusinessSettings**](#getbusinesssettings) | **POST** /v2/businesses/{businessId}/settings | Настройки кабинета|
|[**getCampaign**](#getcampaign) | **GET** /v2/campaigns/{campaignId} | Информация о магазине|
|[**getCampaignOffers**](#getcampaignoffers) | **POST** /v2/campaigns/{campaignId}/offers | Информация о товарах, которые размещены в заданном магазине|
|[**getCampaignSettings**](#getcampaignsettings) | **GET** /v2/campaigns/{campaignId}/settings | Настройки магазина|
|[**getCampaigns**](#getcampaigns) | **GET** /v2/campaigns | Список магазинов пользователя|
|[**getCategoriesTree**](#getcategoriestree) | **POST** /v2/categories/tree | Дерево категорий|
|[**getCategoryContentParameters**](#getcategorycontentparameters) | **POST** /v2/category/{categoryId}/parameters | Списки характеристик товаров по категориям|
|[**getDefaultPrices**](#getdefaultprices) | **POST** /v2/businesses/{businessId}/offer-prices | Просмотр цен на указанные товары во всех магазинах|
|[**getFulfillmentWarehouses**](#getfulfillmentwarehouses) | **GET** /v2/warehouses | Идентификаторы складов Маркета|
|[**getOfferCardsContentStatus**](#getoffercardscontentstatus) | **POST** /v2/businesses/{businessId}/offer-cards | Получение информации о заполненности карточек магазина|
|[**getOfferMappings**](#getoffermappings) | **POST** /v2/businesses/{businessId}/offer-mappings | Информация о товарах в каталоге|
|[**getOrder**](#getorder) | **GET** /v2/campaigns/{campaignId}/orders/{orderId} | Информация об одном заказе|
|[**getOrderIdentifiersStatus**](#getorderidentifiersstatus) | **POST** /v2/campaigns/{campaignId}/orders/{orderId}/identifiers/status | Статусы проверки кодов маркировки|
|[**getOrders**](#getorders) | **GET** /v2/campaigns/{campaignId}/orders | Информация о нескольких заказах|
|[**getPricesByOfferIds**](#getpricesbyofferids) | **POST** /v2/campaigns/{campaignId}/offer-prices | Просмотр цен на указанные товары в конкретном магазине|
|[**getRegionsCodes**](#getregionscodes) | **POST** /v2/regions/countries | Список допустимых кодов стран|
|[**getReportInfo**](#getreportinfo) | **GET** /v2/reports/info/{reportId} | Получение заданного отчета или документа|
|[**getReturn**](#getreturn) | **GET** /v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId} | Информация о невыкупе или возврате|
|[**getReturns**](#getreturns) | **GET** /v2/campaigns/{campaignId}/returns | Список невыкупов и возвратов|
|[**getStocks**](#getstocks) | **POST** /v2/campaigns/{campaignId}/offers/stocks | Информация об остатках и оборачиваемости|
|[**getSupplyRequestDocuments**](#getsupplyrequestdocuments) | **POST** /v2/campaigns/{campaignId}/supply-requests/documents | Получение документов по заявке на поставку, вывоз или утилизацию|
|[**getSupplyRequestItems**](#getsupplyrequestitems) | **POST** /v2/campaigns/{campaignId}/supply-requests/items | Получение товаров в заявке на поставку, вывоз или утилизацию|
|[**getSupplyRequests**](#getsupplyrequests) | **POST** /v2/campaigns/{campaignId}/supply-requests | Получение информации о заявках на поставку, вывоз и утилизацию|
|[**searchRegionChildren**](#searchregionchildren) | **GET** /v2/regions/{regionId}/children | Информация о дочерних регионах|
|[**searchRegionsById**](#searchregionsbyid) | **GET** /v2/regions/{regionId} | Информация о регионе|
|[**searchRegionsByName**](#searchregionsbyname) | **GET** /v2/regions | Поиск регионов по их имени|
|[**updateBusinessPrices**](#updatebusinessprices) | **POST** /v2/businesses/{businessId}/offer-prices/updates | Установка цен на товары для всех магазинов|
|[**updateCampaignOffers**](#updatecampaignoffers) | **POST** /v2/campaigns/{campaignId}/offers/update | Изменение условий продажи товаров в магазине|
|[**updateOfferContent**](#updateoffercontent) | **POST** /v2/businesses/{businessId}/offer-cards/update | Редактирование категорийных характеристик товара|
|[**updateOfferMappings**](#updateoffermappings) | **POST** /v2/businesses/{businessId}/offer-mappings/update | Добавление товаров в каталог и изменение информации о них|
|[**updateOrderStatus**](#updateorderstatus) | **PUT** /v2/campaigns/{campaignId}/orders/{orderId}/status | Изменение статуса одного заказа|
|[**updateOrderStatuses**](#updateorderstatuses) | **POST** /v2/campaigns/{campaignId}/orders/status-update | Изменение статусов нескольких заказов|
|[**updatePrices**](#updateprices) | **POST** /v2/campaigns/{campaignId}/offer-prices/updates | Установка цен на товары в конкретном магазине|

# **deleteCampaignOffers**
> DeleteCampaignOffersResponse deleteCampaignOffers(deleteCampaignOffersRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/deleteCampaignOffers.md) %}  Удаляет заданные товары из заданного магазина.  {% note warning \"Запрос удаляет товары из конкретного магазина\" %}  На продажи в других магазинах и на наличие товара в общем каталоге он не влияет.  {% endnote %}  Товар не получится удалить, если он хранится на складах Маркета.  |**⚙️ Лимит:** 10 000 товаров в минуту| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration,
    DeleteCampaignOffersRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let deleteCampaignOffersRequest: DeleteCampaignOffersRequest; //

const { status, data } = await apiInstance.deleteCampaignOffers(
    campaignId,
    deleteCampaignOffersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteCampaignOffersRequest** | **DeleteCampaignOffersRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|


### Return type

**DeleteCampaignOffersResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Если удалось удалить не все товары, с ответом 200 вернется список тех, что были в запросе, но остались в магазине. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**423** | К ресурсу нельзя применить указанный метод. [Подробнее об ошибке](../../concepts/error-codes.md#423) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteOffers**
> DeleteOffersResponse deleteOffers(deleteOffersRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/deleteOffers.md) %}  Удаляет товары из каталога.  |**⚙️ Лимит:** 10 000 товаров в минуту, не более 200 товаров в одном запросе| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration,
    DeleteOffersRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let businessId: number; //Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  (default to undefined)
let deleteOffersRequest: DeleteOffersRequest; //

const { status, data } = await apiInstance.deleteOffers(
    businessId,
    deleteOffersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteOffersRequest** | **DeleteOffersRequest**|  | |
| **businessId** | [**number**] | Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  | defaults to undefined|


### Return type

**DeleteOffersResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Если удалось удалить не все товары, с ответом 200 вернется список тех, что были в запросе, но остались в магазине. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**423** | К ресурсу нельзя применить указанный метод. [Подробнее об ошибке](../../concepts/error-codes.md#423) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateBarcodesReport**
> GenerateReportResponse generateBarcodesReport(generateBarcodesReportRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateBarcodesReport.md) %}  Запускает генерацию PDF-файла со штрихкодами переданных товаров или товаров в указанной заявке на поставку.  Файл не получится сгенерировать, если в нем будет более 1 500 штрихкодов.  Узнать статус генерации и получить ссылку на готовый файл можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  |**⚙️ Лимит:** 1 000 запросов в час| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration,
    GenerateBarcodesReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

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

# **generateClosureDocumentsDetalizationReport**
> GenerateReportResponse generateClosureDocumentsDetalizationReport(generateClosureDocumentsDetalizationRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateClosureDocumentsDetalizationReport.md) %}  Запускает генерацию отчета по схождению с закрывающими документами в зависимости от типа договора.  Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  {% list tabs %}  - Договор на размещение    {% include notitle [:no-translate[reports]](../../_auto/reports/period_closure/period_closure_income.md) %}  - Договор на продвижение    {% include notitle [:no-translate[reports]](../../_auto/reports/period_closure/period_closure_outcome.md) %}  - Договор на маркетинг    {% include notitle [:no-translate[reports]](../../_auto/reports/advertiser_billing_operations/advertiser_billing_operations.md) %}  {% endlist %}  |**⚙️ Лимит:** 100 запросов в час| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration,
    GenerateClosureDocumentsDetalizationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

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
    LaasApi,
    Configuration,
    GenerateClosureDocumentsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

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

# **generateGoodsMovementReport**
> GenerateReportResponse generateGoodsMovementReport(generateGoodsMovementReportRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateGoodsMovementReport.md) %}  Запускает генерацию отчета по движению товаров. [Что это за отчет](https://yandex.ru/support/marketplace/analytics/reports-fby-fbs.html#flow)  Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  {% include notitle [:no-translate[reports]](../../_auto/reports/sku/movement/movement_config.md) %}  |**⚙️ Лимит:** 100 запросов в час| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration,
    GenerateGoodsMovementReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

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

# **generateOfferBarcodes**
> GenerateOfferBarcodesResponse generateOfferBarcodes(generateOfferBarcodesRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateOfferBarcodes.md) %}  Генерирует штрихкоды и присваивает их указанным товарам.  Если у товара на упаковке уже есть штрихкод производителя, передайте его в параметре `barcodes` в методе [POST v2/businesses/{businessId}/offer-mappings/update](../../reference/business-assortment/updateOfferMappings.md). Генерировать новый не нужно.  |**⚙️ Лимит:** 10 000 товаров в минуту, не более 100 товаров в одном запросе| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration,
    GenerateOfferBarcodesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let businessId: number; //Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  (default to undefined)
let generateOfferBarcodesRequest: GenerateOfferBarcodesRequest; //

const { status, data } = await apiInstance.generateOfferBarcodes(
    businessId,
    generateOfferBarcodesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateOfferBarcodesRequest** | **GenerateOfferBarcodesRequest**|  | |
| **businessId** | [**number**] | Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  | defaults to undefined|


### Return type

**GenerateOfferBarcodesResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Пустой ответ, если генерация успешно завершилась для всех переданных товаров.  Или список товаров, для которых не удалось сгенерировать штрихкоды.  |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**423** | К ресурсу нельзя применить указанный метод. [Подробнее об ошибке](../../concepts/error-codes.md#423) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateStocksOnWarehousesReport**
> GenerateReportResponse generateStocksOnWarehousesReport(generateStocksOnWarehousesReportRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateStocksOnWarehousesReport.md) %}  Запускает генерацию отчета по остаткам на складах. [Что это за отчет](https://yandex.ru/support/marketplace/ru/storage/logistics#remains-history)  **Какая информация вернется:**  * Для модели FBY, если указать `campaignId`, — об остатках на складах Маркета. * Для остальных моделей, если указать `campaignId`, — об остатках на соответствующем складе магазина. * Для остальных моделей, если указать `businessId`, — об остатках на всех складах магазинов в кабинете, кроме FBY. Используйте фильтр `campaignIds`, чтобы указать определенные магазины.  ⚠️ Не передавайте одновременно `campaignId` и `businessId`.  Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  {% list tabs %}  - Склад Маркета    {% include notitle [:no-translate[reports]](../../_auto/reports/stocks/stocks_on_warehouses.md) %}  - Склад магазина    {% include notitle [:no-translate[reports]](../../_auto/reports/offers/mass/mass_shared_stocks_business_csv_config.md) %}  - Все склады магазинов в кабинете, кроме FBY    {% include notitle [:no-translate[reports]](../../_auto/reports/offers/stocks_business_config.md) %}  {% endlist %}  |**⚙️ Лимит:** 100 запросов в час| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration,
    GenerateStocksOnWarehousesReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

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
    LaasApi,
    Configuration,
    GenerateUnitedMarketplaceServicesReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

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

# **generateUnitedReturnsReport**
> GenerateReportResponse generateUnitedReturnsReport(generateUnitedReturnsRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/generateUnitedReturnsReport.md) %}  Запускает генерацию сводного отчета по невыкупам и возвратам за заданный период. [Что это за отчет](https://yandex.ru/support/marketplace/ru/orders/returns/logistic#rejected-orders)  Отчет содержит информацию о невыкупах и возвратах за указанный период, а также о тех, которые готовы к выдаче.  Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).  {% include notitle [:no-translate[reports]](../../_auto/reports/united/returns/generator/united_returns.md) %}  |**⚙️ Лимит:** 100 запросов в час| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration,
    GenerateUnitedReturnsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

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

# **getAuthTokenInfo**
> GetTokenInfoResponse getAuthTokenInfo()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getAuthTokenInfo.md) %}  {% note info \"Метод доступен только для Api-Key-токена.\" %}     {% endnote %}  Возвращает информацию о переданном токене авторизации.  |**⚙️ Лимит:** 100 запросов в час| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

const { status, data } = await apiInstance.getAuthTokenInfo();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetTokenInfoResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о токене авторизации. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBusinessSettings**
> GetBusinessSettingsResponse getBusinessSettings()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getBusinessSettings.md) %}  Возвращает информацию о настройках кабинета, идентификатор которого указан в запросе. |**⚙️ Лимит:** 1 000 запросов в час| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let businessId: number; //Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  (default to undefined)

const { status, data } = await apiInstance.getBusinessSettings(
    businessId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **businessId** | [**number**] | Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  | defaults to undefined|


### Return type

**GetBusinessSettingsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Настройки кабинета. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCampaign**
> GetCampaignResponse getCampaign()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getCampaign.md) %}  Возвращает информацию о магазине. |**⚙️ Лимит:** 1 000 запросов в час| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)

const { status, data } = await apiInstance.getCampaign(
    campaignId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|


### Return type

**GetCampaignResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о магазине. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCampaignOffers**
> GetCampaignOffersResponse getCampaignOffers(getCampaignOffersRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getCampaignOffers.md) %}  Возвращает список товаров, которые размещены в заданном магазине. Для каждого товара указываются параметры размещения.  |**⚙️ Лимит:** 10 000 товаров в минуту| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration,
    GetCampaignOffersRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let getCampaignOffersRequest: GetCampaignOffersRequest; //
let pageToken: string; //Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра `nextPageToken`, полученное при последнем запросе.  Если задан `page_token` и в запросе есть параметры `page` и `pageSize`, они игнорируются.  (optional) (default to undefined)
let limit: number; //Количество значений на одной странице.  (optional) (default to undefined)

const { status, data } = await apiInstance.getCampaignOffers(
    campaignId,
    getCampaignOffersRequest,
    pageToken,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getCampaignOffersRequest** | **GetCampaignOffersRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|
| **pageToken** | [**string**] | Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра &#x60;nextPageToken&#x60;, полученное при последнем запросе.  Если задан &#x60;page_token&#x60; и в запросе есть параметры &#x60;page&#x60; и &#x60;pageSize&#x60;, они игнорируются.  | (optional) defaults to undefined|
| **limit** | [**number**] | Количество значений на одной странице.  | (optional) defaults to undefined|


### Return type

**GetCampaignOffersResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список товаров, размещенных в заданном магазине. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCampaignSettings**
> GetCampaignSettingsResponse getCampaignSettings()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getCampaignSettings.md) %}  Возвращает информацию о настройках магазина, идентификатор которого указан в запросе. |**⚙️ Лимит:** 1 000 запросов в час| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)

const { status, data } = await apiInstance.getCampaignSettings(
    campaignId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|


### Return type

**GetCampaignSettingsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Настройки магазина. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCampaigns**
> GetCampaignsResponse getCampaigns()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getCampaigns.md) %}  **Для Api-Key-токена:** возвращает список магазинов в кабинете, для которого выдан токен. Нельзя получить список только подагентских магазинов.  **Для OAuth-токена:** возвращает список магазинов, к которым имеет доступ пользователь — владелец токена авторизации, использованного в запросе. Для агентских пользователей список состоит из подагентских магазинов.  |**⚙️ Лимит:** 1 000 запросов в час| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let page: number; //{% note warning \"Если в методе есть `page_token`\" %}  Используйте его вместо параметра `page`.  [Подробнее о типах пагинации и их использовании](../../concepts/pagination.md)  {% endnote %}  Номер страницы результатов.  Используется вместе с параметром `pageSize`.  `page` игнорируется, если задан `page_token` или `limit`.  (optional) (default to 1)
let pageSize: number; //Размер страницы.  Используется вместе с параметром `page`.  `pageSize` игнорируется, если задан `page_token` или `limit`.  (optional) (default to undefined)

const { status, data } = await apiInstance.getCampaigns(
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | {% note warning \&quot;Если в методе есть &#x60;page_token&#x60;\&quot; %}  Используйте его вместо параметра &#x60;page&#x60;.  [Подробнее о типах пагинации и их использовании](../../concepts/pagination.md)  {% endnote %}  Номер страницы результатов.  Используется вместе с параметром &#x60;pageSize&#x60;.  &#x60;page&#x60; игнорируется, если задан &#x60;page_token&#x60; или &#x60;limit&#x60;.  | (optional) defaults to 1|
| **pageSize** | [**number**] | Размер страницы.  Используется вместе с параметром &#x60;page&#x60;.  &#x60;pageSize&#x60; игнорируется, если задан &#x60;page_token&#x60; или &#x60;limit&#x60;.  | (optional) defaults to undefined|


### Return type

**GetCampaignsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Магазины пользователя. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCategoriesTree**
> GetCategoriesResponse getCategoriesTree()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getCategoriesTree.md) %}  Возвращает дерево категорий Маркета.  |**⚙️ Лимит:** 1 000 запросов в час| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration,
    GetCategoriesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let getCategoriesRequest: GetCategoriesRequest; // (optional)

const { status, data } = await apiInstance.getCategoriesTree(
    getCategoriesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getCategoriesRequest** | **GetCategoriesRequest**|  | |


### Return type

**GetCategoriesResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Категории Маркета. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCategoryContentParameters**
> GetCategoryContentParametersResponse getCategoryContentParameters()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getCategoryContentParameters.md) %}  Возвращает список характеристик с допустимыми значениями для заданной [листовой категории](*list-category).  |**⚙️ Лимит:** 100 категорий в минуту | |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let categoryId: number; //Идентификатор категории на Маркете.  Чтобы узнать идентификатор категории, к которой относится интересующий вас товар, воспользуйтесь запросом [POST v2/categories/tree](../../reference/categories/getCategoriesTree.md).  (default to undefined)
let businessId: number; //Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  Передайте параметр, чтобы получить характеристики, которые являются особенностями варианта товара в данном кабинете.  (optional) (default to undefined)

const { status, data } = await apiInstance.getCategoryContentParameters(
    categoryId,
    businessId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **categoryId** | [**number**] | Идентификатор категории на Маркете.  Чтобы узнать идентификатор категории, к которой относится интересующий вас товар, воспользуйтесь запросом [POST v2/categories/tree](../../reference/categories/getCategoriesTree.md).  | defaults to undefined|
| **businessId** | [**number**] | Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  Передайте параметр, чтобы получить характеристики, которые являются особенностями варианта товара в данном кабинете.  | (optional) defaults to undefined|


### Return type

**GetCategoryContentParametersResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список характеристик товаров из заданной категории. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDefaultPrices**
> GetDefaultPricesResponse getDefaultPrices()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getDefaultPrices.md) %}  Возвращает список цен, которые вы установили для всех магазинов любым способом. Например, через API или с помощью Excel-шаблона.  О способах установки цен читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/assortment/operations/prices.html).  |**⚙️ Лимит:** 10 000 товаров в минуту| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration,
    GetDefaultPricesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let businessId: number; //Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  (default to undefined)
let pageToken: string; //Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра `nextPageToken`, полученное при последнем запросе.  Если задан `page_token` и в запросе есть параметры `page` и `pageSize`, они игнорируются.  (optional) (default to undefined)
let limit: number; //Количество значений на одной странице.  (optional) (default to undefined)
let getDefaultPricesRequest: GetDefaultPricesRequest; // (optional)

const { status, data } = await apiInstance.getDefaultPrices(
    businessId,
    pageToken,
    limit,
    getDefaultPricesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getDefaultPricesRequest** | **GetDefaultPricesRequest**|  | |
| **businessId** | [**number**] | Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  | defaults to undefined|
| **pageToken** | [**string**] | Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра &#x60;nextPageToken&#x60;, полученное при последнем запросе.  Если задан &#x60;page_token&#x60; и в запросе есть параметры &#x60;page&#x60; и &#x60;pageSize&#x60;, они игнорируются.  | (optional) defaults to undefined|
| **limit** | [**number**] | Количество значений на одной странице.  | (optional) defaults to undefined|


### Return type

**GetDefaultPricesResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список всех товаров с установленными ценами. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFulfillmentWarehouses**
> GetFulfillmentWarehousesResponse getFulfillmentWarehouses()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getFulfillmentWarehouses.md) %}  Возвращает список складов Маркета с их идентификаторами.  |**⚙️ Лимит:** 100 запросов в минуту| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let campaignId: number; //Идентификатор кампании.  Указывается, если нужно вернуть все склады Маркета, которые привязаны к определенной кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (optional) (default to undefined)

const { status, data } = await apiInstance.getFulfillmentWarehouses(
    campaignId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**number**] | Идентификатор кампании.  Указывается, если нужно вернуть все склады Маркета, которые привязаны к определенной кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | (optional) defaults to undefined|


### Return type

**GetFulfillmentWarehousesResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список складов. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOfferCardsContentStatus**
> GetOfferCardsContentStatusResponse getOfferCardsContentStatus()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getOfferCardsContentStatus.md) %}  Возвращает сведения о состоянии контента для заданных товаров:  * создана ли карточка товара и в каком она статусе; * рейтинг карточки — на сколько процентов она заполнена; * переданные характеристики товаров; * есть ли ошибки или предупреждения, связанные с контентом; * рекомендации по заполнению карточки.  |**⚙️ Лимит:** 600 запросов в минуту| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration,
    GetOfferCardsContentStatusRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let businessId: number; //Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  (default to undefined)
let pageToken: string; //Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра `nextPageToken`, полученное при последнем запросе.  Если задан `page_token` и в запросе есть параметры `page` и `pageSize`, они игнорируются.  (optional) (default to undefined)
let limit: number; //Количество значений на одной странице.  (optional) (default to undefined)
let getOfferCardsContentStatusRequest: GetOfferCardsContentStatusRequest; // (optional)

const { status, data } = await apiInstance.getOfferCardsContentStatus(
    businessId,
    pageToken,
    limit,
    getOfferCardsContentStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getOfferCardsContentStatusRequest** | **GetOfferCardsContentStatusRequest**|  | |
| **businessId** | [**number**] | Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  | defaults to undefined|
| **pageToken** | [**string**] | Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра &#x60;nextPageToken&#x60;, полученное при последнем запросе.  Если задан &#x60;page_token&#x60; и в запросе есть параметры &#x60;page&#x60; и &#x60;pageSize&#x60;, они игнорируются.  | (optional) defaults to undefined|
| **limit** | [**number**] | Количество значений на одной странице.  | (optional) defaults to undefined|


### Return type

**GetOfferCardsContentStatusResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о карточках указанных товаров. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOfferMappings**
> GetOfferMappingsResponse getOfferMappings()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getOfferMappings.md) %}  Возвращает список товаров в каталоге, их категории на Маркете и характеристики каждого товара.  Можно использовать тремя способами: * задать список интересующих SKU; * задать фильтр — в этом случае результаты возвращаются постранично; * не передавать тело запроса, чтобы получить список всех товаров в каталоге.  |**⚙️ Лимит:** 600 запросов в минуту, не более 200 товаров в одном запросе| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration,
    GetOfferMappingsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let businessId: number; //Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  (default to undefined)
let pageToken: string; //Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра `nextPageToken`, полученное при последнем запросе.  Если задан `page_token` и в запросе есть параметры `page` и `pageSize`, они игнорируются.  (optional) (default to undefined)
let limit: number; //Количество значений на одной странице.  (optional) (default to undefined)
let language: CatalogLanguageType; //Язык, на котором принимаются и возвращаются значения в параметрах `name` и `description`.  Значение по умолчанию: `RU`.  (optional) (default to undefined)
let getOfferMappingsRequest: GetOfferMappingsRequest; // (optional)

const { status, data } = await apiInstance.getOfferMappings(
    businessId,
    pageToken,
    limit,
    language,
    getOfferMappingsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getOfferMappingsRequest** | **GetOfferMappingsRequest**|  | |
| **businessId** | [**number**] | Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  | defaults to undefined|
| **pageToken** | [**string**] | Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра &#x60;nextPageToken&#x60;, полученное при последнем запросе.  Если задан &#x60;page_token&#x60; и в запросе есть параметры &#x60;page&#x60; и &#x60;pageSize&#x60;, они игнорируются.  | (optional) defaults to undefined|
| **limit** | [**number**] | Количество значений на одной странице.  | (optional) defaults to undefined|
| **language** | **CatalogLanguageType** | Язык, на котором принимаются и возвращаются значения в параметрах &#x60;name&#x60; и &#x60;description&#x60;.  Значение по умолчанию: &#x60;RU&#x60;.  | (optional) defaults to undefined|


### Return type

**GetOfferMappingsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о товарах в каталоге. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOrder**
> GetOrderResponse getOrder()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getOrder.md) %}  Возвращает информацию о заказе.  {% note tip \"Вы также можете настроить API-уведомления\" %}  Маркет отправит вам [запрос](../../push-notifications/reference/sendNotification.md), когда появится новый заказ или изменится его статус. А полную информацию можно получить с помощью этого метода или [GET v2/campaigns/{campaignId}/orders](../../reference/orders/getOrders.md).  [{#T}](../../push-notifications/index.md)  {% endnote %}  Получить более подробную информацию о покупателе и его номере телефона можно с помощью запроса [GET v2/campaigns/{campaignId}/orders/{orderId}/buyer](../../reference/orders/getOrderBuyerInfo.md).  |**⚙️ Лимит:** 100 000 запросов в час| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let orderId: number; //Идентификатор заказа. (default to undefined)

const { status, data } = await apiInstance.getOrder(
    campaignId,
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|
| **orderId** | [**number**] | Идентификатор заказа. | defaults to undefined|


### Return type

**GetOrderResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о заказе. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOrderIdentifiersStatus**
> GetOrderIdentifiersStatusResponse getOrderIdentifiersStatus()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getOrderIdentifiersStatus.md) %}  Возвращает статусы проверки кодов маркировки в заказе.  Заказ, в котором есть ювелирные изделия или товары с обязательной маркировкой в системе [:no-translate[«Честный ЗНАК»]](https://честныйзнак.рф/), можно перевести в статус `READY_TO_SHIP`, только когда:  1. В методе [PUT v2/campaigns/{campaignId}/orders/{orderId}/boxes](../../reference/orders/setOrderBoxLayout.md) вы передадите Маркету:      * [УИНы](:no-translate[*uin]) по каждому ювелирному изделию в заказе;      * коды маркировки в системе :no-translate[«Честный ЗНАК»] по всем товарам в заказе, для которых она обязательна. 2. Все коды маркировки успешно пройдут проверку.  {% note info \"Проверка кодов маркировки в системе [:no-translate[«Честный ЗНАК»]](https://честныйзнак.рф/)\" %}  Неуспешный статус проверки кодов маркировки в системе [:no-translate[«Честный ЗНАК»]](https://честныйзнак.рф/) не блокирует перевод заказа в статус `READY_TO_SHIP` до 28 ноября 2025 года.  {% endnote %}  |**⚙️ Лимит:** 100 000 запросов в час| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let orderId: number; //Идентификатор заказа. (default to undefined)

const { status, data } = await apiInstance.getOrderIdentifiersStatus(
    campaignId,
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|
| **orderId** | [**number**] | Идентификатор заказа. | defaults to undefined|


### Return type

**GetOrderIdentifiersStatusResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация по проверке кодов маркировки. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOrders**
> GetOrdersResponse getOrders()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getOrders.md) %}  Возвращает информацию о заказах. Запрос можно использовать, чтобы узнать, нет ли новых заказов.  По умолчанию данные о тестовых заказах не приходят. Чтобы их получить, передайте значение `true` в параметре `fake`.  {% note tip \"Вы также можете настроить API-уведомления\" %}  Маркет отправит вам [запрос](../../push-notifications/reference/sendNotification.md), когда появится новый заказ или изменится его статус. А полную информацию можно получить с помощью этого метода или [GET v2/campaigns/{campaignId}/orders/{orderId}](../../reference/orders/getOrder.md).  [{#T}](../../push-notifications/index.md)  {% endnote %}  Доступна фильтрация по нескольким характеристикам заказов:  * дате оформления;  * статусу;  * идентификаторам заказов;  * этапу обработки или причине отмены;  * типу (настоящий или тестовый);  * дате отгрузки в службу доставки;  * дате и времени обновления заказа.  Информация о заказах, доставленных или отмененных больше 30 дней назад, не возвращается. Ее можно получить с помощью запроса информации об отдельном заказе [GET v2/campaigns/{campaignId}/orders/{orderId}](../../reference/orders/getOrder.md) (если у вас есть идентификатор заказа) или запроса отчета по заказам [POST v2/campaigns/{campaignId}/stats/orders](../../reference/stats/getOrdersStats.md).  Максимальный диапазон дат за один запрос к ресурсу — 30 дней.  Результаты возвращаются постранично. Для навигации по страницам используйте параметры `page_token` и `limit`.  Получить более подробную информацию о покупателе и его номере телефона можно с помощью запроса [GET v2/campaigns/{campaignId}/orders/{orderId}/buyer](../../reference/orders/getOrderBuyerInfo.md).  {% note warning \"Ограничение для параметра `limit`\" %}  Не передавайте значение больше 50.  {% endnote %}  |**⚙️ Лимит:** 100 000 запросов в час| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let orderIds: Array<number>; //Фильтрация заказов по идентификаторам. <br><br> ⚠️ Не используйте это поле одновременно с другими фильтрами. Если вы хотите воспользоваться ими, оставьте поле пустым.  (optional) (default to undefined)
let status: Set<OrderStatusType>; //Статус заказа:  * `CANCELLED` — заказ отменен.  * `DELIVERED` — заказ получен покупателем.  * `DELIVERY` — заказ передан в службу доставки.  * `PICKUP` — заказ доставлен в пункт самовывоза.  * `PROCESSING` — заказ находится в обработке.  * `UNPAID` — заказ оформлен, но еще не оплачен (если выбрана оплата при оформлении).  (optional) (default to undefined)
let substatus: Set<OrderSubstatusType>; //Этап обработки заказа (если он имеет статус `PROCESSING`) или причина отмены заказа (если он имеет статус `CANCELLED`).  Возможные значения для заказа в статусе `PROCESSING`:  * `STARTED` — заказ подтвержден, его можно начать обрабатывать. * `READY_TO_SHIP` — заказ собран и готов к отправке. * `SHIPPED` — заказ передан службе доставки.  Возможные значения для заказа в статусе `CANCELLED`:  * `RESERVATION_EXPIRED` — покупатель не завершил оформление зарезервированного заказа в течение 10 минут.  * `USER_NOT_PAID` — покупатель не оплатил заказ (для типа оплаты `PREPAID`) в течение 30 минут.  * `USER_UNREACHABLE` — не удалось связаться с покупателем. Для отмены с этой причиной необходимо выполнить условия:    * не менее 3 звонков с 8 до 21 в часовом поясе покупателя;   * перерыв между первым и третьим звонком не менее 90 минут;   * соединение не короче 5 секунд.    Если хотя бы одно из этих условий не выполнено (кроме случая, когда номер недоступен), отменить заказ не получится. Вернется ответ с кодом ошибки 400  * `USER_CHANGED_MIND` — покупатель отменил заказ по личным причинам.  * `USER_REFUSED_DELIVERY` — покупателя не устроили условия доставки.  * `USER_REFUSED_PRODUCT` — покупателю не подошел товар.  * `SHOP_FAILED` — магазин не может выполнить заказ.  * `USER_REFUSED_QUALITY` — покупателя не устроило качество товара.  * `REPLACING_ORDER` — покупатель решил заменить товар другим по собственной инициативе.  * `PROCESSING_EXPIRED` — значение более не используется.  * `PICKUP_EXPIRED` — закончился срок хранения заказа в ПВЗ.  * `DELIVERY_SERVICE_UNDELIVERED` — служба доставки не смогла доставить заказ.  * `CANCELLED_COURIER_NOT_FOUND` — не удалось найти курьера.  * `USER_WANTS_TO_CHANGE_DELIVERY_DATE` — покупатель хочет получить заказ в другой день.  * `RESERVATION_FAILED` — Маркет не может продолжить дальнейшую обработку заказа.  (optional) (default to undefined)
let fromDate: string; //Начальная дата для фильтрации заказов по дате оформления.  Формат даты: `ДД-ММ-ГГГГ`.  Между начальной и конечной датой (параметр `toDate`) должно быть не больше 30 дней.  Значение по умолчанию: 30 дней назад от текущей даты.  (optional) (default to undefined)
let toDate: string; //Конечная дата для фильтрации заказов по дате оформления.  Показываются заказы, созданные до 00:00 указанного дня.  Формат даты: `ДД-ММ-ГГГГ`.  Между начальной (параметр `fromDate`) и конечной датой должно быть не больше 30 дней.  Значение по умолчанию: текущая дата.  Если промежуток времени между `toDate` и `fromDate` меньше суток, то `toDate` равен `fromDate` + сутки.  (optional) (default to undefined)
let supplierShipmentDateFrom: string; //Начальная дата для фильтрации заказов по дате отгрузки в службу доставки (параметр `shipmentDate`).  Формат даты: `ДД-ММ-ГГГГ`.  Между начальной и конечной датой (параметр `supplierShipmentDateTo`) должно быть не больше 30 дней.  Начальная дата включается в интервал для фильтрации.  (optional) (default to undefined)
let supplierShipmentDateTo: string; //Конечная дата для фильтрации заказов по дате отгрузки в службу доставки (параметр `shipmentDate`).  Формат даты: `ДД-ММ-ГГГГ`.  Между начальной (параметр `supplierShipmentDateFrom`) и конечной датой должно быть не больше 30 дней.  Конечная дата не включается в интервал для фильтрации.  Если промежуток времени между `supplierShipmentDateTo` и `supplierShipmentDateFrom` меньше суток, то `supplierShipmentDateTo` равен `supplierShipmentDateFrom` + сутки.  (optional) (default to undefined)
let updatedAtFrom: string; //Начальная дата для фильтрации заказов по дате и времени обновления (параметр `updatedAt`).  Формат даты: ISO 8601 со смещением относительно UTC. Например, `2017-11-21T00:42:42+03:00`.  Между начальной и конечной датой (параметр `updatedAtTo`) должно быть не больше 30 дней.  Начальная дата включается в интервал для фильтрации.  (optional) (default to undefined)
let updatedAtTo: string; //Конечная дата для фильтрации заказов по дате и времени обновления (параметр `updatedAt`).  Формат даты: ISO 8601 со смещением относительно UTC. Например, `2017-11-21T00:42:42+03:00`.  Между начальной (параметр `updatedAtFrom`) и конечной датой должно быть не больше 30 дней.  Конечная дата не включается в интервал для фильтрации.  (optional) (default to undefined)
let dispatchType: OrderDeliveryDispatchType; //Способ отгрузки (optional) (default to undefined)
let fake: boolean; //Фильтрация заказов по типам:  * `false` — настоящий заказ покупателя.  * `true` — [тестовый](../../concepts/sandbox.md) заказ Маркета.  (optional) (default to false)
let hasCis: boolean; //Нужно ли вернуть только те заказы, в составе которых есть хотя бы один товар с кодом идентификации в системе [:no-translate[«Честный ЗНАК»]](https://честныйзнак.рф/) или [:no-translate[«ASL BELGISI»]](https://aslbelgisi.uz) (для продавцов :no-translate[Market Yandex Go]):  * `true` — да.  * `false` — нет.  Такие коды присваиваются товарам, которые подлежат маркировке и относятся к определенным категориям.  (optional) (default to false)
let onlyWaitingForCancellationApprove: boolean; //**Только для модели DBS**  Фильтрация заказов по наличию запросов покупателей на отмену.  При значении `true` возвращаются только заказы, которые находятся в статусе `DELIVERY` или `PICKUP` и которые пользователи решили отменить.  Чтобы подтвердить или отклонить отмену, отправьте запрос [PUT v2/campaigns/{campaignId}/orders/{orderId}/cancellation/accept](../../reference/orders/acceptOrderCancellation).  (optional) (default to false)
let onlyEstimatedDelivery: boolean; //Фильтрация заказов с долгой доставкой (31-60 дней) по подтвержденной дате доставки:  * `true` — возвращаются только заказы с неподтвержденной датой доставки. * `false` — фильтрация не применяется.  (optional) (default to false)
let buyerType: OrderBuyerType; //Фильтрация заказов по типу покупателя.  (optional) (default to undefined)
let page: number; //{% note warning \"Если в методе есть `page_token`\" %}  Используйте его вместо параметра `page`.  [Подробнее о типах пагинации и их использовании](../../concepts/pagination.md)  {% endnote %}  Номер страницы результатов.  Используется вместе с параметром `pageSize`.  `page` игнорируется, если задан `page_token` или `limit`.  (optional) (default to 1)
let pageSize: number; //Размер страницы.  Используется вместе с параметром `page`.  `pageSize` игнорируется, если задан `page_token` или `limit`.  (optional) (default to undefined)
let pageToken: string; //Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра `nextPageToken`, полученное при последнем запросе.  Если задан `page_token` и в запросе есть параметры `page` и `pageSize`, они игнорируются.  (optional) (default to undefined)
let limit: number; //Количество значений на одной странице.  (optional) (default to undefined)

const { status, data } = await apiInstance.getOrders(
    campaignId,
    orderIds,
    status,
    substatus,
    fromDate,
    toDate,
    supplierShipmentDateFrom,
    supplierShipmentDateTo,
    updatedAtFrom,
    updatedAtTo,
    dispatchType,
    fake,
    hasCis,
    onlyWaitingForCancellationApprove,
    onlyEstimatedDelivery,
    buyerType,
    page,
    pageSize,
    pageToken,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|
| **orderIds** | **Array&lt;number&gt;** | Фильтрация заказов по идентификаторам. &lt;br&gt;&lt;br&gt; ⚠️ Не используйте это поле одновременно с другими фильтрами. Если вы хотите воспользоваться ими, оставьте поле пустым.  | (optional) defaults to undefined|
| **status** | **Set&lt;OrderStatusType&gt;** | Статус заказа:  * &#x60;CANCELLED&#x60; — заказ отменен.  * &#x60;DELIVERED&#x60; — заказ получен покупателем.  * &#x60;DELIVERY&#x60; — заказ передан в службу доставки.  * &#x60;PICKUP&#x60; — заказ доставлен в пункт самовывоза.  * &#x60;PROCESSING&#x60; — заказ находится в обработке.  * &#x60;UNPAID&#x60; — заказ оформлен, но еще не оплачен (если выбрана оплата при оформлении).  | (optional) defaults to undefined|
| **substatus** | **Set&lt;OrderSubstatusType&gt;** | Этап обработки заказа (если он имеет статус &#x60;PROCESSING&#x60;) или причина отмены заказа (если он имеет статус &#x60;CANCELLED&#x60;).  Возможные значения для заказа в статусе &#x60;PROCESSING&#x60;:  * &#x60;STARTED&#x60; — заказ подтвержден, его можно начать обрабатывать. * &#x60;READY_TO_SHIP&#x60; — заказ собран и готов к отправке. * &#x60;SHIPPED&#x60; — заказ передан службе доставки.  Возможные значения для заказа в статусе &#x60;CANCELLED&#x60;:  * &#x60;RESERVATION_EXPIRED&#x60; — покупатель не завершил оформление зарезервированного заказа в течение 10 минут.  * &#x60;USER_NOT_PAID&#x60; — покупатель не оплатил заказ (для типа оплаты &#x60;PREPAID&#x60;) в течение 30 минут.  * &#x60;USER_UNREACHABLE&#x60; — не удалось связаться с покупателем. Для отмены с этой причиной необходимо выполнить условия:    * не менее 3 звонков с 8 до 21 в часовом поясе покупателя;   * перерыв между первым и третьим звонком не менее 90 минут;   * соединение не короче 5 секунд.    Если хотя бы одно из этих условий не выполнено (кроме случая, когда номер недоступен), отменить заказ не получится. Вернется ответ с кодом ошибки 400  * &#x60;USER_CHANGED_MIND&#x60; — покупатель отменил заказ по личным причинам.  * &#x60;USER_REFUSED_DELIVERY&#x60; — покупателя не устроили условия доставки.  * &#x60;USER_REFUSED_PRODUCT&#x60; — покупателю не подошел товар.  * &#x60;SHOP_FAILED&#x60; — магазин не может выполнить заказ.  * &#x60;USER_REFUSED_QUALITY&#x60; — покупателя не устроило качество товара.  * &#x60;REPLACING_ORDER&#x60; — покупатель решил заменить товар другим по собственной инициативе.  * &#x60;PROCESSING_EXPIRED&#x60; — значение более не используется.  * &#x60;PICKUP_EXPIRED&#x60; — закончился срок хранения заказа в ПВЗ.  * &#x60;DELIVERY_SERVICE_UNDELIVERED&#x60; — служба доставки не смогла доставить заказ.  * &#x60;CANCELLED_COURIER_NOT_FOUND&#x60; — не удалось найти курьера.  * &#x60;USER_WANTS_TO_CHANGE_DELIVERY_DATE&#x60; — покупатель хочет получить заказ в другой день.  * &#x60;RESERVATION_FAILED&#x60; — Маркет не может продолжить дальнейшую обработку заказа.  | (optional) defaults to undefined|
| **fromDate** | [**string**] | Начальная дата для фильтрации заказов по дате оформления.  Формат даты: &#x60;ДД-ММ-ГГГГ&#x60;.  Между начальной и конечной датой (параметр &#x60;toDate&#x60;) должно быть не больше 30 дней.  Значение по умолчанию: 30 дней назад от текущей даты.  | (optional) defaults to undefined|
| **toDate** | [**string**] | Конечная дата для фильтрации заказов по дате оформления.  Показываются заказы, созданные до 00:00 указанного дня.  Формат даты: &#x60;ДД-ММ-ГГГГ&#x60;.  Между начальной (параметр &#x60;fromDate&#x60;) и конечной датой должно быть не больше 30 дней.  Значение по умолчанию: текущая дата.  Если промежуток времени между &#x60;toDate&#x60; и &#x60;fromDate&#x60; меньше суток, то &#x60;toDate&#x60; равен &#x60;fromDate&#x60; + сутки.  | (optional) defaults to undefined|
| **supplierShipmentDateFrom** | [**string**] | Начальная дата для фильтрации заказов по дате отгрузки в службу доставки (параметр &#x60;shipmentDate&#x60;).  Формат даты: &#x60;ДД-ММ-ГГГГ&#x60;.  Между начальной и конечной датой (параметр &#x60;supplierShipmentDateTo&#x60;) должно быть не больше 30 дней.  Начальная дата включается в интервал для фильтрации.  | (optional) defaults to undefined|
| **supplierShipmentDateTo** | [**string**] | Конечная дата для фильтрации заказов по дате отгрузки в службу доставки (параметр &#x60;shipmentDate&#x60;).  Формат даты: &#x60;ДД-ММ-ГГГГ&#x60;.  Между начальной (параметр &#x60;supplierShipmentDateFrom&#x60;) и конечной датой должно быть не больше 30 дней.  Конечная дата не включается в интервал для фильтрации.  Если промежуток времени между &#x60;supplierShipmentDateTo&#x60; и &#x60;supplierShipmentDateFrom&#x60; меньше суток, то &#x60;supplierShipmentDateTo&#x60; равен &#x60;supplierShipmentDateFrom&#x60; + сутки.  | (optional) defaults to undefined|
| **updatedAtFrom** | [**string**] | Начальная дата для фильтрации заказов по дате и времени обновления (параметр &#x60;updatedAt&#x60;).  Формат даты: ISO 8601 со смещением относительно UTC. Например, &#x60;2017-11-21T00:42:42+03:00&#x60;.  Между начальной и конечной датой (параметр &#x60;updatedAtTo&#x60;) должно быть не больше 30 дней.  Начальная дата включается в интервал для фильтрации.  | (optional) defaults to undefined|
| **updatedAtTo** | [**string**] | Конечная дата для фильтрации заказов по дате и времени обновления (параметр &#x60;updatedAt&#x60;).  Формат даты: ISO 8601 со смещением относительно UTC. Например, &#x60;2017-11-21T00:42:42+03:00&#x60;.  Между начальной (параметр &#x60;updatedAtFrom&#x60;) и конечной датой должно быть не больше 30 дней.  Конечная дата не включается в интервал для фильтрации.  | (optional) defaults to undefined|
| **dispatchType** | **OrderDeliveryDispatchType** | Способ отгрузки | (optional) defaults to undefined|
| **fake** | [**boolean**] | Фильтрация заказов по типам:  * &#x60;false&#x60; — настоящий заказ покупателя.  * &#x60;true&#x60; — [тестовый](../../concepts/sandbox.md) заказ Маркета.  | (optional) defaults to false|
| **hasCis** | [**boolean**] | Нужно ли вернуть только те заказы, в составе которых есть хотя бы один товар с кодом идентификации в системе [:no-translate[«Честный ЗНАК»]](https://честныйзнак.рф/) или [:no-translate[«ASL BELGISI»]](https://aslbelgisi.uz) (для продавцов :no-translate[Market Yandex Go]):  * &#x60;true&#x60; — да.  * &#x60;false&#x60; — нет.  Такие коды присваиваются товарам, которые подлежат маркировке и относятся к определенным категориям.  | (optional) defaults to false|
| **onlyWaitingForCancellationApprove** | [**boolean**] | **Только для модели DBS**  Фильтрация заказов по наличию запросов покупателей на отмену.  При значении &#x60;true&#x60; возвращаются только заказы, которые находятся в статусе &#x60;DELIVERY&#x60; или &#x60;PICKUP&#x60; и которые пользователи решили отменить.  Чтобы подтвердить или отклонить отмену, отправьте запрос [PUT v2/campaigns/{campaignId}/orders/{orderId}/cancellation/accept](../../reference/orders/acceptOrderCancellation).  | (optional) defaults to false|
| **onlyEstimatedDelivery** | [**boolean**] | Фильтрация заказов с долгой доставкой (31-60 дней) по подтвержденной дате доставки:  * &#x60;true&#x60; — возвращаются только заказы с неподтвержденной датой доставки. * &#x60;false&#x60; — фильтрация не применяется.  | (optional) defaults to false|
| **buyerType** | **OrderBuyerType** | Фильтрация заказов по типу покупателя.  | (optional) defaults to undefined|
| **page** | [**number**] | {% note warning \&quot;Если в методе есть &#x60;page_token&#x60;\&quot; %}  Используйте его вместо параметра &#x60;page&#x60;.  [Подробнее о типах пагинации и их использовании](../../concepts/pagination.md)  {% endnote %}  Номер страницы результатов.  Используется вместе с параметром &#x60;pageSize&#x60;.  &#x60;page&#x60; игнорируется, если задан &#x60;page_token&#x60; или &#x60;limit&#x60;.  | (optional) defaults to 1|
| **pageSize** | [**number**] | Размер страницы.  Используется вместе с параметром &#x60;page&#x60;.  &#x60;pageSize&#x60; игнорируется, если задан &#x60;page_token&#x60; или &#x60;limit&#x60;.  | (optional) defaults to undefined|
| **pageToken** | [**string**] | Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра &#x60;nextPageToken&#x60;, полученное при последнем запросе.  Если задан &#x60;page_token&#x60; и в запросе есть параметры &#x60;page&#x60; и &#x60;pageSize&#x60;, они игнорируются.  | (optional) defaults to undefined|
| **limit** | [**number**] | Количество значений на одной странице.  | (optional) defaults to undefined|


### Return type

**GetOrdersResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о заказах. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPricesByOfferIds**
> GetPricesByOfferIdsResponse getPricesByOfferIds()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getPricesByOfferIds.md) %}  Возвращает список цен на указанные товары в магазине.  {% note warning \"Метод только для отдельных магазинов\" %}  Используйте этот метод, только если в кабинете установлены уникальные цены в отдельных магазинах.  Для просмотра цен, которые действуют во всех магазинах, используйте [POST v2/businesses/{businessId}/offer-mappings](../../reference/business-assortment/getOfferMappings.md).  {% endnote %}  |**⚙️ Лимит:** 150 000 товаров в минуту| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration,
    GetPricesByOfferIdsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let pageToken: string; //Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра `nextPageToken`, полученное при последнем запросе.  Если задан `page_token` и в запросе есть параметры `page` и `pageSize`, они игнорируются.  (optional) (default to undefined)
let limit: number; //Количество значений на одной странице.  (optional) (default to undefined)
let getPricesByOfferIdsRequest: GetPricesByOfferIdsRequest; // (optional)

const { status, data } = await apiInstance.getPricesByOfferIds(
    campaignId,
    pageToken,
    limit,
    getPricesByOfferIdsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getPricesByOfferIdsRequest** | **GetPricesByOfferIdsRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|
| **pageToken** | [**string**] | Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра &#x60;nextPageToken&#x60;, полученное при последнем запросе.  Если задан &#x60;page_token&#x60; и в запросе есть параметры &#x60;page&#x60; и &#x60;pageSize&#x60;, они игнорируются.  | (optional) defaults to undefined|
| **limit** | [**number**] | Количество значений на одной странице.  | (optional) defaults to undefined|


### Return type

**GetPricesByOfferIdsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список товаров с установленными для заданного магазина ценами. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRegionsCodes**
> GetRegionsCodesResponse getRegionsCodes()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getRegionsCodes.md) %}  Возвращает список стран с их кодами в формате :no-translate[ISO 3166-1 alpha-2].  Страна производства `countryCode` понадобится при продаже товаров из-за рубежа для бизнеса. [Инструкция](../../step-by-step/business-info.md)  |**⚙️ Лимит:** 100 запросов в час| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

const { status, data } = await apiInstance.getRegionsCodes();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetRegionsCodesResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список стран с их кодами в формате :no-translate[ISO 3166-1 alpha-2]. |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getReportInfo**
> GetReportInfoResponse getReportInfo()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getReportInfo.md) %}  Возвращает статус генерации заданного отчета или документа и, если он готов, ссылку для скачивания.  Чтобы воспользоваться этим запросом, вначале нужно запустить генерацию отчета или документа. [Инструкция](../../step-by-step/reports.md)  |**⚙️ Лимит:** 100 запросов в минуту| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

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

# **getReturn**
> GetReturnResponse getReturn()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getReturn.md) %}  Получает информацию по одному невыкупу или возврату.  {% note tip \"Подключите API-уведомления\" %}  Маркет отправит вам запрос [POST notification](../../push-notifications/reference/sendNotification.md), когда появится новый невыкуп или возврат.  [{#T}](../../push-notifications/index.md)  {% endnote %}  |**⚙️ Лимит:** 10 000 запросов в час| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let orderId: number; //Идентификатор заказа. (default to undefined)
let returnId: number; //Идентификатор невыкупа или возврата. (default to undefined)

const { status, data } = await apiInstance.getReturn(
    campaignId,
    orderId,
    returnId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|
| **orderId** | [**number**] | Идентификатор заказа. | defaults to undefined|
| **returnId** | [**number**] | Идентификатор невыкупа или возврата. | defaults to undefined|


### Return type

**GetReturnResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Детали невыкупа или возврата. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getReturns**
> GetReturnsResponse getReturns()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getReturns.md) %}  Получает список невыкупов и возвратов.  Чтобы получить информацию по одному невыкупу или возврату, выполните запрос [GET v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}](../../reference/orders/getReturn.md).  {% note tip \"Подключите API-уведомления\" %}  Маркет отправит вам запрос [POST notification](../../push-notifications/reference/sendNotification.md), когда появится новый невыкуп или возврат.  [{#T}](../../push-notifications/index.md)  {% endnote %}  {% note warning \"Ограничение для параметра `limit`\" %}  Не передавайте значение больше 100.  {% endnote %}  |**⚙️ Лимит:** 10 000 запросов в час| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let pageToken: string; //Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра `nextPageToken`, полученное при последнем запросе.  Если задан `page_token` и в запросе есть параметры `page` и `pageSize`, они игнорируются.  (optional) (default to undefined)
let limit: number; //Количество значений на одной странице.  (optional) (default to undefined)
let orderIds: Set<number>; //Идентификаторы заказов — для фильтрации результатов.  Несколько идентификаторов перечисляются через запятую без пробела.  (optional) (default to undefined)
let statuses: Set<RefundStatusType>; //Фильтр по статусам возврата денег за возвраты.  Несколько статусов перечисляются через запятую.  (optional) (default to undefined)
let shipmentStatuses: Set<ReturnShipmentStatusType>; //Фильтр по логистическим статусам невыкупов и возвратов.  Несколько статусов перечисляются через запятую.  (optional) (default to undefined)
let type: ModelReturnType; //Тип заказа для фильтрации:  * `UNREDEEMED` — невыкуп.  * `RETURN` — возврат.  Если не указать, в ответе будут и невыкупы, и возвраты.  (optional) (default to undefined)
let fromDate: string; //Начальная дата для фильтрации невыкупов или возвратов по дате обновления.  Формат: `ГГГГ-ММ-ДД`.  (optional) (default to undefined)
let toDate: string; //Конечная дата для фильтрации невыкупов или возвратов по дате обновления.  Формат: `ГГГГ-ММ-ДД`.  (optional) (default to undefined)
let fromDate2: string; //{% note warning \"Вместо него используйте `fromDate`.\" %}     {% endnote %}  Начальная дата для фильтрации невыкупов или возвратов по дате обновления.  (optional) (default to undefined)
let toDate2: string; //{% note warning \"Вместо него используйте `toDate`.\" %}     {% endnote %}  Конечная дата для фильтрации невыкупов или возвратов по дате обновления.  (optional) (default to undefined)

const { status, data } = await apiInstance.getReturns(
    campaignId,
    pageToken,
    limit,
    orderIds,
    statuses,
    shipmentStatuses,
    type,
    fromDate,
    toDate,
    fromDate2,
    toDate2
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|
| **pageToken** | [**string**] | Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра &#x60;nextPageToken&#x60;, полученное при последнем запросе.  Если задан &#x60;page_token&#x60; и в запросе есть параметры &#x60;page&#x60; и &#x60;pageSize&#x60;, они игнорируются.  | (optional) defaults to undefined|
| **limit** | [**number**] | Количество значений на одной странице.  | (optional) defaults to undefined|
| **orderIds** | **Set&lt;number&gt;** | Идентификаторы заказов — для фильтрации результатов.  Несколько идентификаторов перечисляются через запятую без пробела.  | (optional) defaults to undefined|
| **statuses** | **Set&lt;RefundStatusType&gt;** | Фильтр по статусам возврата денег за возвраты.  Несколько статусов перечисляются через запятую.  | (optional) defaults to undefined|
| **shipmentStatuses** | **Set&lt;ReturnShipmentStatusType&gt;** | Фильтр по логистическим статусам невыкупов и возвратов.  Несколько статусов перечисляются через запятую.  | (optional) defaults to undefined|
| **type** | **ModelReturnType** | Тип заказа для фильтрации:  * &#x60;UNREDEEMED&#x60; — невыкуп.  * &#x60;RETURN&#x60; — возврат.  Если не указать, в ответе будут и невыкупы, и возвраты.  | (optional) defaults to undefined|
| **fromDate** | [**string**] | Начальная дата для фильтрации невыкупов или возвратов по дате обновления.  Формат: &#x60;ГГГГ-ММ-ДД&#x60;.  | (optional) defaults to undefined|
| **toDate** | [**string**] | Конечная дата для фильтрации невыкупов или возвратов по дате обновления.  Формат: &#x60;ГГГГ-ММ-ДД&#x60;.  | (optional) defaults to undefined|
| **fromDate2** | [**string**] | {% note warning \&quot;Вместо него используйте &#x60;fromDate&#x60;.\&quot; %}     {% endnote %}  Начальная дата для фильтрации невыкупов или возвратов по дате обновления.  | (optional) defaults to undefined|
| **toDate2** | [**string**] | {% note warning \&quot;Вместо него используйте &#x60;toDate&#x60;.\&quot; %}     {% endnote %}  Конечная дата для фильтрации невыкупов или возвратов по дате обновления.  | (optional) defaults to undefined|


### Return type

**GetReturnsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Постраничные невыкупы или возвраты магазина. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStocks**
> GetWarehouseStocksResponse getStocks()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getStocks.md) %}  Возвращает данные об остатках товаров (для всех моделей) и об [оборачиваемости](*turnover) товаров (для модели FBY).  {% note info \"По умолчанию данные по оборачивамости не возращаются\" %}  Чтобы они были в ответе, передавайте `true` в поле `withTurnover`.  {% endnote %}  **Для модели FBY:** информация об остатках может возвращаться с нескольких складов Маркета, у которых будут разные `warehouseId`. Получить список складов Маркета можно с помощью метода [GET v2/warehouses](../../reference/warehouses/getFulfillmentWarehouses.md).  {% note warning \"Ограничение для параметра `limit`\" %}  Не передавайте значение больше 200.  {% endnote %}  |**⚙️ Лимит:** 100 000 товаров в минуту| |-|  [//]: <> (turnover: Среднее количество дней, за которое товар продается. Подробно об оборачиваемости рассказано в Справке Маркета для продавцов https://yandex.ru/support/marketplace/analytics/turnover.html.) 

### Example

```typescript
import {
    LaasApi,
    Configuration,
    GetWarehouseStocksRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let pageToken: string; //Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра `nextPageToken`, полученное при последнем запросе.  Если задан `page_token` и в запросе есть параметры `page` и `pageSize`, они игнорируются.  (optional) (default to undefined)
let limit: number; //Количество значений на одной странице.  (optional) (default to undefined)
let getWarehouseStocksRequest: GetWarehouseStocksRequest; // (optional)

const { status, data } = await apiInstance.getStocks(
    campaignId,
    pageToken,
    limit,
    getWarehouseStocksRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getWarehouseStocksRequest** | **GetWarehouseStocksRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|
| **pageToken** | [**string**] | Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра &#x60;nextPageToken&#x60;, полученное при последнем запросе.  Если задан &#x60;page_token&#x60; и в запросе есть параметры &#x60;page&#x60; и &#x60;pageSize&#x60;, они игнорируются.  | (optional) defaults to undefined|
| **limit** | [**number**] | Количество значений на одной странице.  | (optional) defaults to undefined|


### Return type

**GetWarehouseStocksResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Остатки товаров на складах. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSupplyRequestDocuments**
> GetSupplyRequestDocumentsResponse getSupplyRequestDocuments(getSupplyRequestDocumentsRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getSupplyRequestDocuments.md) %}  Возвращает документы по заявке.  |**⚙️ Лимит:** 1 000 запросов в час| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration,
    GetSupplyRequestDocumentsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let getSupplyRequestDocumentsRequest: GetSupplyRequestDocumentsRequest; //

const { status, data } = await apiInstance.getSupplyRequestDocuments(
    campaignId,
    getSupplyRequestDocumentsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getSupplyRequestDocumentsRequest** | **GetSupplyRequestDocumentsRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|


### Return type

**GetSupplyRequestDocumentsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список документов и ссылки на них. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSupplyRequestItems**
> GetSupplyRequestItemsResponse getSupplyRequestItems(getSupplyRequestItemsRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getSupplyRequestItems.md) %}  Возвращает список товаров в заявке и информацию по ним.  |**⚙️ Лимит:** 1 000 запросов в час| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration,
    GetSupplyRequestItemsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let getSupplyRequestItemsRequest: GetSupplyRequestItemsRequest; //
let pageToken: string; //Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра `nextPageToken`, полученное при последнем запросе.  Если задан `page_token` и в запросе есть параметры `page` и `pageSize`, они игнорируются.  (optional) (default to undefined)
let limit: number; //Количество значений на одной странице.  (optional) (default to undefined)

const { status, data } = await apiInstance.getSupplyRequestItems(
    campaignId,
    getSupplyRequestItemsRequest,
    pageToken,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getSupplyRequestItemsRequest** | **GetSupplyRequestItemsRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|
| **pageToken** | [**string**] | Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра &#x60;nextPageToken&#x60;, полученное при последнем запросе.  Если задан &#x60;page_token&#x60; и в запросе есть параметры &#x60;page&#x60; и &#x60;pageSize&#x60;, они игнорируются.  | (optional) defaults to undefined|
| **limit** | [**number**] | Количество значений на одной странице.  | (optional) defaults to undefined|


### Return type

**GetSupplyRequestItemsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список товаров в заявке и информация по ним. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSupplyRequests**
> GetSupplyRequestsResponse getSupplyRequests()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/getSupplyRequests.md) %}  По указанным фильтрам возвращает заявки на поставку, вывоз и утилизацию, а также информацию по ним.  |**⚙️ Лимит:** 1 000 запросов в час| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration,
    GetSupplyRequestsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let pageToken: string; //Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра `nextPageToken`, полученное при последнем запросе.  Если задан `page_token` и в запросе есть параметры `page` и `pageSize`, они игнорируются.  (optional) (default to undefined)
let limit: number; //Количество значений на одной странице.  (optional) (default to undefined)
let getSupplyRequestsRequest: GetSupplyRequestsRequest; // (optional)

const { status, data } = await apiInstance.getSupplyRequests(
    campaignId,
    pageToken,
    limit,
    getSupplyRequestsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getSupplyRequestsRequest** | **GetSupplyRequestsRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|
| **pageToken** | [**string**] | Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра &#x60;nextPageToken&#x60;, полученное при последнем запросе.  Если задан &#x60;page_token&#x60; и в запросе есть параметры &#x60;page&#x60; и &#x60;pageSize&#x60;, они игнорируются.  | (optional) defaults to undefined|
| **limit** | [**number**] | Количество значений на одной странице.  | (optional) defaults to undefined|


### Return type

**GetSupplyRequestsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список заявок и информация по ним. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchRegionChildren**
> GetRegionWithChildrenResponse searchRegionChildren()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/searchRegionChildren.md) %}  Возвращает информацию о регионах, являющихся дочерними по отношению к региону, идентификатор которого указан в запросе.  Для методов `GET v2/regions`, `GET v2/regions/{regionId}` и `GET v2/regions/{regionId}/children` действует групповое ресурсное ограничение. Ограничение вводится на суммарное количество регионов, информация о которых запрошена при помощи этих методов (не более 100 000 регионов).  Объем запросов к ресурсу, который возможно выполнить в течение суток, зависит от суммарного количества регионов.  |**⚙️ Лимит:** 50 000 запросов в час| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let regionId: number; //Идентификатор региона.  Идентификатор региона можно получить c помощью запроса [GET v2/regions](../../reference/regions/searchRegionsByName.md).  (default to undefined)
let page: number; //{% note warning \"Если в методе есть `page_token`\" %}  Используйте его вместо параметра `page`.  [Подробнее о типах пагинации и их использовании](../../concepts/pagination.md)  {% endnote %}  Номер страницы результатов.  Используется вместе с параметром `pageSize`.  `page` игнорируется, если задан `page_token` или `limit`.  (optional) (default to 1)
let pageSize: number; //Размер страницы.  Используется вместе с параметром `page`.  `pageSize` игнорируется, если задан `page_token` или `limit`.  (optional) (default to undefined)

const { status, data } = await apiInstance.searchRegionChildren(
    regionId,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **regionId** | [**number**] | Идентификатор региона.  Идентификатор региона можно получить c помощью запроса [GET v2/regions](../../reference/regions/searchRegionsByName.md).  | defaults to undefined|
| **page** | [**number**] | {% note warning \&quot;Если в методе есть &#x60;page_token&#x60;\&quot; %}  Используйте его вместо параметра &#x60;page&#x60;.  [Подробнее о типах пагинации и их использовании](../../concepts/pagination.md)  {% endnote %}  Номер страницы результатов.  Используется вместе с параметром &#x60;pageSize&#x60;.  &#x60;page&#x60; игнорируется, если задан &#x60;page_token&#x60; или &#x60;limit&#x60;.  | (optional) defaults to 1|
| **pageSize** | [**number**] | Размер страницы.  Используется вместе с параметром &#x60;page&#x60;.  &#x60;pageSize&#x60; игнорируется, если задан &#x60;page_token&#x60; или &#x60;limit&#x60;.  | (optional) defaults to undefined|


### Return type

**GetRegionWithChildrenResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Регионы, являющиеся дочерними к указанному в запросе. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchRegionsById**
> GetRegionsResponse searchRegionsById()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/searchRegionsById.md) %}  Возвращает информацию о регионе.  Для методов `GET v2/regions`, `GET v2/regions/{regionId}` и `GET v2/regions/{regionId}/children` действует групповое ресурсное ограничение. Ограничение вводится на суммарное количество регионов, информация о которых запрошена при помощи этих методов (не более 100 000 регионов).  Объем запросов к ресурсу, который возможно выполнить в течение суток, зависит от суммарного количества регионов.  |**⚙️ Лимит:** 50 000 запросов в час| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let regionId: number; //Идентификатор региона.  Идентификатор региона можно получить c помощью запроса [GET v2/regions](../../reference/regions/searchRegionsByName.md).  (default to undefined)

const { status, data } = await apiInstance.searchRegionsById(
    regionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **regionId** | [**number**] | Идентификатор региона.  Идентификатор региона можно получить c помощью запроса [GET v2/regions](../../reference/regions/searchRegionsByName.md).  | defaults to undefined|


### Return type

**GetRegionsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Найденный регион. |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchRegionsByName**
> GetRegionsResponse searchRegionsByName()

{% include notitle [:no-translate[access]](../../_auto/method_scopes/searchRegionsByName.md) %}  Возвращает информацию о регионе, удовлетворяющем заданным в запросе условиям поиска.  Если найдено несколько регионов, удовлетворяющих условиям поиска, возвращается информация по каждому найденному региону (но не более десяти регионов) для возможности определения нужного региона по родительским регионам.  Для методов `GET v2/regions`, `GET v2/regions/{regionId}` и `GET v2/regions/{regionId}/children` действует групповое ресурсное ограничение. Ограничение вводится на суммарное количество регионов, информация о которых запрошена при помощи этих методов (не более 100 000 регионов).  Объем запросов к ресурсу, который возможно выполнить в течение суток, зависит от суммарного количества регионов.  {% note warning \"Ограничение для параметра `limit`\" %}  Не передавайте значение больше 20.  {% endnote %}  |**⚙️ Лимит:** 50 000 запросов в час| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let name: string; //Название региона.  Важно учитывать регистр: первая буква должна быть заглавной, остальные — строчными. Например, `Москва`.  (default to undefined)
let pageToken: string; //Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра `nextPageToken`, полученное при последнем запросе.  Если задан `page_token` и в запросе есть параметры `page` и `pageSize`, они игнорируются.  (optional) (default to undefined)
let limit: number; //Количество значений на одной странице.  (optional) (default to undefined)

const { status, data } = await apiInstance.searchRegionsByName(
    name,
    pageToken,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | Название региона.  Важно учитывать регистр: первая буква должна быть заглавной, остальные — строчными. Например, &#x60;Москва&#x60;.  | defaults to undefined|
| **pageToken** | [**string**] | Идентификатор страницы c результатами.  Если параметр не указан, возвращается первая страница.  Рекомендуем передавать значение выходного параметра &#x60;nextPageToken&#x60;, полученное при последнем запросе.  Если задан &#x60;page_token&#x60; и в запросе есть параметры &#x60;page&#x60; и &#x60;pageSize&#x60;, они игнорируются.  | (optional) defaults to undefined|
| **limit** | [**number**] | Количество значений на одной странице.  | (optional) defaults to undefined|


### Return type

**GetRegionsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список найденных регионов. |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateBusinessPrices**
> EmptyApiResponse updateBusinessPrices(updateBusinessPricesRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/updateBusinessPrices.md) %}  Устанавливает цены, которые действуют во всех магазинах. Чтобы получить рекомендации Маркета, касающиеся цен, выполните запрос [POST v2/businesses/{businessId}/offers/recommendations](../../reference/business-assortment/getOfferRecommendations.md).  При необходимости передавайте НДС с помощью параметра `vat` в запросе [POST v2/campaigns/{campaignId}/offers/update](../../reference/assortment/updateCampaignOffers.md).  {% note info \"Данные в каталоге обновляются не мгновенно\" %}  Это занимает до нескольких минут.  {% endnote %}  |**⚙️ Лимит:** 10 000 товаров в минуту, не более 500 товаров в одном запросе| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration,
    UpdateBusinessPricesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let businessId: number; //Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  (default to undefined)
let updateBusinessPricesRequest: UpdateBusinessPricesRequest; //

const { status, data } = await apiInstance.updateBusinessPrices(
    businessId,
    updateBusinessPricesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateBusinessPricesRequest** | **UpdateBusinessPricesRequest**|  | |
| **businessId** | [**number**] | Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  | defaults to undefined|


### Return type

**EmptyApiResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Маркет принял информацию о новых ценах. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**423** | К ресурсу нельзя применить указанный метод. [Подробнее об ошибке](../../concepts/error-codes.md#423) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCampaignOffers**
> EmptyApiResponse updateCampaignOffers(updateCampaignOffersRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/updateCampaignOffers.md) %}  Изменяет параметры размещения товаров в конкретном магазине: доступность товара, продажа квантами и применяемый НДС.  |**⚙️ Лимит:** 10 000 товаров в минуту| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration,
    UpdateCampaignOffersRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let updateCampaignOffersRequest: UpdateCampaignOffersRequest; //

const { status, data } = await apiInstance.updateCampaignOffers(
    campaignId,
    updateCampaignOffersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCampaignOffersRequest** | **UpdateCampaignOffersRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|


### Return type

**EmptyApiResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Ответ &#x60;200&#x60; обозначает, что новые параметры получены Маркетом и скоро вступят в силу. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**423** | К ресурсу нельзя применить указанный метод. [Подробнее об ошибке](../../concepts/error-codes.md#423) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateOfferContent**
> UpdateOfferContentResponse updateOfferContent(updateOfferContentRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/updateOfferContent.md) %}  Редактирует характеристики товара, которые специфичны для категории, к которой он относится.  {% note warning \"Здесь только то, что относится к конкретной категории\" %}  Если вам нужно изменить основные параметры товара (название, описание, изображения, видео, производитель, штрихкод), воспользуйтесь запросом [POST v2/businesses/{businessId}/offer-mappings/update](../../reference/business-assortment/updateOfferMappings.md).  {% endnote %}  Чтобы удалить характеристики, которые заданы в параметрах с типом `string`, передайте пустое значение.  {% note info \"Данные в каталоге обновляются не мгновенно\" %}  Это занимает до нескольких минут.  {% endnote %}  |**⚙️ Лимит:** 10 000 товаров в минуту| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration,
    UpdateOfferContentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let businessId: number; //Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  (default to undefined)
let updateOfferContentRequest: UpdateOfferContentRequest; //

const { status, data } = await apiInstance.updateOfferContent(
    businessId,
    updateOfferContentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOfferContentRequest** | **UpdateOfferContentRequest**|  | |
| **businessId** | [**number**] | Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  | defaults to undefined|


### Return type

**UpdateOfferContentResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Запрос выполнен корректно, данные обработаны.  {% note warning \&quot;Ответ &#x60;200&#x60; сам по себе не значит, что переданные значения корректны\&quot; %}  Обязательно посмотрите детали ответа: &#x60;status&#x60;, а также перечень ошибок (&#x60;results.errors&#x60;) и замечаний (&#x60;results.warnings&#x60;), если они есть.  - Если хотя бы по одному товару вернулась ошибка (&#x60;results.errors&#x60;), поле &#x60;status&#x60; &#x3D; &#x60;ERROR&#x60;. Изменения по всем переданным товарам не будут применены. - Если ошибок нет, но хотя бы по одному товару вернулось замечание (&#x60;results.warnings&#x60;), поле &#x60;status&#x60; &#x3D; &#x60;OK&#x60;, и изменения будут применены.  {% endnote %}  Если в &#x60;status&#x60; вернулось &#x60;ERROR&#x60;, убедитесь, что:  * все обязательные характеристики заполнены; * характеристики действительно существуют в указанных категориях; * значения соответствуют характеристикам; * ваши собственные значения имеют нужный тип данных.  Найти проблемы помогут поля &#x60;errors&#x60; и &#x60;warnings&#x60;.  |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**423** | К ресурсу нельзя применить указанный метод. [Подробнее об ошибке](../../concepts/error-codes.md#423) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateOfferMappings**
> UpdateOfferMappingsResponse updateOfferMappings(updateOfferMappingsRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/updateOfferMappings.md) %}  Добавляет товары в каталог и передает:  * их [листовые категории](*list-categories) на Маркете и категорийные характеристики; * основные характеристики; * цены на товары в кабинете.  Также объединяет товары на карточке, редактирует и удаляет информацию об уже добавленных товарах, в том числе цены в кабинете и категории товаров.  Список категорий Маркета можно получить с помощью запроса [POST v2/categories/tree](../../reference/categories/getCategoriesTree.md), а характеристики товаров по категориям с помощью [POST v2/category/{categoryId}/parameters](../../reference/content/getCategoryContentParameters.md).  {% cut \"Добавить новый товар\" %}  Передайте его с новым идентификатором, который раньше никогда не использовался в каталоге.  Обязательно укажите параметры: `offerId`, `name`, `marketCategoryId`, `pictures`, `vendor`, `description`.  Старайтесь сразу передать как можно больше информации — она потребуется Маркету для подбора подходящей карточки или создания новой.  Если известно, какой карточке на Маркете соответствует товар, можно сразу указать идентификатор этой карточки (SKU на Маркете) в поле `marketSKU`.  **Для продавцов Market Yandex Go:**  Когда вы добавляете товары в каталог, указывайте значения параметров `name` и `description` на русском языке. Чтобы на витрине они отображались и на другом языке, еще раз выполните запрос `POST v2/businesses/{businessId}/offer-mappings/update`, где укажите:    * язык в параметре `language`;   * значения параметров `name` и `description` на указанном языке.    Повторно передавать остальные характеристики товара не нужно.  {% endcut %}  {% cut \"Изменить информацию о товаре\" %}  Передайте новые данные, указав в `offerId` SKU товара в вашей системе.  Поля, в которых ничего не меняется, можно не передавать.  {% endcut %}  {% cut \"Удалить переданные ранее параметры товара\" %}  В `deleteParameters` укажите значения параметров, которые хотите удалить. Можно передать сразу несколько значений.  Для параметров с типом `string` также можно передать пустое значение.  {% endcut %}  Параметр `offerId` (SKU товара в вашей системе) должен быть **уникальным** для всех товаров, которые вы передаете.  {% note warning \"Правила использования SKU\" %}  * У каждого товара SKU должен быть свой.  * Уже заданный SKU нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.  SKU товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).  {% endnote %}  {% note info \"Данные в каталоге обновляются не мгновенно\" %}  Это занимает до нескольких минут.  {% endnote %}  |**⚙️ Лимит:** 10 000 товаров в минуту, не более 100 товаров в одном запросе| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration,
    UpdateOfferMappingsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let businessId: number; //Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  (default to undefined)
let updateOfferMappingsRequest: UpdateOfferMappingsRequest; //
let language: CatalogLanguageType; //Язык, на котором принимаются и возвращаются значения в параметрах `name` и `description`.  Значение по умолчанию: `RU`.  (optional) (default to undefined)

const { status, data } = await apiInstance.updateOfferMappings(
    businessId,
    updateOfferMappingsRequest,
    language
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOfferMappingsRequest** | **UpdateOfferMappingsRequest**|  | |
| **businessId** | [**number**] | Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  | defaults to undefined|
| **language** | **CatalogLanguageType** | Язык, на котором принимаются и возвращаются значения в параметрах &#x60;name&#x60; и &#x60;description&#x60;.  Значение по умолчанию: &#x60;RU&#x60;.  | (optional) defaults to undefined|


### Return type

**UpdateOfferMappingsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Запрос выполнен корректно, данные обработаны.  {% note warning \&quot;Ответ &#x60;200&#x60; сам по себе не значит, что переданные значения корректны\&quot; %}  Обязательно посмотрите детали ответа: &#x60;status&#x60;, а также перечень ошибок (&#x60;results.errors&#x60;) и замечаний (&#x60;results.warnings&#x60;), если они есть.  - Если хотя бы по одному товару вернулась ошибка (&#x60;results.errors&#x60;), поле &#x60;status&#x60; &#x3D; &#x60;ERROR&#x60;. Изменения по всем переданным товарам не будут применены. - Если ошибок нет, но хотя бы по одному товару вернулось замечание (&#x60;results.warnings&#x60;), поле &#x60;status&#x60; &#x3D; &#x60;OK&#x60;, и изменения будут применены.  {% endnote %}  |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**423** | К ресурсу нельзя применить указанный метод. [Подробнее об ошибке](../../concepts/error-codes.md#423) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateOrderStatus**
> UpdateOrderStatusResponse updateOrderStatus(updateOrderStatusRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/updateOrderStatus.md) %}  Изменяет статус заказа. Возможные изменения статусов:  * Если магазин подтвердил и подготовил заказ к отправке, то заказ из статуса `\"status\": \"PROCESSING\"` и этапа обработки `\"substatus\": \"STARTED\"` нужно перевести в статус `\"status\": \"PROCESSING\"` и этап обработки `\"substatus\": \"READY_TO_SHIP\"`. * Если магазин подтвердил заказ, но не может его выполнить (например, товар числится в базе, но отсутствует на складе или нет нужного цвета), то заказ из статуса `\"status\": \"PROCESSING\"` и этапа обработки `\"substatus\": \"STARTED\"` нужно перевести в статус `\"status\": \"CANCELLED\"` с причиной отмены заказа `\"substatus\": \"SHOP_FAILED\"`. * Если магазин подготовил заказ к отгрузке, но не может его выполнить (например, последний товар был поврежден или оказался с браком), то заказ из статуса `\"status\": \"PROCESSING\"` и этапа обработки `\"substatus\": \"READY_TO_SHIP\"` нужно перевести в статус `\"status\": \"CANCELLED\"` с причиной отмены заказа `\"substatus\": \"SHOP_FAILED\"`.  |**⚙️ Лимит:** 100 000 запросов в час| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration,
    UpdateOrderStatusRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let orderId: number; //Идентификатор заказа. (default to undefined)
let updateOrderStatusRequest: UpdateOrderStatusRequest; //

const { status, data } = await apiInstance.updateOrderStatus(
    campaignId,
    orderId,
    updateOrderStatusRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOrderStatusRequest** | **UpdateOrderStatusRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|
| **orderId** | [**number**] | Идентификатор заказа. | defaults to undefined|


### Return type

**UpdateOrderStatusResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | В случае успешного изменения статуса заказа возвращается обновленная информация о заказе. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateOrderStatuses**
> UpdateOrderStatusesResponse updateOrderStatuses(updateOrderStatusesRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/updateOrderStatuses.md) %}  Изменяет статусы нескольких заказов.  Возможные изменения статусов:  * Если магазин подтвердил и подготовил заказ к отправке, то заказ из статуса `\"status\": \"PROCESSING\"`и этапа обработки `\"substatus\": \"STARTED\"` нужно перевести в статус `\"status\": \"PROCESSING\"` и этап обработки `\"substatus\": \"READY_TO_SHIP\"`. * Если магазин подтвердил заказ, но не может его выполнить (например, товар числится в базе, но отсутствует на складе или нет нужного цвета), то заказ из статуса `\"status\": \"PROCESSING\"` и этапа обработки `\"substatus\": \"STARTED\"` нужно перевести в статус `\"status\": \"CANCELLED\"` с причиной отмены заказа `\"substatus\": \"SHOP_FAILED\"`. * Если магазин подготовил заказ к отгрузке, но не может его выполнить (например, последний товар был поврежден или оказался с браком), то заказ из статуса `\"status\": \"PROCESSING\"` и этапа обработки `\"substatus\": \"READY_TO_SHIP\"` нужно перевести в статус `\"status\": \"CANCELLED\"` с причиной отмены заказа `\"substatus\": \"SHOP_FAILED\"`.  |**⚙️ Лимит:** 100 000 заказов в час| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration,
    UpdateOrderStatusesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let updateOrderStatusesRequest: UpdateOrderStatusesRequest; //

const { status, data } = await apiInstance.updateOrderStatuses(
    campaignId,
    updateOrderStatusesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOrderStatusesRequest** | **UpdateOrderStatusesRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|


### Return type

**UpdateOrderStatusesResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Возвращается информация об обновленных статусах заказов. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePrices**
> EmptyApiResponse updatePrices(updatePricesRequest)

{% include notitle [:no-translate[access]](../../_auto/method_scopes/updatePrices.md) %}  Устанавливает цены на товары в магазине. Чтобы получить рекомендации Маркета, касающиеся цен, выполните запрос [POST v2/businesses/{businessId}/offers/recommendations](../../reference/business-assortment/getOfferRecommendations.md).  {% note warning \"Метод только для отдельных магазинов\" %}  Вам доступен этот метод, если в кабинете продавца на Маркете есть возможность установить уникальные цены в отдельных магазинах. Как это проверить — в методе [POST v2/businesses/{businessId}/settings](../../reference/businesses/getBusinessSettings.md) в параметре `onlyDefaultPrice` возвращается значение `false`.  В ином случае используйте метод управления ценами, которые действуют во всех магазинах, — [POST v2/businesses/{businessId}/offer-prices/updates](../../reference/business-assortment/updateBusinessPrices.md).  {% endnote %}  {% note info \"Данные в каталоге обновляются не мгновенно\" %}  Это занимает до нескольких минут.  {% endnote %}  |**⚙️ Лимит:** 10 000 товаров в минуту| |-| 

### Example

```typescript
import {
    LaasApi,
    Configuration,
    UpdatePricesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LaasApi(configuration);

let campaignId: number; //Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  (default to undefined)
let updatePricesRequest: UpdatePricesRequest; //

const { status, data } = await apiInstance.updatePrices(
    campaignId,
    updatePricesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePricesRequest** | **UpdatePricesRequest**|  | |
| **campaignId** | [**number**] | Идентификатор кампании.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете — нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:    * блок **Идентификатор кампании**;   * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не передавайте вместо него идентификатор магазина, который указан в кабинете продавца на Маркете рядом с названием магазина и в некоторых отчетах.  | defaults to undefined|


### Return type

**EmptyApiResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Маркет принял информацию о новых ценах. |  -  |
|**400** | Запрос содержит неправильные данные. [Подробнее об ошибке](../../concepts/error-codes.md#400) |  -  |
|**401** | В запросе не указаны данные для авторизации. [Подробнее об ошибке](../../concepts/error-codes.md#401) |  -  |
|**403** | Данные для авторизации неверны или доступ к ресурсу запрещен. [Подробнее об ошибке](../../concepts/error-codes.md#403) |  -  |
|**404** | Запрашиваемый ресурс не найден. [Подробнее об ошибке](../../concepts/error-codes.md#404) |  -  |
|**420** | Превышено ограничение на доступ к ресурсу. [Подробнее об ошибке](../../concepts/error-codes.md#420) |  -  |
|**423** | К ресурсу нельзя применить указанный метод. [Подробнее об ошибке](../../concepts/error-codes.md#423) |  -  |
|**500** | Внутренняя ошибка Маркета. [Подробнее об ошибке](../../concepts/error-codes.md#500) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

