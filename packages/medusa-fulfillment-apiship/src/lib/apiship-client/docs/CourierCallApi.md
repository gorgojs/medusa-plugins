# CourierCallApi

All URIs are relative to */v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cancelCourierCall**](#cancelcouriercall) | **POST** /courierCall/{courierCallId}/cancel | Отмена заявки на вызов курьера|
|[**courierCall**](#couriercall) | **POST** /courierCall | Создание заявки на вызов курьера|

# **cancelCourierCall**
> CancelCourierCallResponse cancelCourierCall()

Отмена заявки на вызов курьера

### Example

```typescript
import {
    CourierCallApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CourierCallApi(configuration);

let courierCallId: number; //ID заявки на вызов курьера, которую необходимо отменить (default to undefined)

const { status, data } = await apiInstance.cancelCourierCall(
    courierCallId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **courierCallId** | [**number**] | ID заявки на вызов курьера, которую необходимо отменить | defaults to undefined|


### Return type

**CancelCourierCallResponse**

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

# **courierCall**
> CourierCallResponse courierCall()

Создание заявки на вызов курьера

### Example

```typescript
import {
    CourierCallApi,
    Configuration,
    CourierCallRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CourierCallApi(configuration);

let courierCallRequest: CourierCallRequest; //Объект типа CourierCallRequest (optional)

const { status, data } = await apiInstance.courierCall(
    courierCallRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **courierCallRequest** | **CourierCallRequest**| Объект типа CourierCallRequest | |


### Return type

**CourierCallResponse**

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

