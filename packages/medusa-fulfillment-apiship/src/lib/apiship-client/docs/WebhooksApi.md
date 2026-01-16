# WebhooksApi

All URIs are relative to */v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**webhooksGet**](#webhooksget) | **GET** /webhooks | Список зарегистрированных подписок|
|[**webhooksPost**](#webhookspost) | **POST** /webhooks | Подписка на вебхуки|
|[**webhooksUuidDelete**](#webhooksuuiddelete) | **DELETE** /webhooks/{uuid} | Удаление вебхука|

# **webhooksGet**
> Array<WebhookListResponseInner> webhooksGet()

Список зарегистрированных подписок

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

const { status, data } = await apiInstance.webhooksGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<WebhookListResponseInner>**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooksPost**
> WebhookSubscribeResponse webhooksPost(webhookSubscribeRequest)

Подписка на событие выбранного типа. Подробнее о типах и формате запроса с нашей стороны читайте здесь: https://docs.apiship.ru/docs/api/webhooks

### Example

```typescript
import {
    WebhooksApi,
    Configuration,
    WebhookSubscribeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookSubscribeRequest: WebhookSubscribeRequest; //Объект типа

const { status, data } = await apiInstance.webhooksPost(
    webhookSubscribeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookSubscribeRequest** | **WebhookSubscribeRequest**| Объект типа | |


### Return type

**WebhookSubscribeResponse**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooksUuidDelete**
> WebhookSubscriptionDeleteResponse webhooksUuidDelete()

Удаление подписки на событие

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let uuid: string; //Уникальный идентификатор подписки (default to undefined)

const { status, data } = await apiInstance.webhooksUuidDelete(
    uuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] | Уникальный идентификатор подписки | defaults to undefined|


### Return type

**WebhookSubscriptionDeleteResponse**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

