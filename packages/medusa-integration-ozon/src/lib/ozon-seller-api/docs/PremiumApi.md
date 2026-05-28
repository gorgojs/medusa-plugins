# PremiumApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**analyticsAPIAnalyticsGetData**](#analyticsapianalyticsgetdata) | **POST** /v1/analytics/data | Данные аналитики|
|[**analyticsAPIAnalyticsProductQueries**](#analyticsapianalyticsproductqueries) | **POST** /v1/analytics/product-queries | Получить информацию о запросах моих товаров|
|[**analyticsAPIAnalyticsProductQueriesDetails**](#analyticsapianalyticsproductqueriesdetails) | **POST** /v1/analytics/product-queries/details | Получить детализацию запросов по товару|
|[**chatAPIChatHistoryV3**](#chatapichathistoryv3) | **POST** /v3/chat/history | История чата|
|[**chatAPIChatReadV2**](#chatapichatreadv2) | **POST** /v2/chat/read | Отметить сообщения как прочитанные|
|[**chatAPIChatSendMessage**](#chatapichatsendmessage) | **POST** /v1/chat/send/message | Отправить сообщение|
|[**chatAPIChatStart**](#chatapichatstart) | **POST** /v1/chat/start | Создать новый чат|
|[**financeAPIGetRealizationByDayReportV1**](#financeapigetrealizationbydayreportv1) | **POST** /v1/finance/realization/by-day | Отчёт о реализации товаров за день|
|[**searchQueriesAPISearchQueriesText**](#searchqueriesapisearchqueriestext) | **POST** /v1/search-queries/text | Получить список поисковых запросов по тексту|
|[**searchQueriesAPISearchQueriesTop**](#searchqueriesapisearchqueriestop) | **POST** /v1/search-queries/top | Получить список популярных поисковых запросов|

# **analyticsAPIAnalyticsGetData**
> AnalyticsAnalyticsGetDataResponse analyticsAPIAnalyticsGetData(analyticsAnalyticsGetDataRequest)

Уĸажите период и метриĸи, ĸоторые нужно посчитать. В ответе будет аналитиĸа, сгруппированная по параметру `dimensions`.  Для продавцов без подписки [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus): - доступны данные за последние 3 месяца, - есть ограничения по способам группировки данных и метрикам.  Для продавцов с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro) ограничений нет.  Метод можно использовать не больше 1 раза в минуту. Соответствует разделу **Аналитика → Графики** в личном кабинете. 

### Example

```typescript
import {
    PremiumApi,
    Configuration,
    AnalyticsAnalyticsGetDataRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PremiumApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let analyticsAnalyticsGetDataRequest: AnalyticsAnalyticsGetDataRequest; //

const { status, data } = await apiInstance.analyticsAPIAnalyticsGetData(
    clientId,
    apiKey,
    analyticsAnalyticsGetDataRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **analyticsAnalyticsGetDataRequest** | **AnalyticsAnalyticsGetDataRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**AnalyticsAnalyticsGetDataResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Данные аналитики |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analyticsAPIAnalyticsProductQueries**
> V1AnalyticsProductQueriesResponse analyticsAPIAnalyticsProductQueries(v1AnalyticsProductQueriesRequest)

Используйте метод, чтобы получить данные о запросах ваших товаров. Полная аналитика доступна с подпиской [Premium](https://seller-edu.ozon.ru/seller-rating/about-rating/premium-program), [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro). Без подписки вы можете посмотреть часть показателей. Метод аналогичен вкладке **Товары в поиске → Запросы моего товара** в личном кабинете.  Аналитику по запросам можно проверить за определённые даты. Для этого укажите интервал в полях `date_from` и `date_to`. Данные за последний месяц доступны в любом интервале, кроме трёх дней от текущей даты — в эти дни происходит расчёт. Аналитика за даты позже, чем месяц назад, доступна только с подпиской [Premium](https://seller-edu.ozon.ru/seller-rating/about-rating/premium-program), [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro) и только по неделям — в запросе укажите параметр `date_from`. 

### Example

```typescript
import {
    PremiumApi,
    Configuration,
    V1AnalyticsProductQueriesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PremiumApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1AnalyticsProductQueriesRequest: V1AnalyticsProductQueriesRequest; //

const { status, data } = await apiInstance.analyticsAPIAnalyticsProductQueries(
    clientId,
    apiKey,
    v1AnalyticsProductQueriesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1AnalyticsProductQueriesRequest** | **V1AnalyticsProductQueriesRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1AnalyticsProductQueriesResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о запросах моих товаров |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analyticsAPIAnalyticsProductQueriesDetails**
> V1AnalyticsProductQueriesDetailsResponse analyticsAPIAnalyticsProductQueriesDetails(v1AnalyticsProductQueriesDetailsRequest)

Используйте метод, чтобы получить данные по запросам на конкретный товар. Полная аналитика доступна с подпиской [Premium](https://seller-edu.ozon.ru/seller-rating/about-rating/premium-program), [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro). Без подписки вы можете посмотреть часть показателей. Метод аналогичен просмотру данных по товару на вкладке **Товары в поиске → Запросы моего товара** в личном кабинете.  Аналитику по запросам можно проверить за определённые даты. Для этого укажите интервал в полях `date_from` и `date_to`. Данные за последний месяц доступны в любом интервале, кроме трёх дней от текущей даты — в эти дни происходит расчёт. Аналитика за даты позже, чем месяц назад, доступна только с подпиской [Premium](https://seller-edu.ozon.ru/seller-rating/about-rating/premium-program), [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro) и только по неделям — в запросе укажите параметр `date_from`. 

### Example

```typescript
import {
    PremiumApi,
    Configuration,
    V1AnalyticsProductQueriesDetailsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PremiumApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1AnalyticsProductQueriesDetailsRequest: V1AnalyticsProductQueriesDetailsRequest; //

const { status, data } = await apiInstance.analyticsAPIAnalyticsProductQueriesDetails(
    clientId,
    apiKey,
    v1AnalyticsProductQueriesDetailsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1AnalyticsProductQueriesDetailsRequest** | **V1AnalyticsProductQueriesDetailsRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1AnalyticsProductQueriesDetailsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация о запросах по конкретному товару |  -  |
|**400** | Неверный параметр |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chatAPIChatHistoryV3**
> V3ChatHistoryResponse chatAPIChatHistoryV3(v3ChatHistoryRequest)

 Доступно для продавцов с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro).  Возвращает историю сообщений чата. По умолчанию от самого нового сообщения к старым. <br><br> Получите список чатов с покупателем `chats.chat.chat_type=\"Buyer_Seller\"` в ответе метода [/v3/chat/list](#operation/ChatAPI_ChatListV3). 

### Example

```typescript
import {
    PremiumApi,
    Configuration,
    V3ChatHistoryRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PremiumApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v3ChatHistoryRequest: V3ChatHistoryRequest; //

const { status, data } = await apiInstance.chatAPIChatHistoryV3(
    clientId,
    apiKey,
    v3ChatHistoryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v3ChatHistoryRequest** | **V3ChatHistoryRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V3ChatHistoryResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | История чата |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chatAPIChatReadV2**
> V2ChatReadResponse chatAPIChatReadV2(chatRead)

 Доступно для продавцов с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro).  Метод для отметки выбранного сообщения и сообщений до него прочитанными. <br><br>  Получите список чатов с покупателем `chats.chat.chat_type=\"Buyer_Seller\"` в ответе метода [/v3/chat/list](#operation/ChatAPI_ChatListV3). 

### Example

```typescript
import {
    PremiumApi,
    Configuration,
    ChatRead
} from './api';

const configuration = new Configuration();
const apiInstance = new PremiumApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let chatRead: ChatRead; //

const { status, data } = await apiInstance.chatAPIChatReadV2(
    clientId,
    apiKey,
    chatRead
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatRead** | **ChatRead**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V2ChatReadResponse**

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

# **chatAPIChatSendMessage**
> ChatChatSendMessageResponse chatAPIChatSendMessage(chatChatSendMessageRequest)

 Доступно для продавцов с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro).  Отправляет сообщение в существующий чат по его идентификатору. <br><br> Получите список чатов с покупателем `chats.chat.chat_type=\"Buyer_Seller\"` в ответе метода [/v3/chat/list](#operation/ChatAPI_ChatListV3).  Для отправлений: - FBO — вы можете отправить сообщение в течение 48 часов с момента получения последнего сообщения от покупателя.  - FBS или rFBS — вы можете отправить сообщение покупателю после оплаты и в течение 72 часов после доставки отправления. После этого вы можете только отвечать на сообщения в течение 48 часов с момента получения последнего сообщения от покупателя. 

### Example

```typescript
import {
    PremiumApi,
    Configuration,
    ChatChatSendMessageRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PremiumApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let chatChatSendMessageRequest: ChatChatSendMessageRequest; //

const { status, data } = await apiInstance.chatAPIChatSendMessage(
    clientId,
    apiKey,
    chatChatSendMessageRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatChatSendMessageRequest** | **ChatChatSendMessageRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**ChatChatSendMessageResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Сообщение отправлено |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chatAPIChatStart**
> ChatChatStartResponse chatAPIChatStart(chatChatStartRequest)

Доступно для продавцов с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro).  Создает новый чат с покупателем по отправлению. Например, чтобы уточнить адрес или модель товара.   Для отправлений: - FBO — начать чат может только покупатель. - FBS и rFBS — вы можете открыть чат в течение 72 часов после оплаты или доставки отправления. 

### Example

```typescript
import {
    PremiumApi,
    Configuration,
    ChatChatStartRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PremiumApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let chatChatStartRequest: ChatChatStartRequest; //

const { status, data } = await apiInstance.chatAPIChatStart(
    clientId,
    apiKey,
    chatChatStartRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatChatStartRequest** | **ChatChatStartRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**ChatChatStartResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Создан новый чат |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **financeAPIGetRealizationByDayReportV1**
> GetRealizationReportByDayResponse financeAPIGetRealizationByDayReportV1(v1GetRealizationReportByDayRequest)

Доступно для продавцов с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro).   Возвращает данные о суммах реализации из [отчёта о реализации товаров](#operation/FinanceAPI_GetRealizationReportV2) за день. Отмены и невыкупы не включаются. Данные доступны не более чем за 32 календарных дня от текущей даты. 

### Example

```typescript
import {
    PremiumApi,
    Configuration,
    V1GetRealizationReportByDayRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PremiumApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1GetRealizationReportByDayRequest: V1GetRealizationReportByDayRequest; //

const { status, data } = await apiInstance.financeAPIGetRealizationByDayReportV1(
    clientId,
    apiKey,
    v1GetRealizationReportByDayRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetRealizationReportByDayRequest** | **V1GetRealizationReportByDayRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**GetRealizationReportByDayResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Отчёт о реализации за день |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchQueriesAPISearchQueriesText**
> V1SearchQueriesTextResponse searchQueriesAPISearchQueriesText(v1SearchQueriesTextRequest)

Доступно для продавцов с подпиской [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro). 

### Example

```typescript
import {
    PremiumApi,
    Configuration,
    V1SearchQueriesTextRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PremiumApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1SearchQueriesTextRequest: V1SearchQueriesTextRequest; //

const { status, data } = await apiInstance.searchQueriesAPISearchQueriesText(
    clientId,
    apiKey,
    v1SearchQueriesTextRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1SearchQueriesTextRequest** | **V1SearchQueriesTextRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1SearchQueriesTextResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список поисковых запросов |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchQueriesAPISearchQueriesTop**
> V1SearchQueriesTopResponse searchQueriesAPISearchQueriesTop(v1SearchQueriesTopRequest)

Доступно для продавцов с подпиской [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro). 

### Example

```typescript
import {
    PremiumApi,
    Configuration,
    V1SearchQueriesTopRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PremiumApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1SearchQueriesTopRequest: V1SearchQueriesTopRequest; //

const { status, data } = await apiInstance.searchQueriesAPISearchQueriesTop(
    clientId,
    apiKey,
    v1SearchQueriesTopRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1SearchQueriesTopRequest** | **V1SearchQueriesTopRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1SearchQueriesTopResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список популярных поисковых запросов |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

