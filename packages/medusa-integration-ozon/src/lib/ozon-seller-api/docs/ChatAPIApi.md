# ChatAPIApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**chatAPIChatHistoryV2**](#chatapichathistoryv2) | **POST** /v2/chat/history | История чата|
|[**chatAPIChatListV2**](#chatapichatlistv2) | **POST** /v2/chat/list | Список чатов|
|[**chatAPIChatListV3**](#chatapichatlistv3) | **POST** /v3/chat/list | Список чатов|
|[**chatAPIChatSendFile**](#chatapichatsendfile) | **POST** /v1/chat/send/file | Отправить файл|

# **chatAPIChatHistoryV2**
> V2ChatHistoryResponse chatAPIChatHistoryV2(chatHistory)

<aside class=\"warning\"> 13 июля 2025 года метод будет отключён. Переключитесь на <a href=\"#operation/ChatAPI_ChatHistoryV3\">/v3/chat/history</a>.  </aside>  Возвращает историю сообщений чата. По умолчанию от самого нового сообщения к старым. <br><br> История чата с покупателем доступна только для продавцов с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus). Получите список чатов с покупателем `chats.chat.chat_type=\"Buyer_Seller\"` в ответе метода [/v3/chat/list](#operation/ChatAPI_ChatListV3). 

### Example

```typescript
import {
    ChatAPIApi,
    Configuration,
    ChatHistory
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let chatHistory: ChatHistory; //

const { status, data } = await apiInstance.chatAPIChatHistoryV2(
    clientId,
    apiKey,
    chatHistory
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatHistory** | **ChatHistory**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V2ChatHistoryResponse**

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

# **chatAPIChatListV2**
> V2ChatListResponse chatAPIChatListV2(chatList)

<aside class=\"warning\"> Метод устаревает и будет отключён в будущем. Переключитесь на новую версию <a href=\"#operation/ChatAPI_ChatListV3\">/v3/chat/list</a>. </aside>   Возвращает информацию о чатах по указанным фильтрам. 

### Example

```typescript
import {
    ChatAPIApi,
    Configuration,
    ChatList
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let chatList: ChatList; //

const { status, data } = await apiInstance.chatAPIChatListV2(
    clientId,
    apiKey,
    chatList
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatList** | **ChatList**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V2ChatListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список чатов |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chatAPIChatListV3**
> V3ChatListResponse chatAPIChatListV3(v3ChatList)

Возвращает информацию о чатах по указанным фильтрам.

### Example

```typescript
import {
    ChatAPIApi,
    Configuration,
    V3ChatList
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v3ChatList: V3ChatList; //

const { status, data } = await apiInstance.chatAPIChatListV3(
    clientId,
    apiKey,
    v3ChatList
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v3ChatList** | **V3ChatList**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V3ChatListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список чатов |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chatAPIChatSendFile**
> ChatChatSendFileResponse chatAPIChatSendFile(chatChatSendFileRequest)

Отправляет файл в существующий чат по его идентификатору. <br><br> Отправить файл в чат с покупателем могут только продавцы с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro). Получите список чатов с покупателем `chats.chat.chat_type=\"Buyer_Seller\"` в ответе метода [/v3/chat/list](#operation/ChatAPI_ChatListV3).   Для отправлений: - FBO — вы можете отправить файл в течение 48 часов с момента получения последнего сообщения от покупателя.  - FBS или rFBS — вы можете отправить файл покупателю после оплаты и в течение 72 часов после доставки отправления. После этого вы можете только отвечать на сообщения в течение 48 часов с момента получения последнего сообщения от покупателя. 

### Example

```typescript
import {
    ChatAPIApi,
    Configuration,
    ChatChatSendFileRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatAPIApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let chatChatSendFileRequest: ChatChatSendFileRequest; //

const { status, data } = await apiInstance.chatAPIChatSendFile(
    clientId,
    apiKey,
    chatChatSendFileRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatChatSendFileRequest** | **ChatChatSendFileRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**ChatChatSendFileResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Файл отправлен |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

