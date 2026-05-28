# OrderDirectFBPApi

All URIs are relative to *http://api-seller.ozon.ru*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fbpAPIFbpAvailableTimeslotList**](#fbpapifbpavailabletimeslotlist) | **POST** /v1/fbp/order/direct/timeslot/list | Получить список таймслотов для поставки|
|[**fbpAPIFbpEditTimeslot**](#fbpapifbpedittimeslot) | **POST** /v1/fbp/order/direct/timeslot/edit | Отредактировать таймслот в заявке на поставку|
|[**fbpAPIFbpOrderDirectCancel**](#fbpapifbporderdirectcancel) | **POST** /v1/fbp/order/direct/cancel | Отменить поставку|
|[**fbpAPIFbpOrderDirectSellerDlvEdit**](#fbpapifbporderdirectsellerdlvedit) | **POST** /v1/fbp/order/direct/seller-dlv/edit | Обновить информацию о доставке силами продавца|

# **fbpAPIFbpAvailableTimeslotList**
> V1FbpAvailableTimeslotListResponse fbpAPIFbpAvailableTimeslotList(v1FbpAvailableTimeslotListRequest)

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    OrderDirectFBPApi,
    Configuration,
    V1FbpAvailableTimeslotListRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderDirectFBPApi(configuration);

let v1FbpAvailableTimeslotListRequest: V1FbpAvailableTimeslotListRequest; //

const { status, data } = await apiInstance.fbpAPIFbpAvailableTimeslotList(
    v1FbpAvailableTimeslotListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpAvailableTimeslotListRequest** | **V1FbpAvailableTimeslotListRequest**|  | |


### Return type

**V1FbpAvailableTimeslotListResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Список таймслотов |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fbpAPIFbpEditTimeslot**
> V1FbpEditTimeslotResponse fbpAPIFbpEditTimeslot(v1FbpEditTimeslotRequest)

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    OrderDirectFBPApi,
    Configuration,
    V1FbpEditTimeslotRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderDirectFBPApi(configuration);

let v1FbpEditTimeslotRequest: V1FbpEditTimeslotRequest; //

const { status, data } = await apiInstance.fbpAPIFbpEditTimeslot(
    v1FbpEditTimeslotRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpEditTimeslotRequest** | **V1FbpEditTimeslotRequest**|  | |


### Return type

**V1FbpEditTimeslotResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Таймслот отредактирован |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fbpAPIFbpOrderDirectCancel**
> V1FbpOrderDirectCancelResponse fbpAPIFbpOrderDirectCancel(v1FbpOrderDirectCancelRequest)

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    OrderDirectFBPApi,
    Configuration,
    V1FbpOrderDirectCancelRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderDirectFBPApi(configuration);

let v1FbpOrderDirectCancelRequest: V1FbpOrderDirectCancelRequest; //

const { status, data } = await apiInstance.fbpAPIFbpOrderDirectCancel(
    v1FbpOrderDirectCancelRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpOrderDirectCancelRequest** | **V1FbpOrderDirectCancelRequest**|  | |


### Return type

**V1FbpOrderDirectCancelResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Результат отмены |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fbpAPIFbpOrderDirectSellerDlvEdit**
> V1FbpOrderDirectSellerDlvEditResponse fbpAPIFbpOrderDirectSellerDlvEdit(v1FbpOrderDirectSellerDlvEditRequest)

Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev. 

### Example

```typescript
import {
    OrderDirectFBPApi,
    Configuration,
    V1FbpOrderDirectSellerDlvEditRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrderDirectFBPApi(configuration);

let v1FbpOrderDirectSellerDlvEditRequest: V1FbpOrderDirectSellerDlvEditRequest; //

const { status, data } = await apiInstance.fbpAPIFbpOrderDirectSellerDlvEdit(
    v1FbpOrderDirectSellerDlvEditRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **v1FbpOrderDirectSellerDlvEditRequest** | **V1FbpOrderDirectSellerDlvEditRequest**|  | |


### Return type

**V1FbpOrderDirectSellerDlvEditResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Информация обновлена |  -  |
|**0** | Ошибка |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

