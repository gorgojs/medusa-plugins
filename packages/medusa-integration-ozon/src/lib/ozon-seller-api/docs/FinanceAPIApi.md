# FinanceAPIApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**financeAPIFinanceTransactionListV3**](#financeapifinancetransactionlistv3) | **POST** /v3/finance/transaction/list | Список транзакций|
|[**financeAPIFinanceTransactionTotalV3**](#financeapifinancetransactiontotalv3) | **POST** /v3/finance/transaction/totals | Суммы транзакций|
|[**financeAPIGetRealizationReportV1**](#financeapigetrealizationreportv1) | **POST** /v1/finance/realization/posting | Позаказный отчёт о реализации товаров|
|[**financeAPIGetRealizationReportV2**](#financeapigetrealizationreportv2) | **POST** /v2/finance/realization | Отчёт о реализации товаров (версия 2)|
|[**getFinanceProductsBuyout**](#getfinanceproductsbuyout) | **POST** /v1/finance/products/buyout | Отчёт о выкупленных товарах|
|[**reportAPICreateDocumentB2BSalesJSONReport**](#reportapicreatedocumentb2bsalesjsonreport) | **POST** /v1/finance/document-b2b-sales/json | Реестр продаж юридическим лицам в JSON-формате|
|[**reportAPICreateDocumentB2BSalesReport**](#reportapicreatedocumentb2bsalesreport) | **POST** /v1/finance/document-b2b-sales | Реестр продаж юридическим лицам|
|[**reportAPICreateMutualSettlementReport**](#reportapicreatemutualsettlementreport) | **POST** /v1/finance/mutual-settlement | Отчёт о взаиморасчётах|
|[**reportAPIGetCompensationReport**](#reportapigetcompensationreport) | **POST** /v1/finance/compensation | Отчёт о компенсациях|
|[**reportAPIGetDecompensationReport**](#reportapigetdecompensationreport) | **POST** /v1/finance/decompensation | Отчёт о декомпенсациях|

# **financeAPIFinanceTransactionListV3**
> Financev3FinanceTransactionListV3Response financeAPIFinanceTransactionListV3(financev3FinanceTransactionListV3Request)

 <aside class=\"warning\"> Используйте метод с последовательной отправкой запросов.<br> Данные могут не соответствовать информации в личном кабинете. </aside>  Возвращает подробную информацию по всем начислениям. Максимальный период, за который можно получить информацию в одном запросе — 1 месяц.  Если в запросе не указывать `posting_number`, то в ответе будут все отправления за указанный период или отправления определённого типа. 

### Example

```typescript
import {
    FinanceAPIApi,
    Configuration,
    Financev3FinanceTransactionListV3Request
} from './api';

const configuration = new Configuration();
const apiInstance = new FinanceAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let financev3FinanceTransactionListV3Request: Financev3FinanceTransactionListV3Request; //

const { status, data } = await apiInstance.financeAPIFinanceTransactionListV3(
    clientId,
    apiKey,
    financev3FinanceTransactionListV3Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **financev3FinanceTransactionListV3Request** | **Financev3FinanceTransactionListV3Request**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**Financev3FinanceTransactionListV3Response**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список транзакций |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **financeAPIFinanceTransactionTotalV3**
> Financev3FinanceTransactionTotalsV3Response financeAPIFinanceTransactionTotalV3(financev3FinanceTransactionTotalsV3Request)

 <aside class=\"warning\"> Данные могут не соответствовать информации в личном кабинете. </aside>  Возвращает итоговые суммы по транзакциям за указанный период.   Если вы неправильно заполните номера отправлений, в ответе вернутся нулевые значения. 

### Example

```typescript
import {
    FinanceAPIApi,
    Configuration,
    Financev3FinanceTransactionTotalsV3Request
} from './api';

const configuration = new Configuration();
const apiInstance = new FinanceAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let financev3FinanceTransactionTotalsV3Request: Financev3FinanceTransactionTotalsV3Request; //

const { status, data } = await apiInstance.financeAPIFinanceTransactionTotalV3(
    clientId,
    apiKey,
    financev3FinanceTransactionTotalsV3Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **financev3FinanceTransactionTotalsV3Request** | **Financev3FinanceTransactionTotalsV3Request**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**Financev3FinanceTransactionTotalsV3Response**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Суммы транзакций |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **financeAPIGetRealizationReportV1**
> V1GetRealizationReportPostingResponse financeAPIGetRealizationReportV1(v1GetRealizationReportPostingRequest)

<aside class=\"warning\"> Метод недоступен для продавцов, которые заключили договор с ТОО «ОЗОН Маркетплейс Казахстан». </aside>  Отчёт о реализации доставленных и возвращённых товаров с детализацией по каждому заказу. Отмены и невыкупы не включаются. Отчёт доступен с настоящего времени по август 2023 года включительно. 

### Example

```typescript
import {
    FinanceAPIApi,
    Configuration,
    V1GetRealizationReportPostingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FinanceAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1GetRealizationReportPostingRequest: V1GetRealizationReportPostingRequest; //

const { status, data } = await apiInstance.financeAPIGetRealizationReportV1(
    clientId,
    apiKey,
    v1GetRealizationReportPostingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetRealizationReportPostingRequest** | **V1GetRealizationReportPostingRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1GetRealizationReportPostingResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Позаказный отчёт о реализации |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **financeAPIGetRealizationReportV2**
> V2GetRealizationReportResponseV2 financeAPIGetRealizationReportV2(v2GetRealizationReportRequestV2)

<aside class=\"warning\"> Метод недоступен для продавцов, которые заключили договор с ТОО «ОЗОН Маркетплейс Казахстан». </aside>  Отчёт о реализации доставленных и возвращённых товаров за месяц. Отмены и невыкупы не включаются. Соответствует разделу **Финансы → Документы → Отчёты о реализации → Отчёт о реализации товара** в личном кабинете.  Отчёт придёт не позднее 5-го числа следующего месяца.  [Подробнее об отчёте в Базе знаний продавца](https://seller-edu.ozon.ru/docs/finances-documents/calculations-documents/otchet-o-realizacii-tovarov.html) 

### Example

```typescript
import {
    FinanceAPIApi,
    Configuration,
    V2GetRealizationReportRequestV2
} from './api';

const configuration = new Configuration();
const apiInstance = new FinanceAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v2GetRealizationReportRequestV2: V2GetRealizationReportRequestV2; //

const { status, data } = await apiInstance.financeAPIGetRealizationReportV2(
    clientId,
    apiKey,
    v2GetRealizationReportRequestV2
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v2GetRealizationReportRequestV2** | **V2GetRealizationReportRequestV2**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V2GetRealizationReportResponseV2**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Отчёт о реализации |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFinanceProductsBuyout**
> V1GetFinanceProductsBuyoutResponse getFinanceProductsBuyout()

Возвращает отчёт о товарах, которые выкупил Ozon для продажи в ЕАЭС и другие страны. Соответствует разделу **Финансы → Документы → УПД по сделкам с юр. лицами → УПД по выкупленным товарам** в личном кабинете.  [Подробнее о продаже товаров в ЕАЭС и другие страны в Базе знаний](https://seller-edu.ozon.ru/commissions-tariffs/commissions-tariffs-ozon/prodaji-tovarov-v-eaes-i-drugie-strany?search=выкупленные+товары) 

### Example

```typescript
import {
    FinanceAPIApi,
    Configuration,
    V1GetFinanceProductsBuyoutRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FinanceAPIApi(configuration);

let v1GetFinanceProductsBuyoutRequest: V1GetFinanceProductsBuyoutRequest; // (optional)

const { status, data } = await apiInstance.getFinanceProductsBuyout(
    v1GetFinanceProductsBuyoutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetFinanceProductsBuyoutRequest** | **V1GetFinanceProductsBuyoutRequest**|  | |


### Return type

**V1GetFinanceProductsBuyoutResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Отчёт по выкупленным товарам |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reportAPICreateDocumentB2BSalesJSONReport**
> V1CreateDocumentB2BSalesJSONReportResponse reportAPICreateDocumentB2BSalesJSONReport(v1CreateDocumentB2BSalesJSONReportRequest)

Используйте метод, чтобы получить отчёт по продажам юридическим лицам в JSON-формате. Соответствует разделу **Финансы → Документы → Реестр продаж юр. лицам** в личном кабинете. 

### Example

```typescript
import {
    FinanceAPIApi,
    Configuration,
    V1CreateDocumentB2BSalesJSONReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FinanceAPIApi(configuration);

let v1CreateDocumentB2BSalesJSONReportRequest: V1CreateDocumentB2BSalesJSONReportRequest; //

const { status, data } = await apiInstance.reportAPICreateDocumentB2BSalesJSONReport(
    v1CreateDocumentB2BSalesJSONReportRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1CreateDocumentB2BSalesJSONReportRequest** | **V1CreateDocumentB2BSalesJSONReportRequest**|  | |


### Return type

**V1CreateDocumentB2BSalesJSONReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Отчёт в JSON-формате |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reportAPICreateDocumentB2BSalesReport**
> CommonCreateReportResponse reportAPICreateDocumentB2BSalesReport(v1CreateDocumentB2BSalesReportRequest)

Используйте метод, чтобы получить отчёт по продажам юридическим лицам. Соответствует разделу **Финансы → Документы → Реестр продаж юр. лицам** в личном кабинете.

### Example

```typescript
import {
    FinanceAPIApi,
    Configuration,
    V1CreateDocumentB2BSalesReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FinanceAPIApi(configuration);

let v1CreateDocumentB2BSalesReportRequest: V1CreateDocumentB2BSalesReportRequest; //

const { status, data } = await apiInstance.reportAPICreateDocumentB2BSalesReport(
    v1CreateDocumentB2BSalesReportRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1CreateDocumentB2BSalesReportRequest** | **V1CreateDocumentB2BSalesReportRequest**|  | |


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

# **reportAPICreateMutualSettlementReport**
> CommonCreateReportResponse reportAPICreateMutualSettlementReport(v1CreateMutualSettlementReportRequest)

Используйте метод, чтобы получить отчёт о взаиморасчетах. Соответствует разделу **Финансы → Документы → Аналитические отчеты → Отчет о взаиморасчетах** в личном кабинете.

### Example

```typescript
import {
    FinanceAPIApi,
    Configuration,
    V1CreateMutualSettlementReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FinanceAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1CreateMutualSettlementReportRequest: V1CreateMutualSettlementReportRequest; //

const { status, data } = await apiInstance.reportAPICreateMutualSettlementReport(
    clientId,
    apiKey,
    v1CreateMutualSettlementReportRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1CreateMutualSettlementReportRequest** | **V1CreateMutualSettlementReportRequest**|  | |
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

# **reportAPIGetCompensationReport**
> CreateReportResponse reportAPIGetCompensationReport(v1GetCompensationReportRequest)

Метод для получения отчёта о компенсациях. Соответствует отчёту из раздела **Финансы → Документы → Компенсации и прочие начисления** в личном кабинете. 

### Example

```typescript
import {
    FinanceAPIApi,
    Configuration,
    V1GetCompensationReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FinanceAPIApi(configuration);

let v1GetCompensationReportRequest: V1GetCompensationReportRequest; //

const { status, data } = await apiInstance.reportAPIGetCompensationReport(
    v1GetCompensationReportRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetCompensationReportRequest** | **V1GetCompensationReportRequest**|  | |


### Return type

**CreateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Отчёт о компенсациях |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reportAPIGetDecompensationReport**
> CreateReportResponse reportAPIGetDecompensationReport(v1GetDecompensationReportRequest)

Метод для получения отчёта о декомпенсациях. Соответствует отчёту из раздела **Финансы → Документы → Компенсации и прочие начисления** в личном кабинете. 

### Example

```typescript
import {
    FinanceAPIApi,
    Configuration,
    V1GetDecompensationReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new FinanceAPIApi(configuration);

let v1GetDecompensationReportRequest: V1GetDecompensationReportRequest; //

const { status, data } = await apiInstance.reportAPIGetDecompensationReport(
    v1GetDecompensationReportRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetDecompensationReportRequest** | **V1GetDecompensationReportRequest**|  | |


### Return type

**CreateReportResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Отчёт о декомпенсациях |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

