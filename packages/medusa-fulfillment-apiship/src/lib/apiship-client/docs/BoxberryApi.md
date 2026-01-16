# BoxberryApi

All URIs are relative to */v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**boxberryWarehouseCodeDelete**](#boxberrywarehousecodedelete) | **DELETE** /boxberry/warehouse/{code} | Удаление склада|
|[**boxberryWarehouseCodeGet**](#boxberrywarehousecodeget) | **GET** /boxberry/warehouse/{code} | Получение информации о складе|
|[**boxberryWarehouseCodePut**](#boxberrywarehousecodeput) | **PUT** /boxberry/warehouse/{code} | Обновление склада|
|[**boxberryWarehousePost**](#boxberrywarehousepost) | **POST** /boxberry/warehouse | Создание склада|

# **boxberryWarehouseCodeDelete**
> SuccessResponse boxberryWarehouseCodeDelete()

Удаление склада

### Example

```typescript
import {
    BoxberryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BoxberryApi(configuration);

let code: string; //Уникальный код склада (default to undefined)
let providerConnectId: string; //ID подключения к СД (optional) (default to undefined)

const { status, data } = await apiInstance.boxberryWarehouseCodeDelete(
    code,
    providerConnectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] | Уникальный код склада | defaults to undefined|
| **providerConnectId** | [**string**] | ID подключения к СД | (optional) defaults to undefined|


### Return type

**SuccessResponse**

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

# **boxberryWarehouseCodeGet**
> WarehouseInfoBoxberry boxberryWarehouseCodeGet()

Получение информации о складе

### Example

```typescript
import {
    BoxberryApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BoxberryApi(configuration);

let code: string; //Уникальный код склада (default to undefined)
let providerConnectId: string; //ID подключения к СД (optional) (default to undefined)

const { status, data } = await apiInstance.boxberryWarehouseCodeGet(
    code,
    providerConnectId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] | Уникальный код склада | defaults to undefined|
| **providerConnectId** | [**string**] | ID подключения к СД | (optional) defaults to undefined|


### Return type

**WarehouseInfoBoxberry**

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

# **boxberryWarehouseCodePut**
> SuccessResponse boxberryWarehouseCodePut()

Обновление склада

### Example

```typescript
import {
    BoxberryApi,
    Configuration,
    BoxberryWarehouseCodePutRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BoxberryApi(configuration);

let code: string; //Уникальный код склада (default to undefined)
let boxberryWarehouseCodePutRequest: BoxberryWarehouseCodePutRequest; //Объект типа WarehouseBoxberry (optional)

const { status, data } = await apiInstance.boxberryWarehouseCodePut(
    code,
    boxberryWarehouseCodePutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **boxberryWarehouseCodePutRequest** | **BoxberryWarehouseCodePutRequest**| Объект типа WarehouseBoxberry | |
| **code** | [**string**] | Уникальный код склада | defaults to undefined|


### Return type

**SuccessResponse**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **boxberryWarehousePost**
> SuccessResponse boxberryWarehousePost()

Создание склада

### Example

```typescript
import {
    BoxberryApi,
    Configuration,
    BoxberryWarehousePostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BoxberryApi(configuration);

let boxberryWarehousePostRequest: BoxberryWarehousePostRequest; //Объект типа WarehouseCreateBoxberry (optional)

const { status, data } = await apiInstance.boxberryWarehousePost(
    boxberryWarehousePostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **boxberryWarehousePostRequest** | **BoxberryWarehousePostRequest**| Объект типа WarehouseCreateBoxberry | |


### Return type

**SuccessResponse**

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**4XX** | Bad request |  * X-Tracing-Id -  <br>  |
|**5XX** | Server error |  * X-Tracing-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

