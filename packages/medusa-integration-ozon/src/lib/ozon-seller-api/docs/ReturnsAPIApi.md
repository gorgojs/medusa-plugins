# ReturnsAPIApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**returnsList**](#returnslist) | **POST** /v1/returns/list | Информация о возвратах FBO и FBS|

# **returnsList**
> V1GetReturnsListResponse returnsList(v1GetReturnsListRequest)

Метод для получения информации о возвратах FBO и FBS.

### Example

```typescript
import {
    ReturnsAPIApi,
    Configuration,
    V1GetReturnsListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReturnsAPIApi(configuration);

let v1GetReturnsListRequest: V1GetReturnsListRequest; //

const { status, data } = await apiInstance.returnsList(
    v1GetReturnsListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1GetReturnsListRequest** | **V1GetReturnsListRequest**|  | |


### Return type

**V1GetReturnsListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация по возвратам |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

