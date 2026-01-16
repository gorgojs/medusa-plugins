# X5Api

All URIs are relative to */v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createWarehouse**](#createwarehouse) | **POST** /x5/createWarehouse | Создание склада|

# **createWarehouse**
> CreateWarehouseResponse createWarehouse()

Создание склада

### Example

```typescript
import {
    X5Api,
    Configuration,
    CreateWarehouseRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new X5Api(configuration);

let createWarehouseRequest: CreateWarehouseRequest; //Объект типа CreateWarehouseRequest (optional)

const { status, data } = await apiInstance.createWarehouse(
    createWarehouseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createWarehouseRequest** | **CreateWarehouseRequest**| Объект типа CreateWarehouseRequest | |


### Return type

**CreateWarehouseResponse**

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

