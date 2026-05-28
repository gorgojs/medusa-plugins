# CancelReasonAPIApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cancelReasonAPICancelReasonListByPosting**](#cancelreasonapicancelreasonlistbyposting) | **POST** /v1/cancel-reason/list-by-posting | Причины отмены отправления|
|[**cancelReasonList**](#cancelreasonlist) | **POST** /v1/cancel-reason/list | Причины отмены отправлений|
|[**cancelReasonListByOrder**](#cancelreasonlistbyorder) | **POST** /v1/cancel-reason/list-by-order | Причины отмены заказа|

# **cancelReasonAPICancelReasonListByPosting**
> V1CancelReasonListByPostingResponse cancelReasonAPICancelReasonListByPosting()

Возвращает возможные причины отмены для отправления.

### Example

```typescript
import {
    CancelReasonAPIApi,
    Configuration,
    V1CancelReasonListByPostingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CancelReasonAPIApi(configuration);

let v1CancelReasonListByPostingRequest: V1CancelReasonListByPostingRequest; // (optional)

const { status, data } = await apiInstance.cancelReasonAPICancelReasonListByPosting(
    v1CancelReasonListByPostingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1CancelReasonListByPostingRequest** | **V1CancelReasonListByPostingRequest**|  | |


### Return type

**V1CancelReasonListByPostingResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Причины отмены отправления |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cancelReasonList**
> V1CancelReasonListResponse cancelReasonList()

Возвращает возможные причины отмены отправлений и заказов. 

### Example

```typescript
import {
    CancelReasonAPIApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CancelReasonAPIApi(configuration);

const { status, data } = await apiInstance.cancelReasonList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**V1CancelReasonListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Причины отмены отправлений |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cancelReasonListByOrder**
> V1CancelReasonListByOrderResponse cancelReasonListByOrder()

Возвращает возможные причины отмены для заказа.

### Example

```typescript
import {
    CancelReasonAPIApi,
    Configuration,
    V1CancelReasonListByOrderRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CancelReasonAPIApi(configuration);

let v1CancelReasonListByOrderRequest: V1CancelReasonListByOrderRequest; // (optional)

const { status, data } = await apiInstance.cancelReasonListByOrder(
    v1CancelReasonListByOrderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1CancelReasonListByOrderRequest** | **V1CancelReasonListByOrderRequest**|  | |


### Return type

**V1CancelReasonListByOrderResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Причины отмены заказа |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

