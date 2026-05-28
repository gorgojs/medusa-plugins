# PassApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**carriagePassCreate**](#carriagepasscreate) | **POST** /v1/carriage/pass/create | Создать пропуск|
|[**carriagePassDelete**](#carriagepassdelete) | **POST** /v1/carriage/pass/delete | Удалить пропуск|
|[**carriagePassUpdate**](#carriagepassupdate) | **POST** /v1/carriage/pass/update | Обновить пропуск|
|[**passList**](#passlist) | **POST** /v1/pass/list | Список пропусков|
|[**returnPassCreate**](#returnpasscreate) | **POST** /v1/return/pass/create | Создать пропуск для возврата|
|[**returnPassDelete**](#returnpassdelete) | **POST** /v1/return/pass/delete | Удалить пропуск для возврата|
|[**returnPassUpdate**](#returnpassupdate) | **POST** /v1/return/pass/update | Обновить пропуск для возврата|

# **carriagePassCreate**
> SellerSellerAPIArrivalPassCreateResponse carriagePassCreate(sellerSellerAPIArrivalPassCreateRequest)

Идентификатор созданного пропуска добавится к перевозке.

### Example

```typescript
import {
    PassApi,
    Configuration,
    SellerSellerAPIArrivalPassCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PassApi(configuration);

let sellerSellerAPIArrivalPassCreateRequest: SellerSellerAPIArrivalPassCreateRequest; //

const { status, data } = await apiInstance.carriagePassCreate(
    sellerSellerAPIArrivalPassCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sellerSellerAPIArrivalPassCreateRequest** | **SellerSellerAPIArrivalPassCreateRequest**|  | |


### Return type

**SellerSellerAPIArrivalPassCreateResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Пропуск создан |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **carriagePassDelete**
> object carriagePassDelete(sellerSellerAPIArrivalPassDeleteRequest)



### Example

```typescript
import {
    PassApi,
    Configuration,
    SellerSellerAPIArrivalPassDeleteRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PassApi(configuration);

let sellerSellerAPIArrivalPassDeleteRequest: SellerSellerAPIArrivalPassDeleteRequest; //

const { status, data } = await apiInstance.carriagePassDelete(
    sellerSellerAPIArrivalPassDeleteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sellerSellerAPIArrivalPassDeleteRequest** | **SellerSellerAPIArrivalPassDeleteRequest**|  | |


### Return type

**object**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Пропуск удалён |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **carriagePassUpdate**
> object carriagePassUpdate(sellerSellerAPIArrivalPassUpdateRequest)


### Example

```typescript
import {
    PassApi,
    Configuration,
    SellerSellerAPIArrivalPassUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PassApi(configuration);

let sellerSellerAPIArrivalPassUpdateRequest: SellerSellerAPIArrivalPassUpdateRequest; //

const { status, data } = await apiInstance.carriagePassUpdate(
    sellerSellerAPIArrivalPassUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sellerSellerAPIArrivalPassUpdateRequest** | **SellerSellerAPIArrivalPassUpdateRequest**|  | |


### Return type

**object**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Пропуск обновлён |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **passList**
> ArrivalpassArrivalPassListResponse passList(arrivalpassArrivalPassListRequest)


### Example

```typescript
import {
    PassApi,
    Configuration,
    ArrivalpassArrivalPassListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PassApi(configuration);

let arrivalpassArrivalPassListRequest: ArrivalpassArrivalPassListRequest; //

const { status, data } = await apiInstance.passList(
    arrivalpassArrivalPassListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **arrivalpassArrivalPassListRequest** | **ArrivalpassArrivalPassListRequest**|  | |


### Return type

**ArrivalpassArrivalPassListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список пропусков |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **returnPassCreate**
> ArrivalpassArrivalPassCreateResponse returnPassCreate(arrivalpassArrivalPassCreateRequest)


### Example

```typescript
import {
    PassApi,
    Configuration,
    ArrivalpassArrivalPassCreateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PassApi(configuration);

let arrivalpassArrivalPassCreateRequest: ArrivalpassArrivalPassCreateRequest; //

const { status, data } = await apiInstance.returnPassCreate(
    arrivalpassArrivalPassCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **arrivalpassArrivalPassCreateRequest** | **ArrivalpassArrivalPassCreateRequest**|  | |


### Return type

**ArrivalpassArrivalPassCreateResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Пропуск создан |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **returnPassDelete**
> object returnPassDelete(arrivalpassArrivalPassDeleteRequest)


### Example

```typescript
import {
    PassApi,
    Configuration,
    ArrivalpassArrivalPassDeleteRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PassApi(configuration);

let arrivalpassArrivalPassDeleteRequest: ArrivalpassArrivalPassDeleteRequest; //

const { status, data } = await apiInstance.returnPassDelete(
    arrivalpassArrivalPassDeleteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **arrivalpassArrivalPassDeleteRequest** | **ArrivalpassArrivalPassDeleteRequest**|  | |


### Return type

**object**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Пропуск удалён |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **returnPassUpdate**
> object returnPassUpdate(arrivalpassArrivalPassUpdateRequest)


### Example

```typescript
import {
    PassApi,
    Configuration,
    ArrivalpassArrivalPassUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PassApi(configuration);

let arrivalpassArrivalPassUpdateRequest: ArrivalpassArrivalPassUpdateRequest; //

const { status, data } = await apiInstance.returnPassUpdate(
    arrivalpassArrivalPassUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **arrivalpassArrivalPassUpdateRequest** | **ArrivalpassArrivalPassUpdateRequest**|  | |


### Return type

**object**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Пропуск обновлён |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

