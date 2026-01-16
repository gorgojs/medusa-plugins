# LogsisApi

All URIs are relative to */v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**logsisConfirmOrder**](#logsisconfirmorder) | **POST** /logsis/confirmOrder | Подтвердить заказ|
|[**logsisUpdateWarehouse**](#logsisupdatewarehouse) | **POST** /logsis/updateWarehouse | Обновить склад|

# **logsisConfirmOrder**
> LogsisConfirmOrderResponse logsisConfirmOrder()

Подтверждение заказа

### Example

```typescript
import {
    LogsisApi,
    Configuration,
    LogsisConfirmOrderRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LogsisApi(configuration);

let logsisConfirmOrderRequest: LogsisConfirmOrderRequest; //Объект типа ConfirmOrderRequest (optional)

const { status, data } = await apiInstance.logsisConfirmOrder(
    logsisConfirmOrderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **logsisConfirmOrderRequest** | **LogsisConfirmOrderRequest**| Объект типа ConfirmOrderRequest | |


### Return type

**LogsisConfirmOrderResponse**

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

# **logsisUpdateWarehouse**
> LogsisUpdateWarehouseResponse logsisUpdateWarehouse()

Обновление склада в системе Logsis

### Example

```typescript
import {
    LogsisApi,
    Configuration,
    LogsisUpdateWarehouseRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LogsisApi(configuration);

let logsisUpdateWarehouseRequest: LogsisUpdateWarehouseRequest; //Объект типа UpdateWarehouseRequest (optional)

const { status, data } = await apiInstance.logsisUpdateWarehouse(
    logsisUpdateWarehouseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **logsisUpdateWarehouseRequest** | **LogsisUpdateWarehouseRequest**| Объект типа UpdateWarehouseRequest | |


### Return type

**LogsisUpdateWarehouseResponse**

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

