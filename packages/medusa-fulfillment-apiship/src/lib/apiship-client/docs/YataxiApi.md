# YataxiApi

All URIs are relative to */v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**confirmOrderYataxi**](#confirmorderyataxi) | **POST** /yataxi/confirm | Подтверждение заказа|

# **confirmOrderYataxi**
> ConfirmOrderYataxiResponse confirmOrderYataxi()

Подтверждение заказа

### Example

```typescript
import {
    YataxiApi,
    Configuration,
    ConfirmOrderYataxiRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new YataxiApi(configuration);

let confirmOrderYataxiRequest: ConfirmOrderYataxiRequest; //Объект типа ConfirmOrderYataxi (optional)

const { status, data } = await apiInstance.confirmOrderYataxi(
    confirmOrderYataxiRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **confirmOrderYataxiRequest** | **ConfirmOrderYataxiRequest**| Объект типа ConfirmOrderYataxi | |


### Return type

**ConfirmOrderYataxiResponse**

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

