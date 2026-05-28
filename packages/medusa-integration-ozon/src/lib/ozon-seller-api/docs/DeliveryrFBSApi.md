# DeliveryrFBSApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**postingAPIFbsPostingDelivered**](#postingapifbspostingdelivered) | **POST** /v2/fbs/posting/delivered | Изменить статус на «Доставлено»|
|[**postingAPIFbsPostingDelivering**](#postingapifbspostingdelivering) | **POST** /v2/fbs/posting/delivering | Изменить статус на «Доставляется»|
|[**postingAPIFbsPostingLastMile**](#postingapifbspostinglastmile) | **POST** /v2/fbs/posting/last-mile | Изменить статус на «Последняя миля»|
|[**postingAPIFbsPostingSentbyseller**](#postingapifbspostingsentbyseller) | **POST** /v2/fbs/posting/sent-by-seller | Изменить статус на «Отправлено продавцом»|
|[**postingAPIFbsPostingTrackingNumberSet**](#postingapifbspostingtrackingnumberset) | **POST** /v2/fbs/posting/tracking-number/set | Добавить трек-номера|
|[**postingAPIPostingTimeslotChangeRestrictions**](#postingapipostingtimeslotchangerestrictions) | **POST** /v1/posting/fbs/timeslot/change-restrictions | Доступные даты для переноса доставки|
|[**postingAPISetPostingCutoff**](#postingapisetpostingcutoff) | **POST** /v1/posting/cutoff/set | Уточнить дату отгрузки отправления|
|[**postingAPISetPostingTimeslot**](#postingapisetpostingtimeslot) | **POST** /v1/posting/fbs/timeslot/set | Перенести дату доставки|

# **postingAPIFbsPostingDelivered**
> PostingFbsPostingMoveStatusResponse postingAPIFbsPostingDelivered(postingFbsPostingDeliveredRequest)

<aside class=\"warning\">Перед изменением статуса проверьте текущий статус отправления методом <a href=\"#operation/PostingAPI_GetFbsPostingV3\">/v3/posting/fbs/get</a>. Изменение статуса происходит асинхронно.</aside>  Перевести отправление в статус «Доставлено», если используется сторонняя служба доставки. 

### Example

```typescript
import {
    DeliveryrFBSApi,
    Configuration,
    PostingFbsPostingDeliveredRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryrFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let postingFbsPostingDeliveredRequest: PostingFbsPostingDeliveredRequest; //

const { status, data } = await apiInstance.postingAPIFbsPostingDelivered(
    clientId,
    apiKey,
    postingFbsPostingDeliveredRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postingFbsPostingDeliveredRequest** | **PostingFbsPostingDeliveredRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**PostingFbsPostingMoveStatusResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Статус изменён |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIFbsPostingDelivering**
> PostingFbsPostingMoveStatusResponse postingAPIFbsPostingDelivering(postingFbsPostingDeliveringRequest)

<aside class=\"warning\">Перед изменением статуса проверьте текущий статус отправления методом <a href=\"#operation/PostingAPI_GetFbsPostingV3\">/v3/posting/fbs/get</a>. Изменение статуса происходит асинхронно.</aside>  Перевести отправление в статус «Доставляется», если используется сторонняя служба доставки. 

### Example

```typescript
import {
    DeliveryrFBSApi,
    Configuration,
    PostingFbsPostingDeliveringRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryrFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let postingFbsPostingDeliveringRequest: PostingFbsPostingDeliveringRequest; //

const { status, data } = await apiInstance.postingAPIFbsPostingDelivering(
    clientId,
    apiKey,
    postingFbsPostingDeliveringRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postingFbsPostingDeliveringRequest** | **PostingFbsPostingDeliveringRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**PostingFbsPostingMoveStatusResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Статус изменён |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIFbsPostingLastMile**
> PostingFbsPostingMoveStatusResponse postingAPIFbsPostingLastMile(postingFbsPostingLastMileRequest)

<aside class=\"warning\">Перед изменением статуса проверьте текущий статус отправления методом <a href=\"#operation/PostingAPI_GetFbsPostingV3\">/v3/posting/fbs/get</a>. Изменение статуса происходит асинхронно.</aside>  Перевести отправление в статус «Последняя миля», если используется сторонняя служба доставки. 

### Example

```typescript
import {
    DeliveryrFBSApi,
    Configuration,
    PostingFbsPostingLastMileRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryrFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let postingFbsPostingLastMileRequest: PostingFbsPostingLastMileRequest; //

const { status, data } = await apiInstance.postingAPIFbsPostingLastMile(
    clientId,
    apiKey,
    postingFbsPostingLastMileRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postingFbsPostingLastMileRequest** | **PostingFbsPostingLastMileRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**PostingFbsPostingMoveStatusResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Статус изменён |  -  |
|**400** | Invalid parameter |  -  |
|**403** | Access denied |  -  |
|**404** | Response not found |  -  |
|**409** | Request conflict |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIFbsPostingSentbyseller**
> PostingFbsPostingSentbysellerResponse postingAPIFbsPostingSentbyseller(postingFbsPostingSentbysellerRequest)

Перевести отправление в статус «Отправлено продавцом». Статус доступен только продавцам с первой милей, продающим из-за рубежа.

### Example

```typescript
import {
    DeliveryrFBSApi,
    Configuration,
    PostingFbsPostingSentbysellerRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryrFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let postingFbsPostingSentbysellerRequest: PostingFbsPostingSentbysellerRequest; //

const { status, data } = await apiInstance.postingAPIFbsPostingSentbyseller(
    clientId,
    apiKey,
    postingFbsPostingSentbysellerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postingFbsPostingSentbysellerRequest** | **PostingFbsPostingSentbysellerRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**PostingFbsPostingSentbysellerResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Статус изменён |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIFbsPostingTrackingNumberSet**
> PostingFbsPostingMoveStatusResponse postingAPIFbsPostingTrackingNumberSet(postingFbsPostingTrackingNumberSetRequest)

Добавить трек-номера к отправлениям. Вы можете передать до 20 трек-номеров за раз.

### Example

```typescript
import {
    DeliveryrFBSApi,
    Configuration,
    PostingFbsPostingTrackingNumberSetRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryrFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let postingFbsPostingTrackingNumberSetRequest: PostingFbsPostingTrackingNumberSetRequest; //

const { status, data } = await apiInstance.postingAPIFbsPostingTrackingNumberSet(
    clientId,
    apiKey,
    postingFbsPostingTrackingNumberSetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postingFbsPostingTrackingNumberSetRequest** | **PostingFbsPostingTrackingNumberSetRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**PostingFbsPostingMoveStatusResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Трек-номер добавлен |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPIPostingTimeslotChangeRestrictions**
> V1PostingFbsTimeslotChangeRestrictionsResponse postingAPIPostingTimeslotChangeRestrictions(v1PostingFbsTimeslotChangeRestrictionsRequest)

Метод для получения доступных дат для переноса доставки и количества доступных переносов. 

### Example

```typescript
import {
    DeliveryrFBSApi,
    Configuration,
    V1PostingFbsTimeslotChangeRestrictionsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryrFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1PostingFbsTimeslotChangeRestrictionsRequest: V1PostingFbsTimeslotChangeRestrictionsRequest; //

const { status, data } = await apiInstance.postingAPIPostingTimeslotChangeRestrictions(
    clientId,
    apiKey,
    v1PostingFbsTimeslotChangeRestrictionsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1PostingFbsTimeslotChangeRestrictionsRequest** | **V1PostingFbsTimeslotChangeRestrictionsRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1PostingFbsTimeslotChangeRestrictionsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Доступные даты и количество |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPISetPostingCutoff**
> V1SetPostingCutoffResponse postingAPISetPostingCutoff(v1SetPostingCutoffRequest)

Метод для отправлений, которые доставляет продавец или неинтегрированный перевозчик. 

### Example

```typescript
import {
    DeliveryrFBSApi,
    Configuration,
    V1SetPostingCutoffRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryrFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1SetPostingCutoffRequest: V1SetPostingCutoffRequest; //

const { status, data } = await apiInstance.postingAPISetPostingCutoff(
    clientId,
    apiKey,
    v1SetPostingCutoffRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1SetPostingCutoffRequest** | **V1SetPostingCutoffRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1SetPostingCutoffResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Результат уточнения даты |  -  |
|**400** | Неверный параметр |  -  |
|**403** | Доступ запрещён |  -  |
|**404** | Ответ не найден |  -  |
|**409** | Конфликт запроса |  -  |
|**500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postingAPISetPostingTimeslot**
> V1PostingFbsTimeslotSetResponse postingAPISetPostingTimeslot(v1PostingFbsTimeslotSetRequest)

Вы можете изменить дату доставки отправления не больше двух раз. 

### Example

```typescript
import {
    DeliveryrFBSApi,
    Configuration,
    V1PostingFbsTimeslotSetRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryrFBSApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1PostingFbsTimeslotSetRequest: V1PostingFbsTimeslotSetRequest; //

const { status, data } = await apiInstance.postingAPISetPostingTimeslot(
    clientId,
    apiKey,
    v1PostingFbsTimeslotSetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1PostingFbsTimeslotSetRequest** | **V1PostingFbsTimeslotSetRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1PostingFbsTimeslotSetResponse**

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

