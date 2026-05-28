# DeliveryFBPDraftApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fbpAPIFbpDraftGet**](#fbpapifbpdraftget) | **POST** /v1/fbp/draft/get | Получить информацию о черновике поставки|
|[**fbpAPIFbpDraftList**](#fbpapifbpdraftlist) | **POST** /v1/fbp/draft/list | Список черновиков поставки|
|[**fbpWarehouseList**](#fbpwarehouselist) | **POST** /v1/fbp/warehouse/list | Получить список партнёрских складов|

# **fbpAPIFbpDraftGet**
> V1FbpDraftGetResponse fbpAPIFbpDraftGet(v1FbpDraftGetRequest)

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    DeliveryFBPDraftApi,
    Configuration,
    V1FbpDraftGetRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBPDraftApi(configuration);

let v1FbpDraftGetRequest: V1FbpDraftGetRequest; //

const { status, data } = await apiInstance.fbpAPIFbpDraftGet(
    v1FbpDraftGetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpDraftGetRequest** | **V1FbpDraftGetRequest**|  | |


### Return type

**V1FbpDraftGetResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Детали черновика поставки |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fbpAPIFbpDraftList**
> V1FbpDraftListResponse fbpAPIFbpDraftList(v1FbpDraftListRequest)

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    DeliveryFBPDraftApi,
    Configuration,
    V1FbpDraftListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBPDraftApi(configuration);

let v1FbpDraftListRequest: V1FbpDraftListRequest; //

const { status, data } = await apiInstance.fbpAPIFbpDraftList(
    v1FbpDraftListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpDraftListRequest** | **V1FbpDraftListRequest**|  | |


### Return type

**V1FbpDraftListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список черновиков поставки |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fbpWarehouseList**
> V1FbpWarehouseListResponse fbpWarehouseList()

Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    DeliveryFBPDraftApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DeliveryFBPDraftApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)

const { status, data } = await apiInstance.fbpWarehouseList(
    clientId,
    apiKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1FbpWarehouseListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список партнёрских складов |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

