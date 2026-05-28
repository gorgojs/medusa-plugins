# OrderDropOffFBPApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fbpAPIFbpOrderDropOffCancel**](#fbpapifbporderdropoffcancel) | **POST** /v1/fbp/order/drop-off/cancel | Отменить поставку drop-off|
|[**fbpAPIFbpOrderDropOffDlvEdit**](#fbpapifbporderdropoffdlvedit) | **POST** /v1/fbp/order/drop-off/dlv/edit | Отредактировать информацию о поставке на drop-off пункт|
|[**fbpAPIFbpOrderDropOffTimetable**](#fbpapifbporderdropofftimetable) | **POST** /v1/fbp/order/drop-off/timetable | Получить график работы drop-off пункта|

# **fbpAPIFbpOrderDropOffCancel**
> V1FbpOrderDropOffCancelResponse fbpAPIFbpOrderDropOffCancel(v1FbpOrderDropOffCancelRequest)

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    OrderDropOffFBPApi,
    Configuration,
    V1FbpOrderDropOffCancelRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderDropOffFBPApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1FbpOrderDropOffCancelRequest: V1FbpOrderDropOffCancelRequest; //

const { status, data } = await apiInstance.fbpAPIFbpOrderDropOffCancel(
    clientId,
    apiKey,
    v1FbpOrderDropOffCancelRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpOrderDropOffCancelRequest** | **V1FbpOrderDropOffCancelRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1FbpOrderDropOffCancelResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Поставка отменена |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fbpAPIFbpOrderDropOffDlvEdit**
> V1FbpOrderDropOffDlvEditResponse fbpAPIFbpOrderDropOffDlvEdit(v1FbpOrderDropOffDlvEditRequest)

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    OrderDropOffFBPApi,
    Configuration,
    V1FbpOrderDropOffDlvEditRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderDropOffFBPApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1FbpOrderDropOffDlvEditRequest: V1FbpOrderDropOffDlvEditRequest; //

const { status, data } = await apiInstance.fbpAPIFbpOrderDropOffDlvEdit(
    clientId,
    apiKey,
    v1FbpOrderDropOffDlvEditRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpOrderDropOffDlvEditRequest** | **V1FbpOrderDropOffDlvEditRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1FbpOrderDropOffDlvEditResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация передана |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fbpAPIFbpOrderDropOffTimetable**
> V1FbpOrderDropOffTimetableResponse fbpAPIFbpOrderDropOffTimetable(v1FbpOrderDropOffTimetableRequest)

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

### Example

```typescript
import {
    OrderDropOffFBPApi,
    Configuration,
    V1FbpOrderDropOffTimetableRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderDropOffFBPApi(configuration);

let clientId: string; //Идентификатор клиента. (default to undefined)
let apiKey: string; //API-ключ. (default to undefined)
let v1FbpOrderDropOffTimetableRequest: V1FbpOrderDropOffTimetableRequest; //

const { status, data } = await apiInstance.fbpAPIFbpOrderDropOffTimetable(
    clientId,
    apiKey,
    v1FbpOrderDropOffTimetableRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpOrderDropOffTimetableRequest** | **V1FbpOrderDropOffTimetableRequest**|  | |
| **clientId** | [**string**] | Идентификатор клиента. | defaults to undefined|
| **apiKey** | [**string**] | API-ключ. | defaults to undefined|


### Return type

**V1FbpOrderDropOffTimetableResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | График работы получен |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

