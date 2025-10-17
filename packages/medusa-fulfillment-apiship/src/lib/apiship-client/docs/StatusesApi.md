# StatusesApi

All URIs are relative to */v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getOrderStatus**](#getorderstatus) | **GET** /orders/{orderId}/status | Получение статуса заказа|
|[**getOrderStatusByClientNumber**](#getorderstatusbyclientnumber) | **GET** /orders/status | Получение статуса заказа по номеру заказа в системе клиента|
|[**getOrderStatusHistory**](#getorderstatushistory) | **GET** /orders/{orderId}/statusHistory | Получение истории статусов заказа|
|[**getOrderStatusHistoryByClientNumber**](#getorderstatushistorybyclientnumber) | **GET** /orders/status/history | Получение истории статуса заказа по номеру заказа в системе клиента|
|[**getOrderStatuses**](#getorderstatuses) | **POST** /orders/statuses | Получение статусов по нескольким заказам|
|[**getStatusHistoryByDate**](#getstatushistorybydate) | **GET** /orders/statuses/history/date/{date} | Получение истории изменения всех статусов с определенной даты|
|[**getStatusHistoryByInterval**](#getstatushistorybyinterval) | **GET** /orders/statuses/interval | Получение истории изменения всех статусов по заданному интервалу|
|[**getStatusesByDateNew**](#getstatusesbydatenew) | **GET** /orders/statuses/date/{date} | Получение измененных статусов по всем заказам клиента (company) после указанной в методе даты|

# **getOrderStatus**
> GetOrderStatus200Response getOrderStatus()

Получение статуса заказа

### Example

```typescript
import {
    StatusesApi,
    Configuration,
    GetOrderStatusOrderIdParameter
} from './api';

const configuration = new Configuration();
const apiInstance = new StatusesApi(configuration);

let orderId: GetOrderStatusOrderIdParameter; //ID заказа (default to undefined)

const { status, data } = await apiInstance.getOrderStatus(
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderId** | **GetOrderStatusOrderIdParameter** | ID заказа | defaults to undefined|


### Return type

**GetOrderStatus200Response**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOrderStatusByClientNumber**
> GetOrderStatus200Response getOrderStatusByClientNumber()

Получение статуса заказа по номеру заказа в системе клиента

### Example

```typescript
import {
    StatusesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StatusesApi(configuration);

let clientNumber: string; //ID заказа в системе клиента (default to undefined)

const { status, data } = await apiInstance.getOrderStatusByClientNumber(
    clientNumber
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientNumber** | [**string**] | ID заказа в системе клиента | defaults to undefined|


### Return type

**GetOrderStatus200Response**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOrderStatusHistory**
> GetOrderStatusHistory200Response getOrderStatusHistory()

Получение истории статусов заказа

### Example

```typescript
import {
    StatusesApi,
    Configuration,
    GetOrderStatusOrderIdParameter
} from './api';

const configuration = new Configuration();
const apiInstance = new StatusesApi(configuration);

let orderId: GetOrderStatusOrderIdParameter; //ID заказа (default to undefined)
let offset: number; //Minimum - 0, Maximum - 5000 (optional) (default to 0)
let limit: number; //Minimum - 1, Maximum - 100 (optional) (default to 10)

const { status, data } = await apiInstance.getOrderStatusHistory(
    orderId,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderId** | **GetOrderStatusOrderIdParameter** | ID заказа | defaults to undefined|
| **offset** | [**number**] | Minimum - 0, Maximum - 5000 | (optional) defaults to 0|
| **limit** | [**number**] | Minimum - 1, Maximum - 100 | (optional) defaults to 10|


### Return type

**GetOrderStatusHistory200Response**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOrderStatusHistoryByClientNumber**
> GetOrderStatusHistoryByClientNumber200Response getOrderStatusHistoryByClientNumber()

Получение истории статуса заказа по номеру заказа в системе клиента

### Example

```typescript
import {
    StatusesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StatusesApi(configuration);

let clientNumber: string; //ID заказа в системе клиента (default to undefined)

const { status, data } = await apiInstance.getOrderStatusHistoryByClientNumber(
    clientNumber
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientNumber** | [**string**] | ID заказа в системе клиента | defaults to undefined|


### Return type

**GetOrderStatusHistoryByClientNumber200Response**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOrderStatuses**
> GetOrderStatuses200Response getOrderStatuses()

Получение статусов по нескольким заказам

### Example

```typescript
import {
    StatusesApi,
    Configuration,
    StatusIdsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new StatusesApi(configuration);

let statusIdsRequest: StatusIdsRequest; //Объект типа OrderRequest (optional)

const { status, data } = await apiInstance.getOrderStatuses(
    statusIdsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **statusIdsRequest** | **StatusIdsRequest**| Объект типа OrderRequest | |


### Return type

**GetOrderStatuses200Response**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStatusHistoryByDate**
> GetStatusHistoryByDate200Response getStatusHistoryByDate()

Получение истории изменения всех статусов с определенной даты

### Example

```typescript
import {
    StatusesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StatusesApi(configuration);

let date: string; //Дата заказов (в формате 2015-07-30T13:14:37+03:00), с которой необходимо получить историю статусов (default to undefined)
let offset: number; //Minimum - 0 (optional) (default to 0)
let limit: number; //Minimum - 1, Maximum - 1000 (optional) (default to 10)

const { status, data } = await apiInstance.getStatusHistoryByDate(
    date,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **date** | [**string**] | Дата заказов (в формате 2015-07-30T13:14:37+03:00), с которой необходимо получить историю статусов | defaults to undefined|
| **offset** | [**number**] | Minimum - 0 | (optional) defaults to 0|
| **limit** | [**number**] | Minimum - 1, Maximum - 1000 | (optional) defaults to 10|


### Return type

**GetStatusHistoryByDate200Response**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStatusHistoryByInterval**
> GetStatusHistoryByInterval200Response getStatusHistoryByInterval()

Получение истории изменения всех статусов по заданному интервалу

### Example

```typescript
import {
    StatusesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StatusesApi(configuration);

let from: string; //Дата начала периода (в формате \'2015-07-30T13:14:37+03:00\') (default to undefined)
let to: string; //Дата окончания периода (в формате \'2015-08-010T13:14:37+03:00\') (default to undefined)
let filter: string; //Возможна фильтрация по providerKey. Например providerKey=cdek или providerKey=[cdek,dpd] (optional) (default to undefined)
let offset: number; //Minimum - 0 (optional) (default to 0)
let limit: number; //Minimum - 1, Maximum - 1000 (optional) (default to 10)

const { status, data } = await apiInstance.getStatusHistoryByInterval(
    from,
    to,
    filter,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **from** | [**string**] | Дата начала периода (в формате \&#39;2015-07-30T13:14:37+03:00\&#39;) | defaults to undefined|
| **to** | [**string**] | Дата окончания периода (в формате \&#39;2015-08-010T13:14:37+03:00\&#39;) | defaults to undefined|
| **filter** | [**string**] | Возможна фильтрация по providerKey. Например providerKey&#x3D;cdek или providerKey&#x3D;[cdek,dpd] | (optional) defaults to undefined|
| **offset** | [**number**] | Minimum - 0 | (optional) defaults to 0|
| **limit** | [**number**] | Minimum - 1, Maximum - 1000 | (optional) defaults to 10|


### Return type

**GetStatusHistoryByInterval200Response**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStatusesByDateNew**
> Array<StatusCommon> getStatusesByDateNew()

Получение измененных статусов по всем заказам клиента (company) после указанной в методе даты

### Example

```typescript
import {
    StatusesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StatusesApi(configuration);

let date: string; //Дата (в формате \'2015-07-30T13:14:37+03:00\'), после которой запрашиваются статусы (default to undefined)

const { status, data } = await apiInstance.getStatusesByDateNew(
    date
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **date** | [**string**] | Дата (в формате \&#39;2015-07-30T13:14:37+03:00\&#39;), после которой запрашиваются статусы | defaults to undefined|


### Return type

**Array<StatusCommon>**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ok |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

