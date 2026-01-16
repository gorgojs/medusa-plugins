# B2cplApi

All URIs are relative to */v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addOrderCall**](#addordercall) | **POST** /b2cpl/call | Загрузка заявок|

# **addOrderCall**
> AddOrderCall200Response addOrderCall()

Загрузка заявок на исходящий обзвон

### Example

```typescript
import {
    B2cplApi,
    Configuration,
    B2cplOrderCallRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new B2cplApi(configuration);

let b2cplOrderCallRequest: B2cplOrderCallRequest; //Объект типа B2cplOrderCallRequest (optional)

const { status, data } = await apiInstance.addOrderCall(
    b2cplOrderCallRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **b2cplOrderCallRequest** | **B2cplOrderCallRequest**| Объект типа B2cplOrderCallRequest | |


### Return type

**AddOrderCall200Response**

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

